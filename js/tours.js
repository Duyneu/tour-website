/* ===================================================
   tours.js - Cẩm nang các địa danh du lịch Quy Nhơn
   8+ địa danh nổi tiếng: Biển đảo, Thiên nhiên, Văn hóa lịch sử
   Hoàn toàn phi lợi nhuận, không có giá tiền / tour trọn gói
   =================================================== */

const TOURS = [
  // === 1: Kỳ Co, Eo Gió & Tịnh Xá Ngọc Hòa ===
  {
    id: 1,
    name: "Kỳ Co - Eo Gió & Tịnh Xá Ngọc Hòa (Nhơn Lý)",
    category: "bien-dao",
    location: "Xã Nhơn Lý, TP. Quy Nhơn",
    visitTime: "08:15 – 16:00 • Ngày 2",
    duration: "Gần trọn Ngày 2 (08:15 – 16:00)",
    image: "https://nhonlytourist.com/cache/image/605/images/nhonlytourist.com/thumbs/2025/04/image-1626-slide-1745202587-6805ad9bf0863.jpg",
    tags: ["08:15 Ngày 2", "Cano & Lặn San Hô", "Tịnh xá Ngọc Hòa", "Eo Gió hùng vĩ", "Tiệc hải sản Nhơn Lý"],
    description: "Kỳ Co được ví như 'Maldives của Việt Nam' với làn nước ngọc bích 2 màu trong vắt ôm lấy bờ cát trắng mịn. Liền kề đó là thắng cảnh Eo Gió hùng vĩ với con đường đi bộ ven vách đá vươn ra biển lộng gió, cùng Tịnh xá Ngọc Hòa thanh tịnh sở hữu tượng Phật đôi Quan Thế Âm cao nhất Việt Nam. Lịch trình Ngày 2: 08:15 đi cano ra đảo Kỳ Co lặn ngắm san hô Bãi Dứa, trưa ăn hải sản 7-8 món tươi sống tại Nhơn Lý, 14:00 chiêm bái Tịnh xá Ngọc Hòa và 15:00 dạo bước cung đường Eo Gió.",
    itinerary: [
      {
        day: 2,
        title: "08:15 - 12:20: Cano ra đảo Kỳ Co, lặn ngắm san hô & tắm biển",
        detail: "Đoàn đặt tour Kỳ Co đón tại Nhơn Lý (450.000 – 490.000đ/người bao gồm cano khứ hồi ra đảo Kỳ Co, vé bãi, lặn ngắm san hô Bãi Dứa bằng kính bơi và áo phao, tắm nước ngọt và trọn gói ăn trưa hải sản). Vui chơi, tắm biển làn nước trong xanh và chụp ảnh bãi cát trắng."
      },
      {
        day: 2,
        title: "12:40 - 13:50: Ăn trưa hải sản tươi sống tại làng chài Nhơn Lý",
        detail: "Thưởng thức bữa trưa theo tour với thực đơn tiêu chuẩn 7-8 món tươi sống đánh bắt trong ngày: tôm sú nướng/hấp, mực tươi, cá chiên/hấp, lẩu hải sản, nghêu sò thơm ngon."
      },
      {
        day: 2,
        title: "14:00 - 15:00: Chiêm bái Tịnh xá Ngọc Hòa",
        detail: "Tham quan điểm hành hương thanh tịnh và là biểu tượng tâm linh nổi bật của Quy Nhơn nằm ngay cạnh Eo Gió, nổi tiếng với tượng Phật đôi Quan Thế Âm cao nhất Việt Nam nhìn ra biển (Giá vé: Miễn phí)."
      },
      {
        day: 2,
        title: "15:00 - 16:00: Dạo bước cung đường ven vách đá Eo Gió",
        detail: "Đoàn đi bộ theo con đường ven biển tuyệt đẹp ôm sát vách đá ngoạn mục, check-in cầu gỗ sát vách đá, đón gió đại dương và chụp ảnh kỷ niệm tập thể toàn đoàn (Giá vé Eo Gió: 22.000đ/người)."
      }
    ],
    highlights: [
      "Thời gian ghé thăm: 08:15 – 16:00 Ngày 2 (Kỳ Co, làng chài Nhơn Lý, Tịnh xá Ngọc Hòa & Eo Gió)",
      "Trọn gói cano khứ hồi, lặn ngắm san hô Bãi Dứa và tắm biển Maldives Kỳ Co",
      "Bữa trưa tiệc hải sản tươi sống 7-8 món đậm chất làng chài Nhơn Lý",
      "Tượng Phật đôi Quan Âm linh thiêng tại Tịnh xá Ngọc Hòa & con đường ven biển lộng gió Eo Gió"
    ],
    tips: [
      "Chuẩn bị kem chống nắng, đồ bơi, nón rộng vành, khăn tắm và sạc dự phòng",
      "Đoàn đặt tour Kỳ Co 450.000 – 490.000đ/người trọn gói cano + lặn san hô + ăn trưa hải sản",
      "Vé tham quan Eo Gió: 22.000đ/người, Tịnh xá Ngọc Hòa: Miễn phí vé vào cửa"
    ]
  },

  // === 2: Biển Quy Nhơn & Bãi tắm Vầng Trăng Khuyết (Quảng trường Nguyễn Tất Thành) ===
  {
    id: 2,
    name: "Biển Quy Nhơn & Bãi Tắm Vầng Trăng Khuyết (Quảng Trường Trung Tâm)",
    category: "thien-nhien",
    location: "Trung tâm TP. Quy Nhơn (gần Khách sạn Odin)",
    visitTime: "Chiều Ngày 1 (16:00), Ngày 2 (16:30) • Sáng Ngày 4 (08:45 – 09:40)",
    duration: "Ghé thăm nhiều lần trong hành trình 4N3Đ",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["Biển Vầng Trăng Khuyết", "Quảng trường Nguyễn Tất Thành", "Check-in kỉ niệm", "Hoàng hôn"],
    description: "Nằm uốn lượn ôm sát trung tâm thành phố và chỉ cách Khách sạn Odin vài phút tản bộ, bờ biển Quy Nhơn hình vầng trăng khuyết thơ mộng cùng Quảng trường trung tâm Nguyễn Tất Thành rộng lớn là không gian sinh hoạt, dạo mát và chụp ảnh quen thuộc của đoàn: check-in chiều Ngày 1 (16:00 - 17:50), dạo phố ngắm hoàng hôn chiều Ngày 2 (16:30 - 17:30) và chụp ảnh tập thể chia tay phố biển sáng Ngày 4 (08:45 - 09:40).",
    itinerary: [
      {
        day: 1,
        title: "16:00 - 17:50 Ngày 1: Check-in chiều & Dạo biển Quy Nhơn",
        detail: "Sau giấc ngủ trưa hồi sức, cả đoàn cùng nhau tản bộ dạo bờ biển Quy Nhơn, đón những làn gió biển mát rượi và chụp ảnh check-in tại Quảng trường Nguyễn Tất Thành."
      },
      {
        day: 2,
        title: "16:30 - 17:30 Ngày 2: Tự do khám phá phố biển & Cà phê hoàng hôn",
        detail: "Thời gian tự do: các bạn có thể tản bộ ven biển, ngắm hoàng hôn, ghé các quán cà phê ngắm sóng hoặc mua đặc sản phố biển Quy Nhơn."
      },
      {
        day: 4,
        title: "08:45 - 09:40 Ngày 4: Chụp ảnh kỉ niệm toàn đoàn chia tay phố biển",
        detail: "Đoàn tập trung tại Quảng trường Nguyễn Tất Thành (08:45 - 09:00) và di chuyển ra Bãi biển Vầng Trăng Khuyết (09:20 - 09:40) ghi lại những tấm hình tập thể đáng nhớ trước giờ dọn hành lý trả phòng."
      }
    ],
    highlights: [
      "Thời gian ghé thăm: Chiều Ngày 1 (16:00 - 17:50), chiều Ngày 2 (16:30 - 17:30) và sáng Ngày 4 (08:45 - 09:40)",
      "Bờ cát thoai thoải hình vầng trăng khuyết hiền hòa ngay trong lòng thành phố",
      "Quảng trường Nguyễn Tất Thành rộng lớn với tượng đài Bác Hồ và thân phụ trang nghiêm",
      "Vị trí đắc địa, đi bộ thuận tiện chỉ vài phút từ Khách sạn Odin"
    ],
    tips: [
      "Sáng Ngày 4 hãy chuẩn bị trang phục đồng phục/đẹp để chụp ảnh tập thể toàn đoàn",
      "Mang dép êm ái hoặc giày thể thao khi dạo bước ven bờ biển và quảng trường",
      "Ghé các quán cà phê view biển như Surf Bar gần đó để thưởng thức nước mát và hóng gió"
    ]
  },

  // === 3: Phố Biển Xuân Diệu, Chợ Đêm & Xe Ngựa, Câu Mực ===
  {
    id: 3,
    name: "Phố Biển Xuân Diệu, Chợ Đêm & Trải Nghiệm Xe Ngựa, Câu Mực",
    category: "van-hoa",
    location: "Đường Xuân Diệu & An Dương Vương, TP. Quy Nhơn",
    visitTime: "Tối Ngày 1 (18:00 – 21:50) • Tối Ngày 2 (18:00 – 19:00) • Tối Ngày 3 (21:30 – 22:20)",
    duration: "Buổi tối các Ngày 1, 2 và 3",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    tags: ["Hải sản Lộc Biển", "Chợ đêm Quy Nhơn", "Câu mực đêm", "Xe ngựa dạo phố"],
    description: "Cung đường biển Xuân Diệu – An Dương Vương là tâm điểm nhịp sống về đêm của thành phố biển. Tối Ngày 1 đoàn thưởng thức đại tiệc hải sản tại Hải Sản Quy Nhơn - 48 Xuân Diệu (Lộc Biển) và khám phá Chợ Đêm. Tối Ngày 2 trải nghiệm hoạt động câu mực đêm tại làng chài. Tối Ngày 3 dạo phố biển, thưởng thức cà phê và ngồi xe ngựa ngắm cảnh đêm lung linh ánh đèn.",
    itinerary: [
      {
        day: 1,
        title: "18:00 - 21:50 Ngày 1: Ăn tối Hải sản Lộc Biển & Khám phá Chợ Đêm",
        detail: "Ăn tối hải sản tại Hải Sản Quy Nhơn - 48 Xuân Diệu (Lộc Biển, khoảng 150.000đ – 500.000đ/người tùy món). Từ 20:00 - 21:50 tản bộ hòa mình vào Chợ đêm Quy Nhơn mua quà lưu niệm và thưởng thức các món ăn vặt đường phố."
      },
      {
        day: 2,
        title: "18:00 - 19:00 Ngày 2: Hoạt động câu mực đêm tại các làng chài (Tự túc)",
        detail: "Trải nghiệm đi cano ra biển câu mực cùng ngư dân địa phương, thử tài câu mực đêm với combo cano, cần câu và mồi câu (chi phí tự túc theo nhóm bạn)."
      },
      {
        day: 3,
        title: "21:30 - 22:20 Ngày 3: Cà phê view biển & Đi xe ngựa dạo phố tự túc",
        detail: "Tự do dạo phố đêm trên cung đường biển Xuân Diệu – An Dương Vương: ngồi cà phê hóng gió hoặc trải nghiệm đi xe ngựa ngắm nhìn phố biển lung linh ánh đèn."
      }
    ],
    highlights: [
      "Thời gian ghé thăm: Buổi tối các Ngày 1, Ngày 2 và Ngày 3",
      "Hải sản tươi ngon phong phú tại Hải Sản Lộc Biển 48 Xuân Diệu",
      "Trải nghiệm câu mực đêm độc đáo tại các làng chài ven biển",
      "Không khí Chợ đêm rộn rã và xe ngựa dạo phố biển dọc đường Xuân Diệu – An Dương Vương"
    ],
    tips: [
      "Hoạt động câu mực đêm và đi xe ngựa dạo phố là chi phí tự túc, nên đi theo nhóm bạn",
      "Tại Chợ đêm nên chuẩn bị một ít tiền mặt nhỏ để thuận tiện mua sắm quà lưu niệm và ăn vặt",
      "Đoàn luôn tập trung về khách sạn đúng giờ quy định để đảm bảo an toàn và sức khỏe"
    ]
  },

  // === 4: Trung tâm Khám Phá Khoa Học Vũ Trụ ===
  {
    id: 4,
    name: "Trung Tâm Khám Phá Khoa Học Vũ Trụ (ExploraScience Quy Nhơn)",
    category: "van-hoa",
    location: "Đại lộ Khoa học, Ghềnh Ráng, TP. Quy Nhơn",
    visitTime: "08:00 – 10:45 • Sáng Ngày 3",
    duration: "2 tiếng 45 phút (Sáng Ngày 3)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["08:00 Ngày 3", "Khoa học vũ trụ", "Nhà chiếu hình vòm", "Tia sét Tesla", "Trải nghiệm tương tác"],
    description: "ExploraScience Quy Nhơn là Trung tâm khám phá khoa học đầu tiên tại Việt Nam và thứ hai của Đông Nam Á. Điểm đến chính thức sáng Ngày 3 của đoàn (08:00 – 10:45) với Nhà chiếu hình vũ trụ mái vòm hiện đại tái hiện dải ngân hà 3D sống động, màn trình diễn sấm sét cuộn Tesla và 7 phòng khám phá khoa học tương tác trực quan (Sao Kim, Sao Hỏa, hệ Mặt Trời, robot, từ trường...).",
    itinerary: [
      {
        day: 3,
        title: "08:00 - 10:45 Ngày 3: Khám phá dải ngân hà & Khoa học tương tác",
        detail: "Đoàn tham quan toàn diện Trung tâm ExploraScience: trải nghiệm nhà chiếu hình vũ trụ vòm 360 độ, theo dõi mô phỏng phóng điện cuộn Tesla và tương tác với hàng trăm thiết bị vật lý cơ học, thiên văn học trực quan hiện đại."
      }
    ],
    highlights: [
      "Thời gian ghé thăm chính thức: 08:00 – 10:45 sáng Ngày 3",
      "Nhà chiếu hình vũ trụ mái vòm cong 360 độ cực kỳ choáng ngợp và sống động",
      "Màn trình diễn tia sét nhân tạo cuộn Tesla cao thế độc nhất vô nhị",
      "Hàng trăm mô hình khoa học vật lý và vũ trụ học trực quan tương tác thực tế",
      "Không gian kiến trúc hình khối hiện đại chuẩn quốc tế, check-in cực đẹp"
    ],
    tips: [
      "Có mặt đúng giờ trước các khung giờ chiếu phim vòm vì phòng chiếu đóng cửa đúng giờ",
      "Tuân thủ hướng dẫn an toàn của thuyết minh viên khi tham quan khu vực điện cao thế Tesla",
      "Không gian 100% trong nhà và có máy lạnh, hoàn toàn mát mẻ và không lo thời tiết"
    ]
  },

  // === 5: Khách Sạn Odin Quy Nhơn ===
  {
    id: 5,
    name: "Khách Sạn Odin Quy Nhơn (Điểm Lưu Trú Đoàn)",
    category: "thien-nhien",
    location: "Trung tâm TP. Quy Nhơn (06 Trần Phú)",
    visitTime: "Lưu trú 4N3Đ (Nhận phòng 14:05 Ngày 1 - Trả phòng 10:00 - 11:30 Ngày 4)",
    duration: "Toàn bộ chuyến đi 4N3Đ",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    tags: ["Trụ sở đoàn", "Nghỉ ngơi tiện nghi", "Gần biển", "Ăn sáng buffet"],
    description: "Khách sạn Odin là 'căn cứ địa' và điểm dừng chân lưu trú 4 sao chính thức của đoàn trong suốt 4 ngày 3 đêm tại Quy Nhơn. Với vị trí đắc địa gần biển và quảng trường trung tâm, tiện nghi hiện đại, hồ bơi sân thượng và buffet sáng chu đáo (miễn phí), đây là nơi các thành viên nghỉ ngơi, hồi phục thể lực sau chặng đường dài và sau mỗi buổi tham quan.",
    itinerary: [
      {
        day: 1,
        title: "11:50 - 15:30 Ngày 1: Cập bến, gửi đồ, ăn trưa & nhận phòng nghỉ ngơi",
        detail: "11:50 đến khách sạn gửi hành lý, nghỉ ngơi nhẹ. 12:35 đi ăn trưa Bún cá Ngọc Liên / Nem chả Lợi. 14:05 nhận phòng chính thức, tắm rửa và ngủ bù lấy lại năng lượng."
      },
      {
        day: 2,
        title: "06:30 - 07:30 Ngày 2: Bữa sáng miễn phí tại KS & Chuẩn bị đi đảo",
        detail: "Ăn sáng tại nhà hàng khách sạn Odin (ưu tiên vì miễn phí), chuẩn bị nón, đồ bơi, kem chống nắng, sạc dự phòng trước khi khởi hành đi Kỳ Co - Eo Gió."
      },
      {
        day: 3,
        title: "Nghỉ trưa & Hồi sức giữa các chặng tham quan Ngày 3",
        detail: "Quay về khách sạn nghỉ trưa 12:15 - 13:15 sau bữa trưa Cơm Mậu, và tắm rửa thay đồ 18:10 - 18:45 trước bữa tối tại nhà hàng HQ."
      },
      {
        day: 4,
        title: "10:00 - 11:30 Ngày 4: Dọn dẹp hành lý & Trả phòng trước 12:00",
        detail: "Thu dọn tư trang, bàn giao phòng trước 12:00 trước khi di chuyển đi ăn trưa Cơm Mậu và lên xe khởi hành về lại TP.HCM lúc 13:30."
      }
    ],
    highlights: [
      "Điểm tập kết hành lý và lưu trú chính của Thập Tứ Tour",
      "Phòng ốc 4 sao tiện nghi, sạch sẽ, máy lạnh và giường đệm êm ái",
      "Vị trí trung tâm thuận tiện di chuyển ra biển, quảng trường và chợ đêm",
      "Ăn sáng buffet miễn phí mỗi sáng từ 06:30 – 07:30"
    ],
    tips: [
      "Nhận thẻ phòng nhớ giữ cẩn thận và kiểm tra hành lý cá nhân khi nhận phòng",
      "Trước khi trả phòng trưa Ngày 4 (trước 12:00), kiểm tra kỹ tư trang dưới gối, sạc điện thoại trong phòng",
      "Khách sạn có lễ tân hỗ trợ dù và che chắn khi đi lại"
    ]
  },

  // === 6: Ẩm Thực Quy Nhơn: Bún Cá Ngọc Liên, Cơm Mậu, Bánh Xèo Diên Hồng & Nem Chả Lợi ===
  {
    id: 6,
    name: "Ẩm Thực Quy Nhơn: Bún Cá Ngọc Liên, Cơm Mậu, Bánh Xèo Diên Hồng & Nem Chả Lợi",
    category: "van-hoa",
    location: "Trung tâm TP. Quy Nhơn",
    visitTime: "Trưa Ngày 1 (12:35), Tối Ngày 2 (19:30), Trưa Ngày 3 & 4 (11:00 - 13:00), Tối Ngày 3 (19:45)",
    duration: "Xuyên suốt các bữa ăn trong chuyến đi",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    tags: ["Bún cá Ngọc Liên 65k", "Nem chả Lợi", "Bánh xèo tôm nhảy Diên Hồng", "Cơm Mậu", "Nhà hàng HQ"],
    description: "Ẩm thực là linh hồn của chuyến đi Thập Tứ Tour: Từ tô bún chả cá thanh ngọt Ngọc Liên (65.000đ/người) hoặc Nem chả Lợi cho trưa Ngày 1, bánh xèo tôm nhảy giòn rụm Diên Hồng (25k - 35k/cái) cho tối Ngày 2, đến mâm cơm thuần Việt truyền thống trong không gian bao cấp tại Nhà Hàng Cơm Mậu trưa Ngày 3 và Ngày 4, cùng bữa tối đầm ấm tại Nhà hàng HQ tối Ngày 3.",
    itinerary: [
      {
        day: 1,
        title: "12:35 - 14:00 Ngày 1: Bún cá Ngọc Liên (65.000đ/người) hoặc Nem chả Lợi",
        detail: "Bữa trưa đầu tiên tại xứ Nẫu: thưởng thức tô bún cá chả cá trứ danh Ngọc Liên với nước dùng thanh ngọt dai giòn hoặc cuốn nem nướng đậm đà tại Nem chả Lợi."
      },
      {
        day: 2,
        title: "19:30 - 20:50 Ngày 2: Bánh xèo tôm nhảy Diên Hồng",
        detail: "Bữa tối đặc sản bánh xèo vỏ mỏng giòn tan, nhân tôm đất nhảy tanh tách ngọt lịm (giá từ 25.000đ – 35.000đ/cái, dự kiến ăn 4 cái/người) kèm rau mầm tươi non."
      },
      {
        day: 3,
        title: "11:00 - 12:00 Ngày 3: Bữa trưa tại Nhà Hàng Cơm Mậu Quy Nhơn",
        detail: "Mâm cơm niêu gia đình đậm đà hương vị miền Trung: cá kho tộ, canh cua rau đay, thịt luộc cà pháo trong không gian thời bao cấp ấm cúng."
      },
      {
        day: 3,
        title: "19:45 - 21:00 Ngày 3: Bữa tối ấm cúng tại Nhà hàng HQ",
        detail: "Dùng bữa tối tại Nhà hàng HQ với thực đơn phong phú, không gian rộng rãi, thoáng mát thích hợp cho tập thể đoàn."
      },
      {
        day: 4,
        title: "12:00 - 13:00 Ngày 4: Bữa trưa chia tay tại Nhà Hàng Cơm Mậu",
        detail: "Bữa trưa thân mật cuối cùng tại Cơm Mậu trước khi lên xe khởi hành về lại TP.HCM lúc 13:30."
      }
    ],
    highlights: [
      "Thưởng thức trọn vẹn ẩm thực tinh hoa đất võ qua từng ngày",
      "Bún chả cá ngọt thanh tự nhiên tại Ngọc Liên (65.000đ/người) & Nem chả Lợi",
      "Bánh xèo tôm nhảy giòn rụm nức tiếng Diên Hồng với tôm đất tươi sống",
      "Mâm cơm niêu truyền thống tại Cơm Mậu mang đậm hương vị thời bao cấp",
      "Bữa tối thịnh soạn, ấm cúng tại Nhà hàng HQ"
    ],
    tips: [
      "Nhà Hàng Cơm Mậu rất đông khách vào buổi trưa, đoàn luôn đặt bàn trước",
      "Bánh xèo Diên Hồng nên ăn nóng kèm bánh tráng và rau sống cuốn chấm mắm tỏi ớt"
    ]
  },

  // === 7: Ghềnh Ráng Tiên Sa - Đồi Thi Nhân, Mộ Hàn Mặc Tử & Bãi Tiên Sa ===
  {
    id: 7,
    name: "Ghềnh Ráng Tiên Sa - Đồi Thi Nhân, Mộ Hàn Mặc Tử & Bãi Tiên Sa",
    category: "thien-nhien",
    location: "Phường Ghềnh Ráng, TP. Quy Nhơn (cách trung tâm ~3km)",
    visitTime: "15:00 – 18:00 • Chiều Ngày 3",
    duration: "3 tiếng (Chiều Ngày 3)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["15:00 Ngày 3", "Mộ Hàn Mặc Tử", "Đồi Thi Nhân", "Bãi Đá Hoàng Hậu", "Nhà thờ đá", "Tắm biển Tiên Sa"],
    description: "Ghềnh Ráng Tiên Sa là quần thể danh thắng quốc gia nức tiếng nằm sát biển Quy Nhơn. Nơi đây gắn liền với cuộc đời thi sĩ tài hoa Hàn Mặc Tử với Đồi Thi Nhân và ngôi mộ thanh tịnh giữa ngàn thông, Nhà thờ đá Ghềnh Ráng cổ kính, kỳ quan Bãi đá Hoàng Hậu (Bãi Trứng) độc nhất vô nhị với hàng vạn viên đá tròn nhẵn như trứng chim khổng lồ, và Bãi tắm Tiên Sa thơ mộng với làn nước trong xanh ôm trọn chân vách đá.",
    itinerary: [
      {
        day: 3,
        title: "15:00 - 16:30 Ngày 3: Viếng mộ Hàn Mặc Tử, Đồi Thi Nhân & Nhà thờ đá",
        detail: "Đoàn lên đồi thi nhân viếng mộ Hàn Mặc Tử, nghe đọc thơ Hàn bên nghệ thuật bút lửa Dzũ Kha, tham quan Nhà thờ đá Ghềnh Ráng và ngắm bãi đá Trứng Hoàng Hậu kỳ vĩ."
      },
      {
        day: 3,
        title: "16:30 - 18:00 Ngày 3: Tắm biển & Vui chơi tại Bãi Tiên Sa",
        detail: "Tự do tắm biển trong làn nước xanh biếc, tham gia các trò chơi trên biển và ngắm toàn cảnh vịnh Quy Nhơn uốn lượn từ Bãi Tiên Sa (chi phí tự túc)."
      }
    ],
    highlights: [
      "Thời gian ghé thăm chính thức: 15:00 – 18:00 chiều Ngày 3",
      "Viếng mộ nhà thơ Hàn Mặc Tử và tìm hiểu nghệ thuật tranh bút lửa Dzũ Kha",
      "Bãi đá Hoàng Hậu (Bãi Trứng) với những viên đá tròn láng bóng độc đáo",
      "Bãi tắm Tiên Sa nước xanh màu ngọc bích tuyệt đẹp tựa chốn bồng lai",
      "Nhà thờ đá Ghềnh Ráng rêu phong trầm mặc giữa sườn đồi"
    ],
    tips: [
      "Đá ở bãi Trứng Hoàng Hậu trơn, chú ý cẩn thận khi bước chân chụp ảnh",
      "Chuẩn bị đồ bơi và khăn tắm nếu bạn muốn tắm biển và tham gia trò chơi tại bãi Tiên Sa",
      "Có nhiều quầy lưu niệm bút lửa khắc thơ Hàn Mặc Tử trên gỗ thông rất ý nghĩa để mua làm kỷ niệm"
    ]
  },

  // === 8: Bảo Tàng Tổng Hợp Bình Định ===
  {
    id: 8,
    name: "Bảo Tàng Tổng Hợp Bình Định (Di Sản Lịch Sử Đất Võ)",
    category: "van-hoa",
    location: "Số 26 Nguyễn Huệ, TP. Quy Nhơn",
    visitTime: "13:30 – 14:30 • Trưa Ngày 3",
    duration: "1 tiếng (Chiều Ngày 3)",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    tags: ["13:30 Ngày 3", "Lịch sử Tây Sơn", "Văn hóa Chămpa", "Khảo cổ Sa Huỳnh", "Đất võ trời văn"],
    description: "Bảo tàng Tổng hợp Bình Định là kho tàng văn hóa - lịch sử sống động lưu giữ hơn 10.000 tư liệu hiện vật quý báu. Đến đây vào trưa Ngày 3 (13:30 – 14:30), đoàn sẽ được chiêm ngưỡng những tác phẩm điêu khắc đá Chămpa tinh xảo từ thế kỷ 11 đến 15, những bảo vật thời kỳ văn hóa Sa Huỳnh ngàn năm tuổi, và đặc biệt là không gian hào hùng tái hiện phong trào khởi nghĩa nông dân Tây Sơn gắn liền với Hoàng đế Quang Trung - Nguyễn Huệ.",
    itinerary: [
      {
        day: 3,
        title: "13:30 - 14:30 Ngày 3: Khám phá di sản lịch sử Bình Định",
        detail: "Đoàn tham quan các phòng trưng bày văn hóa Chămpa cổ, chiêm ngưỡng các pho tượng sa thạch và tìm hiểu chiến công oanh liệt của anh em nhà Tây Sơn."
      }
    ],
    highlights: [
      "Thời gian ghé thăm chính thức: 13:30 – 14:30 trưa Ngày 3",
      "Bộ sưu tập điêu khắc đá Chămpa cổ độc bản và kỳ vĩ hàng đầu miền Trung",
      "Không gian trưng bày vũ khí, trang phục và tư liệu lịch sử phong trào Tây Sơn",
      "Cổ vật gốm sứ và mộ chum văn hóa khảo cổ tiền sử Sa Huỳnh",
      "Không gian bảo tàng mát mẻ, yên tĩnh, giàu giá trị giáo dục và lịch sử"
    ],
    tips: [
      "Giữ trật tự, đi theo nhóm và tuyệt đối không chạm tay vào các cổ vật sa thạch quý",
      "Được phép chụp ảnh lưu niệm (vui lòng tắt đèn flash máy ảnh theo quy định bảo tàng)",
      "Vị trí bảo tàng rất gần khách sạn Odin trên trục đường Nguyễn Huệ, di chuyển cực kỳ nhanh chóng"
    ]
  }
];

/* Danh mục địa danh - 3 nhóm cảnh sắc chuẩn Quy Nhơn */
const CATEGORIES = [
  { id: "bien-dao", name: "Biển đảo", icon: "🏖️" },
  { id: "thien-nhien", name: "Thiên nhiên", icon: "🌿" },
  { id: "van-hoa", name: "Văn hóa - Lịch sử", icon: "🏛️" }
];

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
    tour.location.toLowerCase().includes(lower) ||
    (tour.tags && tour.tags.some(tag => tag.toLowerCase().includes(lower)))
  );
}

/* ===================================================
   TIMELINE_DATA - Dữ liệu chi tiết lịch trình 4 ngày 3 đêm
   Kèm liên kết địa điểm nổi bật, ẩm thực & giải pháp trời mưa
   =================================================== */
const TIMELINE_DATA = [
  {
    day: 1,
    title: "Ngày 1: Khởi Hành & Khám Phá Nhịp Sống Biển Quy Nhơn",
    dateSummary: "Hành trình di chuyển, nhận phòng KS Odin, check-in quảng trường & đại tiệc hải sản",
    events: [
      {
        time: "02:00",
        icon: "🚌",
        title: "Lên xe khởi hành đến Quy Nhơn",
        desc: "Đoàn tập trung tại điểm hẹn, ổn định chỗ ngồi trên xe giường nằm và bắt đầu chuyến hành trình đêm hướng về thành phố biển Quy Nhơn.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "07:00",
        icon: "🥣",
        title: "Dừng chân ăn sáng & Vệ sinh cá nhân",
        desc: "Xe dừng chân tại trạm dừng nghỉ. Các thành viên ăn sáng nạp năng lượng (50.000 đồng/người: phở, hủ tiếu, cơm tấm...), vệ sinh cá nhân và thư giãn sau chặng đường đêm.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "07:00 – 12:00",
        icon: "🛣️",
        title: "Di chuyển quãng đường còn lại đến Quy Nhơn",
        desc: "Tiếp tục di chuyển chặng cuối đến Quy Nhơn, ngắm khung cảnh thiên nhiên đồng quê và bờ biển duyên hải miền Trung biến chuyển qua khung cửa sổ.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "11:50 – 12:30",
        icon: "🏨",
        title: "Đến Khách sạn Odin Quy Nhơn",
        desc: "Xe cập bến Khách sạn Odin. Cả đoàn gửi hành lý tại quầy lễ tân (nếu chưa tới giờ nhận phòng). Nghỉ ngơi nhẹ tại sảnh, ăn nhẹ uống nước nếu đói sau chuyến đi dài.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "12:35 – 14:00",
        icon: "🍜",
        title: "Ăn trưa đặc sản Quy Nhơn (Bún cá Ngọc Liên hoặc Nem chả Lợi)",
        desc: "Thưởng thức các món ngon trứ danh: Bún cá Ngọc Liên (giá 65.000 đồng/người, chụp hình thực đơn) với nước dùng thanh ngọt, chả cá dai giòn hoặc Nem chả Lợi đậm đà vị xứ Nẫu.",
        highlightPlaceId: 6,
        placeName: "Bún cá Ngọc Liên / Nem chả Lợi"
      },
      {
        time: "14:05 – 15:30",
        icon: "🛏️",
        title: "Nhận phòng – Nghỉ ngơi & Ngủ bù",
        desc: "Nhận phòng chính thức tại Khách sạn Odin. Tắm rửa mát mẻ, nghỉ ngơi trên giường êm để hồi phục thể lực sẵn sàng cho buổi chiều dạo biển.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "16:00 – 17:50",
        icon: "🌊",
        title: "Check-in chiều: Đi bộ biển Quy Nhơn + Quảng trường trung tâm",
        desc: "Cả đoàn cùng nhau tản bộ dạo bờ biển Quy Nhơn uốn cong hình vầng trăng khuyết thơ mộng, đón gió biển chiều và chụp ảnh check-in tại Quảng trường Nguyễn Tất Thành rộng lớn ngay gần khách sạn.",
        highlightPlaceId: 2,
        placeName: "Biển Quy Nhơn & Quảng trường Nguyễn Tất Thành"
      },
      {
        time: "18:00 – 20:00",
        icon: "🦀",
        title: "Ăn tối hải sản tươi sống",
        desc: "Thưởng thức bữa tối ngập tràn hải sản tại quán: Hải Sản Quy Nhơn - 48 Xuân Diệu - Lộc Biển (Khoảng 150.000đ – 500.000đ/người tùy món) với thực đơn hải sản tươi sống phong phú ngay bên bờ biển.",
        highlightPlaceId: 3,
        placeName: "Hải Sản Lộc Biển (48 Xuân Diệu)"
      },
      {
        time: "20:00 – 21:50",
        icon: "🏮",
        title: "Dạo tối tại Chợ đêm Quy Nhơn & Mua quà lưu niệm (Tự túc)",
        desc: "Tản bộ hòa mình vào không khí nhộn nhịp của Chợ đêm Quy Nhơn, tự do mua quà lưu niệm, đồ thủ công mỹ nghệ và thưởng thức các món ăn vặt đường phố hấp dẫn.",
        highlightPlaceId: 3,
        placeName: "Chợ Đêm Quy Nhơn"
      },
      {
        time: "22:00",
        icon: "🌙",
        title: "Về khách sạn Odin nghỉ ngơi",
        desc: "Đoàn tập trung về lại Khách sạn Odin nghỉ ngơi, chuẩn bị tinh thần và trang phục cho hành trình khám phá Kỳ Co – Eo Gió vào sáng mai.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      }
    ],
    weatherPlan: {
      condition: "Nếu chiều tối trời mưa:",
      solutions: [
        {
          title: "Giải pháp 1",
          detail: "Tự nghỉ ngơi thư giãn tại phòng khách sạn Odin, gọi đồ ăn hoặc dùng bữa ấm cúng ngay tại nhà hàng khách sạn."
        },
        {
          title: "Giải pháp 2",
          detail: "Di chuyển bằng taxi/che dù ăn tại các quán ăn ngon gần khách sạn: Quán Gia Vy 2 (cách ~1km), Nhà hàng 4Q (cách ~1.1km), Phở Danh, Cơm Thị."
        }
      ]
    }
  },
  {
    day: 2,
    title: "Ngày 2: Kỳ Co – Eo Gió – Tịnh Xá Ngọc Hòa & Bánh Xèo Diên Hồng",
    dateSummary: "Cano ra đảo Kỳ Co, lặn ngắm san hô Bãi Dứa, Tịnh xá Ngọc Hòa, Eo Gió hùng vĩ, câu mực đêm & bánh xèo tôm nhảy",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "🍳",
        title: "Ăn sáng tại khách sạn Odin hoặc đặc sản Quy Nhơn",
        desc: "Dùng bữa sáng tại khách sạn Odin (ưu tiên ăn tại khách sạn vì sáng ăn miễn phí) hoặc ăn bún cá, bánh hỏi lòng heo. Chuẩn bị đồ dùng cần thiết: nón, kem chống nắng, đồ bơi, sạc dự phòng.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "07:40 – 08:15",
        icon: "🚗",
        title: "Di chuyển đến khu vực Nhơn Lý ngắm cảnh ven biển",
        desc: "Khởi hành từ Khách sạn Odin vượt cầu Thị Nại đến bán đảo Nhơn Lý, ngắm nhìn phong cảnh biển trời và đầm phá tuyệt đẹp trên đường đi.",
        highlightPlaceId: 1,
        placeName: "Cung đường ven biển Nhơn Lý"
      },
      {
        time: "08:15 – 10:15",
        icon: "🚤",
        title: "Di chuyển đến Kỳ Co – ĐẶT Tour Kỳ Co đón tại Nhơn Lý",
        desc: "Đặt tour Kỳ Co đón tại Nhơn Lý (450.000 – 490.000 VNĐ/người): bao gồm Cano khứ hồi ra đảo Kỳ Co, vé vào bãi, lặn ngắm san hô tại Bãi Dứa (kính bơi, áo phao), tắm nước ngọt và trọn gói bữa trưa hải sản tại làng chài.",
        highlightPlaceId: 1,
        placeName: "Cano Kỳ Co & Lặn San Hô Bãi Dứa"
      },
      {
        time: "10:15 – 12:20",
        icon: "🏖️",
        title: "Vui chơi & Tắm biển tại Kỳ Co",
        desc: "Tham quan bãi biển, tắm biển, chụp ảnh check-in thỏa thích với bờ cát trắng mịn, nước biển 2 màu trong xanh tựa ngọc bích của 'Maldives Việt Nam'.",
        highlightPlaceId: 1,
        placeName: "Bãi biển Kỳ Co (Nhơn Lý)"
      },
      {
        time: "12:40 – 13:50",
        icon: "🦞",
        title: "Ăn trưa hải sản tại làng chài Nhơn Lý theo tour",
        desc: "Thưởng thức đại tiệc hải sản theo tour tiêu chuẩn làng chài gồm khoảng 7 đến 8 món tươi sống đánh bắt trong ngày: tôm, mực, cá hấp/chiên, lẩu hải sản, ốc biển...",
        highlightPlaceId: 1,
        placeName: "Nhà hàng hải sản Nhơn Lý"
      },
      {
        time: "14:00 – 15:00",
        icon: "🛕",
        title: "Tham quan Tịnh xá Ngọc Hòa",
        desc: "Nằm cạnh danh thắng Eo Gió hùng vĩ, là điểm hành hương thanh tịnh và là biểu tượng tâm linh nổi bật của Quy Nhơn với tượng Phật đôi Quan Thế Âm cao nhất Việt Nam nhìn ra biển (Giá vé: Miễn phí).",
        highlightPlaceId: 1,
        placeName: "Tịnh xá Ngọc Hòa (Eo Gió)"
      },
      {
        time: "15:00 – 16:00",
        icon: "📸",
        title: "Tham quan Eo Gió – Kỳ quan gió lộng",
        desc: "Đoàn đi bộ theo cung đường ven biển tuyệt đẹp ôm sát vách đá ngoạn mục, chụp ảnh tại cầu gỗ, vách đá, cảnh biển đại dương và chụp ảnh kỷ niệm tập thể toàn đoàn (Giá vé Eo Gió: 22.000 VNĐ/người).",
        highlightPlaceId: 1,
        placeName: "Eo Gió (Nhơn Lý)"
      },
      {
        time: "16:00 – 16:30",
        icon: "🏨",
        title: "Trở về Khách sạn Odin nghỉ ngơi, tắm rửa",
        desc: "Xe đưa đoàn về lại khách sạn Odin tắm rửa nước ngọt, thư giãn và hồi phục sức khỏe sau một ngày hoạt động biển đảo.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "16:30 – 17:30",
        icon: "☕",
        title: "Tự do khám phá khu vực trung tâm Quy Nhơn (Tự túc)",
        desc: "Tự do dạo biển, chụp ảnh tại Quảng trường Nguyễn Tất Thành, ghé các quán cà phê ngắm sóng hoặc mua đặc sản bánh ít lá gai, nem chả làm quà.",
        highlightPlaceId: 2,
        placeName: "Quảng trường Nguyễn Tất Thành & Biển Quy Nhơn"
      },
      {
        time: "18:00 – 19:00",
        icon: "🎣",
        title: "Hoạt động câu mực đêm tại các làng chài (Tự túc)",
        desc: "Trải nghiệm đi cano ra biển câu mực cùng ngư dân địa phương, thử tài câu mực đêm với combo cano, cần câu và mồi câu (chi phí tự túc theo nhóm bạn).",
        highlightPlaceId: 3,
        placeName: "Trải nghiệm câu mực đêm làng chài"
      },
      {
        time: "19:30 – 20:50",
        icon: "🥞",
        title: "Ăn tối đặc sản Bánh xèo tôm nhảy Diên Hồng",
        desc: "Thưởng thức đặc sản nổi tiếng Quy Nhơn: Bánh xèo vỏ mỏng giòn rụm, nhân tôm đất tươi ngọt, ăn kèm rau mầm tươi xanh (giá từ 25.000đ – 35.000đ/cái, dự kiến mỗi người ăn 4 cái).",
        highlightPlaceId: 6,
        placeName: "Bánh xèo tôm nhảy Diên Hồng"
      },
      {
        time: "21:20",
        icon: "✨",
        title: "Về khách sạn Odin nghỉ ngơi",
        desc: "Cả đoàn về phòng khách sạn Odin nghỉ ngơi thư giãn, nạp năng lượng chuẩn bị cho Ngày 3 khám phá trung tâm vũ trụ ExploraScience và Ghềnh Ráng Tiên Sa.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      }
    ],
    weatherPlan: {
      condition: "Nếu thời tiết xấu (mưa to / biển động không đi cano ra đảo được):",
      solutions: [
        {
          title: "Phương án đường bộ",
          detail: "Di chuyển bằng xe đường bộ vào Kỳ Co ngắm cảnh hoặc tập trung tham quan Tịnh xá Ngọc Hòa và cung đường ven biển Eo Gió."
        },
        {
          title: "Ăn trưa trong nhà",
          detail: "Thưởng thức bữa trưa đại tiệc hải sản thịnh soạn tại nhà hàng Nhơn Lý có mái che kiên cố, an toàn."
        },
        {
          title: "Hoạt động buổi tối",
          detail: "Nếu biển động không đi câu mực được, đoàn tập trung ăn bánh xèo tôm nhảy Diên Hồng sớm và dạo phố ngắm mưa biển."
        }
      ]
    }
  },
  {
    day: 3,
    title: "Ngày 3: ExploraScience, Cơm Mậu, Bảo Tàng Bình Định & Ghềnh Ráng",
    dateSummary: "Khám phá vũ trụ ExploraScience, cơm niêu Mậu, bảo tàng Tây Sơn, Ghềnh Ráng Tiên Sa, nhà hàng HQ & xe ngựa dạo phố",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "🥣",
        title: "Ăn sáng tại khách sạn Odin hoặc đặc sản Quy Nhơn",
        desc: "Dùng bữa sáng tại khách sạn Odin hoặc trải nghiệm các món ẩm thực đặc sản của Quy Nhơn ở khu vực gần khách sạn (chi phí tự túc nếu ăn ngoài khách sạn).",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "08:00 – 10:45",
        icon: "🚀",
        title: "Tham quan ExploraScience Quy Nhơn (Trung tâm Khám Phá Khoa Học Vũ Trụ)",
        desc: "Khám phá Trung tâm khoa học đầu tiên của Việt Nam: trải nghiệm Nhà chiếu hình vũ trụ vòm 360 độ sống động, màn trình diễn phóng điện tia sét cuộn Tesla và tương tác với 7 phòng khám phá khoa học không gian.",
        highlightPlaceId: 4,
        placeName: "ExploraScience Quy Nhơn"
      },
      {
        time: "11:00 – 12:00",
        icon: "🍲",
        title: "Ăn trưa tại Nhà Hàng Cơm Mậu Quy Nhơn",
        desc: "Thưởng thức mâm cơm thuần Việt truyền thống trong không gian đậm chất hoài cổ thời bao cấp tại Cơm Mậu với cá kho tộ, canh cua rau đay, thịt luộc cà pháo thơm ngon.",
        highlightPlaceId: 6,
        placeName: "Nhà Hàng Cơm Mậu Quy Nhơn"
      },
      {
        time: "12:15 – 13:15",
        icon: "🛏️",
        title: "Quay về khách sạn Odin nghỉ ngơi",
        desc: "Nghỉ ngơi, ngủ trưa hồi sức tại phòng khách sạn để đảm bảo sức khỏe cho buổi chiều tham quan bảo tàng và danh lam thắng cảnh.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "13:30 – 14:30",
        icon: "🏛️",
        title: "Tham quan Bảo tàng Tổng hợp Bình Định",
        desc: "Chiêm ngưỡng các cổ vật văn hóa Sa Huỳnh ngàn năm, nghệ thuật điêu khắc đá Chămpa độc đáo và tìm hiểu phong trào nông dân Tây Sơn oanh liệt gắn liền với Hoàng đế Quang Trung.",
        highlightPlaceId: 8,
        placeName: "Bảo tàng Tổng hợp Bình Định"
      },
      {
        time: "15:00 – 18:00",
        icon: "🌄",
        title: "Vui chơi tại Ghềnh Ráng Tiên Sa (Chi phí tự túc)",
        desc: "Hành trình danh thắng Ghềnh Ráng: Thăm mộ Thi sĩ Hàn Mặc Tử + Tham quan Đồi Thi Nhân + Nhà thờ đá Ghềnh Ráng + Tắm biển tại Bãi Tiên Sa, ngắm Bãi Đá Hoàng Hậu và tham gia các trò chơi trên biển.",
        highlightPlaceId: 7,
        placeName: "Ghềnh Ráng Tiên Sa & Đồi Thi Nhân"
      },
      {
        time: "18:10 – 18:45",
        icon: "🏨",
        title: "Di chuyển về khách sạn để tắm rửa, thay đồ",
        desc: "Đoàn tập trung về khách sạn Odin tắm rửa nước ngọt, thay trang phục đẹp chuẩn bị cho bữa tối và dạo phố biển đêm.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "19:45 – 21:00",
        icon: "🍽️",
        title: "Ăn tối tại Nhà hàng HQ",
        desc: "Dùng bữa tối tại Nhà hàng HQ với thực đơn phong phú, không gian ấm cúng, thoáng đãng thích hợp cho tập thể đoàn.",
        highlightPlaceId: 6,
        placeName: "Nhà hàng HQ Quy Nhơn"
      },
      {
        time: "21:30 – 22:20",
        icon: "🎠",
        title: "Đi dạo, café, đi xe ngựa dạo phố tự túc tại Cung đường biển Xuân Diệu – An Dương Vương",
        desc: "Tận hưởng không khí đêm Quy Nhơn trên cung đường biển Xuân Diệu – An Dương Vương: dạo mát, ngồi café ngắm sóng hoặc trải nghiệm ngồi xe ngựa dạo phố ngắm cảnh đêm lung linh (chi phí tự túc).",
        highlightPlaceId: 3,
        placeName: "Cung đường biển Xuân Diệu – An Dương Vương"
      },
      {
        time: "22:50",
        icon: "🌙",
        title: "Quay về khách sạn Odin nghỉ ngơi",
        desc: "Về lại khách sạn Odin nghỉ ngơi, thu xếp đồ đạc chuẩn bị cho ngày thứ 4 chia tay Quy Nhơn.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      }
    ],
    weatherPlan: {
      condition: "Nếu trời mưa trong Ngày 3:",
      solutions: [
        {
          title: "ExploraScience & Bảo tàng 100% trong nhà",
          detail: "Toàn bộ chương trình sáng tại ExploraScience và đầu giờ chiều tại Bảo tàng Bình Định hoàn toàn là không gian trong nhà, có máy lạnh, không bị ảnh hưởng bởi thời tiết."
        },
        {
          title: "Chiều mưa tại Ghềnh Ráng",
          detail: "Nếu chiều mưa to, chuyển hoạt động tắm biển sang tham quan phòng tranh bút lửa nghệ thuật Dzũ Kha có mái che hoặc ghé mua sắm đặc sản làm quà tại 'Quà Qui Nhơn' / 'Siêu thị Hương Biển'."
        }
      ]
    }
  },
  {
    day: 4,
    title: "Ngày 4: Chụp Ảnh Kỉ Niệm, Trả Phòng, Cơm Mậu & Khởi Hành Về TP.HCM",
    dateSummary: "Chụp ảnh kỉ niệm quảng trường, bãi biển Vầng Trăng Khuyết, trả phòng KS Odin, cơm Mậu & lên xe về TP.HCM",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "☕",
        title: "Ăn sáng tại khách sạn Odin hoặc thưởng thức ẩm thực đặc sản",
        desc: "Thưởng thức bữa sáng cuối cùng tại khách sạn Odin hoặc thưởng thức các món ăn sáng đặc sản tại khu vực xung quanh khách sạn.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "08:45 – 09:00",
        icon: "📸",
        title: "Đi đến Quảng trường trung tâm gần khách sạn để chụp ảnh kỉ niệm",
        desc: "Toàn đoàn tập trung tại Quảng trường Nguyễn Tất Thành rộng lớn gần khách sạn ghi lại những bức hình tập thể lưu niệm kỷ niệm chuyến đi Quy Nhơn đáng nhớ.",
        highlightPlaceId: 2,
        placeName: "Quảng trường trung tâm Nguyễn Tất Thành"
      },
      {
        time: "09:20 – 09:40",
        icon: "🌊",
        title: "Di chuyển đến Bãi biển Quy Nhơn (Bãi tắm Vầng Trăng Khuyết) chụp ảnh kỉ niệm",
        desc: "Dạo bước lần cuối trên bãi cát biển Vầng Trăng Khuyết, hít thở không khí biển trong lành và chụp ảnh lưu niệm chia tay phố biển.",
        highlightPlaceId: 2,
        placeName: "Bãi biển Quy Nhơn (Bãi tắm Vầng Trăng Khuyết)"
      },
      {
        time: "10:00 – 11:30",
        icon: "🧳",
        title: "Di chuyển về khách sạn để dọn dẹp hành lý và trả phòng trước lúc 12:00",
        desc: "Trở về khách sạn Odin, kiểm tra lại đồ đạc tư trang cá nhân, đóng gói hành lý cẩn thận và thực hiện thủ tục trả phòng (check-out) trước lúc 12:00.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "12:00 – 13:00",
        icon: "🍲",
        title: "Ăn trưa tại Nhà Hàng Cơm Mậu Quy Nhơn",
        desc: "Đoàn tập trung dùng bữa cơm trưa thân mật chia tay Quy Nhơn tại Nhà Hàng Cơm Mậu với những niêu cơm thơm dẻo và các món ăn mộc mạc đậm tình đất võ.",
        highlightPlaceId: 6,
        placeName: "Nhà Hàng Cơm Mậu Quy Nhơn"
      },
      {
        time: "13:30",
        icon: "🚌",
        title: "Khởi hành về lại TPHCM và kết thúc chuyến đi chơi Quy Nhơn 4 ngày 3 đêm",
        desc: "Đoàn lên xe khởi hành chặng đường về lại TP. Hồ Chí Minh. Tạm biệt Quy Nhơn thơ mộng, kết thúc tốt đẹp chuyến đi chơi Quy Nhơn 4 ngày 3 đêm đầy ắp tiếng cười và kỷ niệm tuyệt vời cùng Thập Tứ Tour!",
        highlightPlaceId: null,
        placeName: null
      }
    ],
    weatherPlan: {
      condition: "Nếu thời tiết xấu / trời mưa trong Ngày 4:",
      solutions: [
        {
          title: "Chụp ảnh tại khách sạn",
          detail: "Chụp ảnh kỷ niệm tập thể tại sảnh sang trọng hoặc không gian hồ bơi sân thượng Khách sạn Odin."
        },
        {
          title: "Cà phê & Ăn trưa đúng giờ",
          detail: "Thưởng thức cà phê thư giãn tại khách sạn hoặc quán cà phê gần đó trước khi tập trung ăn trưa tại Cơm Mậu và lên xe về TP.HCM lúc 13:30."
        }
      ]
    }
  }
];

