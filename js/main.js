/* ===================================================
   main.js - Logic hiển thị website Thập Tứ Tour
   Chỉ giới thiệu các địa danh du lịch Quy Nhơn & Về tụi tôi
   Hoàn toàn phi lợi nhuận, không có giá tiền / đăng ký tour
   =================================================== */

/* ===== PHẦN CHUNG (tất cả trang) ===== */

// Hamburger menu mobile
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    });
  });
}

// Nút back to top
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ===== TRANG CHỦ (index.html) ===== */

let currentCategory = 'all';
let currentSearch = '';

/**
 * Render danh mục địa danh (Biển đảo, Thiên nhiên, Văn hóa) kèm số lượng địa điểm
 */
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid || typeof TOURS === 'undefined') return;

  const totalCount = TOURS.length;
  let html = `
    <div class="category-card tilt-card reveal-on-scroll active" data-category="all">
      <div class="cat-icon-wrap">
        <span class="cat-icon">🌍</span>
      </div>
      <span class="cat-name">Tất cả địa danh</span>
      <span class="cat-count">${totalCount} địa điểm</span>
    </div>
  `;

  CATEGORIES.forEach(cat => {
    const count = TOURS.filter(t => t.category === cat.id).length;
    html += `
      <div class="category-card tilt-card reveal-on-scroll" data-category="${cat.id}">
        <div class="cat-icon-wrap">
          <span class="cat-icon">${cat.icon}</span>
        </div>
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count">${count} địa điểm</span>
      </div>
    `;
  });

  grid.innerHTML = html;

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      grid.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      currentCategory = card.dataset.category;
      applyFilters();

      // Cuộn êm ái xuống phần địa điểm nổi bật để người dùng quan sát kết quả
      const destSection = document.getElementById('dia-diem');
      if (destSection) {
        const top = destSection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  if (typeof triggerScrollReveal === 'function') {
    setTimeout(triggerScrollReveal, 30);
  }
}

/**
 * Render danh sách thẻ địa danh Quy Nhơn (gắn liền mốc thời gian ghé thăm)
 */
function renderTourCards(tours) {
  const grid = document.getElementById('tourGrid');
  if (!grid) return;

  if (tours.length === 0) {
    grid.innerHTML = `
      <div class="no-tours">
        <span class="no-tours-icon">🔍</span>
        <h3>Không tìm thấy địa điểm phù hợp</h3>
        <p>Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn mục "Tất cả địa danh".</p>
      </div>
    `;
    return;
  }

  const getCatName = (catId) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    return cat ? cat.name : '';
  };

  let html = '';
  tours.forEach(tour => {
    // Render các thẻ tag nhỏ
    let tagsHtml = '';
    if (tour.tags && tour.tags.length > 0) {
      tagsHtml = `<div class="tour-tags">${tour.tags.map(t => `<span class="tour-tag-pill">${t}</span>`).join('')}</div>`;
    }

    // Badge thời gian ghé thăm
    let visitBadge = '';
    if (tour.visitTime) {
      visitBadge = `
        <div class="tour-visittime-tag">
          <span class="visittime-icon">⏰</span>
          <span><strong>Ghé thăm:</strong> ${tour.visitTime}</span>
        </div>
      `;
    }

    html += `
      <div class="tour-card tilt-card reveal-on-scroll" onclick="window.location.href='tour-detail.html?id=${tour.id}'">
        <div class="tour-card-img">
          <img src="${tour.image}" alt="${tour.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80';">
          <span class="tour-card-badge">${getCatName(tour.category)}</span>
        </div>
        <div class="tour-card-body">
          <h3>${tour.name}</h3>
          ${visitBadge}
          <div class="tour-card-info">
            <span>📍 ${tour.location}</span>
            <span>⏱️ ${tour.duration}</span>
          </div>
          ${tagsHtml}
          <div class="tour-card-footer">
            <button class="btn-detail btn-detail-full" type="button">Xem chi tiết địa điểm <span class="btn-arrow">→</span></button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;

  if (typeof triggerScrollReveal === 'function') {
    setTimeout(triggerScrollReveal, 30);
  }
}

/**
 * Render Lịch trình chuyến đi (Timeline 4 Ngày 3 Đêm)
 */
function renderTimeline(dayNumber = 1) {
  const container = document.getElementById('timelineContainer');
  if (!container || typeof TIMELINE_DATA === 'undefined') return;

  const dayData = TIMELINE_DATA.find(d => d.day === parseInt(dayNumber)) || TIMELINE_DATA[0];
  if (!dayData) return;

  let eventsHtml = '';
  dayData.events.forEach((ev) => {
    let placeLinkHtml = '';
    if (ev.highlightPlaceId && ev.placeName) {
      placeLinkHtml = `
        <div class="timeline-place-tag">
          <a href="tour-detail.html?id=${ev.highlightPlaceId}" title="Bấm xem giới thiệu chi tiết">
            📍 <strong>Địa điểm trong chuyến đi:</strong> ${ev.placeName} <span class="arrow-icon">→</span>
          </a>
        </div>
      `;
    }

    eventsHtml += `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-marker">
          <div class="timeline-icon-box">${ev.icon || '📍'}</div>
          <div class="timeline-line"></div>
        </div>
        <div class="timeline-content tilt-card">
          <div class="timeline-time-badge">${ev.time}</div>
          <h3 class="timeline-event-title">${ev.title}</h3>
          <p class="timeline-event-desc">${ev.desc}</p>
          ${placeLinkHtml}
        </div>
      </div>
    `;
  });

  // Khối phương án trời mưa / thời tiết xấu
  let weatherHtml = '';
  if (dayData.weatherPlan) {
    let solutionsHtml = '';
    dayData.weatherPlan.solutions.forEach(sol => {
      solutionsHtml += `
        <div class="weather-sol-item">
          <span class="sol-badge">⚡ ${sol.title}:</span>
          <p>${sol.detail}</p>
        </div>
      `;
    });

    weatherHtml = `
      <div class="weather-plan-box tilt-card reveal-on-scroll">
        <div class="weather-header">
          <span class="weather-icon">🌧️</span>
          <div>
            <h4>Phương Án Dự Phòng Khi Thời Tiết Xấu / Trời Mưa</h4>
            <p class="weather-condition">${dayData.weatherPlan.condition}</p>
          </div>
        </div>
        <div class="weather-solutions-list">
          ${solutionsHtml}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="timeline-day-header reveal-on-scroll">
      <div class="timeline-day-badge">LỊCH TRÌNH NGÀY ${dayData.day}</div>
      <h3>${dayData.title}</h3>
      <p class="timeline-day-summary">${dayData.dateSummary}</p>
    </div>
    <div class="timeline-list">
      ${eventsHtml}
    </div>
    ${weatherHtml}
  `;

  if (typeof triggerScrollReveal === 'function') {
    setTimeout(triggerScrollReveal, 30);
  }
}

/**
 * Cập nhật badge thông tin bộ lọc danh mục / từ khóa
 */
function updateActiveFilterBadge(resultCount) {
  const badgeWrap = document.getElementById('activeFilterBadge');
  if (!badgeWrap) return;

  if (currentCategory === 'all' && !currentSearch) {
    badgeWrap.innerHTML = '';
    badgeWrap.style.display = 'none';
    return;
  }

  let catLabel = 'Tất cả địa danh';
  if (currentCategory && currentCategory !== 'all') {
    const cat = CATEGORIES.find(c => c.id === currentCategory);
    catLabel = cat ? `${cat.icon} ${cat.name}` : currentCategory;
  }

  let filterDesc = `Đang xem: <strong>${catLabel}</strong>`;
  if (currentSearch) {
    filterDesc += ` • Từ khóa: "<em>${currentSearch}</em>"`;
  }
  filterDesc += ` (${resultCount} địa điểm phù hợp)`;

  badgeWrap.innerHTML = `
    <div class="filter-pill">
      <span>${filterDesc}</span>
      <button type="button" class="btn-clear-filter" id="btnClearFilter" title="Xem lại tất cả">✕ Xem tất cả</button>
    </div>
  `;
  badgeWrap.style.display = 'block';

  const clearBtn = document.getElementById('btnClearFilter');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSearch = '';
      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.value = '';
      const catCards = document.querySelectorAll('.category-card');
      catCards.forEach(c => {
        c.classList.toggle('active', c.dataset.category === 'all');
      });
      applyFilters();
    });
  }
}

/**
 * Lọc theo danh mục & tìm kiếm từ khóa
 */
function applyFilters() {
  let result = TOURS;

  // Lọc theo danh mục
  if (currentCategory && currentCategory !== 'all') {
    result = result.filter(t => t.category === currentCategory);
  }

  // Lọc theo từ khóa tìm kiếm
  if (currentSearch) {
    const kw = currentSearch.toLowerCase();
    result = result.filter(t =>
      t.name.toLowerCase().includes(kw) ||
      t.location.toLowerCase().includes(kw) ||
      (t.tags && t.tags.some(tag => tag.toLowerCase().includes(kw))) ||
      t.description.toLowerCase().includes(kw) ||
      (t.visitTime && t.visitTime.toLowerCase().includes(kw))
    );
  }

  renderTourCards(result);
  updateActiveFilterBadge(result.length);
}

/**
 * Khởi tạo trang chủ
 */
function initHomePage() {
  const tourGrid = document.getElementById('tourGrid');
  if (!tourGrid) return;

  renderCategories();
  renderTourCards(TOURS);

  // Khởi tạo Timeline tabs & view
  const timelineTabs = document.getElementById('timelineTabs');
  if (timelineTabs) {
    const tabBtns = timelineTabs.querySelectorAll('.timeline-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const day = btn.dataset.day;
        renderTimeline(day);
      });
    });
    renderTimeline(1);
  }

  const searchInput = document.getElementById('searchInput');
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearch = e.target.value.trim();
        applyFilters();
      }, 250);
    });
  }
}


/* ===== TRANG GIỚI THIỆU CHI TIẾT ĐỊA DANH (tour-detail.html) ===== */

function getTourIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/**
 * Render trang bài viết giới thiệu địa danh (hoàn toàn không có giá tiền)
 */
function renderTourDetail(tour) {
  const main = document.getElementById('tourDetailMain');
  if (!main) return;

  document.title = `Thập Tứ Tour | ${tour.name}`;
  const breadcrumbName = document.getElementById('breadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = tour.name;

  // Lấy 3 địa danh khác gợi ý xem tiếp
  const otherTours = TOURS.filter(t => t.id !== tour.id).slice(0, 3);

  let html = `
    <!-- Ảnh bìa và tiêu đề địa danh -->
    <div class="place-header">
      <div class="place-image-wrap">
        <img class="place-hero-img" src="${tour.image}" alt="${tour.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80';">
      </div>
      <div class="place-title-box">
        <h1>${tour.name}</h1>
        ${tour.visitTime ? `
        <div class="visit-schedule-banner">
          <span class="schedule-icon">⏰</span>
          <div>
            <strong>Mốc thời gian ghé thăm trong chuyến đi:</strong>
            <span class="schedule-time-text">${tour.visitTime}</span>
          </div>
        </div>
        ` : ''}
        <div class="place-meta">
          <span>📍 <strong>Vị trí:</strong> ${tour.location}</span>
          <span>🕐 <strong>Thời lượng:</strong> ${tour.duration}</span>
          <span>🌊 <strong>Đặc trưng:</strong> ${tour.tags ? tour.tags.join(' • ') : 'Cảnh sắc Quy Nhơn'}</span>
        </div>
      </div>
    </div>

    <!-- Hộp thông tin nhanh -->
    <div class="quick-facts-card">
      <div class="fact-item">
        <span class="fact-icon">🌅</span>
        <div>
          <h4>Thời điểm đẹp nhất</h4>
          <p>Tháng 3 - Tháng 9 (mùa khô, biển êm, trời trong xanh rực rỡ)</p>
        </div>
      </div>
      <div class="fact-item">
        <span class="fact-icon">🛵</span>
        <div>
          <h4>Phương tiện di chuyển</h4>
          <p>Xe máy, ô tô hoặc cano / thuyền tùy điểm đến</p>
        </div>
      </div>
      <div class="fact-item">
        <span class="fact-icon">📸</span>
        <div>
          <h4>Trải nghiệm chính</h4>
          <p>Ngắm cảnh biển đảo hoang sơ, check-in vách đá, thưởng ngoạn di tích</p>
        </div>
      </div>
    </div>

    <!-- Giới thiệu chi tiết cảnh đẹp -->
    <div class="place-section">
      <h2>✨ Vẻ đẹp đặc trưng của ${tour.name}</h2>
      <div class="place-description">
        ${tour.description}
      </div>
    </div>

    <!-- Lịch trình khám phá gợi ý -->
    <div class="place-section">
      <h2>📋 Lịch trình tham quan trong chuyến đi</h2>
      <div class="itinerary-list">
  `;

  tour.itinerary.forEach(item => {
    html += `
      <div class="itinerary-card">
        <div class="itinerary-badge">
          <span>Ngày</span>
          <strong>${item.day}</strong>
        </div>
        <div class="itinerary-body">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </div>

    <!-- Trải nghiệm nổi bật & Lưu ý khi tham quan -->
    <div class="place-section">
      <h2>💡 Cẩm nang & Bí quyết trải nghiệm</h2>
      <div class="includes-excludes-grid">
        <div class="info-card info-includes">
          <h3>🌟 Điểm nổi bật chuyến đi</h3>
          <ul>
  `;
  if (tour.highlights) {
    tour.highlights.forEach(item => {
      html += `<li>${item}</li>`;
    });
  }
  html += `
          </ul>
        </div>
        <div class="info-card info-excludes">
          <h3>🎒 Lưu ý & Chuẩn bị khi đi</h3>
          <ul>
  `;
  if (tour.tips) {
    tour.tips.forEach(item => {
      html += `<li>${item}</li>`;
    });
  }
  html += `
          </ul>
        </div>
      </div>
    </div>

    <!-- Nút quay lại -->
    <div class="back-action-wrap">
      <a href="index.html#dia-diem" class="btn-back-home">← Quay lại danh sách địa điểm nổi bật</a>
      <a href="index.html#lich-trinh" class="btn-back-timeline">🗓️ Xem toàn bộ lịch trình 4 ngày 3 đêm →</a>
    </div>

    <!-- Gợi ý các địa danh khác -->
    <div class="related-places">
      <h2>Khám phá thêm các điểm đến khác trong chuyến đi</h2>
      <div class="related-grid">
  `;

  otherTours.forEach(t => {
    html += `
      <div class="related-card" onclick="window.location.href='tour-detail.html?id=${t.id}'">
        <img src="${t.image}" alt="${t.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80';">
        <div class="related-body">
          <h4>${t.name}</h4>
          <p>📍 ${t.location}</p>
          <span class="related-link">Khám phá địa danh →</span>
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  main.innerHTML = html;
}

/**
 * Khởi tạo trang chi tiết địa danh
 */
function initTourDetailPage() {
  const tourDetailMain = document.getElementById('tourDetailMain');
  if (!tourDetailMain) return;

  const tourId = getTourIdFromUrl();
  if (!tourId) {
    tourDetailMain.innerHTML = `
      <div class="no-tours">
        <h2>Không tìm thấy địa danh!</h2>
        <p><a href="index.html#tours">← Bấm vào đây để xem danh sách các địa danh</a></p>
      </div>
    `;
    return;
  }

  const tour = getTourById(tourId);
  if (!tour) {
    tourDetailMain.innerHTML = `
      <div class="no-tours">
        <h2>Địa danh không tồn tại!</h2>
        <p><a href="index.html#tours">← Bấm vào đây để xem danh sách các địa danh</a></p>
      </div>
    `;
    return;
  }

  renderTourDetail(tour);
}


/* ===================================================
   DYNAMIC INTERACTIVE FEATURES (Phong cách theforgottentoys.com)
   - Magic Custom Cursor (chấm tròn + vòng tròn lerp + magnetic hover)
   - Scroll Progress Indicator
   - 3D Interactive Card Tilt & Dynamic Glare
   - Scroll-triggered Reveal Animations (IntersectionObserver)
   - Hero Mouse-track Parallax
   =================================================== */

/**
 * 1. Thanh tiến trình cuộn trang (Scroll Progress Bar)
 */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/**
 * 2. Con trỏ chuột tương tác sáng tạo (Magic Cursor)
 * Chỉ kích hoạt trên thiết bị dùng chuột (pointer: fine)
 */
function initMagicCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  // Kiểm tra nếu là thiết bị cảm ứng thì ẩn con trỏ tùy biến
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isHovering = false;
  let isDown = false;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }

    // Dot bám sát tức thì không độ trễ
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    // Xử lý hover toàn cục bằng closest() - HOÀN TOÀN KHÔNG BAO GIỜ BỊ NHẤP NHÁY
    const interactiveEl = e.target && e.target.closest('a, button, .tour-card, .category-card, .timeline-tab-btn, input, select');
    const shouldHover = !!interactiveEl;
    if (shouldHover !== isHovering) {
      isHovering = shouldHover;
      if (isHovering) {
        ring.classList.add('cursor-hover');
        dot.classList.add('cursor-hover');
      } else {
        ring.classList.remove('cursor-hover');
        dot.classList.remove('cursor-hover');
      }
    }
  }, { passive: true });

  window.addEventListener('mousedown', () => {
    isDown = true;
    ring.classList.add('cursor-down');
    dot.classList.add('cursor-down');
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    ring.classList.remove('cursor-down');
    dot.classList.remove('cursor-down');
  });

  document.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  // Vòng tròn ring lướt theo chuột với hiệu ứng gia tốc mượt mà (lerp)
  const renderCursor = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovering ? 1.5 : isDown ? 0.8 : 1})`;
    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);
}

/**
 * 3. Hiệu ứng nghiêng 3D theo chuột (3D Interactive Tilt)
 */
function initTiltEffect() {
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

  const attachTilt = () => {
    const cards = document.querySelectorAll('.tilt-card, .tour-card, .category-card, .weather-plan-box, .timeline-content');
    cards.forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = 'true';

      card.addEventListener('mouseenter', () => {
        // Tắt CSS transition khi đang rê chuột để tilt bám mượt tức thì không bị giật lag
        card.style.transition = 'none';
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 4.5;
        const rotateY = ((x - centerX) / centerX) * 4.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(5px)`;
        card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`);
        card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`);
      });

      card.addEventListener('mouseleave', () => {
        // Trả về vị trí ban đầu mượt mà
        card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        setTimeout(() => {
          if (!card.matches(':hover')) {
            card.style.transition = '';
            card.style.transform = '';
          }
        }, 460);
      });
    });
  };

  attachTilt();

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      attachTilt();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

/**
 * 3b. Hiệu ứng nam châm hút theo chuột cho nút Địa Điểm (Magnetic Follow)
 */
function initMagneticElements() {
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

  const attachMagnetic = () => {
    const magneticItems = document.querySelectorAll('.timeline-place-tag a');
    magneticItems.forEach(item => {
      if (item.dataset.magneticBound) return;
      item.dataset.magneticBound = 'true';

      item.addEventListener('mouseenter', () => {
        item.style.transition = 'none';
      });

      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        // Hút theo chuột nhẹ nhàng: di chuyển tối đa 5px ngang, 3px dọc
        const moveX = (relX / (rect.width / 2)) * 5;
        const moveY = (relY / (rect.height / 2)) * 3;
        item.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
      });

      item.addEventListener('mouseleave', () => {
        item.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        item.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  };

  attachMagnetic();

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      attachMagnetic();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

/**
 * 4. Hiệu ứng cuộn trang xuất hiện mượt (Scroll Reveal Animations)
 */
let scrollRevealObserver = null;

function triggerScrollReveal() {
  const elements = document.querySelectorAll(
    '.reveal-on-scroll, .section-title, .timeline-item, .tour-card, .category-card, .weather-plan-box, .about-us-card, .umbrella-alert-banner, .timeline-tabs, .timeline-day-header'
  );

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  if (!scrollRevealObserver) {
    scrollRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
  }

  elements.forEach(el => {
    if (!el.dataset.observed) {
      el.dataset.observed = 'true';
      scrollRevealObserver.observe(el);
    }
  });
}

function initScrollReveal() {
  triggerScrollReveal();

  if (typeof MutationObserver !== 'undefined') {
    const domObserver = new MutationObserver(() => {
      triggerScrollReveal();
    });
    domObserver.observe(document.body, { childList: true, subtree: true });
  }
}

/**
 * 5. Hiệu ứng Hero Parallax & Mouse Track 3D
 */
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)) return;

  const title = hero.querySelector('.hero-title-dynamic');
  const badge = hero.querySelector('.floating-badge');
  const glow = hero.querySelector('.hero-bg-floating-glow');

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (title) title.style.transform = `translate3d(${x * 14}px, ${y * 10}px, 0)`;
    if (badge) badge.style.transform = `translate3d(${x * -8}px, ${y * -6}px, 0)`;
    if (glow) glow.style.transform = `translate3d(${x * 35}px, ${y * 25}px, 0)`;
  });

  hero.addEventListener('mouseleave', () => {
    if (title) title.style.transform = 'translate3d(0, 0, 0)';
    if (badge) badge.style.transform = 'translate3d(0, 0, 0)';
    if (glow) glow.style.transform = 'translate3d(0, 0, 0)';
  });
}

/* ===== KHỞI TẠO KHI TẢI TRANG ===== */
document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initTourDetailPage();
  initScrollProgress();
  initMagicCursor();
  initTiltEffect();
  initMagneticElements();
  initScrollReveal();
  initHeroParallax();
});

