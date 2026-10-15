/* ===================================================
   main.js - Logic hiển thị website Thập Tứ Tour
   Chỉ giới thiệu các địa danh du lịch Quy Nhơn & Về tụi tôi
   Không có chức năng đăng ký / đặt tour
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

  // Đóng menu khi bấm vào link
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
let currentPriceRange = '';

/**
 * Render danh mục địa danh
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
 * Render danh sách tour / địa danh Quy Nhơn
 */
function renderTourCards(tours) {
  const grid = document.getElementById('tourGrid');
  if (!grid) return;

  if (tours.length === 0) {
    grid.innerHTML = `
      <div class="no-tours">
        <span class="no-tours-icon">🔍</span>
        <h3>Không tìm thấy địa danh phù hợp</h3>
        <p>Vui lòng thử tìm kiếm với từ khóa khác hoặc thay đổi bộ lọc.</p>
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
    html += `
      <div class="tour-card" onclick="window.location.href='tour-detail.html?id=${tour.id}'">
        <div class="tour-card-img">
          <img src="${tour.image}" alt="${tour.name}" loading="lazy">
          <span class="tour-card-badge">${getCatName(tour.category)}</span>
        </div>
        <div class="tour-card-body">
          <h3>${tour.name}</h3>
          <div class="tour-card-info">
            <span>📍 ${tour.location}</span>
            <span>🕐 Gợi ý: ${tour.duration} ngày</span>
          </div>
          <div class="tour-card-footer">
            <div class="tour-card-price">
              ${formatPrice(tour.price)}
              <small>/chi phí gợi ý</small>
            </div>
            <button class="btn-detail">Xem giới thiệu →</button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

/**
 * Áp dụng bộ lọc (danh mục + tìm kiếm + mức giá tham khảo)
 */
function applyFilters() {
  let result = TOURS;

  if (currentCategory && currentCategory !== 'all') {
    result = result.filter(t => t.category === currentCategory);
  }

  if (currentSearch) {
    const kw = currentSearch.toLowerCase();
    result = result.filter(t =>
      t.name.toLowerCase().includes(kw) ||
      t.location.toLowerCase().includes(kw)
    );
  }

  if (currentPriceRange) {
    const [min, max] = currentPriceRange.split('-').map(Number);
    result = result.filter(t => t.price >= min && t.price <= max);
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

  const searchInput = document.getElementById('searchInput');
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearch = e.target.value.trim();
        applyFilters();
      }, 300);
    });
  }

  const priceFilter = document.getElementById('priceFilter');
  if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
      currentPriceRange = e.target.value;
      applyFilters();
    });
  }
}


/* ===== TRANG GIỚI THIỆU CHI TIẾT ĐỊA DANH (tour-detail.html) ===== */

function getTourIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/**
 * Render trang bài viết giới thiệu địa danh Quy Nhơn
 */
function renderTourDetail(tour) {
  const main = document.getElementById('tourDetailMain');
  if (!main) return;

  document.title = `Thập Tứ Tour | ${tour.name}`;
  const breadcrumbName = document.getElementById('breadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = tour.name;

  // Lấy các tour khác gợi ý khám phá tiếp
  const otherTours = TOURS.filter(t => t.id !== tour.id).slice(0, 3);

  let html = `
    <!-- Ảnh bìa và tiêu đề địa danh -->
    <div class="place-header">
      <div class="place-image-wrap">
        <img class="place-hero-img" src="${tour.image}" alt="${tour.name}">
      </div>
      <div class="place-title-box">
        <h1>${tour.name}</h1>
        <div class="place-meta">
          <span>📍 <strong>Vị trí:</strong> ${tour.location}</span>
          <span>🕐 <strong>Thời gian lý tưởng:</strong> ${tour.duration} ngày</span>
          <span>💰 <strong>Chi phí tham khảo:</strong> khoảng ${formatPrice(tour.price)}/người</span>
        </div>
      </div>
    </div>

    <!-- Hộp thông tin nhanh -->
    <div class="quick-facts-card">
      <div class="fact-item">
        <span class="fact-icon">🌅</span>
        <div>
          <h4>Thời điểm đẹp nhất</h4>
          <p>Tháng 3 - Tháng 9 (mùa khô biển êm, nắng đẹp)</p>
        </div>
      </div>
      <div class="fact-item">
        <span class="fact-icon">🛵</span>
        <div>
          <h4>Phương tiện di chuyển</h4>
          <p>Xe máy, ô tô hoặc cano / tàu gỗ tùy điểm đến</p>
        </div>
      </div>
      <div class="fact-item">
        <span class="fact-icon">📸</span>
        <div>
          <h4>Trải nghiệm nổi bật</h4>
          <p>Tắm biển trong vắt, check-in vách đá, lặn san hô</p>
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

    <!-- Lịch trình gợi ý -->
    <div class="place-section">
      <h2>📋 Lịch trình tham quan gợi ý</h2>
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

    <!-- Dịch vụ & Kinh nghiệm tham khảo -->
    <div class="place-section">
      <h2>💡 Kinh nghiệm & Chi phí gợi ý</h2>
      <div class="includes-excludes-grid">
        <div class="info-card info-includes">
          <h3>✅ Chi phí gợi ý thường bao gồm</h3>
          <ul>
  `;
  tour.includes.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += `
          </ul>
        </div>
        <div class="info-card info-excludes">
          <h3>🎒 Tự chuẩn bị & Chi phí cá nhân</h3>
          <ul>
  `;
  tour.excludes.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += `
          </ul>
        </div>
      </div>
    </div>

    <!-- Nút quay lại -->
    <div class="back-action-wrap">
      <a href="index.html#tours" class="btn-back-home">← Quay lại danh sách địa danh</a>
    </div>

    <!-- Gợi ý địa danh khác -->
    <div class="related-places">
      <h2>Khám phá thêm các điểm đến khác ở Quy Nhơn</h2>
      <div class="related-grid">
  `;

  otherTours.forEach(t => {
    html += `
      <div class="related-card" onclick="window.location.href='tour-detail.html?id=${t.id}'">
        <img src="${t.image}" alt="${t.name}">
        <div class="related-body">
          <h4>${t.name}</h4>
          <p>📍 ${t.location}</p>
          <span class="related-link">Xem giới thiệu →</span>
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
