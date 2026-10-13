/* ===================================================
   tours.js - Dữ liệu tour du lịch Quy Nhơn
   8 tour khám phá các địa danh nổi tiếng tại Quy Nhơn,
   Bình Định: biển đảo, thiên nhiên, văn hóa lịch sử
   =================================================== */

const TOURS = [
  // === TOUR 1: Biển đảo - Kỳ Co & Eo Gió ===
  {
    id: 1,
    name: "Kỳ Co - Eo Gió: Thiên Đường Biển",
    category: "bien-dao",
    location: "Nhơn Lý, TP. Quy Nhơn",
    duration: 1,
    price: 650000,
    image: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80"
    ],
    description: "Kỳ Co được mệnh danh là 'Maldives của Việt Nam' với làn nước xanh ngọc bích trong vắt, bãi cát trắng mịn hình vòng cung tuyệt đẹp. Eo Gió là vách đá ngoạn mục với gió biển vi vút quanh năm, nơi hội tụ giữa núi và biển tạo nên cảnh quan kỳ vĩ. Đây là 2 điểm đến không thể bỏ lỡ khi đến Quy Nhơn.",
    itinerary: [
      {
        day: 1,
        title: "Kỳ Co - Eo Gió trọn ngày",
        detail: "7:00 - Đón khách tại trung tâm TP. Quy Nhơn, di chuyển đến bến tàu Nhơn Lý. 8:00 - Đi cano cao tốc ra bãi biển Kỳ Co, tự do tắm biển, chụp ảnh, tham gia các trò chơi biển (dù lượn, kayak, lặn ngắm san hô). 11:30 - Ăn trưa hải sản tươi sống tại Kỳ Co. 13:30 - Di chuyển đến Eo Gió, trekking nhẹ ngắm vách đá kỳ vĩ, check-in cổng trời, cầu kính. 16:00 - Về lại bến tàu, xe đưa về trung tâm Quy Nhơn."
      }
    ],
    includes: [
      "Xe đưa đón khách sạn - bến tàu",
      "Cano cao tốc khứ hồi",
      "Vé tham quan Kỳ Co + Eo Gió",
      "Bữa trưa hải sản tại Kỳ Co",
      "Hướng dẫn viên địa phương",
      "Bảo hiểm du lịch",
      "Nước uống trên xe"
    ],
    excludes: [
      "Chi phí cá nhân",
      "Trò chơi biển (dù lượn, kayak...)",
      "Đồ uống ngoài chương trình",
      "Tips cho HDV và tài xế"
    ]
  },

  // === TOUR 2: Biển đảo - Cù Lao Xanh ===
  {
    id: 2,
    name: "Cù Lao Xanh - Đảo Hoang Sơ Bình Định",
    category: "bien-dao",
    location: "Cù Lao Xanh, Nhơn Châu, Quy Nhơn",
    duration: 1,
    price: 750000,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
    ],
    description: "Cù Lao Xanh (đảo Nhơn Châu) là hòn đảo hoang sơ nằm cách trung tâm Quy Nhơn khoảng 24km, nổi tiếng với ngọn hải đăng hơn 100 năm tuổi, rạn san hô đa dạng và cuộc sống bình yên của ngư dân. Đây là viên ngọc ẩn giấu của Bình Định mà ít khách du lịch biết đến.",
    itinerary: [
      {
        day: 1,
        title: "Cù Lao Xanh trọn ngày",
        detail: "6:00 - Tập trung tại cảng Quy Nhơn, lên tàu gỗ ra đảo (khoảng 1.5 giờ). 7:30 - Đến Cù Lao Xanh, leo lên ngọn hải đăng cổ hơn 100 năm, ngắm toàn cảnh đảo và biển. 9:00 - Lặn ngắm san hô với kính lặn, bơi giữa đàn cá đầy màu sắc. 11:30 - Ăn trưa cùng ngư dân với hải sản mới đánh bắt. 13:30 - Khám phá làng chài, chùa cổ trên đảo, tắm biển. 15:30 - Lên tàu về lại đất liền. 17:00 - Về đến Quy Nhơn."
      }
    ],
    includes: [
      "Tàu gỗ khứ hồi Quy Nhơn - Cù Lao Xanh",
      "Bữa trưa hải sản trên đảo",
      "Kính lặn ngắm san hô",
      "Hướng dẫn viên địa phương",
      "Bảo hiểm du lịch",
      "Áo phao an toàn"
    ],
    excludes: [
      "Chi phí cá nhân",
      "Đồ uống ngoài chương trình",
      "Chi phí phát sinh cá nhân",
      "Tips cho HDV và tài xế"
    ]
  },

  // === TOUR 3: Biển đảo - Hòn Khô ===
  {
    id: 3,
    name: "Hòn Khô - Con Đường Dưới Biển",
    category: "bien-dao",
    location: "Nhơn Hải, TP. Quy Nhơn",
    duration: 1,
    price: 450000,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80"
    ],
    description: "Hòn Khô nổi tiếng với con đường đá giữa biển độc đáo, khi thủy triều rút bạn có thể đi bộ từ đất liền ra đảo. Làng chài Nhơn Hải với bích họa sống động, rạn san hô nguyên sinh và chương trình bảo tồn rùa biển khiến nơi đây trở thành điểm đến đặc biệt nhất Quy Nhơn.",
    itinerary: [
      {
        day: 1,
        title: "Hòn Khô - Nhơn Hải trọn ngày",
        detail: "7:30 - Đón khách, di chuyển đến làng chài Nhơn Hải (15km từ trung tâm). 8:30 - Tham quan bích họa làng chài, tìm hiểu chương trình bảo tồn rùa biển. 9:30 - Đi thúng chai hoặc cano ra Hòn Khô. Khám phá con đường đá giữa biển (tùy thủy triều). 10:30 - Lặn ngắm san hô Nhơn Hải - khu bảo tồn biển nổi tiếng. 12:00 - Ăn trưa hải sản tại nhà dân. 14:00 - Tự do tắm biển, chụp ảnh. 15:30 - Về trung tâm Quy Nhơn."
      }
    ],
    includes: [
      "Xe đưa đón trung tâm - Nhơn Hải",
      "Thúng chai/cano ra Hòn Khô",
      "Kính lặn ngắm san hô",
      "Bữa trưa hải sản",
      "Hướng dẫn viên địa phương",
      "Bảo hiểm du lịch"
    ],
    excludes: [
      "Chi phí cá nhân",
      "Đồ uống ngoài chương trình",
      "Tips cho HDV"
    ]
  },

  // === TOUR 4: Thiên nhiên - Ghềnh Ráng Tiên Sa ===
  {
    id: 4,
    name: "Ghềnh Ráng Tiên Sa - Bãi Xép",
    category: "thien-nhien",
    location: "TP. Quy Nhơn, Bình Định",
    duration: 1,
    price: 350000,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80"
    ],
    description: "Ghềnh Ráng Tiên Sa là quần thể đá granite hàng triệu năm tuổi xếp chồng lên nhau tạo thành bờ biển kỳ vĩ, nơi an nghỉ của 'Thi nhân' Hàn Mặc Tử. Bãi Xép - bãi biển hoang sơ nổi tiếng qua bộ phim 'Tôi thấy hoa vàng trên cỏ xanh', mang vẻ đẹp yên bình, thơ mộng.",
    itinerary: [
      {
        day: 1,
        title: "Ghềnh Ráng - Bãi Xép - Mộ Hàn Mặc Tử",
        detail: "8:00 - Đón khách, di chuyển đến Ghềnh Ráng Tiên Sa. 8:30 - Tham quan quần thể đá granite kỳ vĩ, bãi tắm Hoàng Hậu, Ghềnh đá Tiên Sa. 10:00 - Viếng mộ thi sĩ Hàn Mặc Tử, tìm hiểu cuộc đời và thơ ca. 11:00 - Di chuyển đến Bãi Xép (phim trường 'Tôi thấy hoa vàng trên cỏ xanh'). 11:30 - Tự do tắm biển, check-in tại Bãi Xép. 12:30 - Ăn trưa đặc sản Quy Nhơn (bánh hỏi lòng heo, bún chả cá). 14:00 - Dạo bộ ven biển Quy Nhơn, tham quan tháp Đôi. 16:00 - Về điểm đón."
      }
    ],
    includes: [
      "Xe đưa đón theo chương trình",
      "Vé tham quan Ghềnh Ráng",
      "Bữa trưa đặc sản Quy Nhơn",
      "Hướng dẫn viên",
      "Bảo hiểm du lịch",
      "Nước uống trên xe"
    ],
    excludes: [
      "Chi phí cá nhân",
      "Đồ uống ngoài chương trình",
      "Tips cho HDV"
    ]
  },

  // === TOUR 5: Thiên nhiên - Hầm Hô ===
  {
    id: 5,
    name: "Hầm Hô - Kỳ Quan Đá Giữa Rừng",
    category: "thien-nhien",
    location: "Tây Sơn, Bình Định",
    duration: 1,
    price: 500000,
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80"
    ],
    description: "Hầm Hô là thắng cảnh thiên nhiên độc đáo với hệ thống đá bàn trải dài trên suối, tạo thành những hầm, hố kỳ bí giữa rừng nguyên sinh. Nước suối trong vắt chảy qua những phiến đá lớn tạo nên cảnh quan hoang sơ, hùng vĩ. Đây là điểm đến lý tưởng cho những ai yêu thiên nhiên và muốn trốn khỏi sự ồn ào thành phố.",
    itinerary: [
      {
        day: 1,
        title: "Hầm Hô - Thiên nhiên hoang sơ",
        detail: "7:30 - Đón khách tại Quy Nhơn, di chuyển đến Hầm Hô (huyện Tây Sơn, khoảng 55km). 9:00 - Đến Hầm Hô, bắt đầu hành trình khám phá. Đi bộ dọc suối, leo qua những phiến đá bàn khổng lồ. 10:00 - Tắm suối mát lạnh, ngắm thác nước tự nhiên. 11:00 - Khám phá rừng nguyên sinh, tìm hiểu hệ sinh thái. 12:00 - Ăn trưa với gà nướng, cơm lam giữa rừng. 14:00 - Tự do vui chơi, chụp ảnh. 15:00 - Di chuyển về, ghé qua suối khoáng nóng Hội Vân. 17:00 - Về đến Quy Nhơn."
      }
    ],
    includes: [
      "Xe đưa đón Quy Nhơn - Hầm Hô",
      "Vé tham quan khu du lịch Hầm Hô",
      "Bữa trưa gà nướng + cơm lam",
      "Vé suối khoáng nóng Hội Vân",
      "Hướng dẫn viên",
      "Bảo hiểm du lịch"
    ],
    excludes: [
      "Chi phí cá nhân",
      "Đồ uống ngoài chương trình",
      "Tips cho HDV và tài xế"
    ]
  },

  // === TOUR 6: Văn hóa - Tháp Chàm ===
  {
    id: 6,
    name: "Tháp Đôi - Tháp Bánh Ít - Thành Đồ Bàn",
    category: "van-hoa",
    location: "Quy Nhơn - An Nhơn, Bình Định",
    duration: 1,
    price: 400000,
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80"
    ],
    description: "Bình Định được mệnh danh là 'miền đất Tháp Chàm' với hệ thống tháp Chăm dày đặc nhất Việt Nam. Tháp Đôi ngay trung tâm Quy Nhơn, Tháp Bánh Ít với kiến trúc độc đáo trên đồi cao, và Thành Đồ Bàn - kinh đô cổ của vương quốc Chăm Pa sẽ đưa bạn ngược dòng lịch sử hàng ngàn năm.",
    itinerary: [
      {
        day: 1,
        title: "Hành trình di sản Chăm Pa",
        detail: "8:00 - Đón khách, tham quan Tháp Đôi (ngay trung tâm Quy Nhơn) - cụm tháp Chăm có kiến trúc đặc biệt với đỉnh hình phẳng. 9:30 - Di chuyển đến Tháp Bánh Ít (Phước Hiệp, Tuy Phước) - cụm 4 tháp trên đồi cao, ngắm toàn cảnh đồng lúa Bình Định. 11:00 - Đến Thành Đồ Bàn (An Nhơn) - kinh đô vương quốc Chăm Pa xưa, tham quan di chỉ hoàng thành, bảo tàng hiện vật Chăm. 12:30 - Ăn trưa đặc sản An Nhơn (bún sứa, nem chợ Huyện). 14:00 - Tham quan Tháp Cánh Tiên - tháp Chăm đẹp nhất Bình Định. 15:30 - Về Quy Nhơn."
      }
    ],
    includes: [
      "Xe đưa đón theo chương trình",
      "Vé tham quan tất cả các tháp",
      "Bữa trưa đặc sản địa phương",
      "Hướng dẫn viên chuyên môn lịch sử",
      "Bảo hiểm du lịch",
      "Nước uống trên xe"
    ],
    excludes: [
      "Chi phí cá nhân",
      "Đồ uống ngoài chương trình",
      "Tips cho HDV"
    ]
  },

  // === TOUR 7: Văn hóa - Bảo tàng Quang Trung ===
  {
    id: 7,
    name: "Bảo Tàng Quang Trung - Đất Võ Tây Sơn",
    category: "van-hoa",
    location: "Tây Sơn, Bình Định",
    duration: 1,
    price: 450000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80"
    ],
    description: "Tây Sơn - quê hương của anh hùng dân tộc Quang Trung Nguyễn Huệ, nơi khởi phát phong trào Tây Sơn lẫy lừng. Tham quan Bảo tàng Quang Trung, Điện thờ Tây Sơn Tam Kiệt, xem biểu diễn trống trận Tây Sơn và võ cổ truyền Bình Định - di sản văn hóa phi vật thể quốc gia.",
    itinerary: [
      {
        day: 1,
        title: "Tây Sơn - Đất Võ, Trời Văn",
        detail: "7:30 - Đón khách tại Quy Nhơn, di chuyển đến Tây Sơn (khoảng 50km). 9:00 - Tham quan Bảo tàng Quang Trung: hiện vật lịch sử, mô hình trận Ngọc Hồi - Đống Đa, xem biểu diễn nhạc võ trống trận Tây Sơn. 10:30 - Viếng Điện thờ Tây Sơn Tam Kiệt (Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ). 11:30 - Xem biểu diễn võ cổ truyền Bình Định tại võ đường. 12:30 - Ăn trưa đặc sản vùng Tây Sơn. 14:00 - Tham quan nhà thờ Bùi Thị Xuân, giếng nước cổ. 15:00 - Ghé đập Định Bình ngắm cảnh. 16:30 - Về Quy Nhơn."
      }
    ],
    includes: [
      "Xe đưa đón Quy Nhơn - Tây Sơn",
      "Vé tham quan Bảo tàng Quang Trung",
      "Xem biểu diễn võ cổ truyền + trống trận",
      "Bữa trưa đặc sản Tây Sơn",
      "Hướng dẫn viên chuyên môn",
      "Bảo hiểm du lịch"
    ],
    excludes: [
      "Chi phí cá nhân",
      "Đồ uống ngoài chương trình",
      "Tips cho HDV và tài xế"
    ]
  },

  // === TOUR 8: Trọn gói - Quy Nhơn 3N2Đ ===
  {
    id: 8,
    name: "Quy Nhơn Trọn Vẹn 3 Ngày 2 Đêm",
    category: "tron-goi",
    location: "Quy Nhơn - Tây Sơn, Bình Định",
    duration: 3,
    price: 2990000,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    description: "Tour trọn gói 3 ngày 2 đêm khám phá trọn vẹn Quy Nhơn - Bình Định: từ biển đảo Kỳ Co, Eo Gió, Hòn Khô hoang sơ, đến di sản Tháp Chàm ngàn năm, Bảo tàng Quang Trung hào hùng, thưởng thức ẩm thực đặc sản và ngắm hoàng hôn tuyệt đẹp trên bãi biển Quy Nhơn.",
    itinerary: [
      {
        day: 1,
        title: "Đón khách - Kỳ Co - Eo Gió",
        detail: "Sáng: Đón khách tại sân bay/ga Quy Nhơn, nhận phòng khách sạn. 9:00 - Di chuyển đến bến tàu, cano ra Kỳ Co tắm biển, lặn ngắm san hô. Trưa: ăn hải sản tại Kỳ Co. Chiều: tham quan Eo Gió, check-in cầu kính, cổng trời. Tối: dạo biển Quy Nhơn, thưởng thức bánh xèo tôm nhảy, bún chả cá."
      },
      {
        day: 2,
        title: "Hòn Khô - Ghềnh Ráng - Tháp Đôi",
        detail: "Sáng: Ra Hòn Khô bằng thúng chai, khám phá con đường đá giữa biển, lặn ngắm san hô Nhơn Hải. Trưa: ăn hải sản tại làng chài. Chiều: Ghềnh Ráng Tiên Sa, viếng mộ Hàn Mặc Tử, Bãi tắm Hoàng Hậu. 16:00 - Tháp Đôi. Tối: chợ đêm Quy Nhơn, thưởng thức bánh hỏi lòng heo."
      },
      {
        day: 3,
        title: "Tây Sơn - Tháp Bánh Ít - Tiễn khách",
        detail: "Sáng: Di chuyển đến Tây Sơn, tham quan Bảo tàng Quang Trung, xem biểu diễn trống trận + võ cổ truyền. Trưa: ăn đặc sản Tây Sơn. Chiều: về qua Tháp Bánh Ít, Tháp Cánh Tiên chụp ảnh. 15:00 - Mua sắm đặc sản (rượu Bàu Đá, nem chả Quy Nhơn). 16:00 - Tiễn khách ra sân bay/ga. Kết thúc tour."
      }
    ],
    includes: [
      "Xe đưa đón sân bay/ga + tham quan",
      "Khách sạn 3 sao (2 đêm, 2 người/phòng)",
      "Các bữa ăn theo chương trình (2 sáng, 3 trưa, 2 tối)",
      "Cano Kỳ Co + thúng chai Hòn Khô",
      "Vé tham quan tất cả các điểm",
      "Hướng dẫn viên suốt tuyến",
      "Bảo hiểm du lịch"
    ],
    excludes: [
      "Vé máy bay/tàu đến Quy Nhơn",
      "Chi phí cá nhân",
      "Trò chơi biển (dù lượn, kayak...)",
      "Phụ thu phòng đơn: 600.000đ",
      "Tips cho HDV và tài xế"
    ]
  }
];

/* Danh mục tour - cập nhật cho Quy Nhơn */
const CATEGORIES = [
  { id: "bien-dao", name: "Biển đảo", icon: "🏖️" },
  { id: "thien-nhien", name: "Thiên nhiên", icon: "🌿" },
  { id: "van-hoa", name: "Văn hóa - Lịch sử", icon: "🏛️" },
  { id: "tron-goi", name: "Trọn gói", icon: "🎒" }
];

/* Hàm format tiền VNĐ */
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}

/* Hàm lấy tour theo ID */
function getTourById(id) {
  return TOURS.find(tour => tour.id === parseInt(id));
}

/* Hàm lọc tour theo danh mục */
function getToursByCategory(category) {
  if (!category || category === 'all') return TOURS;
  return TOURS.filter(tour => tour.category === category);
}

/* Hàm tìm kiếm tour theo tên hoặc địa điểm */
function searchTours(keyword) {
  const lower = keyword.toLowerCase();
  return TOURS.filter(tour =>
    tour.name.toLowerCase().includes(lower) ||
    tour.location.toLowerCase().includes(lower)
  );
}

/* Hàm lọc tour theo mức giá */
function filterToursByPrice(tours, minPrice, maxPrice) {
  return tours.filter(tour => {
    if (minPrice && tour.price < minPrice) return false;
    if (maxPrice && tour.price > maxPrice) return false;
    return true;
  });
}
