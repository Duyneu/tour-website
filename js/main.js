/* ===================================================
   main.js - Logic chính của website tour du lịch
   Bao gồm: render trang chủ, chi tiết tour, đặt tour,
   tìm kiếm, lọc, form liên hệ, localStorage
   =================================================== */

/* ===== PHẦN CHUNG (tất cả trang) ===== */

// Hamburger menu mobile
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
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

// Biến lưu trạng thái bộ lọc hiện tại
let currentCategory = 'all';
let currentSearch = '';
let currentPriceRange = '';

/**
 * Render danh mục tour
 */
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;

  // Nút "Tất cả"
  let html = `
    <div class="category-card active" data-category="all">
      <span class="cat-icon">🌍</span>
      <span class="cat-name">Tất cả</span>
    </div>
  `;

  // Render từng danh mục từ CATEGORIES (tours.js)
  CATEGORIES.forEach(cat => {
    html += `
      <div class="category-card" data-category="${cat.id}">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${cat.name}</span>
      </div>
    `;
  });

  grid.innerHTML = html;

  // Gắn sự kiện click cho mỗi card danh mục
  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      // Cập nhật trạng thái active
      grid.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      // Lọc theo danh mục
      currentCategory = card.dataset.category;
      applyFilters();
    });
  });
}

/**
 * Render danh sách tour dạng card
 * @param {Array} tours - Mảng tour cần hiển thị
 */
function renderTourCards(tours) {
  const grid = document.getElementById('tourGrid');
  if (!grid) return;

  // Không có tour phù hợp
  if (tours.length === 0) {
    grid.innerHTML = `
      <div class="no-tours">
        <span class="no-tours-icon">🔍</span>
        <h3>Không tìm thấy tour phù hợp</h3>
        <p>Vui lòng thử tìm kiếm với từ khóa khác hoặc thay đổi bộ lọc.</p>
      </div>
    `;
    return;
  }

  // Tìm tên danh mục theo category id
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
            <span>🕐 ${tour.duration} ngày ${tour.duration - 1} đêm</span>
          </div>
          <div class="tour-card-footer">
            <div class="tour-card-price">
              ${formatPrice(tour.price)}
              <small>/người</small>
            </div>
            <button class="btn-detail">Xem chi tiết</button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

/**
 * Áp dụng tất cả bộ lọc (danh mục + tìm kiếm + giá)
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
      t.location.toLowerCase().includes(kw)
    );
  }

  // Lọc theo mức giá
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
  if (!tourGrid) return; // Không phải trang chủ

  // Render danh mục
  renderCategories();

  // Render tất cả tour
  renderTourCards(TOURS);

  // Sự kiện tìm kiếm (debounce 300ms)
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

  // Sự kiện lọc theo giá
  const priceFilter = document.getElementById('priceFilter');
  if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
      currentPriceRange = e.target.value;
      applyFilters();
    });
  }
}


/* ===== TRANG CHI TIẾT TOUR (tour-detail.html) ===== */

/**
 * Lấy ID tour từ URL query string
 */
function getTourIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/**
 * Render thông tin chi tiết tour
 * @param {Object} tour - Dữ liệu tour
 */
function renderTourDetail(tour) {
  const main = document.getElementById('tourDetailMain');
  if (!main) return;

  // Cập nhật title trang và breadcrumb
  document.title = `${tour.name} - Thập Tứ Tour`;
  const breadcrumbName = document.getElementById('breadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = tour.name;

  // Cập nhật giá trên sidebar
  const sidebarPrice = document.getElementById('sidebarPrice');
  if (sidebarPrice) sidebarPrice.textContent = formatPrice(tour.price);

  // Render nội dung chính
  let html = `
    <img class="tour-hero-img" src="${tour.image}" alt="${tour.name}">
    <h1>${tour.name}</h1>
    <div class="tour-meta">
      <span>📍 ${tour.location}</span>
      <span>🕐 ${tour.duration} ngày ${tour.duration - 1} đêm</span>
      <span>💰 Từ ${formatPrice(tour.price)}/người</span>
    </div>
    <div class="tour-description">${tour.description}</div>
  `;

  // Lịch trình theo ngày
  html += `<div class="itinerary"><h2>📋 Lịch trình tour</h2>`;
  tour.itinerary.forEach(item => {
    html += `
      <div class="itinerary-item">
        <div class="itinerary-day">
          <small>Ngày</small>
          <span>${item.day}</span>
        </div>
        <div class="itinerary-content">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
      </div>
    `;
  });
  html += `</div>`;

  // Bao gồm / Không bao gồm
  html += `<div class="includes-excludes">`;
  html += `<div class="includes-box"><h3>✅ Giá bao gồm</h3><ul>`;
  tour.includes.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += `</ul></div>`;

  html += `<div class="excludes-box"><h3>❌ Giá không bao gồm</h3><ul>`;
  tour.excludes.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += `</ul></div></div>`;

  main.innerHTML = html;
}

/**
 * Quản lý bộ đếm số người + tính giá tự động
 */
function initBookingCounter(tour) {
  let adults = 1;   // Người lớn (tối thiểu 1)
  let children = 0; // Trẻ em 5-11 tuổi
  let infants = 0;  // Trẻ em dưới 5 tuổi
  const MAX_PEOPLE = 10; // Giới hạn tối đa

  const adultCount = document.getElementById('adultCount');
  const childCount = document.getElementById('childCount');
  const infantCount = document.getElementById('infantCount');
  const adultMinus = document.getElementById('adultMinus');
  const adultPlus = document.getElementById('adultPlus');
  const childMinus = document.getElementById('childMinus');
  const childPlus = document.getElementById('childPlus');
  const infantMinus = document.getElementById('infantMinus');
  const infantPlus = document.getElementById('infantPlus');

  // Tổng số người hiện tại
  function totalPeople() {
    return adults + children + infants;
  }

  // Cập nhật hiển thị và trạng thái nút
  function updateDisplay() {
    adultCount.textContent = adults;
    childCount.textContent = children;
    infantCount.textContent = infants;

    // Disable nút trừ khi đạt min
    adultMinus.disabled = adults <= 1;
    childMinus.disabled = children <= 0;
    infantMinus.disabled = infants <= 0;

    // Disable nút cộng khi đạt max tổng 10 người
    const atMax = totalPeople() >= MAX_PEOPLE;
    adultPlus.disabled = atMax;
    childPlus.disabled = atMax;
    infantPlus.disabled = atMax;

    // Tính tổng giá
    calculateTotal();
  }

  // Tính tổng tiền và render
  function calculateTotal() {
    const adultTotal = adults * tour.price;           // 100% giá tour
    const childTotal = children * (tour.price * 0.5); // 50% giá tour
    const infantTotal = 0;                             // Miễn phí
    const grandTotal = adultTotal + childTotal + infantTotal;

    const totalDiv = document.getElementById('bookingTotal');
    if (!totalDiv) return;

    let html = '';
    if (adults > 0) {
      html += `<div class="total-row">
        <span>Người lớn × ${adults}</span>
        <span>${formatPrice(adultTotal)}</span>
      </div>`;
    }
    if (children > 0) {
      html += `<div class="total-row">
        <span>Trẻ em (5-11) × ${children}</span>
        <span>${formatPrice(childTotal)}</span>
      </div>`;
    }
    if (infants > 0) {
      html += `<div class="total-row">
        <span>Trẻ nhỏ (<5) × ${infants}</span>
        <span>Miễn phí</span>
      </div>`;
    }
    html += `<div class="total-row grand-total">
      <span>Tổng cộng</span>
      <span>${formatPrice(grandTotal)}</span>
    </div>`;

    totalDiv.innerHTML = html;
  }

  // Gắn sự kiện cho các nút +/-
  adultMinus.addEventListener('click', () => { if (adults > 1) { adults--; updateDisplay(); } });
  adultPlus.addEventListener('click', () => { if (totalPeople() < MAX_PEOPLE) { adults++; updateDisplay(); } });
  childMinus.addEventListener('click', () => { if (children > 0) { children--; updateDisplay(); } });
  childPlus.addEventListener('click', () => { if (totalPeople() < MAX_PEOPLE) { children++; updateDisplay(); } });
  infantMinus.addEventListener('click', () => { if (infants > 0) { infants--; updateDisplay(); } });
  infantPlus.addEventListener('click', () => { if (totalPeople() < MAX_PEOPLE) { infants++; updateDisplay(); } });

  // Khởi tạo hiển thị ban đầu
  updateDisplay();

  // Set ngày khởi hành tối thiểu = ngày mai
  const departDate = document.getElementById('departDate');
  if (departDate) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    departDate.min = tomorrow.toISOString().split('T')[0];
    departDate.value = tomorrow.toISOString().split('T')[0];
  }

  // Trả về hàm getter cho booking
  return {
    getBookingData: () => ({
      adults,
      children,
      infants,
      totalPeople: totalPeople(),
      adultTotal: adults * tour.price,
      childTotal: children * (tour.price * 0.5),
      grandTotal: (adults * tour.price) + (children * tour.price * 0.5),
      departDate: departDate ? departDate.value : ''
    })
  };
}

/**
 * Xử lý đặt tour: mở modal, validate, lưu localStorage
 */
function initBookingForm(tour, bookingCounter) {
  const btnBook = document.getElementById('btnBook');
  const bookingModal = document.getElementById('bookingModal');
  const closeBookingModal = document.getElementById('closeBookingModal');
  const bookingForm = document.getElementById('bookingForm');
  const successModal = document.getElementById('successModal');
  const closeSuccessModal = document.getElementById('closeSuccessModal');
  const btnCloseSuccess = document.getElementById('btnCloseSuccess');

  if (!btnBook) return;

  // Mở modal đặt tour
  btnBook.addEventListener('click', () => {
    const data = bookingCounter.getBookingData();
    // Kiểm tra đã chọn ngày khởi hành chưa
    if (!data.departDate) {
      alert('Vui lòng chọn ngày khởi hành!');
      return;
    }
    bookingModal.classList.add('show');
  });

  // Đóng modal đặt tour
  closeBookingModal.addEventListener('click', () => {
    bookingModal.classList.remove('show');
  });

  // Click bên ngoài modal để đóng
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) bookingModal.classList.remove('show');
  });

  // Validate form đặt tour
  function validateBookingForm() {
    let isValid = true;
    const fullName = document.getElementById('fullName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    // Reset lỗi
    document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

    // Họ tên: bắt buộc, tối thiểu 2 ký tự
    if (!fullName.value.trim() || fullName.value.trim().length < 2) {
      fullName.closest('.form-group').classList.add('error');
      isValid = false;
    }

    // Số điện thoại: 10-11 số
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.value.trim())) {
      phone.closest('.form-group').classList.add('error');
      isValid = false;
    }

    // Email: format hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.closest('.form-group').classList.add('error');
      isValid = false;
    }

    return isValid;
  }

  // Submit form đặt tour
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateBookingForm()) return;

    const bookingData = bookingCounter.getBookingData();
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const note = document.getElementById('note').value.trim();

    // Tạo đơn đặt tour
    const booking = {
      id: Date.now(),
      tourId: tour.id,
      tourName: tour.name,
      tourLocation: tour.location,
      departDate: bookingData.departDate,
      adults: bookingData.adults,
      children: bookingData.children,
      infants: bookingData.infants,
      totalPeople: bookingData.totalPeople,
      grandTotal: bookingData.grandTotal,
      customerName: fullName,
      customerPhone: phone,
      customerEmail: email,
      note: note,
      createdAt: new Date().toISOString()
    };

    // Lưu vào localStorage
    saveBookingToLocalStorage(booking);

    // Đóng modal đặt tour
    bookingModal.classList.remove('show');

    // Hiện modal thành công
    renderSuccessModal(booking);
    successModal.classList.add('show');

    // Reset form
    bookingForm.reset();
  });

  // Đóng modal thành công
  function closeSuccess() {
    successModal.classList.remove('show');
  }
  if (closeSuccessModal) closeSuccessModal.addEventListener('click', closeSuccess);
  if (btnCloseSuccess) btnCloseSuccess.addEventListener('click', closeSuccess);
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) closeSuccess();
  });
}

/**
 * Lưu đơn đặt tour vào localStorage
 */
function saveBookingToLocalStorage(booking) {
  let bookings = JSON.parse(localStorage.getItem('thaptutour_bookings') || localStorage.getItem('viettour_bookings') || '[]');
  bookings.push(booking);
  localStorage.setItem('thaptutour_bookings', JSON.stringify(bookings));
}

/**
 * Render tóm tắt đơn đặt tour trong modal thành công
 */
function renderSuccessModal(booking) {
  const summary = document.getElementById('bookingSummary');
  if (!summary) return;

  // Format ngày khởi hành
  const dateObj = new Date(booking.departDate);
  const formattedDate = dateObj.toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let html = `
    <div class="summary-row">
      <span>Tour:</span>
      <span>${booking.tourName}</span>
    </div>
    <div class="summary-row">
      <span>Ngày khởi hành:</span>
      <span>${formattedDate}</span>
    </div>
    <div class="summary-row">
      <span>Người lớn:</span>
      <span>${booking.adults} người</span>
    </div>
  `;

  if (booking.children > 0) {
    html += `
      <div class="summary-row">
        <span>Trẻ em (5-11):</span>
        <span>${booking.children} người</span>
      </div>
    `;
  }

  if (booking.infants > 0) {
    html += `
      <div class="summary-row">
        <span>Trẻ nhỏ (<5):</span>
        <span>${booking.infants} người</span>
      </div>
    `;
  }

  html += `
    <div class="summary-row">
      <span>Khách hàng:</span>
      <span>${booking.customerName}</span>
    </div>
    <div class="summary-row">
      <span>Tổng tiền:</span>
      <span>${formatPrice(booking.grandTotal)}</span>
    </div>
  `;

  summary.innerHTML = html;
}

/**
 * Khởi tạo trang chi tiết tour
 */
function initTourDetailPage() {
  const tourDetailMain = document.getElementById('tourDetailMain');
  if (!tourDetailMain) return; // Không phải trang chi tiết

  const tourId = getTourIdFromUrl();
  if (!tourId) {
    tourDetailMain.innerHTML = '<h2>Không tìm thấy tour!</h2>';
    return;
  }

  const tour = getTourById(tourId);
  if (!tour) {
    tourDetailMain.innerHTML = '<h2>Tour không tồn tại!</h2>';
    return;
  }

  // Render chi tiết tour
  renderTourDetail(tour);

  // Khởi tạo bộ đếm số người
  const bookingCounter = initBookingCounter(tour);

  // Khởi tạo form đặt tour
  initBookingForm(tour, bookingCounter);
}


/* ===== TRANG LIÊN HỆ (contact.html) ===== */

/**
 * Khởi tạo form liên hệ
 */
function initContactPage() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return; // Không phải trang liên hệ

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    // Reset lỗi
    contactForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

    // Validate họ tên
    if (!name.value.trim() || name.value.trim().length < 2) {
      name.closest('.form-group').classList.add('error');
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.closest('.form-group').classList.add('error');
      isValid = false;
    }

    // Validate chủ đề
    if (!subject.value.trim()) {
      subject.closest('.form-group').classList.add('error');
      isValid = false;
    }

    // Validate nội dung
    if (!message.value.trim()) {
      message.closest('.form-group').classList.add('error');
      isValid = false;
    }

    if (!isValid) return;

    // Lưu tin nhắn liên hệ vào localStorage
    const contactData = {
      id: Date.now(),
      name: name.value.trim(),
      email: email.value.trim(),
      phone: document.getElementById('contactPhone').value.trim(),
      subject: subject.value.trim(),
      message: message.value.trim(),
      createdAt: new Date().toISOString()
    };

    let contacts = JSON.parse(localStorage.getItem('thaptutour_contacts') || localStorage.getItem('viettour_contacts') || '[]');
    contacts.push(contactData);
    localStorage.setItem('thaptutour_contacts', JSON.stringify(contacts));

    // Hiện thông báo thành công
    alert('Cảm ơn bạn! Tin nhắn đã được gửi thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.');
    contactForm.reset();
  });
}


/* ===== KHỞI TẠO KHI TRANG TẢI XONG ===== */
document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initTourDetailPage();
  initContactPage();
});
