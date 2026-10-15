/* ===================================================
   tours.js - Cẩm nang các địa danh du lịch Quy Nhơn
   7 địa danh nổi tiếng: Biển đảo, Thiên nhiên, Văn hóa lịch sử
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

  // === 2: Biển Quy Nhơn & Quảng trường Nguyễn Tất Thành ===
  {
    id: 2,
    name: "Biển Quy Nhơn & Quảng Trường Nguyễn Tất Thành",
    category: "thien-nhien",
    location: "Trung tâm TP. Quy Nhơn (gần Khách sạn Odin)",
    visitTime: "15:30 – 17:30 • Ngày 1 & Ngày 2",
    duration: "Buổi chiều Ngày 1 & Ngày 2",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["15:30 Chiều", "Check-in trung tâm", "Dạo bờ biển", "Hoàng hôn"],
    description: "Nằm ngay trung tâm thành phố và chỉ cách Khách sạn Odin vài bước chân, bờ biển Quy Nhơn uốn cong hình vầng trăng khuyết thơ mộng cùng Quảng trường trung tâm Nguyễn Tất Thành rộng lớn là không gian dạo mát, check-in lý tưởng của đoàn trong cả hai buổi chiều Ngày 1 và Ngày 2.",
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
      }
    ],
    highlights: [
      "Thời gian ghé thăm: 15:30 – 17:30 chiều Ngày 1 và Ngày 2",
      "Quảng trường Nguyễn Tất Thành với tượng đài Bác Hồ và thân phụ trang nghiêm",
      "Bờ cát thoai thoải, nước biển hiền hòa ngay trong lòng thành phố",
      "Vị trí đắc địa, đi bộ thuận tiện từ khách sạn nghỉ ngơi"
    ],
    tips: [
      "Thời điểm nắng dịu, gió mát lý tưởng nhất để chụp ảnh kỷ niệm tập thể",
      "Mang giày đi bộ hoặc dép êm ái để thoải mái dạo bước ven bờ biển",
      "Ghé các quán cà phê Surf Bar hoặc view biển gần đó để hóng gió"
    ]
  },

  // === 3: Ẩm Thực Xuân Diệu & Chợ Đêm Quy Nhơn ===
  {
    id: 3,
    name: "Phố Hải Sản Xuân Diệu & Chợ Đêm Quy Nhơn",
    category: "van-hoa",
    location: "Đường Xuân Diệu & Chợ đêm đường An Dương Vương",
    visitTime: "18:00 – 22:00 • Tối Ngày 1 & Ngày 2",
    duration: "Buổi tối Ngày 1 & Ngày 2",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    tags: ["Tối 18:00 - 22:00", "Hải sản tươi sống", "Chợ đêm", "Đặc sản"],
    description: "Thiên đường ẩm thực đêm của Quy Nhơn trải dài dọc theo con đường biển Xuân Diệu với các quán hải sản nức tiếng: Hải sản Duy Mập (264 Xuân Diệu), Lộc Biển (48 Xuân Diệu), Cơm Ngon Mr Mộc... Tiếp nối là Chợ Đêm Quy Nhơn rộn rã sắc màu với hàng chục món ăn vặt xứ Nẫu và quầy quà lưu niệm phong phú.",
    itinerary: [
      {
        day: 1,
        title: "18:00 - 22:00 Ngày 1: Đại tiệc hải sản & Khám phá Chợ Đêm",
        detail: "Ăn tối hải sản tại Hải Sản Quy Nhơn - 48 Xuân Diệu (Lộc Biển) với tôm tít, ghẹ hấp, ốc hương, lẩu hải sản. Sau 20:00 đoàn dạo Chợ đêm mua quà lưu niệm, ăn bánh xèo tôm nhảy, kem cuộn."
      },
      {
        day: 2,
        title: "18:00 - 22:00 Ngày 2: Thưởng thức hải sản Duy Mập & Mua quà lưu niệm",
        detail: "Ăn tối tại Nhà hàng hải sản Duy Mập (264 Xuân Diệu) hoặc Mr Mộc. Tiếp tục dạo phố đêm, mua tré bó rơm, nem chợ Huyện, bánh ít lá gai mang về làm quà."
      }
    ],
    highlights: [
      "Thời gian ghé thăm: 18:00 – 22:00 cả hai đêm Ngày 1 & Ngày 2",
      "Hải sản biển tươi roi rói được tuyển chọn trực tiếp tại bể",
      "Không khí chợ đêm sôi động với hàng trăm gian hàng quà lưu niệm",
      "Mua các món quà xứ Nẫu: tré Bình Định, bánh ít lá gai, khô mực"
    ],
    tips: [
      "Quán Duy Mập và Lộc Biển rất đông khách, đi theo đoàn nên đến sớm để chọn bàn view biển đẹp",
      "Nhớ hỏi giá trước khi chọn các loại ốc hiếm tại quầy hải sản",
      "Chuẩn bị một ít tiền mặt nhỏ để thuận tiện ăn vặt tại chợ đêm"
    ]
  },

  // === 4: Trung tâm Khám Phá Khoa Học Vũ Trụ ===
  {
    id: 4,
    name: "Trung Tâm Khám Phá Khoa Học Vũ Trụ (ExploraScience)",
    category: "van-hoa",
    location: "Đại lộ Khoa học, Ghềnh Ráng, TP. Quy Nhơn",
    visitTime: "Phương án thay thế • Ngày 2 khi thời tiết xấu",
    duration: "Buổi sáng/chiều Ngày 2",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Phương án dự phòng", "Khoa học vũ trụ", "Nhà chiếu hình vòm", "Độc đáo"],
    description: "ExploraScience Quy Nhơn là Trung tâm khám phá khoa học đầu tiên tại Việt Nam và thứ hai của Đông Nam Á. Với nhà chiếu hình vũ trụ mái vòm hiện đại cùng 7 phòng khám phá khoa học tương tác trực quan (Sao Kim, Sao Hỏa, từ trường, robot...), đây là điểm đến thay thế hoàn hảo và cực kỳ thú vị cho đoàn nếu Ngày 2 thời tiết xấu không thể ra biển Kỳ Co.",
    itinerary: [
      {
        day: 2,
        title: "Kế hoạch thời tiết xấu: Khám phá dải ngân hà",
        detail: "Nếu Ngày 2 trời mưa to hoặc biển động, đoàn sẽ di chuyển đến Trung tâm ExploraScience để xem phim khoa học vũ trụ vòm 360 độ và trải nghiệm tương tác vật lý thực tế."
      }
    ],
    highlights: [
      "Điểm đến ưu tiên hàng đầu trong phương án dự phòng thời tiết Ngày 2",
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
    name: "Khách Sạn Odin Quy Nhơn (Điểm Lưu Trú)",
    category: "thien-nhien",
    location: "Trung tâm TP. Quy Nhơn",
    visitTime: "Check-in 11:30 - 14:00 Ngày 1 • Lưu trú xuyên suốt",
    duration: "Toàn bộ chuyến đi",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    tags: ["Trụ sở đoàn", "Nghỉ ngơi tiện nghi", "Gần biển", "Ăn sáng ngon"],
    description: "Khách sạn Odin là 'căn cứ địa' và điểm dừng chân lưu trú chính thức của đoàn trong suốt 2 ngày tại Quy Nhơn. Với vị trí đắc địa gần biển và quảng trường trung tâm, tiện nghi hiện đại và buffet sáng chu đáo, đây là nơi giúp các thành viên nghỉ ngơi, phục hồi thể lực sau chặng xe dài từ TP.HCM.",
    itinerary: [
      {
        day: 1,
        title: "11:30 - 15:30 Ngày 1: Cập bến, gửi đồ, nhận phòng & nghỉ ngơi",
        detail: "11:30 xe đưa đoàn đến khách sạn Odin gửi hành lý và nghỉ ngơi nhẹ. 12:30 ăn trưa đặc sản. 14:00 nhận phòng chính thức, tắm rửa và ngủ bù lấy lại năng lượng."
      },
      {
        day: 2,
        title: "06:30 - 07:30 Ngày 2: Nạp năng lượng bữa sáng",
        detail: "Ăn sáng tại khách sạn hoặc thưởng thức bún cá, bánh hỏi lòng heo trước khi khởi hành đi Eo Gió - Kỳ Co."
      }
    ],
    highlights: [
      "Điểm tập kết hành lý và lưu trú chính của Thập Tứ Tour",
      "Phòng ốc tiện nghi, sạch sẽ, máy lạnh và giường đệm êm ái",
      "Vị trí trung tâm thuận tiện di chuyển ra biển và chợ đêm",
      "Nếu trời mưa: Có sẵn phương án nghỉ ngơi và ăn uống ấm cúng ngay tại KS"
    ],
    tips: [
      "Nhận thẻ phòng nhớ giữ cẩn thận và kiểm tra hành lý cá nhân khi nhận phòng",
      "Nếu chiều Ngày 1 trời mưa, có thể chọn nghỉ ngơi tại phòng hoặc ăn tại nhà hàng gần KS",
      "Khách sạn có lễ tân hỗ trợ dù và che chắn khi đi lại"
    ]
  },

  // === 6: Điểm hẹn ẩm thực đặc sản ===
  {
    id: 6,
    name: "Quán Ăn Đặc Sản: Bún Cá Ngọc Liên & Nem Chả Lợi",
    category: "van-hoa",
    location: "Đường Nguyễn Huệ & Trung tâm TP. Quy Nhơn",
    visitTime: "12:30 – 14:00 Ngày 1 & Sáng Ngày 2",
    duration: "Bữa trưa Ngày 1 & Sáng Ngày 2",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    tags: ["12:30 Ngày 1", "Bún cá Ngọc Liên", "Nem chả Lợi", "Bánh hỏi"],
    description: "Chuyến đi Quy Nhơn không thể trọn vẹn nếu thiếu đi hương vị bún cá thanh ngọt từ nước hầm xương cá tươi ngon tại quán Bún cá Ngọc Liên lừng danh, hay những cuộn nem nướng vàng rộm cuốn bánh tráng rau sống tại Nem Chả Lợi. Đây là các điểm dừng chân nạp năng lượng chính thức trong lịch trình đoàn.",
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
      }
    ],
    highlights: [
      "Thưởng thức 2 thương hiệu ẩm thực biểu tượng số 1 xứ Nẫu",
      "Bún chả cá ngọt thanh tự nhiên từ cá thu, cá mối tươi sống",
      "Nem nướng thơm lừng chấm cùng nước sốt đậu phộng gia truyền béo ngậy",
      "Món ăn nhẹ bụng, tiếp thêm năng lượng nhanh chóng cho cả đoàn"
    ],
    tips: [
      "Quán Ngọc Liên buổi trưa đông, cả đoàn vào theo nhóm để được phục vụ nhanh",
      "Nên thử thêm ly nước ép dứa hoặc nước sâm thanh mát tại quán",
      "Nếu trời mưa buổi chiều, có các phương án gần KS: Gia Vy 2 (1km), Nhà hàng 4Q (1.1km), Phở Danh, Cơm Thị"
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
   TIMELINE_DATA - Dữ liệu chi tiết lịch trình 2 ngày đầu
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
        desc: "Về phòng khách sạn Odin nghỉ ngơi, tổng kết trọn vẹn 2 ngày tuyệt vời tại thành phố biển Quy Nhơn.",
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
  }
];

