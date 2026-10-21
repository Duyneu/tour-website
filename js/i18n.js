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

    // Hero section
    hero_badge: "🎓 Dự án học sinh Lớp 10A4 • THPT Lương Thế Vinh TP.HCM",
    hero_price_badge: "🏷️ Giá tour trọn gói 4N3Đ: <strong>5.920.000đ</strong> / bạn",
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
    cost_heading: "Giá Cả Tour Trọn Gói: <strong>5.920.000đ</strong> <small>/ thành viên</small>",
    cost_desc: "Mức kinh phí thực tế và minh bạch cho chuyến đi 4 ngày 3 đêm của học sinh lớp 10A4, đã bao trọn toàn bộ dịch vụ chất lượng:",
    cost_period: "4 Ngày 3 Đêm • Trọn gói",
    cost_feat_bus: "<strong>Xe giường nằm khứ hồi</strong> TP.HCM - Quy Nhơn & xe du lịch đời mới suốt hành trình",
    cost_feat_hotel: "<strong>Khách sạn 4 sao Odin Quy Nhơn</strong> (nghỉ ngơi 3 đêm, hồ bơi sân thượng, vị trí trung tâm)",
    cost_feat_food: "<strong>Toàn bộ các bữa ăn đặc sản</strong>: Hải sản Duy Mập, Bún cá Ngọc Liên, Cơm Mậu, Bánh xèo Gia Vỹ, Nem Chả Lợi...",
    cost_feat_tickets: "<strong>Trọn bộ vé tham quan & trải nghiệm</strong>: Kỳ Co - Eo Gió, Ghềnh Ráng Tiên Sa, Tháp Đôi, trung tâm vũ trụ ExploraScience, xe ngựa...",
    cost_feat_care: "<strong>Hỗ trợ chu đáo</strong>: dù che, áo mưa tiện lợi dự phòng thời tiết & bảo hiểm du lịch trọn tour",
    tab_day_prefix: "NGÀY",
    day_badge_prefix: "LỊCH TRÌNH NGÀY",
    timeline_place_link: "📍 <strong>Địa điểm trong chuyến đi:</strong>",
    places_section_badge: "📍 Điểm dừng chân",
    weather_plan_title: "Phương Án Dự Phòng Khi Thời Tiết Xấu / Trời Mưa",

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

    // Hero section
    hero_badge: "🎓 Student Project • Class 10A4, Luong The Vinh High School",
    hero_price_badge: "🏷️ All-inclusive 4D3N Cost: <strong>5,920,000 VND</strong> / student",
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
    cost_tag: "🏷️ ALL-INCLUSIVE 4D3N PACKAGE",
    cost_heading: "Total Tour Package Price: <strong>5,920,000 VND</strong> <small>/ student</small>",
    cost_desc: "Our real, transparent all-inclusive budget for Class 10A4's 4-day 3-night trip, covering all quality services:",
    cost_period: "4 Days 3 Nights • All-inclusive",
    cost_feat_bus: "<strong>Round-trip sleeper coach</strong> HCMC - Quy Nhon & dedicated tour bus throughout the journey",
    cost_feat_hotel: "<strong>4-Star Odin Hotel Quy Nhon</strong> (3-night stay, rooftop infinity pool, prime central location)",
    cost_feat_food: "<strong>All signature meals included</strong>: Duy Map Seafood, Ngoc Lien Fish Noodles, Com Mau, Gia Vy Crispy Pancakes, Nem Loi...",
    cost_feat_tickets: "<strong>All attraction tickets & activities</strong>: Ky Co - Eo Gio, Ghenh Rang Tien Sa, Twin Cham Towers, ExploraScience Space Center, horse carriage...",
    cost_feat_care: "<strong>Thoughtful amenities</strong>: umbrellas, raincoats for bad weather backup & comprehensive travel insurance",
    tab_day_prefix: "DAY",
    day_badge_prefix: "ITINERARY DAY",
    timeline_place_link: "📍 <strong>Stop on the itinerary:</strong>",
    places_section_badge: "📍 Featured Destinations",
    weather_plan_title: "Backup Plan for Rainy / Bad Weather",

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
  {
    id: 1,
    name: "Ky Co - Eo Gio (Nhon Ly)",
    category: "bien-dao",
    location: "Nhon Ly Commune, Quy Nhon City",
    visitTime: "08:15 – 13:30 • Day 2",
    duration: "Half day (Morning of Day 2)",
    tags: ["08:15 Day 2", "Vietnam's Maldives", "Scenic Cliffs", "Coral Snorkeling"],
    description: "Ky Co is hailed as the 'Maldives of Vietnam' for its crystal-clear turquoise waters and soft white sand sheltered by crescent-shaped mountain cliffs. Right next to it is Eo Gio, a coastal walking trail hugging the rugged rock face over the open sea. Our schedule visits Eo Gio in the morning, followed by swimming at Ky Co and fresh seafood at Nhon Ly.",
    itinerary: [
      {
        day: 2,
        title: "08:15 - 09:45: Coastal Walking Trail at Eo Gio",
        detail: "Walk along the scenic cliffside pathway, take group photos by the wooden walkway against dramatic sea cliffs, and enjoy the ocean breeze."
      },
      {
        day: 2,
        title: "10:15 - 13:30: Swimming at Ky Co & Seafood Lunch in Nhon Ly",
        detail: "Swim in the clear waters of Ky Co beach, then head to a local Nhon Ly restaurant (Hoang Thao Sea View / Phat Trien) for fresh prawns, squid, and cobia hotpot before returning to the hotel."
      }
    ],
    highlights: [
      "Scheduled visit: 08:15 – 13:30 on Day 2",
      "Spectacular cliffside walking path along the sea at Eo Gio",
      "Two-tone turquoise water and soft white sand at Ky Co",
      "Freshly prepared local seafood in Nhon Ly fishing village"
    ],
    tips: [
      "Bring sunscreen, swimwear, wide-brim hats, and a power bank",
      "Strong wind at Eo Gio — hold on tight to hats and loose personal items",
      "Our team provides backup umbrellas and raincoats if weather shifts"
    ]
  },
  {
    id: 2,
    name: "Quy Nhon Beach & Crescent Bay (Central Square)",
    category: "thien-nhien",
    location: "Downtown Quy Nhon (near Odin Hotel)",
    visitTime: "Afternoon Days 1 & 2 • Morning Day 3 (07:50 - 09:45) • Morning Day 4 (08:45 - 09:40)",
    duration: "Visited across all 4 days",
    tags: ["Crescent Bay", "Nguyen Tat Thanh Square", "Morning Swim", "Sunset Walk"],
    description: "Curving right along the heart of downtown and just minutes on foot from Odin Hotel, the crescent-shaped beach and spacious Nguyen Tat Thanh Square serve as our group's central gathering hub: breezy afternoon walks on Days 1 & 2, sunrise swimming on Day 3, and farewell group photos on the morning of Day 4.",
    itinerary: [
      {
        day: 1,
        title: "15:30 - 17:30 Day 1: Afternoon Arrival & Seaside Walk",
        detail: "After an afternoon rest, our group walks along the downtown beach, feeling the fresh sea breeze and taking photos at Nguyen Tat Thanh Square."
      },
      {
        day: 2,
        title: "15:30 - 17:30 Day 2: Free Exploration & Seaside Cafes",
        detail: "Free time for everyone: stroll along the promenade, catch the sunset, relax at oceanview cafes, or pick up local dried snacks."
      },
      {
        day: 3,
        title: "07:50 - 09:45 Day 3: Morning Swimming & Group Photos",
        detail: "Under gentle morning sun and calm waves, everyone enjoys a swim in the crescent bay and memorable photos in the clear sea."
      },
      {
        day: 4,
        title: "08:45 - 09:40 Day 4: Farewell Photo Session",
        detail: "The entire class gathers at the square and beach for final group photos before checking out and boarding the bus back to HCMC."
      }
    ],
    highlights: [
      "Scheduled visits: Afternoons of Days 1 & 2, morning Day 3 (swim), morning Day 4 (farewell photos)",
      "Gentle sloping sand and calm waves right in the city center",
      "Spacious square with prominent monument and seaside open spaces",
      "Convenient walking distance just minutes from Odin Hotel"
    ],
    tips: [
      "Early morning Day 3 (07:50 - 09:45) offers the calmest water and mildest sun for swimming",
      "Wear comfortable sandals or walking shoes along the seaside promenade",
      "Stop by Surf Bar or nearby beach cafes for cold drinks and sea breeze"
    ]
  },
  {
    id: 3,
    name: "Xuan Dieu Seafood Street & Night Market",
    category: "van-hoa",
    location: "Xuan Dieu & An Duong Vuong St, Quy Nhon",
    visitTime: "18:00 – 22:00 (Nights 1 & 2) • 20:20 – 22:00 (Night 3)",
    duration: "Evenings of Days 1, 2, and 3",
    tags: ["Xuan Dieu Seafood", "Night Market", "Horse Carriage", "Street Snacks"],
    description: "Quy Nhon's evening culinary hub stretches along oceanfront Xuan Dieu street, lined with celebrated seafood eateries like Duy Map (264 Xuan Dieu) and Loc Bien (48 Xuan Dieu). Further along is the colorful Quy Nhon Night Market and the scenic boulevard where visitors can experience horse-drawn carriage rides along the sea.",
    itinerary: [
      {
        day: 1,
        title: "18:00 - 22:00 Night 1: Seafood Feast at Loc Bien & Night Market",
        detail: "Group dinner at Loc Bien (48 Xuan Dieu) with grilled scallops, steamed prawns, and fish hotpot, followed by a walk through the bustling Night Market."
      },
      {
        day: 2,
        title: "18:00 - 20:00 Night 2: Premium Seafood at Duy Map",
        detail: "Dinner at Duy Map (264 Xuan Dieu) featuring live seafood tanks, oceanfront seating, and evening city views."
      },
      {
        day: 3,
        title: "20:20 - 22:00 Night 3: Horse Carriage Ride & Evening Snacks",
        detail: "Board horse carriages along Xuan Dieu and An Duong Vuong streets, followed by street snacks and desserts before heading back to the hotel."
      }
    ],
    highlights: [
      "Scheduled visits: Evenings of Days 1, 2, and 3",
      "Fresh live seafood cooked to order right by the beach",
      "Lively Night Market with souvenirs, handicrafts, and local sweets",
      "Horse-drawn carriage ride along the cool coastal road on Night 3"
    ],
    tips: [
      "Ask for prices by weight on live seafood before ordering for transparency",
      "Try local Quy Nhon desserts such as warm soybean milk and mixed sweet soup at the market",
      "Keep wallets and phones secure when browsing crowded night market stalls"
    ]
  },
  {
    id: 4,
    name: "Ghenh Rang Tien Sa & Han Mac Tu Memorial",
    category: "thien-nhien",
    location: "03 Han Mac Tu, Ghenh Rang Ward, Quy Nhon",
    visitTime: "08:15 – 10:15 • Day 3",
    duration: "2 hours (Morning of Day 3)",
    tags: ["Egg Stone Beach", "Poet Han Mac Tu", "Panoramic Sea View", "Heritage"],
    description: "Located just 3 km south of downtown, Ghenh Rang Tien Sa features a peaceful coastal hillside with Egg Stone Beach (Queen's Beach) covered in smooth rounded stones, the hillside resting place of celebrated poet Han Mac Tu, and a sweeping view across the entire crescent bay of Quy Nhon.",
    itinerary: [
      {
        day: 3,
        title: "08:15 - 09:15: Egg Stone Beach (Queen's Beach)",
        detail: "Walk down to the unique pebble beach once favored by Queen Nam Phuong, admire smooth sea-rounded stones, and take photos against coastal rock formations."
      },
      {
        day: 3,
        title: "09:15 - 10:15: Han Mac Tu Memorial Hill & Dzũ Kha Woodcarving",
        detail: "Walk up the tree-shaded stone path to poet Han Mac Tu's memorial, visit artisan Dzu Kha's calligraphy studio, and enjoy the panoramic view of the bay."
      }
    ],
    highlights: [
      "Scheduled visit: 08:15 – 10:15 on Day 3",
      "Distinctive beach covered with naturally polished egg-shaped pebbles",
      "Memorial of celebrated modern Vietnamese poet Han Mac Tu",
      "Breathtaking viewpoint overlooking Quy Nhon city and its crescent bay"
    ],
    tips: [
      "Wear flat walking shoes or sneakers; paths and coastal rocks can be uneven",
      "Please do not take pebbles from Queen's Beach to help preserve the natural site",
      "Listen to the live woodburning calligraphy demonstrations by artisan Dzu Kha"
    ]
  },
  {
    id: 5,
    name: "Odin Hotel Quy Nhon (4-Star Accommodation)",
    category: "van-hoa",
    location: "06 Tran Phu, Ward Le Hong Phong, Quy Nhon",
    visitTime: "Base hotel across all 4 days (Days 1 to 4)",
    duration: "4 Days 3 Nights accommodation",
    tags: ["4-Star Hotel", "Central Location", "Rooftop Pool", "Near the Beach"],
    description: "Odin Hotel Quy Nhon serves as our official base accommodation throughout the 4-day trip. Situated centrally on Tran Phu street, the hotel is within walking distance of the beach, night food streets, and central squares, featuring modern rooms, high-speed Wi-Fi, and a scenic rooftop pool.",
    itinerary: [
      {
        day: 1,
        title: "11:30 - 14:00 Day 1: Arrival & Check-in",
        detail: "Arrive, store luggage at reception, enjoy lunch, then check into rooms at 14:00 for an afternoon rest."
      },
      {
        day: 2,
        title: "Day 2: Breakfast & Base Station",
        detail: "Buffet breakfast at the hotel restaurant before departing for Ky Co - Eo Gio, returning at midday for rest."
      },
      {
        day: 3,
        title: "Day 3: Midday Rest & Rooftop Pool",
        detail: "Rest after morning sightseeing, with optional relaxation at the rooftop pool before afternoon stops."
      },
      {
        day: 4,
        title: "09:45 - 10:30 Day 4: Check-out & Farewell",
        detail: "Check out of rooms, settle personal services, load luggage onto the coach, and begin the return trip."
      }
    ],
    highlights: [
      "Our official 4-star base across the entire 4D3N trip",
      "Convenient central location, just 5 minutes walk to Quy Nhon beach",
      "Rooftop swimming pool with panoramic views of both city and coastline",
      "Professional hospitality, secure keycard access, and spacious rooms"
    ],
    tips: [
      "Keep room keycards safe; notify class coordinators immediately if lost",
      "Check hotel amenities before departure to avoid leaving phone chargers or clothes",
      "Standard hotel check-in is 14:00 and check-out is before 11:00"
    ]
  },
  {
    id: 6,
    name: "Ngoc Lien Fish Cake Noodles & Nem Cha Loi",
    category: "van-hoa",
    location: "379 Nguyen Hue & 113 Tang Bat Ho, Quy Nhon",
    visitTime: "12:30 – 14:00 (Day 1) • 17:30 – 18:45 (Day 3)",
    duration: "Signature local meals on Days 1 and 3",
    tags: ["Fish Cake Soup", "Grilled Nem", "Traditional Broth", "Authentic Cuisine"],
    description: "Two quintessential culinary institutions of Quy Nhon: Ngoc Lien offers aromatic fish noodle soup with clear bone broth and chewy homemade fish cakes; Nem Cha Loi serves smoky grilled pork rolls wrapped in rice paper with crisp vegetables and rich dipping sauce.",
    itinerary: [
      {
        day: 1,
        title: "12:30 - 14:00 Day 1: Welcome Lunch with Fish Cake Noodles",
        detail: "Our first meal in Quy Nhon: bowls of fragrant fish cake noodles with fresh herbs and pickled shallots to restore energy after the road trip."
      },
      {
        day: 3,
        title: "17:30 - 18:45 Day 3: Grilled Nem Feast at Loi",
        detail: "Early dinner savoring hot grilled pork rolls, crispy fried ram skewers, and homemade chili dipping sauce."
      }
    ],
    highlights: [
      "Scheduled visits: Lunch on Day 1 (Ngoc Lien) and dinner on Day 3 (Nem Loi)",
      "Traditional fish cakes made from fresh local mackerel and barracuda",
      "Signature dipping sauce simmered from liver, peanuts, and spices",
      "Spacious dining areas well-suited for large student groups"
    ],
    tips: [
      "Add a dash of local pickled shallots and lime to enhance the fish broth",
      "Ngoc Lien also packages vacuum-sealed fish cakes if you wish to buy gifts",
      "Arrive on schedule as these popular spots get busy during peak hours"
    ]
  },
  {
    id: 7,
    name: "Com Mau Quy Nhon (Subsidized-Era Restaurant)",
    category: "van-hoa",
    location: "72 An Duong Vuong, Quy Nhon City",
    visitTime: "11:45 – 13:15 • Day 3",
    duration: "1.5 hours (Lunch on Day 3)",
    tags: ["Retro Concept", "1980s Vietnam", "Home-style Cooking", "Claypot Rice"],
    description: "Com Mau recreates the nostalgic atmosphere of Vietnam's 1980s subsidy period with vintage posters, enamel bowls, and stamp coupon order slips. The menu features classic Vietnamese home-cooked dishes: claypot braised fish, boiled morning glory with dipping sauce, sour crab soup, and crispy rice crust.",
    itinerary: [
      {
        day: 3,
        title: "11:45: Arrival & Coupon-Style Seating",
        detail: "Group settles into retro dining quarters decorated with authentic vintage memorabilia and enamel tableware."
      },
      {
        day: 3,
        title: "12:00 - 13:15: Traditional Family Meal",
        detail: "Shared lunch with claypot braised snakehead fish, hot sour soup, braised pork ribs, and crispy rice before afternoon science activities."
      }
    ],
    highlights: [
      "Scheduled visit: 11:45 – 13:15 on Day 3",
      "Unique vintage interior recreating Vietnam's 1980s subsidized era",
      "Comforting home-style dishes served in traditional enamel bowls",
      "Fun photo backdrops with old bicycles, cassette players, and retro signs"
    ],
    tips: [
      "Try the crispy rice crust dipped in braised fish gravy — a restaurant favorite",
      "Great photo opportunities with retro costumes and period backdrops",
      "Ideal balanced meal giving everyone energy for the afternoon science center"
    ]
  },
  {
    id: 8,
    name: "ExploraScience Quy Nhon (Science Discovery Center)",
    category: "thien-nhien",
    location: "Science Valley, Ghenh Rang, Quy Nhon",
    visitTime: "14:45 – 17:15 • Day 3",
    duration: "2.5 hours (Afternoon of Day 3)",
    tags: ["Planetarium", "STEM Center", "Interactive Exhibits", "Astronomy"],
    description: "Vietnam's first public science discovery center spans a futuristic campus in Science Valley. Highlights include a full-dome 80-seat planetarium projecting cosmic films, interactive hands-on physics and space galleries, a Tesla coil lightning show, and an astronomical observatory.",
    itinerary: [
      {
        day: 3,
        title: "14:45 - 15:45: Interactive Physics & Space Galleries",
        detail: "Hands-on exploration through interactive galleries on planetary motion, electromagnetism, and renewable energy."
      },
      {
        day: 3,
        title: "16:00 - 17:15: Full-Dome Planetarium & Tesla Coil Demo",
        detail: "Watch 3D cosmic films on the giant dome screen and observe high-voltage electrical spark demonstrations before heading back."
      }
    ],
    highlights: [
      "Scheduled visit: 14:45 – 17:15 on Day 3",
      "Vietnam's premier interactive science center with world-class facilities",
      "Impressive full-dome planetarium projecting 360-degree universe simulations",
      "Hands-on experiments designed for student engagement and curiosity"
    ],
    tips: [
      "Arrive at the planetarium 10 minutes early; doors close promptly when screenings start",
      "Follow instructor safety guidelines closely around electrical and laser exhibits",
      "Bring light jackets as the indoor planetarium theater is air-conditioned and cool"
    ]
  }
];

/* Dữ liệu Lịch trình 4 Ngày 3 Đêm bằng Tiếng Anh */
const TIMELINE_DATA_EN = [
  {
    day: 1,
    title: "Departure from HCMC, Coastal Sunset & Night Market",
    dateSummary: "Travel by sleeper coach from HCMC to Quy Nhon • Check-in Odin Hotel • Beach stroll • Seafood at Loc Bien • Night Market",
    events: [
      {
        time: "05:00 – 06:30",
        icon: "🥪",
        title: "Breakfast & Rest Stop",
        desc: "Coach stopover for light breakfast, freshening up, and stretching before continuing the journey.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "07:00 – 12:00",
        icon: "🛣️",
        title: "Scenic Coastal Drive to Quy Nhon",
        desc: "Final leg of the drive into Quy Nhon, watching changing rural and ocean landscapes through the coach windows.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "11:30 – 12:30",
        icon: "🏨",
        title: "Arrival at Odin Hotel Quy Nhon",
        desc: "Arrive at Odin Hotel, store luggage with reception, and relax in the lobby after the long road trip.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "12:30 – 14:00",
        icon: "🍜",
        title: "Local Fish Cake Noodles for Lunch",
        desc: "Taste Quy Nhon's famous Ngoc Lien fish cake noodle soup with clear savory broth and fresh grilled nem skewers.",
        highlightPlaceId: 6,
        placeName: "Ngoc Lien Fish Cake Noodles & Nem Loi"
      },
      {
        time: "14:00 – 15:30",
        icon: "🛏️",
        title: "Check-in & Afternoon Rest",
        desc: "Check into rooms at Odin Hotel, unpack, take a refreshing shower, and rest up for evening activities.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "15:30 – 17:30",
        icon: "🌊",
        title: "Afternoon Walk on Quy Nhon Beach & Central Square",
        desc: "Stroll along the curved downtown beach, catch the sea breeze, and take photos at Nguyen Tat Thanh Square.",
        highlightPlaceId: 2,
        placeName: "Quy Nhon Beach & Nguyen Tat Thanh Square"
      },
      {
        time: "18:00 – 20:00",
        icon: "🦀",
        title: "Fresh Seafood Dinner at Loc Bien",
        desc: "Enjoy an oceanfront seafood dinner at Loc Bien (48 Xuan Dieu) with grilled scallops, fresh prawns, and fish hotpot.",
        highlightPlaceId: 3,
        placeName: "Loc Bien Seafood (48 Xuan Dieu)"
      },
      {
        time: "20:00 – 21:59",
        icon: "🏮",
        title: "Quy Nhon Night Market & Street Snacks",
        desc: "Browse colorful stalls at the Night Market for snacks, souvenirs, and local sweet soup.",
        highlightPlaceId: 3,
        placeName: "Quy Nhon Night Market"
      },
      {
        time: "22:00",
        icon: "🌙",
        title: "Return to Hotel to Rest",
        desc: "Regroup at Odin Hotel to rest and prepare outfits for tomorrow's Eo Gio & Ky Co island excursion.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      }
    ],
    weatherPlan: {
      condition: "In case of afternoon rain:",
      solutions: [
        {
          title: "Plan A",
          detail: "Move indoors to oceanview cafes along Xuan Dieu to relax and enjoy the sea view safely."
        },
        {
          title: "Plan B",
          detail: "Explore Binh Dinh General Museum or indoor shopping complexes nearby."
        }
      ]
    }
  },
  {
    day: 2,
    title: "Eo Gio Cliffwalk, Ky Co Turquoise Beach & Nhon Ly Seafood",
    dateSummary: "Buffet breakfast • Eo Gio coastal walkway • Ky Co beach • Seafood lunch in Nhon Ly • Sunset beach walk • Duy Map dinner",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "🍳",
        title: "Buffet Breakfast at Odin Hotel",
        desc: "Energizing breakfast at the hotel restaurant to prepare for an active day under the coastal sun.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "07:30 – 08:15",
        icon: "🚌",
        title: "Depart for Nhon Ly Peninsula",
        desc: "Scenic drive across Thi Nai Sea Bridge, the longest maritime bridge in Binh Dinh province.",
        highlightPlaceId: 1,
        placeName: "Ky Co - Eo Gio (Nhon Ly)"
      },
      {
        time: "08:15 – 09:45",
        icon: "🚶",
        title: "Walking along Eo Gio Cliffside Trail",
        desc: "Walk along the cliffside path, take group photos by the ocean rocks, and admire the majestic seascape.",
        highlightPlaceId: 1,
        placeName: "Eo Gio (Nhon Ly)"
      },
      {
        time: "10:15 – 12:00",
        icon: "🏖️",
        title: "Swimming & Relaxing at Ky Co Beach",
        desc: "Arrive at Ky Co, swim in turquoise waters, take photos along the soft white sand and mountain backdrop.",
        highlightPlaceId: 1,
        placeName: "Ky Co Beach"
      },
      {
        time: "12:15 – 13:30",
        icon: "🦞",
        title: "Seafood Lunch in Nhon Ly",
        desc: "Fresh seafood feast with steamed prawns, grilled squid, and cobia hotpot at a local seaside restaurant.",
        highlightPlaceId: 1,
        placeName: "Nhon Ly Seafood Restaurant"
      },
      {
        time: "13:30 – 15:30",
        icon: "🛏️",
        title: "Return to Odin Hotel to Recharge",
        desc: "Return to the hotel, shower, and rest during the hottest midday hours.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "15:30 – 17:30",
        icon: "☕",
        title: "Afternoon Stroll & Seaside Cafes",
        desc: "Free time for a leisurely walk along the beach promenade, cafe visits, or exploring downtown.",
        highlightPlaceId: 2,
        placeName: "Quy Nhon Beach"
      },
      {
        time: "18:00 – 20:00",
        icon: "🦐",
        title: "Dinner at Duy Map Seafood",
        desc: "Enjoy an oceanfront dinner at Duy Map (264 Xuan Dieu) with fresh local catches.",
        highlightPlaceId: 3,
        placeName: "Duy Map Seafood (264 Xuan Dieu)"
      },
      {
        time: "20:00 – 22:00",
        icon: "🍧",
        title: "Evening City Walk & Dessert",
        desc: "Stroll along An Duong Vuong street, enjoy dessert and chat with friends in the cool coastal breeze.",
        highlightPlaceId: 3,
        placeName: "Xuan Dieu - An Duong Vuong St"
      },
      {
        time: "22:00",
        icon: "💤",
        title: "Rest at Odin Hotel",
        desc: "Return to rooms to sleep and recharge for Day 3.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      }
    ],
    weatherPlan: {
      condition: "If rain or rough sea occurs at Ky Co:",
      solutions: [
        {
          title: "Safety First",
          detail: "Switch from speedboat to coastal road access, focusing on sightseeing around Eo Gio and Ngoc Hoa Pagoda."
        },
        {
          title: "Indoor Alternative",
          detail: "Move group lunch early to a spacious covered seafood hall in Nhon Ly."
        }
      ]
    }
  },
  {
    day: 3,
    title: "Ghenh Rang Hillside, Twin Cham Towers & Science Exploration",
    dateSummary: "Morning swim • Ghenh Rang Tiên Sa & Han Mac Tu Hill • Twin Cham Towers • Com Mau retro lunch • ExploraScience Space Center • Nem Loi dinner • Horse carriage",
    events: [
      {
        time: "06:30 – 07:45",
        icon: "🥐",
        title: "Breakfast at Hotel",
        desc: "Buffet breakfast at Odin Hotel to start a diverse day of culture, science, and history.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "07:50 – 09:45",
        icon: "🏊",
        title: "Morning Swim at Crescent Beach",
        desc: "Enjoy calm morning waves and mild sunshine swimming at the central crescent beach.",
        highlightPlaceId: 2,
        placeName: "Crescent Beach Quy Nhon"
      },
      {
        time: "08:15 – 10:15",
        icon: "🪨",
        title: "Ghenh Rang Tien Sa & Han Mac Tu Memorial",
        desc: "Visit Queen's Beach covered in smooth egg stones, walk up Han Mac Tu's memorial hill, and take in bay views.",
        highlightPlaceId: 4,
        placeName: "Ghenh Rang Tien Sa"
      },
      {
        time: "10:30 – 11:30",
        icon: "🏛️",
        title: "Visit Historic Twin Cham Towers (Thap Doi)",
        desc: "Admire ancient 12th-century Champa brick architecture and intricate sandstone carvings right in the city.",
        highlightPlaceId: null,
        placeName: "Twin Cham Towers (Thap Doi)"
      },
      {
        time: "11:45 – 13:15",
        icon: "🍲",
        title: "Retro Family Lunch at Com Mau",
        desc: "Experience a nostalgic 1980s subsidy-era family meal with claypot fish, crispy rice crust, and hot soup.",
        highlightPlaceId: 7,
        placeName: "Com Mau Quy Nhon"
      },
      {
        time: "13:30 – 14:30",
        icon: "🏨",
        title: "Midday Rest at Hotel",
        desc: "Short recharge before the afternoon science discovery center tour.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "14:45 – 17:15",
        icon: "🚀",
        title: "ExploraScience Quy Nhon (Science Center)",
        desc: "Experience the 3D full-dome planetarium, Tesla coil lightning demos, and hands-on STEM physics galleries.",
        highlightPlaceId: 8,
        placeName: "ExploraScience Quy Nhon"
      },
      {
        time: "17:30 – 18:45",
        icon: "🍢",
        title: "Dinner at Nem Cha Loi",
        desc: "Savor grilled pork skewers wrapped in fresh herbs and savory dipping sauce at renowned Nem Cha Loi.",
        highlightPlaceId: 6,
        placeName: "Nem Cha Loi"
      },
      {
        time: "19:00 – 20:15",
        icon: "🥞",
        title: "Crispy Banh Xeo Shrimp Pancakes at Gia Vy",
        desc: "Taste famous crispy jumping-shrimp pancakes with bean sprouts and tart dipping sauce.",
        highlightPlaceId: null,
        placeName: "Banh Xeo Tom Nhay Gia Vy"
      },
      {
        time: "20:20 – 22:00",
        icon: "🐎",
        title: "Horse-Drawn Carriage Ride along Seaside",
        desc: "Relaxing horse carriage ride along Xuan Dieu and An Duong Vuong streets, feeling the cool night breeze.",
        highlightPlaceId: 3,
        placeName: "Horse Carriage Promenade"
      },
      {
        time: "22:00",
        icon: "🌙",
        title: "Final Night Rest at Hotel",
        desc: "Return to Odin Hotel, pack luggage, and get a good night's sleep before tomorrow's return trip.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      }
    ],
    weatherPlan: {
      condition: "If afternoon rain occurs on Day 3:",
      solutions: [
        {
          title: "ExploraScience is 100% Indoor",
          detail: "All planetarium shows and science galleries are fully indoors and climate-controlled, completely unaffected by rain."
        },
        {
          title: "Evening Alternative",
          detail: "If it rains at night, swap the horse carriage for an indoor cafe or cozy board game gathering at the hotel lounge."
        }
      ]
    }
  },
  {
    day: 4,
    title: "Morning Beach Walk, Souvenir Shopping & Return to HCMC",
    dateSummary: "Morning beach walk • Farewell class photos • Souvenir shopping • Hotel check-out • Lunch • Bus journey back to HCMC",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "☕",
        title: "Final Breakfast at Odin Hotel",
        desc: "Enjoy the final breakfast buffet with classmates and teachers at Odin Hotel restaurant.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "07:30 – 08:30",
        icon: "🎁",
        title: "Shopping for Binh Dinh Specialties",
        desc: "Visit trusted specialty shops for Bau Da liquor, Song Than noodles, coconut cakes, and dried squid.",
        highlightPlaceId: null,
        placeName: "Quy Nhon Specialty Shops"
      },
      {
        time: "08:45 – 09:40",
        icon: "📸",
        title: "Farewell Group Photos at Central Beach",
        desc: "The entire class gathers by the ocean for memorable group photos under the clear morning sky.",
        highlightPlaceId: 2,
        placeName: "Quy Nhon Beach & Square"
      },
      {
        time: "09:45 – 10:30",
        icon: "🧳",
        title: "Hotel Check-out & Boarding",
        desc: "Complete check-out, load luggage onto the coach, and say goodbye to Odin Hotel staff.",
        highlightPlaceId: 5,
        placeName: "Odin Hotel Quy Nhon"
      },
      {
        time: "10:30",
        icon: "🚌",
        title: "Depart Quy Nhon for HCMC",
        desc: "Coach departs Quy Nhon on the highway back towards Ho Chi Minh City.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "12:00 – 13:15",
        icon: "🍚",
        title: "Lunch En Route",
        desc: "Stop for a relaxed lunch with fresh local dishes along the coastal highway.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "18:00 – 19:00",
        icon: "🍜",
        title: "Dinner Rest Stop",
        desc: "Evening rest stop for dinner and freshening up before the final highway stretch.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "22:30 – 23:30",
        icon: "🏫",
        title: "Safe Arrival at Luong The Vinh High School (HCMC)",
        desc: "Coach arrives safely back at Luong The Vinh High School in District 1. Concluding an unforgettable 4D3N class trip!",
        highlightPlaceId: null,
        placeName: "THPT Luong The Vinh (HCMC)"
      }
    ],
    weatherPlan: {
      condition: "If morning rain occurs on Day 4:",
      solutions: [
        {
          title: "Indoor Photo Session",
          detail: "Take group farewell photos in Odin Hotel's decorated modern lobby and indoor lounges."
        },
        {
          title: "Convenient Shopping",
          detail: "Shop for regional specialties directly from covered specialty centers with pre-arranged packaging."
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

  // Cập nhật tab lịch trình và marquee ticker
  if (typeof updateTimelineTabs === 'function') {
    updateTimelineTabs(targetLang);
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
