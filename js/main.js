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
 * Render danh mục địa danh (Biển đảo, Thiên nhiên, Văn hóa)
 */
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;

  let html = `
    <div class="category-card active" data-category="all">
      <span class="cat-icon">🌍</span>
      <span class="cat-name">Tất cả địa danh</span>
    </div>
  `;

  CATEGORIES.forEach(cat => {
    html += `
      <div class="category-card" data-category="${cat.id}">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${cat.name}</span>
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
    });
  });
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
      <div class="tour-card" onclick="window.location.href='tour-detail.html?id=${tour.id}'">
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
            <button class="btn-detail btn-detail-full">Xem chi tiết địa điểm →</button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

/**
 * Render Lịch trình chuyến đi (Timeline 2 Ngày Đầu)
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
      <div class="timeline-item">
        <div class="timeline-marker">
          <div class="timeline-icon-box">${ev.icon || '📍'}</div>
          <div class="timeline-line"></div>
        </div>
        <div class="timeline-content">
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
      <div class="weather-plan-box">
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
    <div class="timeline-day-header">
      <div class="timeline-day-badge">LỊCH TRÌNH NGÀY ${dayData.day}</div>
      <h3>${dayData.title}</h3>
      <p class="timeline-day-summary">${dayData.dateSummary}</p>
    </div>
    <div class="timeline-list">
      ${eventsHtml}
    </div>
    ${weatherHtml}
  `;
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
      <a href="index.html#lich-trinh" class="btn-back-timeline">🗓️ Xem toàn bộ lịch trình 2 ngày →</a>
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


/* ===== KHỞI TẠO KHI TẢI TRANG ===== */
document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initTourDetailPage();
});
