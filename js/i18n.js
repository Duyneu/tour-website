/* ===================================================
   i18n.js - Hệ thống đa ngôn ngữ Tiếng Việt & Tiếng Anh
   Thập Tứ Tour • Dự án học sinh Lớp 10A4 THPT Lương Thế Vinh
   Văn phong tự nhiên, chân thật theo tiêu chuẩn Natural Writing Editor
   =================================================== */

const I18N = {
  vi: {
    // Header & Navigation
    logo_title: "Thập Tứ Tour",
    nav_home: "Trang chủ",
    nav_about: "Về chúng tôi",
    nav_itinerary: "Lịch trình chuyến đi",
    nav_categories: "Danh mục",
    nav_places: "Địa điểm nổi bật",
    theme_toggle_light: "Chuyển sang chế độ sáng",
    theme_toggle_dark: "Chuyển sang chế độ tối",

    // Hero section
    hero_badge: "🎓 Dự án học sinh Lớp 10A4 • THPT Lương Thế Vinh",
    hero_price_badge: "🏷️ Trọn gói 4N3Đ: <strong class=\"price-nowrap\">5.920.000đ</strong> / bạn",
    hero_title: "Khám Phá Vẻ Đẹp<br><span class=\"hero-gradient-text\">Quy Nhơn - Bình Định</span>",
    hero_desc: "Cẩm nang du lịch Quy Nhơn cùng tập thể 10A4: dạo biển vầng trăng khuyết, đón gió Eo Gió - Kỳ Co, khám phá vũ trụ ExploraScience và thưởng thức hải sản tươi ngon.",
    hero_btn_itinerary: "Xem lịch trình chuyến đi",
    hero_btn_places: "Địa điểm nổi bật →",

    // About Us
    about_title: "Về Chúng Tôi",
    about_sub: "Câu chuyện nhỏ đằng sau trang web Thập Tứ Tour",
    about_tag: "🏫 Lớp 10A4 • Năm 2026 • THPT Lương Thế Vinh TP.HCM",
    about_heading: "Chào mọi người, tụi mình là Thập Tứ Tour! 👋",
    about_p1: "Tụi mình là một nhóm học sinh đến từ <strong>lớp 10A4 (khóa 2026), trường THPT Lương Thế Vinh - TP. Hồ Chí Minh</strong>. Xuất phát từ chuyến đi thực tế cùng nhau và niềm say mê vẻ đẹp biển đảo miền Trung, tụi mình đã xây dựng website này như một cẩm nang giới thiệu du lịch Quy Nhơn thật sinh động và gần gũi.",
    about_p2: "Chuyến đi 4 ngày 3 đêm được tập thể lớp 10A4 lên kế hoạch chi tiết với mức chi phí trọn gói là <strong>5.920.000đ / người</strong> (bao gồm toàn bộ xe khứ hồi & di chuyển, khách sạn 4 sao Odin, tất cả các bữa ăn đặc sản, vé tham quan tất cả điểm đến & bảo hiểm du lịch). Mọi thông tin được chia sẻ để bất cứ ai đang có ý định ghé thăm xứ Nẫu đều có thể dễ dàng tham khảo.",
    stat_places_num: "8+",
    stat_places_label: "Điểm đến nổi bật",
    stat_days_num: "4N3Đ",
    stat_days_label: "Trọn vẹn hành trình",
    stat_class_num: "10A4",
    stat_class_label: "Tập thể lớp THPT LTV",
    stat_price_num: "5.920.000đ",
    stat_price_label: "Giá cả tour / người",
    about_img_caption: "🌊 Toàn cảnh Cù Lao Xanh - Quy Nhơn, Bình Định",

    // Itinerary & Pricing section
    itinerary_badge: "🗓️ Lộ trình thực tế 4N3Đ",
    itinerary_title: "Lịch Trình Chi Tiết 4 Ngày 3 Đêm",
    itinerary_sub: "Hành trình trọn vẹn khám phá Quy Nhơn: chi tiết từng mốc giờ, địa điểm dừng chân, ẩm thực đặc sản & phương án dự phòng thời tiết",
    umbrella_notice: "<strong>Lưu ý chu đáo từ Thập Tứ Tour:</strong> Đoàn luôn chuẩn bị sẵn <strong>dù che và áo mưa tiện lợi</strong> để hỗ trợ tận tình cho các thành viên trong suốt chuyến đi!",
    cost_tag: "🏷️ CHI PHÍ TRỌN GÓI 4N3Đ",
    cost_heading: "Giá Trọn Gói: <strong class=\"price-nowrap\">5.920.000đ</strong> <small>/ người</small>",
    cost_desc: "Mức kinh phí thực tế và minh bạch cho chuyến đi 4 ngày 3 đêm của học sinh lớp 10A4, đã bao trọn toàn bộ dịch vụ chất lượng:",
    cost_amount: "5.920.000đ",
    cost_period: "4 Ngày 3 Đêm • Trọn gói",
    cost_feat_bus: "<strong>Xe giường nằm khứ hồi:</strong> TP.HCM - Quy Nhơn & xe du lịch đời mới suốt hành trình",
    cost_feat_hotel: "<strong>Khách sạn 4 sao Odin Quy Nhơn:</strong> nghỉ ngơi 3 đêm, hồ bơi sân thượng, vị trí trung tâm",
    cost_feat_food: "<strong>Toàn bộ các bữa ăn đặc sản:</strong> Hải sản Duy Mập, Bún cá Ngọc Liên, Cơm Mậu, Bánh xèo Gia Vỹ, Nem Chả Lợi...",
    cost_feat_tickets: "<strong>Trọn bộ vé tham quan & trải nghiệm:</strong> Kỳ Co - Eo Gió, Ghềnh Ráng Tiên Sa, Tháp Đôi, trung tâm vũ trụ ExploraScience, xe ngựa...",
    cost_feat_care: "<strong>Hỗ trợ chu đáo:</strong> dù che, áo mưa tiện lợi dự phòng thời tiết & bảo hiểm du lịch trọn tour",
    tab_day_prefix: "NGÀY",
    day_badge_prefix: "LỊCH TRÌNH NGÀY",
    timeline_place_link: "📍 <strong>Địa điểm trong chuyến đi:</strong>",
    places_section_badge: "📍 Điểm dừng chân",
    weather_plan_title: "Phương Án Dự Phòng Khi Thời Tiết Xấu / Trời Mưa",
    nav_first_day: "Về ngày đầu",
    nav_prev_day: "Ngày trước đó",
    nav_next_day: "Ngày tiếp theo",
    nav_last_day: "Đến ngày cuối",
    nav_indicator_day: "Ngày",

    // Categories
    cat_section_title: "Danh Mục Địa Danh",
    cat_section_sub: "Chọn loại hình địa điểm bạn muốn khám phá",
    cat_all: "Tất cả địa danh",
    cat_places_count: "địa điểm",

    // Search & Filter
    search_placeholder: "Tìm địa điểm theo tên hoặc vị trí...",
    filter_all_label: "Tất cả mức giá",
    active_filter_label: "Đang hiển thị:",
    active_filter_total: "trên tổng số",

    // Featured Places
        places_section_title: "Địa Điểm Nổi Bật",
    places_section_sub: "Các điểm dừng chân đặc sắc trong chuyến đi Quy Nhơn 4N3Đ của lớp 10A4",
    visit_prefix: "Ghé thăm:",
    btn_view_place: "Xem chi tiết địa điểm",
    no_places_title: "Không tìm thấy địa điểm phù hợp",
    no_places_sub: "Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn mục \"Tất cả địa danh\".",

    // Place Detail Page
    breadcrumb_home: "Trang chủ",
    breadcrumb_places: "Địa điểm nổi bật",
    detail_visit_title: "Mốc thời gian ghé thăm trong chuyến đi:",
    detail_location: "Vị trí:",
    detail_duration: "Thời lượng:",
    detail_tags: "Đặc trưng:",
    detail_best_time: "Thời điểm đẹp nhất",
    detail_best_time_desc: "Tháng 3 - Tháng 9 (mùa khô, biển êm, trời trong xanh rực rỡ)",
    detail_transport: "Phương tiện di chuyển",
    detail_transport_desc: "Xe máy, ô tô hoặc cano / thuyền tùy điểm đến",
    detail_experience: "Trải nghiệm chính",
    detail_experience_desc: "Ngắm cảnh biển đảo hoang sơ, check-in vách đá, thưởng ngoạn di tích",
    detail_desc_heading: "✨ Vẻ đẹp đặc trưng của",
    detail_itinerary_heading: "📋 Lịch trình tham quan trong chuyến đi",
    detail_day_badge: "Ngày",
    detail_highlights_heading: "🌟 Điểm nổi bật chuyến đi",
    detail_tips_heading: "🎒 Lưu ý & Chuẩn bị khi đi",
    detail_back_places: "← Quay lại danh sách địa điểm nổi bật",
    detail_back_timeline: "🗓️ Xem toàn bộ lịch trình 4 ngày 3 đêm →",
    detail_related_heading: "Khám phá thêm các điểm đến khác trong chuyến đi",
    detail_related_btn: "Khám phá địa danh →",

    // Footer
    footer_desc: "Thập Tứ Tour là dự án cẩm nang du lịch Quy Nhơn - Bình Định của nhóm học sinh lớp 10A4 năm 2026, Trường THPT Lương Thế Vinh - TP. Hồ Chí Minh.",
    footer_quicklinks: "Liên kết nhanh",
    footer_contact: "Thông tin liên hệ",
    footer_school: "🏫 Trường THPT Lương Thế Vinh, TP.HCM",
    footer_address: "📍 Quận 1, TP. Hồ Chí Minh, Việt Nam",
    footer_rights: "© 2024 - 2026 Thập Tứ Tour. Dự án cẩm nang du lịch Quy Nhơn của học sinh lớp 10A4 Trường THPT Lương Thế Vinh, TP.HCM."
  },

  en: {
    // Header & Navigation
    logo_title: "Thap Tu Tour",
    nav_home: "Home",
    nav_about: "About Us",
    nav_itinerary: "Itinerary",
    nav_categories: "Categories",
    nav_places: "Highlights",
    theme_toggle_light: "Switch to light mode",
    theme_toggle_dark: "Switch to dark mode",

    // Hero section
    hero_badge: "🎓 Class 10A4 Project • Luong The Vinh High School",
    hero_price_badge: "🏷️ 4D3N Tour: <strong class=\"price-nowrap\">5,920,000&nbsp;VND</strong> / student",
    hero_title: "Discover the Charm of<br><span class=\"hero-gradient-text\">Quy Nhon - Binh Dinh</span>",
    hero_desc: "A handcrafted travel guide by Class 10A4: scenic beaches at Ky Co & Eo Gio, stargazing at ExploraScience, and authentic local coastal delicacies.",
    hero_btn_itinerary: "Explore 4-Day Itinerary",
    hero_btn_places: "Featured Places →",

    // About Us
    about_title: "About Us",
    about_sub: "The story behind our Thap Tu Tour student project",
    about_tag: "🏫 Class 10A4 • Year 2026 • Luong The Vinh High School, HCMC",
    about_heading: "Hello everyone, welcome to Thap Tu Tour! 👋",
    about_p1: "We are high school students from <strong>Class 10A4 (Class of 2026) at Luong The Vinh High School in Ho Chi Minh City</strong>. Created right after our class trip to Quy Nhon, this website is our handcrafted, non-profit travel guide designed to share real itineraries, helpful tips, and memorable spots.",
    about_p2: "Our 4-day 3-night journey is planned with an all-inclusive cost of only <strong>5,920,000 VND / person</strong> (covering round-trip coach transport, 4-star Odin Hotel accommodation, all signature meals, full attraction tickets, and travel insurance) to provide a transparent reference for anyone planning their trip.",
    stat_places_num: "8+",
    stat_places_label: "Key Destinations",
    stat_days_num: "4D3N",
    stat_days_label: "Complete Journey",
    stat_class_num: "10A4",
    stat_class_label: "Class 10A4 LTV",
    stat_price_num: "5,920,000 VND",
    stat_price_label: "All-inclusive / person",
    about_img_caption: "🌊 Panoramic view of Cu Lao Xanh - Quy Nhon, Binh Dinh",

    // Itinerary & Pricing section
    itinerary_badge: "🗓️ Real 4D3N Itinerary",
    itinerary_title: "Detailed 4-Day 3-Night Schedule",
    itinerary_sub: "Our day-by-day journey through Quy Nhon: exact timings, stops, local food highlights, and weather backup plans",
    umbrella_notice: "<strong>Thoughtful Tip from Thap Tu Tour:</strong> Our group always brings along <strong>umbrellas and raincoats</strong> to keep everyone comfortable throughout the trip!",
    cost_tag: "🏷️ 4D3N ALL-INCLUSIVE",
    cost_heading: "Package Price: <strong class=\"price-nowrap\">5,920,000&nbsp;VND</strong> <small>/ student</small>",
    cost_desc: "Our real, transparent all-inclusive budget for Class 10A4's 4-day 3-night trip, covering all quality services:",
    cost_amount: "5,920,000 VND",
    cost_period: "4 Days 3 Nights • All-inclusive",
    cost_feat_bus: "<strong>Round-trip sleeper coach:</strong> HCMC - Quy Nhon & dedicated tour bus throughout the journey",
    cost_feat_hotel: "<strong>4-Star Odin Hotel Quy Nhon:</strong> 3-night stay, rooftop infinity pool, prime central location",
    cost_feat_food: "<strong>All signature meals included:</strong> Duy Map Seafood, Ngoc Lien Fish Noodles, Com Mau, Gia Vy Crispy Pancakes, Nem Loi...",
    cost_feat_tickets: "<strong>All attraction tickets & activities:</strong> Ky Co - Eo Gio, Ghenh Rang Tien Sa, Twin Cham Towers, ExploraScience Space Center, horse carriage...",
    cost_feat_care: "<strong>Thoughtful amenities:</strong> umbrellas, raincoats for bad weather backup & comprehensive travel insurance",
    tab_day_prefix: "DAY",
    day_badge_prefix: "ITINERARY DAY",
    timeline_place_link: "📍 <strong>Stop on the itinerary:</strong>",
    places_section_badge: "📍 Featured Destinations",
    weather_plan_title: "Backup Plan for Rainy / Bad Weather",
    nav_first_day: "First Day",
    nav_prev_day: "Previous Day",
    nav_next_day: "Next Day",
    nav_last_day: "Last Day",
    nav_indicator_day: "Day",

    // Categories
    cat_section_title: "Explore by Category",
    cat_section_sub: "Choose your favorite style of travel experience",
    cat_all: "All Destinations",
    cat_places_count: "places",

    // Search & Filter
    search_placeholder: "Search destination by name or location...",
    filter_all_label: "All prices",
    active_filter_label: "Showing:",
    active_filter_total: "out of total",

    // Featured Places
        places_section_title: "Featured Destinations",
    places_section_sub: "Signature stops across our 4D3N Quy Nhon journey by Class 10A4",
    visit_prefix: "Visit time:",
    btn_view_place: "View place details",
    no_places_title: "No matching destination found",
    no_places_sub: "Please try searching with another keyword or select \"All Destinations\".",

    // Place Detail Page
    breadcrumb_home: "Home",
    breadcrumb_places: "Highlights",
    detail_visit_title: "Scheduled visit on the itinerary:",
    detail_location: "Location:",
    detail_duration: "Duration:",
    detail_tags: "Features:",
    detail_best_time: "Best Time to Visit",
    detail_best_time_desc: "March to September (dry season, calm sea, sunny skies)",
    detail_transport: "Getting Around",
    detail_transport_desc: "Motorbike, car, or speedboat/ferry depending on destination",
    detail_experience: "Key Highlights",
    detail_experience_desc: "Scenic coastal views, cliffside pathways, and cultural heritage",
    detail_desc_heading: "✨ Highlights of",
    detail_itinerary_heading: "📋 Scheduled Itinerary on the Trip",
    detail_day_badge: "Day",
    detail_highlights_heading: "🌟 Trip Highlights",
    detail_tips_heading: "🎒 Travel Tips & Essentials",
    detail_back_places: "← Back to Featured Destinations",
    detail_back_timeline: "🗓️ View Full 4D3N Itinerary →",
    detail_related_heading: "Explore More Stops on the Journey",
    detail_related_btn: "Explore place →",

    // Footer
    footer_desc: "Thap Tu Tour is a Quy Nhon travel guide created by students of Class 10A4 (2026), Luong The Vinh High School - Ho Chi Minh City.",
    footer_quicklinks: "Quick Links",
    footer_contact: "Contact Information",
    footer_school: "🏫 Luong The Vinh High School, HCMC",
    footer_address: "📍 District 1, Ho Chi Minh City, Vietnam",
    footer_rights: "© 2024 - 2026 Thap Tu Tour. High school travel project by Class 10A4, Luong The Vinh High School, HCMC."
  }
};

/* Danh mục theo ngôn ngữ */
const CATEGORIES_EN = [
  { id: "bien-dao", name: "Coast & Islands", icon: "🏖️" },
  { id: "thien-nhien", name: "Nature & Parks", icon: "🌅" },
  { id: "van-hoa", name: "Culture & Heritage", icon: "🏛️" }
];

/* Dữ liệu Địa Danh bằng Tiếng Anh (Tự nhiên, cụ thể, không sáo rỗng) */
const TOURS_EN = [
  // === 1: Ky Co, Eo Gio & Ngoc Hoa Pagoda ===
  {
    id: 1,
    name: "Ky Co - Eo Gio & Ngoc Hoa Pagoda (Nhon Ly)",
    category: "bien-dao",
    location: "Nhon Ly Commune, Quy Nhon City",
    visitTime: "08:15 – 16:00 • Day 2",
    duration: "Full Day 2 (08:15 – 16:00)",
    tags: ["08:15 Day 2", "Speedboat & Snorkeling", "Ngoc Hoa Pagoda", "Eo Gio Cliffs", "Nhon Ly Seafood Feast"],
    description: "Ky Co is hailed as the 'Maldives of Vietnam' with two-tone turquoise waters and soft white sand sheltered by crescent-shaped mountain cliffs. Adjacent is majestic Eo Gio, a cliffside walkway hugging the ocean, and serene Ngoc Hoa Pagoda featuring Vietnam's tallest twin Guanyin statue. Our Day 2 schedule includes taking a speedboat to Ky Co for coral snorkeling at Bai Dua, a 7-8 dish fresh seafood feast in Nhon Ly fishing village, visiting Ngoc Hoa Pagoda at 14:00, and walking the Eo Gio cliffside trail at 15:00.",
    itinerary: [
      {
        day: 2,
        title: "08:15 - 12:20: Speedboat to Ky Co Island, Coral Snorkeling & Swimming",
        detail: "Book Ky Co island tour at Nhon Ly (450,000 – 490,000 VND / person including round-trip speedboat, beach admission, coral snorkeling at Bai Dua with goggles and life vests, freshwater shower, and village seafood lunch). Swim in turquoise waters and take photos on pristine sand."
      },
      {
        day: 2,
        title: "12:40 - 13:50: Fresh Seafood Feast in Nhon Ly Village",
        detail: "Enjoy a village seafood feast featuring 7-8 fresh dishes caught daily: steamed prawns, tender squid, local fried fish, seafood hotpot, and clams."
      },
      {
        day: 2,
        title: "14:00 - 15:00: Visit Ngoc Hoa Pagoda",
        detail: "Pay respects at this peaceful sanctuary overlooking the ocean, home to Vietnam's tallest dual Buddha Guanyin statue (Free admission)."
      },
      {
        day: 2,
        title: "15:00 - 16:00: Walk along Eo Gio Scenic Coastal Cliff Trail",
        detail: "Walk the coastal trail hugging the cliffs, take group photos on the wooden seaside walkway, and feel the sea breeze (Eo Gio ticket: 22,000 VND / person)."
      }
    ],
    highlights: [
      "Scheduled visit: 08:15 – 16:00 on Day 2 (Ky Co, Nhon Ly village, Ngoc Hoa Pagoda & Eo Gio)",
      "Round-trip speedboat, coral snorkeling at Bai Dua, and turquoise beach swimming",
      "Delicious 7-8 dish seafood lunch prepared fresh in Nhon Ly fishing village",
      "Dual Guanyin statue at Ngoc Hoa Pagoda and scenic cliffside walking trail at Eo Gio"
    ],
    tips: [
      "Bring sunscreen, swimwear, wide-brim hats, towels, and a power bank",
      "Ky Co tour package runs 450,000 – 490,000 VND / person including speedboat, snorkeling, and seafood lunch",
      "Eo Gio entrance is 22,000 VND / person; Ngoc Hoa Pagoda is free entry"
    ]
  },

  // === 2: Quy Nhon Beach & Crescent Bay (Central Square) ===
  {
    id: 2,
    name: "Quy Nhon Beach & Crescent Bay (Central Square)",
    category: "thien-nhien",
    location: "Downtown Quy Nhon (near Odin Hotel)",
    visitTime: "Afternoon Day 1 (16:00), Day 2 (16:30) • Morning Day 4 (08:45 – 09:40)",
    duration: "Visited across multiple days of 4D3N",
    tags: ["Crescent Bay", "Nguyen Tat Thanh Square", "Farewell Photos", "Sunset Walk"],
    description: "Curving right along the heart of downtown and just minutes on foot from Odin Hotel, the crescent-shaped beach and spacious Nguyen Tat Thanh Square serve as our group's central gathering hub: afternoon strolls on Day 1 (16:00 - 17:50), sunset leisure on Day 2 (16:30 - 17:30), and memorable farewell class photos on the morning of Day 4 (08:45 - 09:40).",
    itinerary: [
      {
        day: 1,
        title: "16:00 - 17:50 Day 1: Afternoon Arrival & Seaside Walk",
        detail: "After an afternoon rest, our group walks along the downtown beach, enjoying the refreshing ocean breeze and taking photos at Nguyen Tat Thanh Square."
      },
      {
        day: 2,
        title: "16:30 - 17:30 Day 2: Free Exploration & Sunset Cafes",
        detail: "Free time for everyone: stroll along the promenade, catch the golden sunset, relax at oceanview cafes, or shop for local specialties."
      },
      {
        day: 4,
        title: "08:45 - 09:40 Day 4: Farewell Photo Session",
        detail: "The entire class gathers at Nguyen Tat Thanh Square (08:45 - 09:00) and moves down to Crescent Bay Beach (09:20 - 09:40) for final group photos before checking out."
      }
    ],
    highlights: [
      "Scheduled visits: Afternoon Day 1 (16:00), afternoon Day 2 (16:30), morning Day 4 (08:45 - 09:40)",
      "Gentle sloping sand and calm waves right in the city center",
      "Spacious square with prominent monument and seaside open spaces",
      "Convenient walking distance just minutes from Odin Hotel"
    ],
    tips: [
      "Wear your class uniform or best outfits on Day 4 morning for great group photos",
      "Wear comfortable sandals or walking shoes along the seaside promenade",
      "Stop by Surf Bar or nearby beach cafes for cold drinks and sea breeze"
    ]
  },

  // === 3: Xuan Dieu Street, Night Market & Squid Fishing ===
  {
    id: 3,
    name: "Xuan Dieu Seafood Street, Night Market & Squid Fishing",
    category: "van-hoa",
    location: "Xuan Dieu & An Duong Vuong St, Quy Nhon",
    visitTime: "Night 1 (18:00 – 21:50) • Night 2 (18:00 – 19:00) • Night 3 (21:30 – 22:20)",
    duration: "Evenings of Days 1, 2, and 3",
    tags: ["Loc Bien Seafood", "Night Market", "Night Squid Fishing", "Horse Carriage"],
    description: "The coastal Xuan Dieu – An Duong Vuong boulevard is the vibrant heartbeat of Quy Nhon nightlife. On Night 1, we enjoy fresh seafood at Loc Bien (48 Xuan Dieu) and explore the bustling Night Market. On Night 2, try the thrilling night squid fishing experience in a coastal village. On Night 3, stroll the seaside avenue, enjoy oceanview coffee, and ride vintage horse carriages.",
    itinerary: [
      {
        day: 1,
        title: "18:00 - 21:50 Night 1: Seafood at Loc Bien & Night Market Exploration",
        detail: "Seafood dinner at Loc Bien (48 Xuan Dieu, 150k – 500k VND/person depending on choice), followed by a walk through Quy Nhon Night Market for souvenirs and street snacks."
      },
      {
        day: 2,
        title: "18:00 - 19:00 Night 2: Night Squid Fishing in Coastal Village (Optional)",
        detail: "Board a local canoe out to sea to try night squid fishing with fishing rods and bait alongside local fishermen (self-funded in small groups)."
      },
      {
        day: 3,
        title: "21:30 - 22:20 Night 3: Oceanview Cafe & Horse Carriage Ride (Optional)",
        detail: "Stroll along breezy Xuan Dieu – An Duong Vuong boulevard, relax with seaside drinks, or take a nostalgic horse-drawn carriage ride under the night lights."
      }
    ],
    highlights: [
      "Scheduled visits: Evenings of Days 1, 2, and 3",
      "Fresh live seafood cooked to order at Loc Bien 48 Xuan Dieu",
      "Exciting night squid fishing adventure in a seaside village",
      "Lively Night Market atmosphere and scenic horse carriage ride along the coastline"
    ],
    tips: [
      "Squid fishing and horse carriage rides are self-funded optional activities best enjoyed in groups",
      "Keep smaller cash notes ready for easy shopping and snacks at the Night Market",
      "Always return to the hotel by curfew for group safety and well-deserved rest"
    ]
  },

  // === 4: ExploraScience Quy Nhon (Space & Science Center) ===
  {
    id: 4,
    name: "ExploraScience Quy Nhon (Space & Science Discovery Center)",
    category: "van-hoa",
    location: "Science Avenue, Ghenh Rang, Quy Nhon City",
    visitTime: "08:00 – 10:45 • Morning of Day 3",
    duration: "2 hours 45 minutes (Morning of Day 3)",
    tags: ["08:00 Day 3", "Space Science", "Full-Dome Planetarium", "Tesla Coil", "Interactive STEM"],
    description: "ExploraScience Quy Nhon is Vietnam's first public science discovery center and the second in Southeast Asia. Scheduled as our primary destination on Day 3 morning (08:00 – 10:45), the futuristic center features an 80-seat full-dome 360° planetarium projecting cosmic films, an electrifying Tesla coil high-voltage lightning demonstration, and 7 interactive science galleries (Mars, Venus, Solar System, robotics, and physics).",
    itinerary: [
      {
        day: 3,
        title: "08:00 - 10:45 Day 3: Cosmic Exploration & Interactive Science",
        detail: "Complete exploration of ExploraScience: 360-degree full-dome space projection film, observation of high-voltage Tesla electrical arcs, and hands-on experiments across multiple interactive galleries."
      }
    ],
    highlights: [
      "Official headline visit: 08:00 – 10:45 morning of Day 3",
      "Immersive 360-degree full-dome planetarium universe projection",
      "One-of-a-kind live Tesla coil electrical lightning show",
      "Hundreds of interactive physics and space exploration exhibits",
      "World-class futuristic architecture and fantastic photo spots"
    ],
    tips: [
      "Be on time as the planetarium doors lock promptly when showtimes begin",
      "Follow safety guides closely near high-voltage demonstrations",
      "100% indoor and air-conditioned, completely immune to any outdoor weather"
    ]
  },

  // === 5: Odin Hotel Quy Nhon ===
  {
    id: 5,
    name: "Odin Hotel Quy Nhon (4-Star Accommodation)",
    category: "thien-nhien",
    location: "06 Tran Phu, Downtown Quy Nhon City",
    visitTime: "Base hotel across 4D3N (Check-in 14:05 Day 1 - Check-out 10:00 - 11:30 Day 4)",
    duration: "Full 4 Days 3 Nights accommodation",
    tags: ["Group Base", "4-Star Comfort", "Near the Beach", "Buffet Breakfast"],
    description: "Odin Hotel Quy Nhon serves as our official 4-star base accommodation throughout the 4-day trip. Situated centrally on Tran Phu street, the hotel is within walking distance of the beach and central square, offering modern air-conditioned rooms, comfortable bedding, a rooftop swimming pool, and daily breakfast (complimentary for guests).",
    itinerary: [
      {
        day: 1,
        title: "11:50 - 15:30 Day 1: Arrival, Luggage Storage, Lunch & Rest",
        detail: "11:50 arrive at hotel, store luggage, and rest. 12:35 lunch at Ngoc Lien / Nem Loi. 14:05 check in, take a refreshing shower, and nap to recharge."
      },
      {
        day: 2,
        title: "06:30 - 07:30 Day 2: Free Hotel Breakfast & Excursion Prep",
        detail: "Complimentary breakfast at hotel restaurant before departing for Ky Co - Eo Gio; return around 16:00 to shower and refresh."
      },
      {
        day: 3,
        title: "Midday Recharge & Evening Prep on Day 3",
        detail: "Return to hotel for midday rest (12:15 - 13:15) after Com Mau lunch, and shower/dress up (18:10 - 18:45) before dinner at HQ Restaurant."
      },
      {
        day: 4,
        title: "10:00 - 11:30 Day 4: Pack & Check-out before 12:00",
        detail: "Pack belongings, hand over room keys before 12:00, then head to farewell lunch at Com Mau before 13:30 departure."
      }
    ],
    highlights: [
      "Official 4-star lodging and central coordination base for Thap Tu Tour",
      "Spacious rooms, plush bedding, and strong Wi-Fi",
      "Prime downtown location within minutes of the beach and night markets",
      "Daily complimentary breakfast from 06:30 to 07:30"
    ],
    tips: [
      "Keep keycards safe; report immediately to class coordinators if misplaced",
      "Check under pillows and phone chargers before checking out on Day 4 morning",
      "Hotel reception provides umbrella assistance if raining"
    ]
  },

  // === 6: Quy Nhon Culinary Highlights ===
  {
    id: 6,
    name: "Quy Nhon Culinary Highlights: Ngoc Lien, Com Mau, Dien Hong Pancakes & HQ",
    category: "van-hoa",
    location: "Downtown Quy Nhon City",
    visitTime: "Lunch Day 1 (12:35), Dinner Day 2 (19:30), Lunch Days 3 & 4 (11:00 - 13:00), Dinner Day 3 (19:45)",
    duration: "Signature meals across the 4D3N itinerary",
    tags: ["Ngoc Lien Fish Soup 65k", "Nem Cha Loi", "Dien Hong Shrimp Pancakes", "Com Mau", "HQ Restaurant"],
    description: "Cuisine is a memorable pillar of our journey: from Ngoc Lien fish cake soup (65,000 VND / person) or Nem Cha Loi for Day 1 lunch, crispy jumping-shrimp pancakes at Dien Hong (25k-35k VND/each) on Day 2 dinner, to nostalgic 1980s subsidy-era family meals at Com Mau for lunches on Days 3 and 4, and an inviting dinner at HQ Restaurant on Night 3.",
    itinerary: [
      {
        day: 1,
        title: "12:35 - 14:00 Day 1: Ngoc Lien Fish Soup (65k) or Nem Cha Loi",
        detail: "Welcome lunch in Quy Nhon: bowls of savory fish cake noodle soup or flavorful grilled pork rolls with fresh herbs."
      },
      {
        day: 2,
        title: "19:30 - 20:50 Day 2: Dien Hong Crispy Jumping-Shrimp Pancakes",
        detail: "Dinner savoring golden crispy pancakes with sweet fresh shrimp and tender bean sprouts (25,000 – 35,000 VND each, ~4 pancakes per person)."
      },
      {
        day: 3,
        title: "11:00 - 12:00 Day 3: Traditional Meal at Com Mau Quy Nhon",
        detail: "Claypot braised fish, crab spinach soup, and boiled pork with pickled eggplant in a 1980s retro dining setting."
      },
      {
        day: 3,
        title: "19:45 - 21:00 Day 3: Cozy Group Dinner at HQ Restaurant",
        detail: "Shared dinner at HQ Restaurant with a rich and varied menu in a spacious dining atmosphere."
      },
      {
        day: 4,
        title: "12:00 - 13:00 Day 4: Farewell Lunch at Com Mau Restaurant",
        detail: "Final shared lunch at Com Mau before boarding the coach back to Ho Chi Minh City at 13:30."
      }
    ],
    highlights: [
      "Taste the full spectrum of authentic Binh Dinh regional food",
      "Clear savory fish cake noodle broth at Ngoc Lien (65k VND) and fragrant grilled nem",
      "Signature crispy jumping-shrimp pancakes at popular Dien Hong",
      "Authentic claypot rice in 1980s retro atmosphere at Com Mau",
      "Hearty group dinner at HQ Restaurant"
    ],
    tips: [
      "Com Mau gets busy at peak lunch hours; our group has reserved seating",
      "Eat Dien Hong pancakes fresh and hot, wrapped in rice paper with herbs and chili garlic dip"
    ]
  },

  // === 7: Ghenh Rang Tien Sa ===
  {
    id: 7,
    name: "Ghenh Rang Tien Sa - Han Mac Tu Hill & Tien Sa Beach",
    category: "thien-nhien",
    location: "Ghenh Rang Ward, Quy Nhon City (~3 km south of center)",
    visitTime: "15:00 – 18:00 • Afternoon of Day 3",
    duration: "3 hours (Afternoon of Day 3)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["15:00 Day 3", "Poet Han Mac Tu", "Poet Hill", "Queen's Egg Stone Beach", "Stone Church", "Tien Sa Beach"],
    description: "Ghenh Rang Tien Sa is a celebrated national scenic landmark along Quy Nhon bay. The site is intimately tied to poet Han Mac Tu with his hillside memorial nestled amidst pine trees, the historic stone church, the extraordinary Queen's Beach covered in smooth egg-shaped pebbles, and the emerald waters of Tien Sa Beach sheltered by coastal cliffs.",
    itinerary: [
      {
        day: 3,
        title: "15:00 - 16:30 Day 3: Han Mac Tu Memorial, Poet Hill & Stone Church",
        detail: "Ascend Poet Hill to poet Han Mac Tu's resting place, listen to poetry readings, admire Dzu Kha woodburning calligraphy, visit the stone church, and view Queen's Egg Stone Beach."
      },
      {
        day: 3,
        title: "16:30 - 18:00 Day 3: Swimming & Beach Fun at Tien Sa Beach",
        detail: "Enjoy free time swimming in the clear bay, beach games, and panoramic views of the curved Quy Nhon coastline from Tien Sa Beach (self-funded)."
      }
    ],
    highlights: [
      "Official visit: 15:00 – 18:00 afternoon of Day 3",
      "Visit poet Han Mac Tu's memorial and explore Dzu Kha's fire-calligraphy studio",
      "Unique Queen's Beach with thousands of smooth, giant egg-shaped pebbles",
      "Pristine turquoise water and yellow sand at Tien Sa Beach",
      "Atmospheric moss-covered stone church on the hillside"
    ],
    tips: [
      "Queen's Beach pebbles can be slippery; step carefully when taking photos",
      "Bring swimwear and a towel if you wish to swim at Tien Sa Beach",
      "Browse pine-wood calligraphy souvenirs engraved with Han Mac Tu's poetry"
    ]
  },

  // === 8: Binh Dinh General Museum ===
  {
    id: 8,
    name: "Binh Dinh General Museum (Tay Son History & Cham Heritage)",
    category: "van-hoa",
    location: "26 Nguyen Hue St, Quy Nhon City",
    visitTime: "13:30 – 14:30 • Afternoon of Day 3",
    duration: "1 hour (Afternoon of Day 3)",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    tags: ["13:30 Day 3", "Tay Son Rebellion", "Champa Art", "Sa Huynh Culture", "National Treasures"],
    description: "Binh Dinh General Museum houses over 10,000 precious historical and cultural artifacts. Visiting at 13:30 on Day 3, our class explores ancient 11th-15th century Cham sandstone sculptures, prehistoric Sa Huỳnh burial jars, and inspiring exhibits recounting the historic Tay Son peasant uprising under Emperor Quang Trung.",
    itinerary: [
      {
        day: 3,
        title: "13:30 - 14:30 Day 3: Discovering Binh Dinh's Heritage",
        detail: "Explore galleries of ancient Cham sandstone carvings, pottery, and historic weapons and uniforms from the legendary Tay Son era."
      }
    ],
    highlights: [
      "Official visit: 13:30 – 14:30 on Day 3",
      "Unmatched collection of ancient Champa sandstone sculptures",
      "Exhibits highlighting the triumphs of Emperor Quang Trung and the Tay Son uprising",
      "Sa Huynh archaeological burial jars and prehistoric ceramics",
      "Cool, tranquil indoor environment rich in educational and cultural value"
    ],
    tips: [
      "Keep voices down and refrain from touching ancient sandstone artifacts",
      "Photography is permitted (please disable camera flash inside galleries)",
      "Located very close to Odin Hotel on Nguyen Hue street for quick transit"
    ]
  }
];

/* Dữ liệu Lịch trình 4 Ngày 3 Đêm bằng Tiếng Anh */
const TIMELINE_DATA_EN = [
  {
    day: 1,
    title: "Day 1: Departure, Arrival, Beach Walk & Seafood Dinner",
    dateSummary: "Travel by sleeper coach • Check-in Odin Hotel • Quy Nhon beach walk • Loc Bien seafood • Night Market",
    events: [
      {
        time: "02:00",
        icon: "🚌",
        title: "Board Sleeper Coach to Quy Nhon",
        desc: "Assemble at the meeting point, settle into sleeper coach berths, and begin the overnight highway trip to coastal Quy Nhon.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "07:00",
        icon: "🥣",
        title: "Breakfast & Rest Stop",
        desc: "Rest stop for morning breakfast (approx. 50,000 VND / person: pho, noodle soup, or broken rice), freshening up, and stretching after the night drive.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "07:00 – 12:00",
        icon: "🛣️",
        title: "Scenic Coastal Drive to Quy Nhon",
        desc: "Final leg of the coach journey into Quy Nhon, watching shifting coastal and countryside scenery through the windows.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "11:50 – 12:30",
        icon: "🏨",
        title: "Arrival at Odin Hotel Quy Nhon",
        desc: "Arrive at Odin Hotel, drop off luggage at reception, and take a light rest in the lobby after the road trip.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "12:35 – 14:00",
        icon: "🍜",
        title: "Lunch with Local Specialties (Ngoc Lien / Nem Cha Loi)",
        desc: "Enjoy authentic local food: famous Ngoc Lien fish cake noodle soup (65,000 VND / person) with clear broth or grilled pork rolls at Nem Cha Loi.",
        highlightPlaceId: 6,
        placeName: "Ngoc Lien Fish Cake Noodles / Nem Cha Loi"
      },
      {
        time: "14:05 – 15:30",
        icon: "🛏️",
        title: "Check-in Rooms, Shower & Afternoon Nap",
        desc: "Check into rooms at Odin Hotel, unpack, take a refreshing shower, and sleep to recharge for afternoon activities.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "16:00 – 17:50",
        icon: "🌊",
        title: "Afternoon Check-in: Quy Nhon Beach Walk & Central Square",
        desc: "Class walk along the curved crescent beach, taking in the refreshing sea breeze and group photos at Nguyen Tat Thanh Square near the hotel.",
        highlightPlaceId: 2,
        placeName: "Quy Nhon Beach & Nguyen Tat Thanh Square"
      },
      {
        time: "18:00 – 20:00",
        icon: "🦀",
        title: "Fresh Seafood Dinner at Loc Bien",
        desc: "Seafood dinner at Loc Bien (48 Xuan Dieu, approx. 150,000 – 500,000 VND / person depending on menu) with fresh catches right by the sea.",
        highlightPlaceId: 3,
        placeName: "Loc Bien Seafood (48 Xuan Dieu)"
      },
      {
        time: "20:00 – 21:50",
        icon: "🏮",
        title: "Evening Walk at Quy Nhon Night Market (Free time)",
        desc: "Stroll through the bustling Night Market to browse souvenirs, handicrafts, and sample popular local street snacks.",
        highlightPlaceId: 3,
        placeName: "Quy Nhon Night Market"
      },
      {
        time: "22:00",
        icon: "🌙",
        title: "Return to Hotel to Rest",
        desc: "Regroup at Odin Hotel to rest and prepare outfits and swimwear for tomorrow's Ky Co – Eo Gio excursion.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      }
    ],
    weatherPlan: {
      condition: "In case of evening rain on Day 1:",
      solutions: [
        {
          title: "Plan A",
          detail: "Relax comfortably in your hotel rooms at Odin or enjoy dinner right at the hotel's warm restaurant."
        },
        {
          title: "Plan B",
          detail: "Take short taxi rides with umbrellas to nearby restaurants: Gia Vy 2 (~1km), 4Q Restaurant (~1.1km), Pho Danh, or Com Thi."
        }
      ]
    }
  },
  {
    day: 2,
    title: "Day 2: Ky Co Speedboat, Eo Gio, Ngoc Hoa Pagoda & Dien Hong Pancakes",
    dateSummary: "Speedboat to Ky Co, coral snorkeling, seafood lunch, Ngoc Hoa Pagoda, Eo Gio cliffs, night squid fishing & crispy shrimp pancakes",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "🍳",
        title: "Breakfast at Odin Hotel or Local Specialties",
        desc: "Enjoy breakfast at Odin Hotel (recommended as complimentary for guests) or try hot fish noodles / banh hoi. Prepare hats, sunscreen, swimwear, and power banks.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "07:40 – 08:15",
        icon: "🚗",
        title: "Drive to Nhon Ly Peninsula via Thi Nai Sea Bridge",
        desc: "Drive from Odin Hotel across Thi Nai maritime bridge to Nhon Ly, taking in scenic coastal views along the way.",
        highlightPlaceId: 1,
        placeName: "Nhon Ly Coastal Scenic Route"
      },
      {
        time: "08:15 – 10:15",
        icon: "🚤",
        title: "Speedboat to Ky Co Island (Book Tour Package at Nhon Ly)",
        desc: "Book Ky Co tour package at Nhon Ly (450,000 – 490,000 VND / person): includes round-trip speedboat, beach entry, coral snorkeling at Bai Dua with goggles and life vests, freshwater shower, and village seafood feast.",
        highlightPlaceId: 1,
        placeName: "Ky Co Speedboat & Bai Dua Snorkeling"
      },
      {
        time: "10:15 – 12:20",
        icon: "🏖️",
        title: "Swimming & Photo Session at Ky Co Beach",
        desc: "Swim in turquoise waters, relax on the powdery white sand, and take unforgettable photos across 'Vietnam's Maldives'.",
        highlightPlaceId: 1,
        placeName: "Ky Co Beach (Nhon Ly)"
      },
      {
        time: "12:40 – 13:50",
        icon: "🦞",
        title: "Fresh Seafood Lunch in Nhon Ly Village",
        desc: "Enjoy the tour's 7-8 dish village seafood feast: grilled/steamed prawns, squid, local fish, seafood hotpot, and clams.",
        highlightPlaceId: 1,
        placeName: "Nhon Ly Village Seafood Restaurant"
      },
      {
        time: "14:00 – 15:00",
        icon: "🛕",
        title: "Visit Ngoc Hoa Pagoda",
        desc: "Visit this tranquil pilgrimage site beside Eo Gio, celebrated for Vietnam's tallest twin Guanyin Buddha statue facing the ocean (Free admission).",
        highlightPlaceId: 1,
        placeName: "Ngoc Hoa Pagoda (Eo Gio)"
      },
      {
        time: "15:00 – 16:00",
        icon: "📸",
        title: "Explore Eo Gio Cliffside Coastal Trail",
        desc: "Walk along the breathtaking coastal trail hugging dramatic sea cliffs, take photos on the wooden bridge, and capture class group photos (Ticket: 22,000 VND / person).",
        highlightPlaceId: 1,
        placeName: "Eo Gio (Nhon Ly)"
      },
      {
        time: "16:00 – 16:30",
        icon: "🏨",
        title: "Return to Odin Hotel to Shower & Relax",
        desc: "Bus transfers group back to Odin Hotel to wash off saltwater, relax, and recharge after a day on the island.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "16:30 – 17:30",
        icon: "☕",
        title: "Free Time in Downtown Quy Nhon (Optional)",
        desc: "Free time to stroll along the beach, take photos at Nguyen Tat Thanh Square, visit seaside cafes, or buy local specialties.",
        highlightPlaceId: 2,
        placeName: "Nguyen Tat Thanh Square & Beach"
      },
      {
        time: "18:00 – 19:00",
        icon: "🎣",
        title: "Night Squid Fishing in Seaside Village (Optional)",
        desc: "Head out by boat with local fishermen to try your hand at night squid fishing with rods and bait (self-funded in small groups).",
        highlightPlaceId: 3,
        placeName: "Night Squid Fishing Experience"
      },
      {
        time: "19:30 – 20:50",
        icon: "🥞",
        title: "Dinner at Dien Hong Crispy Jumping-Shrimp Pancakes",
        desc: "Dinner savoring famous Quy Nhon crispy pancakes with fresh sweet shrimp and fresh herb wraps (25,000 – 35,000 VND / each, ~4 per person).",
        highlightPlaceId: 6,
        placeName: "Dien Hong Jumping-Shrimp Pancakes"
      },
      {
        time: "21:20",
        icon: "✨",
        title: "Return to Odin Hotel to Rest",
        desc: "Return to hotel rooms to sleep and recharge for Day 3's science discovery center and Ghenh Rang Tiên Sa excursion.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      }
    ],
    weatherPlan: {
      condition: "If rain or rough seas prevent speedboats on Day 2:",
      solutions: [
        {
          title: "Road Access Plan",
          detail: "Take the road route into Ky Co or focus on exploring Ngoc Hoa Pagoda and Eo Gio cliffside trail safely on foot."
        },
        {
          title: "Covered Dining",
          detail: "Enjoy the seafood feast inside spacious, sturdy covered dining pavilions in Nhon Ly village."
        },
        {
          title: "Evening Alternative",
          detail: "If seas are too rough for squid fishing, group has dinner early at Dien Hong pancakes and enjoys a cozy seaside cafe."
        }
      ]
    }
  },
  {
    day: 3,
    title: "Day 3: ExploraScience, Com Mau, Binh Dinh Museum & Ghenh Rang",
    dateSummary: "Cosmic discovery at ExploraScience, retro lunch at Com Mau, Tay Son history museum, Ghenh Rang Tiên Sa & horse carriage",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "🥣",
        title: "Breakfast at Odin Hotel or Local Eateries",
        desc: "Breakfast buffet at Odin Hotel or try local morning specialties nearby to fuel up for an exciting science and cultural day.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "08:00 – 10:45",
        icon: "🚀",
        title: "Visit ExploraScience Quy Nhon (Space & Science Center)",
        desc: "Explore Vietnam's premier science discovery center: full-dome 360° planetarium cosmic film, high-voltage Tesla coil lightning show, and 7 interactive science galleries.",
        highlightPlaceId: 4,
        placeName: "ExploraScience Quy Nhon"
      },
      {
        time: "11:00 – 12:00",
        icon: "🍲",
        title: "Nostalgic Lunch at Com Mau Quy Nhon",
        desc: "Experience an authentic Vietnamese meal in a 1980s subsidy-era retro restaurant with claypot fish, hot sour soup, and crispy rice.",
        highlightPlaceId: 6,
        placeName: "Com Mau Quy Nhon"
      },
      {
        time: "12:15 – 13:15",
        icon: "🛏️",
        title: "Midday Rest at Odin Hotel",
        desc: "Rest and recharge in your air-conditioned rooms before the afternoon museum and cultural landmarks.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "13:30 – 14:30",
        icon: "🏛️",
        title: "Visit Binh Dinh General Museum",
        desc: "Discover Sa Huynh prehistoric pottery, 11th-15th century Cham sandstone sculptures, and the heroic Tay Son uprising under Emperor Quang Trung.",
        highlightPlaceId: 8,
        placeName: "Binh Dinh General Museum"
      },
      {
        time: "15:00 – 18:00",
        icon: "🌄",
        title: "Ghenh Rang Tien Sa Exploration (Self-funded)",
        desc: "Scenic hillside exploration: Visit poet Han Mac Tu's memorial + Poet Hill + Stone Church + swim at Tien Sa Beach, admire Queen's Beach and enjoy seaside activities.",
        highlightPlaceId: 7,
        placeName: "Ghenh Rang Tien Sa & Poet Hill"
      },
      {
        time: "18:10 – 18:45",
        icon: "🏨",
        title: "Return to Hotel to Shower & Dress Up",
        desc: "Return to Odin Hotel to shower and change into nice outfits for group dinner and evening promenade.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "19:45 – 21:00",
        icon: "🍽️",
        title: "Dinner at HQ Restaurant",
        desc: "Warm group dinner at HQ Restaurant with a rich variety of local and homestyle dishes in a welcoming space.",
        highlightPlaceId: 6,
        placeName: "HQ Restaurant Quy Nhon"
      },
      {
        time: "21:30 – 22:20",
        icon: "🎠",
        title: "Seaside Stroll, Oceanview Cafe & Horse Carriage Ride (Optional)",
        desc: "Enjoy the night sea breeze along Xuan Dieu – An Duong Vuong street: relax at an oceanfront cafe or take a horse carriage ride under the streetlights (self-funded).",
        highlightPlaceId: 3,
        placeName: "Xuan Dieu – An Duong Vuong Promenade"
      },
      {
        time: "22:50",
        icon: "🌙",
        title: "Return to Hotel to Rest & Pack",
        desc: "Return to Odin Hotel to rest and pack luggage for tomorrow's final day and return journey.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      }
    ],
    weatherPlan: {
      condition: "If rain occurs on Day 3:",
      solutions: [
        {
          title: "ExploraScience & Museum 100% Indoor",
          detail: "The morning program at ExploraScience and midday visit to Binh Dinh Museum are completely indoors and climate-controlled, completely unaffected by rain."
        },
        {
          title: "Afternoon Plan",
          detail: "If it rains heavily at Ghenh Rang, swap swimming for indoor fire-calligraphy studio visits or souvenir specialty shopping at 'Qua Qui Nhon' or 'Huong Bien'."
        }
      ]
    }
  },
  {
    day: 4,
    title: "Day 4: Farewell Photos, Hotel Check-out, Com Mau Lunch & Return to HCMC",
    dateSummary: "Farewell photos at Central Square & Crescent Beach, hotel check-out before 12:00, Com Mau lunch & 13:30 departure to HCMC",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "☕",
        title: "Final Breakfast at Odin Hotel or Nearby Eateries",
        desc: "Enjoy our final breakfast at Odin Hotel or local breakfast spots around the neighborhood.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "08:45 – 09:00",
        icon: "📸",
        title: "Group Photos at Central Nguyen Tat Thanh Square",
        desc: "The entire class gathers at spacious Nguyen Tat Thanh Square for memorable class keepsake photos.",
        highlightPlaceId: 2,
        placeName: "Nguyen Tat Thanh Central Square"
      },
      {
        time: "09:20 – 09:40",
        icon: "🌊",
        title: "Farewell Photos at Crescent Bay Beach",
        desc: "Take final photos by the waves at Crescent Bay Beach, saying goodbye to the sunny coast.",
        highlightPlaceId: 2,
        placeName: "Crescent Bay Beach"
      },
      {
        time: "10:00 – 11:30",
        icon: "🧳",
        title: "Return to Hotel, Pack & Check-out before 12:00",
        desc: "Return to rooms at Odin Hotel, double check personal belongings, pack suitcases, and complete check-out before 12:00.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "12:00 – 13:00",
        icon: "🍲",
        title: "Farewell Lunch at Com Mau Restaurant",
        desc: "Shared class lunch at Com Mau Restaurant, enjoying hot claypot rice and homestyle comfort dishes before departing.",
        highlightPlaceId: 6,
        placeName: "Com Mau Quy Nhon"
      },
      {
        time: "13:30",
        icon: "🚌",
        title: "Depart Quy Nhon for HCMC — Concluding our 4D3N Journey",
        desc: "Board the coach and begin the return journey back to Ho Chi Minh City. Concluding an unforgettable, joyful 4D3N Quy Nhon tour with Class 10A4!",
        highlightPlaceId: null,
        placeName: null
      }
    ],
    weatherPlan: {
      condition: "If rain occurs on Day 4 morning:",
      solutions: [
        {
          title: "Indoor Group Photos",
          detail: "Take class group photos inside the elegant grand lobby or the rooftop pool area of Odin Hotel."
        },
        {
          title: "Cafe & On-time Lunch",
          detail: "Enjoy coffee in the hotel lounge or nearby cafes before gathering on schedule for lunch at Com Mau and boarding the coach at 13:30."
        }
      ]
    }
  }
];

/* ===================================================
   Helper Functions for Language Management
   =================================================== */

/**
 * Lấy ngôn ngữ hiện tại ('vi' hoặc 'en')
 */
function getCurrentLang() {
  const saved = localStorage.getItem('thap_tu_lang');
  return (saved === 'en' || saved === 'vi') ? saved : 'vi';
}

/**
 * Lấy chuỗi dịch theo key
 */
function t(key) {
  const lang = getCurrentLang();
  if (I18N[lang] && I18N[lang][key] !== undefined) {
    return I18N[lang][key];
  }
  return I18N.vi[key] || key;
}

/**
 * Lấy danh sách tour theo ngôn ngữ hiện tại
 */
function getLocalizedTours() {
  const lang = getCurrentLang();
  if (lang === 'en') {
    return TOURS.map(t => {
      const en = TOURS_EN.find(item => item.id === t.id);
      if (!en) return t;
      return {
        ...t,
        name: en.name,
        location: en.location,
        visitTime: en.visitTime,
        duration: en.duration,
        tags: en.tags,
        description: en.description,
        itinerary: en.itinerary,
        highlights: en.highlights,
        tips: en.tips
      };
    });
  }
  return TOURS;
}

/**
 * Lấy danh mục theo ngôn ngữ hiện tại
 */
function getLocalizedCategories() {
  const lang = getCurrentLang();
  return lang === 'en' ? CATEGORIES_EN : CATEGORIES;
}

/**
 * Lấy dữ liệu lịch trình theo ngôn ngữ hiện tại
 */
function getLocalizedTimeline() {
  const lang = getCurrentLang();
  return lang === 'en' ? TIMELINE_DATA_EN : TIMELINE_DATA;
}

/**
 * Chuyển đổi ngôn ngữ và cập nhật toàn bộ giao diện
 */
function switchLanguage(targetLang) {
  if (targetLang !== 'vi' && targetLang !== 'en') return;
  localStorage.setItem('thap_tu_lang', targetLang);
  document.documentElement.lang = targetLang;

  // Cập nhật trạng thái active trên các nút đổi ngôn ngữ
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === targetLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Cập nhật tất cả phần tử có thuộc tính [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = t(key);
    if (translation) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.setAttribute('placeholder', translation);
      } else {
        el.innerHTML = translation;
      }
    }
  });

  // Cập nhật tab lịch trình, marquee ticker và theme toggle UI
  if (typeof updateTimelineTabs === 'function') {
    updateTimelineTabs(targetLang);
  }
  if (typeof updateThemeToggleUI === 'function') {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeToggleUI(currentTheme, targetLang);
  }
  if (typeof updateMarqueeTicker === 'function') {
    updateMarqueeTicker(targetLang);
  }

  // Re-render các phần động trên trang chủ nếu đang ở trang chủ
  if (typeof renderCategories === 'function' && document.getElementById('categoryGrid')) {
    renderCategories();
  }
  if (typeof applyFilters === 'function' && document.getElementById('tourGrid')) {
    applyFilters();
  }
  if (typeof renderTimeline === 'function' && document.getElementById('timelineContainer')) {
    const activeTab = document.querySelector('.timeline-tab-btn.active');
    const day = activeTab ? activeTab.dataset.day : 1;
    renderTimeline(day);
  }

  // Re-render trang chi tiết nếu đang ở trang chi tiết
  if (typeof initTourDetailPage === 'function' && document.getElementById('tourDetailMain')) {
    initTourDetailPage();
  }

  // Kích hoạt scroll reveal cho các phần tử mới render
  if (typeof triggerScrollReveal === 'function') {
    setTimeout(triggerScrollReveal, 40);
  }
}
