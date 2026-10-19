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

  const categories = (typeof getLocalizedCategories === 'function') ? getLocalizedCategories() : CATEGORIES;
  const tours = (typeof getLocalizedTours === 'function') ? getLocalizedTours() : TOURS;
  const totalCount = tours.length;
  const catAllName = (typeof t === 'function') ? t('cat_all') : 'Tất cả địa danh';
  const placesSuffix = (typeof t === 'function') ? t('cat_places_count') : 'địa điểm';

  let html = `
    <div class="category-card tilt-card reveal-on-scroll ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
      <div class="cat-icon-wrap">
        <span class="cat-icon">🌍</span>
      </div>
      <span class="cat-name">${catAllName}</span>
      <span class="cat-count">${totalCount} ${placesSuffix}</span>
    </div>
  `;

  categories.forEach(cat => {
    const count = tours.filter(t => t.category === cat.id).length;
    html += `
      <div class="category-card tilt-card reveal-on-scroll ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
        <div class="cat-icon-wrap">
          <span class="cat-icon">${cat.icon}</span>
        </div>
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count">${count} ${placesSuffix}</span>
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
    const noTitle = (typeof t === 'function') ? t('no_places_title') : 'Không tìm thấy địa điểm phù hợp';
    const noSub = (typeof t === 'function') ? t('no_places_sub') : 'Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn mục "Tất cả địa danh".';
    grid.innerHTML = `
      <div class="no-tours">
        <span class="no-tours-icon">🔍</span>
        <h3>${noTitle}</h3>
        <p>${noSub}</p>
      </div>
    `;
    return;
  }

  const categories = (typeof getLocalizedCategories === 'function') ? getLocalizedCategories() : CATEGORIES;
  const getCatName = (catId) => {
    const cat = categories.find(c => c.id === catId);
    return cat ? cat.name : '';
  };
  const visitPrefix = (typeof t === 'function') ? t('visit_prefix') : 'Ghé thăm:';
  const btnText = (typeof t === 'function') ? t('btn_view_place') : 'Xem chi tiết địa điểm';

  let html = '';
  tours.forEach(tour => {
    // Render các thẻ tag nhỏ
    let tagsHtml = '';
    if (tour.tags && tour.tags.length > 0) {
      tagsHtml = `<div class="tour-tags">${tour.tags.map(tag => `<span class="tour-tag-pill">${tag}</span>`).join('')}</div>`;
    }

    // Badge thời gian ghé thăm
    let visitBadge = '';
    if (tour.visitTime) {
      visitBadge = `
        <div class="tour-visittime-tag">
          <span class="visittime-icon">⏰</span>
          <span><strong>${visitPrefix}</strong> ${tour.visitTime}</span>
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
            <button class="btn-detail btn-detail-full" type="button">${btnText} <span class="btn-arrow">→</span></button>
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

  const timelineData = (typeof getLocalizedTimeline === 'function') ? getLocalizedTimeline() : TIMELINE_DATA;
  const dayData = timelineData.find(d => d.day === parseInt(dayNumber)) || timelineData[0];
  if (!dayData) return;

  const placeLinkPrefix = (typeof t === 'function') ? t('timeline_place_link') : '📍 <strong>Địa điểm trong chuyến đi:</strong>';
  const weatherTitle = (typeof t === 'function') ? t('weather_plan_title') : 'Phương Án Dự Phòng Khi Thời Tiết Xấu / Trời Mưa';
  const dayBadgePrefix = (typeof t === 'function') ? t('day_badge_prefix') : 'LỊCH TRÌNH NGÀY';

  let eventsHtml = '';
  dayData.events.forEach((ev) => {
    let placeLinkHtml = '';
    if (ev.highlightPlaceId && ev.placeName) {
      placeLinkHtml = `
        <div class="timeline-place-tag">
          <a href="tour-detail.html?id=${ev.highlightPlaceId}" title="Bấm xem giới thiệu chi tiết">
            ${placeLinkPrefix} ${ev.placeName} <span class="arrow-icon">→</span>
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
            <h4>${weatherTitle}</h4>
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
      <div class="timeline-day-badge">${dayBadgePrefix} ${dayData.day}</div>
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

  const isEn = typeof getCurrentLang === 'function' && getCurrentLang() === 'en';
  const categories = (typeof getLocalizedCategories === 'function') ? getLocalizedCategories() : CATEGORIES;

  let catLabel = isEn ? 'All Destinations' : 'Tất cả địa danh';
  if (currentCategory && currentCategory !== 'all') {
    const cat = categories.find(c => c.id === currentCategory);
    catLabel = cat ? `${cat.icon} ${cat.name}` : currentCategory;
  }

  const viewingPrefix = isEn ? 'Showing:' : 'Đang xem:';
  const keywordPrefix = isEn ? 'Keyword:' : 'Từ khóa:';
  const placesSuffix = isEn ? 'matching places' : 'địa điểm phù hợp';
  const clearText = isEn ? '✕ View all' : '✕ Xem tất cả';

  let filterDesc = `${viewingPrefix} <strong>${catLabel}</strong>`;
  if (currentSearch) {
    filterDesc += ` • ${keywordPrefix} "<em>${currentSearch}</em>"`;
  }
  filterDesc += ` (${resultCount} ${placesSuffix})`;

  badgeWrap.innerHTML = `
    <div class="filter-pill">
      <span>${filterDesc}</span>
      <button type="button" class="btn-clear-filter" id="btnClearFilter" title="${isEn ? 'Reset filter' : 'Xem lại tất cả'}">${clearText}</button>
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
  const tours = (typeof getLocalizedTours === 'function') ? getLocalizedTours() : TOURS;
  let result = tours;

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

  const currentTours = (typeof getLocalizedTours === 'function') ? getLocalizedTours() : TOURS;
  renderCategories();
  renderTourCards(currentTours);

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

  const isEn = typeof getCurrentLang === 'function' && getCurrentLang() === 'en';
  const siteTitle = (typeof t === 'function') ? t('logo_title') : 'Thập Tứ Tour';
  document.title = `${siteTitle} | ${tour.name}`;
  const breadcrumbName = document.getElementById('breadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = tour.name;

  // Lấy 3 địa danh khác gợi ý xem tiếp
  const allTours = (typeof getLocalizedTours === 'function') ? getLocalizedTours() : TOURS;
  const otherTours = allTours.filter(t => t.id !== tour.id).slice(0, 3);

  // Labels từ hệ thống đa ngôn ngữ
  const visitTitle = (typeof t === 'function') ? t('detail_visit_title') : 'Mốc thời gian ghé thăm trong chuyến đi:';
  const locLabel = (typeof t === 'function') ? t('detail_location') : 'Vị trí:';
  const durLabel = (typeof t === 'function') ? t('detail_duration') : 'Thời lượng:';
  const tagLabel = (typeof t === 'function') ? t('detail_tags') : 'Đặc trưng:';
  const bestTimeTitle = (typeof t === 'function') ? t('detail_best_time') : 'Thời điểm đẹp nhất';
  const bestTimeDesc = (typeof t === 'function') ? t('detail_best_time_desc') : 'Tháng 3 - Tháng 9 (mùa khô, biển êm, trời trong xanh rực rỡ)';
  const transTitle = (typeof t === 'function') ? t('detail_transport') : 'Phương tiện di chuyển';
  const transDesc = (typeof t === 'function') ? t('detail_transport_desc') : 'Xe máy, ô tô hoặc cano / thuyền tùy điểm đến';
  const expTitle = (typeof t === 'function') ? t('detail_experience') : 'Trải nghiệm chính';
  const expDesc = (typeof t === 'function') ? t('detail_experience_desc') : 'Ngắm cảnh biển đảo hoang sơ, check-in vách đá, thưởng ngoạn di tích';
  const descHeading = (typeof t === 'function') ? t('detail_desc_heading') : '✨ Vẻ đẹp đặc trưng của';
  const itinHeading = (typeof t === 'function') ? t('detail_itinerary_heading') : '📋 Lịch trình tham quan trong chuyến đi';
  const dayBadgeText = (typeof t === 'function') ? t('detail_day_badge') : 'Ngày';
  const highHeading = (typeof t === 'function') ? t('detail_highlights_heading') : '🌟 Điểm nổi bật chuyến đi';
  const tipsHeading = (typeof t === 'function') ? t('detail_tips_heading') : '🎒 Lưu ý & Chuẩn bị khi đi';
  const backPlacesText = (typeof t === 'function') ? t('detail_back_places') : '← Quay lại danh sách địa điểm nổi bật';
  const backTimelineText = (typeof t === 'function') ? t('detail_back_timeline') : '🗓️ Xem toàn bộ lịch trình 4 ngày 3 đêm →';
  const relatedHeading = (typeof t === 'function') ? t('detail_related_heading') : 'Khám phá thêm các điểm đến khác trong chuyến đi';
  const relatedBtnText = (typeof t === 'function') ? t('detail_related_btn') : 'Khám phá địa danh →';

  let html = `
    <!-- Ảnh bìa và tiêu đề địa danh -->
    <div class="place-header reveal-on-scroll">
      <div class="place-image-wrap">
        <img class="place-hero-img" src="${tour.image}" alt="${tour.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80';">
      </div>
      <div class="place-title-box">
        <h1>${tour.name}</h1>
        ${tour.visitTime ? `
        <div class="visit-schedule-banner">
          <span class="schedule-icon">⏰</span>
          <div>
            <strong>${visitTitle}</strong>
            <span class="schedule-time-text">${tour.visitTime}</span>
          </div>
        </div>
        ` : ''}
        <div class="place-meta">
          <span>📍 <strong>${locLabel}</strong> ${tour.location}</span>
          <span>🕐 <strong>${durLabel}</strong> ${tour.duration}</span>
          <span>🌊 <strong>${tagLabel}</strong> ${tour.tags ? tour.tags.join(' • ') : (isEn ? 'Quy Nhon Coastal Scenery' : 'Cảnh sắc Quy Nhơn')}</span>
        </div>
      </div>
    </div>

    <!-- Hộp thông tin nhanh -->
    <div class="quick-facts-card reveal-on-scroll">
      <div class="fact-item tilt-card">
        <span class="fact-icon">🌅</span>
        <div>
          <h4>${bestTimeTitle}</h4>
          <p>${bestTimeDesc}</p>
        </div>
      </div>
      <div class="fact-item tilt-card">
        <span class="fact-icon">🛵</span>
        <div>
          <h4>${transTitle}</h4>
          <p>${transDesc}</p>
        </div>
      </div>
      <div class="fact-item tilt-card">
        <span class="fact-icon">📸</span>
        <div>
          <h4>${expTitle}</h4>
          <p>${expDesc}</p>
        </div>
      </div>
    </div>

    <!-- Giới thiệu chi tiết cảnh đẹp -->
    <div class="place-section reveal-on-scroll">
      <h2>${descHeading} ${tour.name}</h2>
      <div class="place-description">
        ${tour.description}
      </div>
    </div>

    <!-- Lịch trình khám phá gợi ý -->
    <div class="place-section reveal-on-scroll">
      <h2>${itinHeading}</h2>
      <div class="itinerary-list">
  `;

  tour.itinerary.forEach(item => {
    html += `
      <div class="itinerary-card tilt-card">
        <div class="itinerary-badge">
          <span>${dayBadgeText}</span>
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
    <div class="place-section reveal-on-scroll">
      <h2>${tipsHeading}</h2>
      <div class="includes-excludes-grid">
        <div class="info-card info-includes tilt-card">
          <h3>${highHeading}</h3>
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
        <div class="info-card info-excludes tilt-card">
          <h3>${tipsHeading}</h3>
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
    <div class="back-action-wrap reveal-on-scroll">
      <a href="index.html#dia-diem" class="btn-back-home">${backPlacesText}</a>
      <a href="index.html#lich-trinh" class="btn-back-timeline">${backTimelineText}</a>
    </div>

    <!-- Gợi ý các địa danh khác -->
    <div class="related-places reveal-on-scroll">
      <h2>${relatedHeading}</h2>
      <div class="related-grid">
  `;

  otherTours.forEach(t => {
    html += `
      <div class="related-card tilt-card" onclick="window.location.href='tour-detail.html?id=${t.id}'">
        <div class="related-img-wrap">
          <img src="${t.image}" alt="${t.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80';">
        </div>
        <div class="related-body">
          <h4>${t.name}</h4>
          <p>📍 ${t.location}</p>
          <span class="related-link">${relatedBtnText}</span>
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  main.innerHTML = html;

  if (typeof triggerScrollReveal === 'function') {
    setTimeout(triggerScrollReveal, 40);
  }
  if (typeof initTiltEffect === 'function') {
    initTiltEffect();
  }
}

/**
 * Khởi tạo trang chi tiết địa danh
 */
function initTourDetailPage() {
  const tourDetailMain = document.getElementById('tourDetailMain');
  if (!tourDetailMain) return;

  const isEn = typeof getCurrentLang === 'function' && getCurrentLang() === 'en';
  const tourId = getTourIdFromUrl();
  if (!tourId) {
    const notFoundTitle = isEn ? 'Destination not found!' : 'Không tìm thấy địa danh!';
    const notFoundLink = isEn ? '← Click here to view all destinations' : '← Bấm vào đây để xem danh sách các địa danh';
    tourDetailMain.innerHTML = `
      <div class="no-tours">
        <h2>${notFoundTitle}</h2>
        <p><a href="index.html#dia-diem">${notFoundLink}</a></p>
      </div>
    `;
    return;
  }

  const allTours = (typeof getLocalizedTours === 'function') ? getLocalizedTours() : TOURS;
  const tour = allTours.find(t => t.id === parseInt(tourId));
  if (!tour) {
    const notFoundTitle = isEn ? 'Destination does not exist!' : 'Địa danh không tồn tại!';
    const notFoundLink = isEn ? '← Click here to view all destinations' : '← Bấm vào đây để xem danh sách các địa danh';
    tourDetailMain.innerHTML = `
      <div class="no-tours">
        <h2>${notFoundTitle}</h2>
        <p><a href="index.html#dia-diem">${notFoundLink}</a></p>
      </div>
    `;
    return;
  }

  renderTourDetail(tour);
}

/**
 * Cập nhật nội dung các nút tab lịch trình (Ngày 1 / 2 / 3 / 4)
 */
function updateTimelineTabs(lang) {
  const tabsContainer = document.getElementById('timelineTabs');
  if (!tabsContainer) return;

  const tabData = {
    vi: [
      { day: 1, badge: 'Ngày 1', title: 'Khởi hành & Biển Quy Nhơn' },
      { day: 2, badge: 'Ngày 2', title: 'Kỳ Co – Eo Gió & Phố đêm' },
      { day: 3, badge: 'Ngày 3', title: 'Ghềnh Ráng Tiên Sa & Dạo phố' },
      { day: 4, badge: 'Ngày 4', title: 'Check-in kỉ niệm & Về TP.HCM' }
    ],
    en: [
      { day: 1, badge: 'Day 1', title: 'Departure & Quy Nhon Beach' },
      { day: 2, badge: 'Day 2', title: 'Ky Co – Eo Gio & Night Streets' },
      { day: 3, badge: 'Day 3', title: 'Ghenh Rang & Science Center' },
      { day: 4, badge: 'Day 4', title: 'Farewell Photos & Back to HCMC' }
    ]
  };

  const currentTabs = tabData[lang] || tabData.vi;
  const tabBtns = tabsContainer.querySelectorAll('.timeline-tab-btn');
  tabBtns.forEach((btn, index) => {
    const data = currentTabs[index];
    if (data) {
      const badge = btn.querySelector('.tab-day-badge');
      const title = btn.querySelector('.tab-day-title');
      if (badge) badge.textContent = data.badge;
      if (title) title.textContent = data.title;
    }
  });
}

/**
 * Cập nhật dòng chữ chạy ngang (Marquee ticker)
 */
function updateMarqueeTicker(lang) {
  const marqueeBoxes = document.querySelectorAll('.marquee-track .marquee-content');
  if (!marqueeBoxes || marqueeBoxes.length === 0) return;

  const contentVI = `
    <span>🌊 THẬP TỨ TOUR</span>
    <span class="dot">•</span>
    <span>🎓 LỚP 10A4 THPT LƯƠNG THẾ VINH (2026)</span>
    <span class="dot">•</span>
    <span>🏖️ KỲ CO - EO GIÓ</span>
    <span class="dot">•</span>
    <span>🌄 GHỀNH RÁNG TIÊN SA - ĐỒI THI NHÂN</span>
    <span class="dot">•</span>
    <span>🏛️ BẢO TÀNG TỔNG HỢP BÌNH ĐỊNH</span>
    <span class="dot">•</span>
    <span>🍲 NHÀ HÀNG CƠM MẬU QUY NHƠN</span>
    <span class="dot">•</span>
    <span>🍜 BÚN CÁ NGỌC LIÊN & NEM CHẢ LỢI</span>
    <span class="dot">•</span>
    <span>🦞 HẢI SẢN XUÂN DIỆU DUY MẬP</span>
    <span class="dot">•</span>
    <span>🚀 KHÁM PHÁ VŨ TRỤ EXPLORASCIENCE</span>
    <span class="dot">•</span>
    <span>☂️ SẴN SÀNG DÙ & ÁO MƯA</span>
    <span class="dot">•</span>
    <span>🏨 KHÁCH SẠN ODIN QUY NHƠN</span>
    <span class="dot">•</span>
  `;

  const contentEN = `
    <span>🌊 THAP TU TOUR</span>
    <span class="dot">•</span>
    <span>🎓 CLASS 10A4 LUONG THE VINH (2026)</span>
    <span class="dot">•</span>
    <span>🏖️ KY CO - EO GIO</span>
    <span class="dot">•</span>
    <span>🌄 GHENH RANG TIEN SA HILLSIDE</span>
    <span class="dot">•</span>
    <span>🏛️ BINH DINH GENERAL MUSEUM</span>
    <span class="dot">•</span>
    <span>🍲 COM MAU RETRO RESTAURANT</span>
    <span class="dot">•</span>
    <span>🍜 NGOC LIEN FISH NOODLES & NEM LOI</span>
    <span class="dot">•</span>
    <span>🦞 XUAN DIEU SEAFOOD STREET</span>
    <span class="dot">•</span>
    <span>🚀 EXPLORASCIENCE SPACE CENTER</span>
    <span class="dot">•</span>
    <span>☂️ UMBRELLAS & RAINCOATS READY</span>
    <span class="dot">•</span>
    <span>🏨 ODIN HOTEL QUY NHON</span>
    <span class="dot">•</span>
  `;

  const chosenContent = lang === 'en' ? contentEN : contentVI;
  marqueeBoxes.forEach(box => {
    box.innerHTML = chosenContent;
  });
}

/**
 * Khởi tạo bộ chuyển đổi ngôn ngữ (Language Switcher)
 */
function initLanguageSwitcher() {
  const currentLang = (typeof getCurrentLang === 'function') ? getCurrentLang() : 'vi';

  // Đồng bộ trạng thái giao diện và thuộc tính lang
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.dataset.lang;
      if (typeof switchLanguage === 'function') {
        switchLanguage(targetLang);
      }
    });
  });

  // Nếu người dùng đã chọn English trước đó, áp dụng ngay tức thì
  if (currentLang === 'en' && typeof switchLanguage === 'function') {
    switchLanguage('en');
  } else {
    updateTimelineTabs('vi');
    updateMarqueeTicker('vi');
  }
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
 * 3c. Hiệu ứng nghiêng 3D con quay hồi chuyển trên điện thoại (Device Orientation Gyroscope Tilt)
 * Tự động đồng bộ góc nghiêng vật lý của điện thoại (trái/phải, trước/sau) với thẻ card 3D
 * Hỗ trợ mượt mà cả Android (tự động) & iOS Safari (cấp quyền qua cú chạm đầu tiên)
 */
function initDeviceOrientationTilt() {
  // Chỉ kích hoạt trên thiết bị cảm ứng / điện thoại
  const isTouchDevice = 'ontouchstart' in window || (navigator.maxTouchPoints > 0) || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  if (!isTouchDevice) return;

  let hasOrientationEvent = false;
  let isListening = false;
  let animFrameId = null;

  // Góc mục tiêu từ cảm biến điện thoại
  let targetRotX = 0;
  let targetRotY = 0;
  let targetGlareX = 50;
  let targetGlareY = 50;

  // Góc hiện tại (được làm mượt bằng LERP để chuyển động siêu êm, loại bỏ hoàn toàn rung giật của tay)
  let currentRotX = 0;
  let currentRotY = 0;
  let currentGlareX = 50;
  let currentGlareY = 50;

  let isActivelyMoving = false;
  let idleCounter = 0;

  // Tập hợp các thẻ đang hiển thị trong màn hình để tối ưu hóa hiệu năng 60-120fps
  const visibleCards = new Set();

  // IntersectionObserver phát hiện thẻ nào đang nằm trong khung nhìn màn hình
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleCards.add(entry.target);
        entry.target.classList.add('gyro-active');
      } else {
        visibleCards.delete(entry.target);
        entry.target.classList.remove('gyro-active');
        // Trả thẻ về trạng thái phẳng khi ra khỏi khung nhìn
        entry.target.style.transform = '';
      }
    });
  }, {
    rootMargin: '40px 0px 40px 0px',
    threshold: 0.05
  });

  const observeCards = () => {
    const cards = document.querySelectorAll(
      '.tilt-card, .tour-card, .category-card, .fact-item, .weather-plan-box, .timeline-content, .about-us-card, .related-card, .itinerary-card'
    );
    cards.forEach(card => {
      if (!card.dataset.gyroObserved) {
        card.dataset.gyroObserved = 'true';
        cardObserver.observe(card);
      }
    });
  };

  observeCards();

  if (typeof MutationObserver !== 'undefined') {
    const mutationObs = new MutationObserver(() => {
      observeCards();
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });
  }

  // Vòng lặp Render 60-120fps sử dụng requestAnimationFrame và LERP
  const updateTiltLoop = () => {
    const lerp = 0.085;
    const diffX = targetRotX - currentRotX;
    const diffY = targetRotY - currentRotY;

    if (Math.abs(diffX) > 0.005 || Math.abs(diffY) > 0.005) {
      currentRotX += diffX * lerp;
      currentRotY += diffY * lerp;
      currentGlareX += (targetGlareX - currentGlareX) * lerp;
      currentGlareY += (targetGlareY - currentGlareY) * lerp;
      isActivelyMoving = true;
      idleCounter = 0;
    } else {
      idleCounter++;
      if (idleCounter > 30) {
        isActivelyMoving = false;
      }
    }

    if (isActivelyMoving && visibleCards.size > 0) {
      const transformValue = `perspective(850px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      const gx = `${currentGlareX.toFixed(1)}%`;
      const gy = `${currentGlareY.toFixed(1)}%`;

      visibleCards.forEach(card => {
        // Chỉ áp dụng khi thẻ đã hiển thị (đã hoàn thành hoặc không có animation cuộn che khuất)
        if (card.classList.contains('is-revealed') || card.closest('.timeline-day-header, .place-header')) {
          card.style.transform = transformValue;
          card.style.setProperty('--mouse-x', gx);
          card.style.setProperty('--mouse-y', gy);
        }
      });
    }

    animFrameId = requestAnimationFrame(updateTiltLoop);
  };

  // Xử lý dữ liệu con quay hồi chuyển
  const handleOrientation = (e) => {
    if (e.gamma === null && e.beta === null) return;

    if (!hasOrientationEvent) {
      hasOrientationEvent = true;
      document.body.classList.add('gyro-active');
      if (!animFrameId) {
        animFrameId = requestAnimationFrame(updateTiltLoop);
      }
    }

    let gamma = e.gamma || 0; // Trục nghiêng trái (-90) / phải (+90)
    let beta = e.beta || 0;   // Trục nghiêng trước (-180) / sau (+180)

    // Tự động nhận diện hướng màn hình ngang (Landscape) nếu người dùng xoay ngang điện thoại
    const orientationAngle = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
    if (orientationAngle === 90) {
      const temp = gamma;
      gamma = -beta;
      beta = temp;
    } else if (orientationAngle === -90 || orientationAngle === 270) {
      const temp = gamma;
      gamma = beta;
      beta = -temp;
    }

    // Góc nghiêng tự nhiên của người dùng khi cầm điện thoại là khoảng 45°
    const deltaBeta = beta - 45;
    const maxAngle = 9.5; // Giới hạn góc nghiêng tối đa để chữ và ảnh vẫn rõ ràng, sang trọng

    // Tính toán góc nghiêng 3D
    targetRotX = Math.max(-maxAngle, Math.min(maxAngle, deltaBeta * 0.32));
    targetRotY = Math.max(-maxAngle, Math.min(maxAngle, gamma * 0.32));

    // Tính toán tọa độ phản quang vệt sáng (Glare Sheen)
    const rawGlareX = 50 + (gamma / 28) * 40;
    const rawGlareY = 50 + (deltaBeta / 28) * 40;
    targetGlareX = Math.max(10, Math.min(90, rawGlareX));
    targetGlareY = Math.max(10, Math.min(90, rawGlareY));

    // Đánh thức vòng lặp nếu đang tạm dừng
    if (!isActivelyMoving) {
      isActivelyMoving = true;
      idleCounter = 0;
    }
  };

  const startOrientationListener = () => {
    if (isListening) return;
    isListening = true;
    window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    if (!animFrameId) {
      animFrameId = requestAnimationFrame(updateTiltLoop);
    }
  };

  // Kiểm tra hỗ trợ iOS Safari 13+ (Yêu cầu xin quyền DeviceOrientationEvent.requestPermission)
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    const handleFirstGesture = () => {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            startOrientationListener();
          }
        })
        .catch(() => {
          // Người dùng từ chối hoặc lỗi bảo mật, duy trì hiển thị tĩnh bình thường
        });
    };

    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('click', handleFirstGesture, { once: true, passive: true });
  } else if ('DeviceOrientationEvent' in window) {
    // Android Chrome & trình duyệt chuẩn: khởi chạy trực tiếp ngay lập tức
    startOrientationListener();
  }

  // Tạm dừng khi chuyển tab để bảo vệ pin và CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    } else if (isListening && !animFrameId) {
      animFrameId = requestAnimationFrame(updateTiltLoop);
    }
  });
}

/**
 * 4. Hiệu ứng cuộn trang xuất hiện mượt (Scroll Reveal Animations)
 */
let scrollRevealObserver = null;

function triggerScrollReveal() {
  const elements = document.querySelectorAll(
    '.reveal-on-scroll, .section-title, .timeline-item, .tour-card, .category-card, .weather-plan-box, .about-us-card, .umbrella-alert-banner, .timeline-tabs, .timeline-day-header, .place-header, .quick-facts-card, .place-section, .itinerary-card, .related-places, .related-card'
  );

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  // Tự động hiển thị ngay các phần tử đã nằm trong tầm nhìn (đặc biệt tối ưu cho mobile)
  const vh = window.innerHeight || document.documentElement.clientHeight;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh + 60 && rect.bottom > -60) {
      el.classList.add('is-revealed');
    }
  });

  if (!scrollRevealObserver) {
    const isMobile = window.innerWidth <= 768;
    scrollRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          scrollRevealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: isMobile ? 0.02 : 0.08,
      rootMargin: isMobile ? '0px 0px 80px 0px' : '0px 0px 30px 0px'
    });
  }

  elements.forEach(el => {
    if (!el.classList.contains('is-revealed') && !el.dataset.observed) {
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
  initLanguageSwitcher();
  initScrollProgress();
  initMagicCursor();
  initTiltEffect();
  initMagneticElements();
  initDeviceOrientationTilt();
  initScrollReveal();
  initHeroParallax();
});

