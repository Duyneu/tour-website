/* ===================================================
   tours.js - Cẩm nang các địa danh du lịch Quy Nhơn
   8+ địa danh nổi tiếng: Biển đảo, Thiên nhiên, Văn hóa lịch sử
   Hoàn toàn phi lợi nhuận, không có giá tiền / tour trọn gói
   =================================================== */

const TOURS = [
  // === 1: Kỳ Co & Eo Gió ===
  {
    id: 1,
    name: "Kỳ Co - Eo Gió (Nhơn Lý)",
    category: "bien-dao",
    location: "Xã Nhơn Lý, TP. Quy Nhơn",
    visitTime: "08:15 – 13:30 • Ngày 2",
    duration: "Nửa ngày (Sáng Ngày 2)",
    image: "https://nhonlytourist.com/cache/image/605/images/nhonlytourist.com/thumbs/2025/04/image-1626-slide-1745202587-6805ad9bf0863.jpg",
    tags: ["08:15 Ngày 2", "Maldives Việt Nam", "Vách đá kỳ vĩ", "Lặn san hô"],
    description: "Kỳ Co được ví như 'Maldives của Việt Nam' với làn nước trong xanh 2 màu ngọc bích, bãi cát trắng phau ôm lấy vách núi hình vòng cung. Cạnh đó là Eo Gió - con đường đi bộ ven vách đá tuyệt mỹ vươn ra đại dương lộng gió. Trong chuyến đi, cả đoàn sẽ đến check-in Eo Gió lúc 08:15, sau đó sang Kỳ Co tắm biển, vui chơi và ăn trưa hải sản tại Nhơn Lý.",
    itinerary: [
      {
        day: 2,
        title: "08:15 - 09:45: Dạo bước cung đường Eo Gió",
        detail: "Đoàn đi bộ men theo cung đường ven biển tuyệt đẹp, chụp ảnh lưu niệm tại cầu gỗ sát vách đá và chụp ảnh tập thể toàn đoàn giữa biển trời lộng gió."
      },
      {
        day: 2,
        title: "10:15 - 13:30: Tắm biển Kỳ Co & Ăn trưa hải sản Nhơn Lý",
        detail: "Tự do vui chơi, tắm biển làn nước trong vắt tại bãi cát trắng Kỳ Co. Sau đó dùng bữa trưa hải sản tươi sống (Hoàng Thao Sea View / Phát Triển) với tôm sú, mực tươi, lẩu cá bớp trước khi về khách sạn nghỉ ngơi."
      }
    ],
    highlights: [
      "Thời gian ghé thăm trong chuyến đi: 08:15 – 13:30 Ngày 2",
      "Con đường ven vách đá ôm sát biển tuyệt đẹp tại Eo Gió",
      "Làn nước trong xanh hai màu và bãi cát trắng mịn Kỳ Co",
      "Thưởng thức hải sản tươi rói tại các nhà hàng nổi tiếng Nhơn Lý"
    ],
    tips: [
      "Chuẩn bị kem chống nắng, đồ bơi, nón rộng vành và sạc dự phòng",
      "Gió ở Eo Gió thổi khá mạnh, chú ý giữ chặt mũ và vật dụng cá nhân",
      "Đoàn có hỗ trợ dù và áo mưa nếu thời tiết có thay đổi"
    ]
  },

  // === 2: Biển Quy Nhơn & Bãi tắm Vầng Trăng Khuyết (Quảng trường Nguyễn Tất Thành) ===
  {
    id: 2,
    name: "Biển Quy Nhơn & Bãi Tắm Vầng Trăng Khuyết (Quảng Trường Trung Tâm)",
    category: "thien-nhien",
    location: "Trung tâm TP. Quy Nhơn (gần Khách sạn Odin)",
    visitTime: "Chiều Ngày 1, 2 • Sáng Ngày 3 (07:50 - 09:45) • Sáng Ngày 4 (08:45 - 09:40)",
    duration: "Ghé thăm xuyên suốt hành trình 4N3Đ",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["Biển Vầng Trăng Khuyết", "Quảng trường Nguyễn Tất Thành", "Tắm biển sáng", "Hoàng hôn"],
    description: "Nằm uốn lượn ngay trước mặt trung tâm thành phố và chỉ cách Khách sạn Odin vài phút đi bộ, bờ biển Quy Nhơn hình vầng trăng khuyết thơ mộng cùng Quảng trường trung tâm Nguyễn Tất Thành rộng lớn là không gian sinh hoạt, check-in và tắm biển quen thuộc của đoàn trong cả 4 ngày: dạo mát chiều Ngày 1 & 2, tắm biển sáng đón bình minh Ngày 3, và chụp ảnh kỷ niệm chia tay phố biển sáng Ngày 4.",
    itinerary: [
      {
        day: 1,
        title: "15:30 - 17:30 Ngày 1: Check-in chiều & Dạo biển nhẹ nhàng",
        detail: "Sau giấc ngủ trưa hồi sức, đoàn cùng nhau đi bộ dạo biển Quy Nhơn, đón những làn gió biển mát rượi và chụp ảnh check-in tại Quảng trường Nguyễn Tất Thành."
      },
      {
        day: 2,
        title: "15:30 - 17:30 Ngày 2: Tự do khám phá phố biển & Thưởng thức cà phê",
        detail: "Thời gian tự do: các bạn có thể tản bộ ven biển, ngắm hoàng hôn, ghé các quán cà phê ngắm sóng hoặc mua đặc sản phố biển Quy Nhơn."
      },
      {
        day: 3,
        title: "07:50 - 09:45 Ngày 3: Tắm biển Bãi tắm Vầng Trăng Khuyết & Chụp ảnh",
        detail: "Buổi sáng nắng dịu, sóng êm: cả đoàn thỏa sức bơi lội tắm biển tại bãi tắm Vầng Trăng Khuyết tuyệt đẹp và chụp ảnh lưu niệm dưới làn nước trong xanh."
      },
      {
        day: 4,
        title: "08:45 - 09:40 Ngày 4: Chụp ảnh kỉ niệm toàn đoàn chia tay phố biển",
        detail: "Đoàn tập trung tại Quảng trường Nguyễn Tất Thành và bờ biển trung tâm ghi lại những tấm hình tập thể đáng nhớ trước giờ trả phòng lên xe về TP.HCM."
      }
    ],
    highlights: [
      "Thời gian ghé thăm: Chiều Ngày 1 & 2, sáng Ngày 3 (tắm biển) và sáng Ngày 4 (chụp ảnh chia tay)",
      "Bờ cát thoai thoải hình vầng trăng khuyết nước biển hiền hòa ngay trong lòng thành phố",
      "Quảng trường Nguyễn Tất Thành rộng lớn với tượng đài Bác Hồ và thân phụ trang nghiêm",
      "Vị trí đắc địa, đi bộ thuận tiện chỉ vài phút từ Khách sạn Odin"
    ],
    tips: [
      "Sáng sớm Ngày 3 (07:50 - 09:45) là thời điểm tắm biển lý tưởng nhất vì nắng dịu và sóng êm",
      "Mang dép êm ái hoặc giày thể thao khi dạo bước ven bờ biển và quảng trường",
      "Ghé các quán cà phê view biển như Surf Bar gần đó để thưởng thức nước mát và hóng gió"
    ]
  },

  // === 3: Ẩm Thực Xuân Diệu & Chợ Đêm Quy Nhơn ===
  {
    id: 3,
    name: "Phố Biển Xuân Diệu, Chợ Đêm & Xe Ngựa Dạo Phố",
    category: "van-hoa",
    location: "Đường Xuân Diệu & An Dương Vương, TP. Quy Nhơn",
    visitTime: "18:00 – 22:00 (Tối Ngày 1 & 2) • 20:20 – 22:00 (Tối Ngày 3)",
    duration: "Buổi tối các Ngày 1, 2 và 3",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    tags: ["Hải sản Xuân Diệu", "Chợ đêm", "Xe ngựa dạo phố", "Quà lưu niệm"],
    description: "Thiên đường ẩm thực đêm của Quy Nhơn trải dài dọc theo con đường biển Xuân Diệu với các quán hải sản nức tiếng: Hải sản Duy Mập (264 Xuân Diệu), Lộc Biển (48 Xuân Diệu), Cơm Ngon Mr Mộc... Tiếp nối là Chợ Đêm Quy Nhơn rộn rã sắc màu và cung đường Xuân Diệu – An Dương Vương lộng gió với trải nghiệm đi xe ngựa ngắm cảnh đêm cực kỳ độc đáo vào tối Ngày 3.",
    itinerary: [
      {
        day: 1,
        title: "18:00 - 22:00 Ngày 1: Đại tiệc hải sản Lộc Biển & Khám phá Chợ Đêm",
        detail: "Ăn tối hải sản tại Hải Sản Quy Nhơn - 48 Xuân Diệu (Lộc Biển) với tôm tít, ghẹ hấp, ốc hương, lẩu hải sản. Sau 20:00 đoàn dạo Chợ đêm mua quà lưu niệm, ăn bánh xèo tôm nhảy, kem cuộn."
      },
      {
        day: 2,
        title: "18:00 - 22:00 Ngày 2: Thưởng thức hải sản Duy Mập & Mua đặc sản",
        detail: "Ăn tối tại Nhà hàng hải sản Duy Mập (264 Xuân Diệu) hoặc Mr Mộc. Tiếp tục dạo phố đêm, mua tré bó rơm, nem chợ Huyện, bánh ít lá gai mang về làm quà."
      },
      {
        day: 3,
        title: "20:20 - 22:00 Ngày 3: Cà phê view biển & Đi xe ngựa dạo phố tự túc",
        detail: "Tự do dạo phố đêm trên cung đường biển Xuân Diệu – An Dương Vương: ngồi cà phê hóng gió, hoặc trải nghiệm ngồi xe ngựa ngắm nhìn phố biển lung linh ánh đèn."
      }
    ],
    highlights: [
      "Thời gian ghé thăm: 18:00 – 22:00 các tối Ngày 1, Ngày 2 và Ngày 3",
      "Hải sản biển tươi roi rói được tuyển chọn trực tiếp tại bể ở Duy Mập và Lộc Biển",
      "Không khí chợ đêm sôi động với hàng trăm gian hàng ẩm thực đường phố và quà lưu niệm",
      "Trải nghiệm đi xe ngựa dạo biển dọc đường Xuân Diệu – An Dương Vương đầy hoài niệm"
    ],
    tips: [
      "Quán Duy Mập và Lộc Biển rất đông khách, đi theo đoàn nên đến sớm để chọn bàn view biển đẹp",
      "Trải nghiệm xe ngựa dạo phố là chi phí tự túc, các bạn có thể rủ nhau đi theo nhóm 3-4 người",
      "Chuẩn bị một ít tiền mặt nhỏ để thuận tiện ăn vặt tại chợ đêm"
    ]
  },

  // === 4: Trung tâm Khám Phá Khoa Học Vũ Trụ ===
  {
    id: 4,
    name: "Trung Tâm Khám Phá Khoa Học Vũ Trụ (ExploraScience)",
    category: "van-hoa",
    location: "Đại lộ Khoa học, Ghềnh Ráng, TP. Quy Nhơn",
    visitTime: "Phương án thay thế • Ngày 2 & Ngày 4 khi thời tiết xấu",
    duration: "Buổi sáng/chiều khi thời tiết xấu",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Phương án dự phòng", "Khoa học vũ trụ", "Nhà chiếu hình vòm", "Độc đáo"],
    description: "ExploraScience Quy Nhơn là Trung tâm khám phá khoa học đầu tiên tại Việt Nam và thứ hai của Đông Nam Á. Với nhà chiếu hình vũ trụ mái vòm hiện đại cùng 7 phòng khám phá khoa học tương tác trực quan (Sao Kim, Sao Hỏa, từ trường, robot...), đây là điểm đến thay thế hoàn hảo và cực kỳ thú vị cho đoàn nếu Ngày 2 hoặc Ngày 4 thời tiết xấu không thuận lợi cho hoạt động ngoài trời.",
    itinerary: [
      {
        day: 2,
        title: "Kế hoạch thời tiết xấu Ngày 2: Khám phá dải ngân hà",
        detail: "Nếu Ngày 2 trời mưa to hoặc biển động, đoàn sẽ di chuyển đến Trung tâm ExploraScience để xem phim khoa học vũ trụ vòm 360 độ và trải nghiệm tương tác vật lý thực tế."
      }
    ],
    highlights: [
      "Điểm đến ưu tiên hàng đầu trong phương án dự phòng thời tiết của đoàn",
      "Nhà chiếu hình vũ trụ mái vòm cong cực kỳ choáng ngợp và sống động",
      "Hàng trăm mô hình khoa học vật lý và vũ trụ học trực quan tương tác",
      "Không gian check-in kiến trúc hiện đại chuẩn quốc tế"
    ],
    tips: [
      "Nếu rời đoàn để tham quan riêng, các bạn nhớ thông báo và xin phép trưởng đoàn",
      "Nên tuân thủ hướng dẫn của thuyết minh viên khi tương tác với thiết bị",
      "Trang bị máy ảnh đầy pin vì kiến trúc bên trong rất ấn tượng"
    ]
  },

  // === 5: Khách Sạn Odin Quy Nhơn ===
  {
    id: 5,
    name: "Khách Sạn Odin Quy Nhơn (Điểm Lưu Trú Đoàn)",
    category: "thien-nhien",
    location: "Trung tâm TP. Quy Nhơn",
    visitTime: "Lưu trú xuyên suốt 4 ngày 3 đêm (Check-in Ngày 1 - Trả phòng Ngày 4)",
    duration: "Toàn bộ chuyến đi 4N3Đ",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    tags: ["Trụ sở đoàn", "Nghỉ ngơi tiện nghi", "Gần biển", "Ăn sáng buffet"],
    description: "Khách sạn Odin là 'căn cứ địa' và điểm dừng chân lưu trú chính thức của đoàn trong suốt 4 ngày 3 đêm tại Quy Nhơn. Với vị trí đắc địa gần biển và quảng trường trung tâm, tiện nghi hiện đại và buffet sáng chu đáo, đây là nơi giúp các thành viên nghỉ ngơi, phục hồi thể lực sau chặng xe dài từ TP.HCM và sau mỗi buổi tham quan.",
    itinerary: [
      {
        day: 1,
        title: "11:30 - 15:30 Ngày 1: Cập bến, gửi đồ, nhận phòng & nghỉ ngơi",
        detail: "11:30 xe đưa đoàn đến khách sạn Odin gửi hành lý và nghỉ ngơi nhẹ. 12:30 ăn trưa đặc sản. 14:00 nhận phòng chính thức, tắm rửa và ngủ bù lấy lại năng lượng."
      },
      {
        day: 2,
        title: "06:30 - 07:30 Ngày 2: Nạp năng lượng bữa sáng & Khởi hành đi đảo",
        detail: "Ăn sáng tại khách sạn hoặc thưởng thức bánh hỏi lòng heo trước khi khởi hành đi Eo Gió - Kỳ Co."
      },
      {
        day: 3,
        title: "Nghỉ trưa & Hồi sức giữa các chặng tham quan Ngày 3",
        detail: "Quay về khách sạn nghỉ trưa 12:15 - 13:15 và tắm rửa 18:00 - 18:30 trước bữa tối."
      },
      {
        day: 4,
        title: "10:00 - 11:30 Ngày 4: Dọn dẹp hành lý & Trả phòng (Check-out)",
        detail: "Thu dọn tư trang, bàn giao phòng trước 12:00 trước khi di chuyển đi ăn trưa Cơm Mậu và lên xe về TP.HCM."
      }
    ],
    highlights: [
      "Điểm tập kết hành lý và lưu trú chính của Thập Tứ Tour",
      "Phòng ốc tiện nghi, sạch sẽ, máy lạnh và giường đệm êm ái",
      "Vị trí trung tâm thuận tiện di chuyển ra biển, quảng trường và chợ đêm",
      "Nếu trời mưa: Có sẵn phương án nghỉ ngơi và ăn uống ấm cúng ngay tại KS"
    ],
    tips: [
      "Nhận thẻ phòng nhớ giữ cẩn thận và kiểm tra hành lý cá nhân khi nhận phòng",
      "Trước khi trả phòng trưa Ngày 4 (trước 12:00), kiểm tra kỹ tư trang dưới gối, sạc điện thoại trong phòng",
      "Khách sạn có lễ tân hỗ trợ dù và che chắn khi đi lại"
    ]
  },

  // === 6: Ẩm Thực Quy Nhơn & Nhà Hàng Cơm Mậu ===
  {
    id: 6,
    name: "Ẩm Thực Quy Nhơn: Bún Cá Ngọc Liên, Nem Chả Lợi & Nhà Hàng Cơm Mậu",
    category: "van-hoa",
    location: "Trung tâm TP. Quy Nhơn",
    visitTime: "Ăn trưa Ngày 1 (12:30), Sáng Ngày 2 & Ăn trưa Ngày 3, 4 (11:00 - 13:00)",
    duration: "Xuyên suốt các bữa ăn trong chuyến đi",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    tags: ["Bún cá Ngọc Liên", "Nem chả Lợi", "Cơm Mậu Quy Nhơn", "Nhà hàng 4Q"],
    description: "Ẩm thực là linh hồn của chuyến đi Thập Tứ Tour: Từ tô bún chả cá thanh ngọt Ngọc Liên, nem nướng đậm vị Nem Chả Lợi cho ngày đầu, đến mâm cơm thuần Việt truyền thống trong không gian bao cấp tại Nhà Hàng Cơm Mậu Quy Nhơn vào trưa Ngày 3 và Ngày 4, cùng bữa tối đầm ấm tại Nhà hàng 4Q / HQ.",
    itinerary: [
      {
        day: 1,
        title: "12:30 - 14:00 Ngày 1: Bữa trưa chào Quy Nhơn",
        detail: "Đoàn thưởng thức tô bún cá chả cá trứ danh Ngọc Liên và món nem nướng, chả lụi đặc sản trứ danh Nem Chả Lợi sau chặng hành trình dài."
      },
      {
        day: 2,
        title: "06:30 - 07:30 Ngày 2: Bánh hỏi lòng heo nóng hổi",
        detail: "Lựa chọn ăn sáng đặc sản xứ Nẫu: Bánh hỏi lòng heo kèm chén cháo huyết nóng hổi để tràn đầy sinh lực khám phá đảo."
      },
      {
        day: 3,
        title: "11:00 - 12:00 Ngày 3: Bữa trưa tại Nhà Hàng Cơm Mậu Quy Nhơn",
        detail: "Thưởng thức mâm cơm niêu gia đình đậm đà hương vị miền Trung: cá kho tộ, canh cua rau đay, thịt luộc cà pháo trong không gian thời bao cấp ấm cúng."
      },
      {
        day: 3,
        title: "19:45 - 20:00 Ngày 3: Ăn tối tại Nhà hàng 4Q / HQ",
        detail: "Dùng bữa tối thịnh soạn tại nhà hàng 4Q / HQ với các món ăn nóng hổi trước khi tản bộ dạo phố đêm."
      },
      {
        day: 4,
        title: "12:00 - 13:00 Ngày 4: Bữa trưa chia tay tại Cơm Mậu",
        detail: "Dùng bữa cơm trưa thân mật cuối cùng tại Cơm Mậu trước khi lên xe khởi hành về lại TP.HCM."
      }
    ],
    highlights: [
      "Thưởng thức trọn vẹn ẩm thực tinh hoa đất võ qua từng ngày",
      "Bún chả cá ngọt thanh tự nhiên từ cá thu tươi sống tại Ngọc Liên",
      "Nem nướng thơm lừng chấm cùng nước tương đậu phộng béo ngậy Nem Chả Lợi",
      "Mâm cơm niêu truyền thống tại Cơm Mậu mang đậm hương vị quê nhà Việt Nam",
      "Bữa tối thịnh soạn, ấm cúng tại Nhà hàng 4Q / HQ"
    ],
    tips: [
      "Nhà Hàng Cơm Mậu rất đông khách vào buổi trưa, đoàn luôn đặt bàn trước để được phục vụ chu đáo",
      "Nếu trời mưa buổi chiều, có các phương án gần KS: Gia Vy 2 (1km), Nhà hàng 4Q (1.1km), Phở Danh, Cơm Thị"
    ]
  },

  // === 7: Ghềnh Ráng Tiên Sa - Đồi Thi Nhân & Bãi Tiên Sa ===
  {
    id: 7,
    name: "Ghềnh Ráng Tiên Sa - Đồi Thi Nhân, Bãi Đá Hoàng Hậu & Bãi Tiên Sa",
    category: "thien-nhien",
    location: "Phường Ghềnh Ráng, TP. Quy Nhơn (cách trung tâm ~3km)",
    visitTime: "15:00 – 17:30 • Chiều Ngày 3",
    duration: "2.5 tiếng (Chiều Ngày 3)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["15:00 Ngày 3", "Mộ Hàn Mặc Tử", "Đồi Thi Nhân", "Bãi Đá Trứng Hoàng Hậu", "Bãi Tiên Sa"],
    description: "Ghềnh Ráng Tiên Sa là quần thể danh thắng quốc gia nức tiếng nằm sát biển Quy Nhơn. Nơi đây gắn liền với cuộc đời thi sĩ tài hoa Hàn Mặc Tử với Đồi Thi Nhân và ngôi mộ thanh tịnh giữa ngàn thông, Nhà thờ đá Ghềnh Ráng cổ kính, kỳ quan Bãi đá Hoàng Hậu (bãi Trứng) độc nhất vô nhị với hàng vạn viên đá tròn nhẵn như trứng chim khổng lồ, và Bãi tắm Tiên Sa thơ mộng với làn nước trong xanh ôm trọn chân vách đá.",
    itinerary: [
      {
        day: 3,
        title: "15:00 - 16:30 Ngày 3: Viếng mộ Hàn Mặc Tử & Bãi đá Hoàng Hậu",
        detail: "Đoàn lên đồi thi nhân viếng mộ Hàn Mặc Tử, nghe đọc thơ Hàn bên nghệ thuật bút lửa Dzũ Kha, tham quan Nhà thờ đá và chụp ảnh check-in tại bãi đá Trứng Hoàng Hậu kỳ vĩ."
      },
      {
        day: 3,
        title: "16:30 - 17:30 Ngày 3: Tắm biển & Vui chơi tại Bãi Tiên Sa",
        detail: "Tự do tắm biển, ngắm toàn cảnh vịnh Quy Nhơn uốn cong từ bãi Tiên Sa với bãi cát vàng mịn màng và làn nước biển trong biếc."
      }
    ],
    highlights: [
      "Thời gian ghé thăm chính thức: 15:00 – 17:30 chiều Ngày 3",
      "Viếng mộ nhà thơ Hàn Mặc Tử và tìm hiểu nghệ thuật tranh bút lửa Dzũ Kha",
      "Bãi đá Hoàng Hậu (Bãi Trứng) với những viên đá tròn láng bóng từng là bãi tắm riêng của Nam Phương Hoàng hậu",
      "Bãi tắm Tiên Sa nước xanh màu ngọc bích tuyệt đẹp tựa chốn bồng lai",
      "Nhà thờ đá Ghềnh Ráng rêu phong trầm mặc giữa sườn đồi"
    ],
    tips: [
      "Đá ở bãi Trứng Hoàng Hậu trơn và dốc thoai thoải, chú ý cẩn thận khi bước chân chụp ảnh",
      "Chuẩn bị đồ bơi và khăn tắm nếu bạn muốn tắm biển tại bãi Tiên Sa",
      "Có nhiều quầy lưu niệm bút lửa khắc thơ Hàn Mặc Tử trên gỗ thông rất ý nghĩa để mua làm kỷ niệm",
      "Phương án thời tiết xấu Ngày 3: Nếu chiều mưa, đoàn chuyển hướng mua quà đặc sản tại 'Quà Qui Nhơn' hoặc 'Siêu thị Hương Biển'"
    ]
  },

  // === 8: Bảo Tàng Tổng Hợp Bình Định ===
  {
    id: 8,
    name: "Bảo Tàng Tổng Hợp Bình Định (Di Sản Lịch Sử Đất Võ)",
    category: "van-hoa",
    location: "Số 26 Nguyễn Huệ, TP. Quy Nhơn",
    visitTime: "13:30 – 14:30 • Trưa Ngày 3",
    duration: "1 tiếng (Trưa Ngày 3)",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    tags: ["13:30 Ngày 3", "Lịch sử Tây Sơn", "Văn hóa Chămpa", "Khảo cổ Sa Huỳnh", "Đất võ trời văn"],
    description: "Bảo tàng Tổng hợp Bình Định là kho tàng văn hóa - lịch sử sống động lưu giữ hơn 10.000 tư liệu hiện vật quý báu. Đến đây, đoàn sẽ được chiêm ngưỡng những tác phẩm điêu khắc đá Chămpa tinh xảo từ thế kỷ 11 đến 15, những bảo vật thời kỳ văn hóa Sa Huỳnh ngàn năm tuổi, và đặc biệt là không gian hào hùng tái hiện phong trào khởi nghĩa nông dân Tây Sơn gắn liền với Hoàng đế Quang Trung - Nguyễn Huệ.",
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
        desc: "Đoàn tập trung tại điểm hẹn, ổn định chỗ ngồi và bắt đầu chuyến hành trình đêm hướng về thành phố biển Quy Nhơn thơ mộng.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "07:00",
        icon: "🥣",
        title: "Dừng chân ăn sáng & Vệ sinh cá nhân",
        desc: "Xe dừng chân tại trạm dừng nghỉ. Các thành viên ăn sáng nạp năng lượng, vệ sinh cá nhân và thư giãn gân cốt sau chặng đường đêm.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "07:00 – 12:00",
        icon: "🛣️",
        title: "Di chuyển quãng đường còn lại đến Quy Nhơn",
        desc: "Tiếp tục di chuyển chặng cuối đến xứ Nẫu, ngắm khung cảnh thiên nhiên đồng quê và bờ biển duyên hải miền Trung biến chuyển qua khung cửa sổ.",
        highlightPlaceId: null,
        placeName: null
      },
      {
        time: "11:30 – 12:30",
        icon: "🏨",
        title: "Đến Khách sạn Odin Quy Nhơn",
        desc: "Xe cập bến Khách sạn Odin. Cả đoàn gửi hành lý tại quầy lễ tân (nếu chưa tới giờ nhận phòng). Nghỉ ngơi nhẹ tại sảnh, ăn nhẹ uống nước sau chuyến đi dài.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "12:30 – 14:00",
        icon: "🍜",
        title: "Ăn trưa đặc sản Quy Nhơn",
        desc: "Thưởng thức các món ngon trứ danh: Bún cá Ngọc Liên (nước dùng thanh ngọt, chả cá dai giòn) và Nem chả Lợi (nem nướng cuốn rau sống đậm vị xứ Nẫu).",
        highlightPlaceId: 6,
        placeName: "Bún cá Ngọc Liên & Nem chả Lợi"
      },
      {
        time: "14:00 – 15:30",
        icon: "🛏️",
        title: "Nhận phòng – Tắm rửa, nghỉ ngơi & ngủ bù",
        desc: "Nhận phòng chính thức tại Khách sạn Odin. Tắm rửa mát mẻ, nghỉ ngơi trên giường êm để hồi phục thể lực sẵn sàng cho buổi chiều dạo biển.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "15:30 – 17:30",
        icon: "🌊",
        title: "Check-in chiều: Đi bộ biển Quy Nhơn + Quảng trường trung tâm",
        desc: "Dạo bước trên bờ cát biển Quy Nhơn uốn cong thơ mộng, đón gió biển chiều và chụp ảnh kỷ niệm tại Quảng trường Nguyễn Tất Thành rộng lớn ngay gần khách sạn.",
        highlightPlaceId: 2,
        placeName: "Biển Quy Nhơn & Quảng trường Nguyễn Tất Thành"
      },
      {
        time: "18:00 – 20:00",
        icon: "🦀",
        title: "Ăn tối hải sản tươi sống",
        desc: "Thưởng thức bữa tối ngập tràn hải sản tại quán: Hải Sản Quy Nhơn - 48 Xuân Diệu (Lộc Biển) - không gian thoáng mát, menu hải sản tươi phong phú phù hợp đoàn đông.",
        highlightPlaceId: 3,
        placeName: "Hải Sản Lộc Biển (48 Xuân Diệu)"
      },
      {
        time: "20:00 – 21:59",
        icon: "🏮",
        title: "Dạo tối tại Chợ đêm Quy Nhơn & Thưởng thức quà vặt",
        desc: "Tản bộ hòa mình vào không khí nhộn nhịp của Chợ đêm Quy Nhơn, mua sắm đồ lưu niệm, quà đặc sản và nếm thử các món ăn vặt đường phố hấp dẫn.",
        highlightPlaceId: 3,
        placeName: "Chợ Đêm Quy Nhơn"
      },
      {
        time: "22:00",
        icon: "🌙",
        title: "Về khách sạn Odin nghỉ ngơi",
        desc: "Đoàn tập trung về lại Khách sạn Odin nghỉ ngơi, chuẩn bị tinh thần và trang phục cho hành trình khám phá Eo Gió - Kỳ Co vào sáng mai.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      }
    ],
    weatherPlan: {
      condition: "Nếu chiều trời mưa:",
      solutions: [
        {
          title: "Giải pháp 1",
          detail: "Tự nghỉ ngơi thư giãn tại phòng khách sạn Odin, gọi đồ ăn hoặc dùng bữa ấm cúng ngay tại nhà hàng khách sạn."
        },
        {
          title: "Giải pháp 2",
          detail: "Di chuyển bằng taxi/che dù ăn tại các quán ăn, nhà hàng ngon gần khách sạn: Quán Gia Vy 2 (cách ~1km), Nhà hàng 4Q (cách ~1.1km), Phở Danh, Cơm Thị."
        }
      ]
    }
  },
  {
    day: 2,
    title: "Ngày 2: Chinh Phục Eo Gió – Kỳ Co & Hải Sản Đêm Xuân Diệu",
    dateSummary: "Thiên đường biển đảo Kỳ Co, con đường ven vách đá Eo Gió & hải sản Duy Mập",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "🍳",
        title: "Ăn sáng tại khách sạn hoặc đặc sản Quy Nhơn",
        desc: "Dùng bữa sáng tại khách sạn Odin hoặc thưởng thức bún cá, bánh hỏi lòng heo nóng hổi. Chuẩn bị đồ dùng cần thiết: nón, kem chống nắng, đồ bơi, sạc dự phòng.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin / Bánh hỏi lòng heo"
      },
      {
        time: "07:30 – 08:15",
        icon: "🚗",
        title: "Di chuyển đến Nhơn Lý – Ngắm cảnh ven biển",
        desc: "Khởi hành từ Khách sạn Odin qua cầu Thị Nại (cây cầu vượt biển nổi tiếng) để đến xã bán đảo Nhơn Lý, chiêm ngưỡng cảnh sắc đầm Thị Nại và bờ biển bao la.",
        highlightPlaceId: 1,
        placeName: "Cung đường ven biển Nhơn Lý"
      },
      {
        time: "08:15 – 09:45",
        icon: "📸",
        title: "Tham quan Eo Gió – Kỳ quan gió lộng",
        desc: "Đoàn đi bộ theo cung đường ven biển lát gạch tuyệt đẹp, chụp ảnh tại cầu gỗ sát vách đá ngoạn mục, ngắm sóng vỗ trắng xóa và chụp ảnh lưu niệm toàn thể đoàn.",
        highlightPlaceId: 1,
        placeName: "Kỳ Co - Eo Gió (Nhơn Lý)"
      },
      {
        time: "09:45 – 10:15",
        icon: "🚤",
        title: "Di chuyển sang bãi biển Kỳ Co",
        desc: "Di chuyển từ bến Nhơn Lý sang Kỳ Co, chiêm ngưỡng làn nước chuyển màu từ xanh ngọc bích sang xanh thẳm kỳ thú.",
        highlightPlaceId: 1,
        placeName: "Kỳ Co (Nhơn Lý)"
      },
      {
        time: "10:15 – 13:30",
        icon: "🏖️",
        title: "Vui chơi tắm biển Kỳ Co & Ăn trưa hải sản Nhơn Lý",
        desc: "Thỏa sức tắm biển với bãi cát trắng mịn, check-in các góc 'sống ảo' xịn xò. Sau đó ăn trưa hải sản thịnh soạn tại Nhơn Lý (tôm, mực tươi, cá hấp, lẩu hải sản). Gợi ý: Nhà hàng Hoàng Thao Sea View hoặc Phát Triển.",
        highlightPlaceId: 1,
        placeName: "Bãi biển Kỳ Co & Hoàng Thao Sea View"
      },
      {
        time: "13:30 – 14:30",
        icon: "🏨",
        title: "Trở về Khách sạn Odin nghỉ ngơi, tắm rửa",
        desc: "Xe đón đoàn về lại khách sạn Odin tắm rửa nước ngọt, thư giãn và ngả lưng nghỉ trưa hồi phục thể lực sau buổi sáng vui chơi hết mình trên đảo.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "15:30 – 17:30",
        icon: "☕",
        title: "Tự do khám phá khu vực trung tâm Quy Nhơn",
        desc: "Các thành viên tự do dạo biển Quy Nhơn, check-in chụp ảnh tại Quảng trường Nguyễn Tất Thành, ghé các quán cà phê ngắm biển hoặc dạo quanh mua đặc sản xứ Nẫu.",
        highlightPlaceId: 2,
        placeName: "Quảng trường Nguyễn Tất Thành & Biển Quy Nhơn"
      },
      {
        time: "18:00 – 20:00",
        icon: "🦞",
        title: "Ăn tối hải sản nổi tiếng trên đường biển Xuân Diệu",
        desc: "Thưởng thức hải sản tươi ngon: tôm, cua, ghẹ, ốc móng tay, lẩu hải sản. Gợi ý hàng đầu: Nhà hàng hải sản Duy Mập (264 Xuân Diệu - đề xuất nhất), Lộc Biển (48 Xuân Diệu), hoặc Cơm Ngon Quy Nhơn Mr Mộc.",
        highlightPlaceId: 3,
        placeName: "Hải Sản Duy Mập (264 Xuân Diệu)"
      },
      {
        time: "20:00 – 22:00",
        icon: "🎁",
        title: "Dạo biển, quảng trường, cà phê & Mua đặc sản quà quê",
        desc: "Tản bộ ngắm biển đêm Quy Nhơn lung linh, uống cà phê trò chuyện, chọn mua đặc sản Bình Định làm quà cho người thân (tré rơm, nem chợ Huyện, bánh ít lá gai, bánh tráng nước dừa).",
        highlightPlaceId: 3,
        placeName: "Phố Biển Đêm & Đặc sản làm quà"
      },
      {
        time: "22:00",
        icon: "✨",
        title: "Về khách sạn Odin nghỉ ngơi",
        desc: "Về phòng khách sạn Odin nghỉ ngơi, chuẩn bị thể lực sẵn sàng cho Ngày 3 khám phá văn hóa và thắng cảnh Ghềnh Ráng Tiên Sa.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      }
    ],
    weatherPlan: {
      condition: "Nếu thời tiết xấu (mưa gió / biển động):",
      solutions: [
        {
          title: "Phương án thay thế đặc biệt",
          detail: "Lựa chọn tham quan 'Trung tâm Khám Phá Khoa Học Vũ Trụ' (ExploraScience Quy Nhơn) - trải nghiệm nhà chiếu hình vũ trụ vòm hiện đại và các phòng khám phá khoa học tương tác trong nhà cực kỳ lý thú."
        },
        {
          title: "Lưu ý đoàn",
          detail: "Thời gian dư ra có thể tự do khám phá nội thành Quy Nhơn hoặc nghỉ ngơi tại KS. Bắt buộc phải báo cáo cho ban tổ chức/đoàn nắm thông tin nếu có bạn rời đoàn."
        },
        {
          title: "Buổi chiều trời mưa",
          detail: "Thực hiện tương tự Ngày 1: nghỉ ngơi tại KS hoặc dùng bữa tại các nhà hàng ấm cúng lân cận (Gia Vy 2, 4Q, Phở Danh, Cơm Thị)."
        }
      ]
    }
  },
  {
    day: 3,
    title: "Ngày 3: Biển Sớm, Bảo Tàng Bình Định & Thắng Cảnh Ghềnh Ráng Tiên Sa",
    dateSummary: "Tắm biển Vầng Trăng Khuyết, cơm niêu Mậu, lịch sử Tây Sơn, mộ Hàn Mặc Tử & phố đêm xe ngựa",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "🥣",
        title: "Ăn sáng tại khách sạn Odin hoặc đặc sản Quy Nhơn",
        desc: "Thưởng thức bữa sáng tại khách sạn hoặc khám phá các quán bún cá, bánh hỏi lòng heo thơm ngon quanh khu vực khách sạn để chuẩn bị thể lực cho ngày mới.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "07:50 – 09:45",
        icon: "🏖️",
        title: "Vui chơi và chụp ảnh tại Bãi biển Quy Nhơn (Bãi tắm Vầng Trăng Khuyết)",
        desc: "Thỏa thích dạo bước trên bờ cát mịn màng hình vầng trăng khuyết, tắm biển sớm trong làn nước biển trong xanh và ghi lại những khoảnh khắc kỷ niệm cùng tập thể đoàn.",
        highlightPlaceId: 2,
        placeName: "Bãi biển Quy Nhơn (Bãi tắm Vầng Trăng Khuyết)"
      },
      {
        time: "10:00 – 10:45",
        icon: "🚿",
        title: "Tắm rửa & Nghỉ ngơi tại khách sạn",
        desc: "Đoàn trở về khách sạn Odin tắm tráng nước ngọt, thay trang phục khô ráo và nghỉ ngơi nhẹ nhàng trước bữa trưa.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "11:00 – 12:00",
        icon: "🍲",
        title: "Ăn trưa tại Nhà Hàng Cơm Mậu Quy Nhơn",
        desc: "Thưởng thức mâm cơm thuần Việt truyền thống trong không gian đậm chất hoài cổ thời bao cấp tại Cơm Mậu với các món đặc sản miền Trung thơm lừng, đậm đà.",
        highlightPlaceId: 6,
        placeName: "Nhà Hàng Cơm Mậu Quy Nhơn"
      },
      {
        time: "12:15 – 13:15",
        icon: "🛏️",
        title: "Quay về khách sạn Odin nghỉ trưa",
        desc: "Nghỉ ngơi, ngủ trưa hồi sức tại phòng khách sạn để đảm bảo sức khỏe cho buổi chiều tham quan các danh lam thắng cảnh.",
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
        time: "15:00 – 17:30",
        icon: "🌄",
        title: "Vui chơi tại Ghềnh Ráng Tiên Sa - Đồi Thi Nhân & Bãi Tiên Sa",
        desc: "Hành trình danh thắng Ghềnh Ráng: viếng mộ nhà thơ tài hoa Hàn Mặc Tử, nghe đọc thơ bên Đồi Thi Nhân, ngắm kỳ quan Bãi đá Hoàng Hậu (Bãi Trứng), tham quan Nhà thờ đá và tắm biển làn nước trong biếc tại Bãi Tiên Sa.",
        highlightPlaceId: 7,
        placeName: "Ghềnh Ráng Tiên Sa & Đồi Thi Nhân"
      },
      {
        time: "18:00 – 18:30",
        icon: "🏨",
        title: "Về khách sạn tắm rửa, thay đồ",
        desc: "Đoàn tập trung về khách sạn Odin tắm rửa, sửa soạn trang phục đẹp để chuẩn bị cho buổi tối thưởng thức ẩm thực và dạo phố biển.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "19:45 – 20:00",
        icon: "🍽️",
        title: "Ăn tối tại Nhà hàng 4Q / HQ",
        desc: "Dùng bữa tối ấm cúng cùng đoàn tại nhà hàng 4Q / HQ với các món ăn gia đình đậm đà hương vị địa phương trong không gian rộng rãi, thoáng mát.",
        highlightPlaceId: 6,
        placeName: "Nhà hàng 4Q / HQ"
      },
      {
        time: "20:20 – 22:00",
        icon: "🎠",
        title: "Đi dạo, cà phê view biển & Đi xe ngựa dạo phố tự túc",
        desc: "Tận hưởng không khí đêm Quy Nhơn trên cung đường biển Xuân Diệu – An Dương Vương: dạo mát, ngồi cà phê ngắm sóng, trải nghiệm thú vị ngồi xe ngựa dạo quanh phố biển tự túc.",
        highlightPlaceId: 3,
        placeName: "Cung đường biển Xuân Diệu – An Dương Vương"
      },
      {
        time: "22:30",
        icon: "🌙",
        title: "Về khách sạn Odin nghỉ ngơi",
        desc: "Về lại khách sạn Odin nghỉ ngơi, chuẩn bị hành lý cho buổi sáng trả phòng và ngày chia tay Quy Nhơn hôm sau.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      }
    ],
    weatherPlan: {
      condition: "Nếu chiều trời mưa:",
      solutions: [
        {
          title: "Giải pháp 1",
          detail: "Tự nghỉ ngơi thư giãn tại phòng khách sạn Odin, trò chuyện, đọc sách hoặc thưởng thức bữa ăn ấm cúng tại nhà hàng khách sạn."
        },
        {
          title: "Giải pháp 2 (Mua sắm đặc sản)",
          detail: "Di chuyển bằng taxi đến mua quà lưu niệm và đặc sản xứ Nẫu tại các địa chỉ uy tín trong nhà: Cửa hàng 'Quà Qui Nhơn' hoặc 'Siêu thị đặc sản Quy Nhơn Hương Biển'."
        }
      ]
    }
  },
  {
    day: 4,
    title: "Ngày 4: Chụp Ảnh Kỉ Niệm, Trả Phòng & Khởi Hành Về TP.HCM",
    dateSummary: "Chụp ảnh kỉ niệm quảng trường, bãi biển Vầng Trăng Khuyết, cơm Mậu & lên xe về TP.HCM",
    events: [
      {
        time: "06:30 – 07:30",
        icon: "☕",
        title: "Ăn sáng tại khách sạn hoặc đặc sản gần KS",
        desc: "Thưởng thức bữa sáng cuối cùng tại khách sạn Odin hoặc thưởng thức các món điểm tâm quen thuộc quanh khách sạn.",
        highlightPlaceId: 5,
        placeName: "Khách sạn Odin Quy Nhơn"
      },
      {
        time: "08:45 – 09:00",
        icon: "📸",
        title: "Đến Quảng trường trung tâm gần KS chụp ảnh kỉ niệm",
        desc: "Toàn đoàn tập trung tại Quảng trường trung tâm Nguyễn Tất Thành gần khách sạn ghi lại những bức hình tập thể lưu niệm kỷ niệm chuyến đi Quy Nhơn đáng nhớ.",
        highlightPlaceId: 2,
        placeName: "Quảng trường trung tâm Nguyễn Tất Thành"
      },
      {
        time: "09:20 – 09:40",
        icon: "🌊",
        title: "Đến Bãi biển Quy Nhơn (Bãi tắm Vầng Trăng Khuyết) chụp ảnh kỉ niệm",
        desc: "Dạo bước lần cuối trên bãi cát biển Vầng Trăng Khuyết, hít thở không khí biển trong lành và chụp ảnh lưu niệm chia tay thành phố biển.",
        highlightPlaceId: 2,
        placeName: "Bãi biển Quy Nhơn (Bãi tắm Vầng Trăng Khuyết)"
      },
      {
        time: "10:00 – 11:30",
        icon: "🧳",
        title: "Về khách sạn dọn dẹp hành lý & Trả phòng (trước 12:00)",
        desc: "Trở về khách sạn Odin, kiểm tra lại đồ đạc tư trang cá nhân, đóng gói hành lý cẩn thận và thực hiện thủ tục trả phòng (check-out) trước 12:00.",
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
        title: "Khởi hành về lại TP.HCM – Kết thúc chuyến đi",
        desc: "Đoàn lên xe khởi hành chặng đường về lại TP. Hồ Chí Minh. Tạm biệt Quy Nhơn thơ mộng, kết thúc tốt đẹp chuyến hành trình 4 ngày 3 đêm đầy ắp tiếng cười và kỷ niệm tuyệt vời cùng Thập Tứ Tour!",
        highlightPlaceId: null,
        placeName: null
      }
    ],
    weatherPlan: {
      condition: "Nếu thời tiết xấu / trời mưa trong Ngày 4:",
      solutions: [
        {
          title: "Hoạt động thay thế",
          detail: "Ăn uống, chụp ảnh kỷ niệm tại các quán ăn, quán cà phê hoặc nhà hàng gần đó (ban tổ chức sẽ chủ động gợi ý và hướng dẫn cụ thể)."
        },
        {
          title: "Thời gian tự do & Sảnh khách sạn",
          detail: "Thời gian dư ra các bạn có thể tự do nghỉ ngơi, trò chuyện tại sảnh khách sạn Odin hoặc tham quan mua sắm gần đó."
        },
        {
          title: "Quy định đoàn nghiêm ngặt",
          detail: "Phải báo cáo cho ban tổ chức/đoàn nắm thông tin nếu có thành viên rời đoàn riêng lẻ. Tập trung về lại khách sạn đúng giờ để cùng đoàn ăn trưa tại Cơm Mậu và lên xe về TP.HCM đúng lịch."
        }
      ]
    }
  }
];

