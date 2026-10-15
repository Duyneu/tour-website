/* ===================================================
   tours.js - Cẩm nang các địa danh du lịch Quy Nhơn
   7 địa danh nổi tiếng: Biển đảo, Thiên nhiên, Văn hóa lịch sử
   Hoàn toàn phi lợi nhuận, không có giá tiền / tour trọn gói
   =================================================== */

const TOURS = [
  // === 1: Kỳ Co & Eo Gió ===
  {
    id: 1,
    name: "Kỳ Co - Eo Gió",
    category: "bien-dao",
    location: "Nhơn Lý, TP. Quy Nhơn",
    duration: 1,
    image: "https://nhonlytourist.com/cache/image/605/images/nhonlytourist.com/thumbs/2025/04/image-1626-slide-1745202587-6805ad9bf0863.jpg",
    tags: ["Maldives Việt Nam", "Vách đá kỳ vĩ", "Lặn san hô"],
    description: "Kỳ Co được ví như 'Maldives của Việt Nam' với làn nước biển trong xanh ngọc bích hai màu rõ rệt, bãi cát trắng mịn ôm lấy vách núi hình vòng cung tuyệt đẹp. Cạnh đó là Eo Gió - eo biển hút gió quanh năm với con đường đi bộ ven vách đá ngoạn mục vươn ra biển lớn. Đây là điểm check-in mang tính biểu tượng số một mà bất cứ ai đến Quy Nhơn cũng phải ghé thăm.",
    itinerary: [
      {
        day: 1,
        title: "Khám phá Kỳ Co & Eo Gió trọn vẹn",
        detail: "Sáng: Di chuyển từ trung tâm Quy Nhơn qua cầu Thị Nại đến bến ca-nô Nhơn Lý. Lướt sóng ca-nô ra bãi biển Kỳ Co, tự do tắm biển làn nước trong vắt, lặn ngắm rạn san hô Hòn Sẹo. Trưa: Thưởng thức hải sản tươi rói đặc trưng làng chài Nhơn Lý. Chiều: Dạo bước trên cung đường ven biển Eo Gió, ngắm hoàng hôn lộng gió buông xuống biển Quy Nhơn."
      }
    ],
    highlights: [
      "Bãi cát trắng mịn và làn nước xanh 2 màu ngọc bích tại Kỳ Co",
      "Con đường ven vách đá tuyệt đẹp ôm sát biển tại Eo Gió",
      "Lặn ngắm rạn san hô tự nhiên và đi cano cao tốc lướt sóng",
      "Thưởng thức các món ốc biển, nhum nướng mỡ hành làng chài"
    ],
    tips: [
      "Thời điểm lý tưởng: Tháng 3 đến tháng 9 biển êm, trời trong xanh",
      "Nên đi ca-nô vào buổi sáng để biển lặng và nắng nhẹ đẹp nhất",
      "Chuẩn bị kem chống nắng, mũ rộng vành và túi chống nước cho điện thoại",
      "Đường ven vách đá Eo Gió gió khá mạnh, chú ý giữ chắc mũ nón"
    ]
  },

  // === 2: Cù Lao Xanh ===
  {
    id: 2,
    name: "Cù Lao Xanh (Đảo Nhơn Châu)",
    category: "bien-dao",
    location: "Xã đảo Nhơn Châu, Quy Nhơn",
    duration: 1,
    image: "https://img.cnt.traveloka.com/tvlk/blog/2022/09/cu-lao-xanh-1.jpg?tr=q-70,c-at_max,w-1000,h-600",
    tags: ["Đảo ngọc hoang sơ", "Hải đăng cổ 100 năm", "Làng chài yên bình"],
    description: "Cù Lao Xanh là hòn đảo ngọc nằm cách đất liền Quy Nhơn khoảng 24km. Đảo vẫn giữ trọn nét đẹp nguyên sơ thanh bình với rừng cây xanh mướt, bãi biển trong vắt nhìn thấu đáy và ngọn hải đăng sừng sững hơn 100 năm tuổi do người Pháp xây dựng. Đây là nơi lý tưởng cho những ai muốn tìm về với thiên nhiên yên ả và khám phá cuộc sống ngư dân bình dị.",
    itinerary: [
      {
        day: 1,
        title: "Hành trình một ngày trên xã đảo",
        detail: "Sáng: Lên cano cao tốc từ cảng Hàm Tử ra đảo (chỉ khoảng 30 phút). Khám phá bãi đá Thảo Nguyên kỳ thú với muôn hình vạn trạng. Leo núi chinh phục ngọn Hải Đăng Cù Lao Xanh và Cột cờ Tổ quốc. Trưa: Dùng cơm trưa thân mật cùng người dân đảo với mực nhảy, cua đá. Chiều: Lặn ngắm san hô bãi Gala, tắm biển thỏa thích trước khi lên cano về đất liền."
      }
    ],
    highlights: [
      "Ngọn hải đăng Plogamum cổ kính hơn một thế kỷ đứng uy nghiêm",
      "Cột cờ Thanh Niên khẳng định chủ quyền biển đảo thiêng liêng",
      "Bãi đá Thảo Nguyên với vô vàn phiến đá hình thù độc đáo",
      "Rạn san hô bãi Gala nông và cực kỳ đa dạng sắc màu"
    ],
    tips: [
      "Nên mang theo căn cước công dân để xuất trình khi ra đảo",
      "Nên thuê xe máy hoặc xe điện để dạo quanh vòng quanh đảo",
      "Hãy giữ gìn vệ sinh môi trường, không xả rác và không bẻ san hô"
    ]
  },

  // === 3: Hòn Khô ===
  {
    id: 3,
    name: "Hòn Khô (Đảo Nhơn Hải)",
    category: "bien-dao",
    location: "Làng chài Nhơn Hải, TP. Quy Nhơn",
    duration: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    tags: ["Con đường dưới biển", "Cây cầu gỗ ven núi", "Chèo thuyền thúng"],
    description: "Hòn Khô mang vẻ đẹp mộc mạc đúng như tên gọi, bao quanh bởi đá núi và biển cả trong vắt. Điểm độc đáo nhất tại đây là con đường đá ngầm xuyên biển dài hơn 500m nối liền đất liền với đảo, chỉ lộ rõ khi thủy triều rút. Cùng với cây cầu gỗ men theo vách núi và rạn san hô nguyên sinh ngay sát bờ, Hòn Khô mang đến cảm giác mạo hiểm và thư thái tuyệt vời.",
    itinerary: [
      {
        day: 1,
        title: "Khám phá Hòn Khô & Làng chài Nhơn Hải",
        detail: "Sáng: Vượt cầu Thị Nại đến làng chài Nhơn Hải. Đi thuyền thúng hoặc cano ra đảo Hòn Khô (chỉ 5-10 phút). Dạo bước check-in cây cầu gỗ dựng quanh vách đá, canh giờ thủy triều rút để đi bộ trên con đường đá xuyên biển. Chiều: Tham quan làng bích họa Nhơn Hải, tìm hiểu chương trình bảo tồn rùa biển quý hiếm."
      }
    ],
    highlights: [
      "Trải nghiệm đi bộ trên con đường đá lộ giữa biển khơi khi triều rút",
      "Cây cầu gỗ mộc mạc ôm sát vách đá nhìn thẳng ra đại dương",
      "Trải nghiệm cảm giác ngồi thuyền thúng lắc lư của ngư dân",
      "Khám phá làng bích họa làng chài yên bình ven biển Nhơn Hải"
    ],
    tips: [
      "Nên hỏi ngư dân trước về con nước để canh lúc con đường đá hiện lên",
      "Đá ven bờ có nhiều vỏ hàu sắc nhọn, nên mang giày lội nước",
      "Thử món bánh xèo mực nhảy tươi sống nổi tiếng tại làng chài"
    ]
  },

  // === 4: Ghềnh Ráng Tiên Sa & Bãi Xép ===
  {
    id: 4,
    name: "Ghềnh Ráng Tiên Sa - Bãi Xép",
    category: "thien-nhien",
    location: "Phường Ghềnh Ráng, TP. Quy Nhơn",
    duration: 1,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    tags: ["Bãi tắm Hoàng Hậu", "Mộ Hàn Mặc Tử", "Phim trường Hoa Vàng"],
    description: "Ghềnh Ráng Tiên Sa nằm ngay sát trung tâm thành phố, là quần thể danh thắng kết hợp giữa núi non hùng vĩ và bờ biển xanh ngắt. Nơi đây nổi tiếng với Bãi Đá Trứng (bãi tắm Hoàng Hậu Nam Phương) với hàng triệu viên đá cuội nhẵn bóng khổng lồ, viếng thăm nơi an nghỉ của thi sĩ tài hoa Hàn Mặc Tử. Cách đó không xa là Bãi Xép hoang sơ yên tĩnh, từng là bối cảnh nhiều cảnh quay tuyệt mỹ.",
    itinerary: [
      {
        day: 1,
        title: "Dạo bước thi ca và ngắm đá trứng",
        detail: "Sáng: Tham quan Ghềnh Ráng Tiên Sa, viếng thăm mộ thi sĩ Hàn Mặc Tử trên đồi Thi Nhân, ghé vườn thơ bút lửa Dzũ Kha. Xuống Bãi tắm Hoàng Hậu ngắm những hòn đá cuội tròn nhẵn như quả trứng chim khổng lồ. Chiều: Ghé Bãi Xép dạo bộ trên bờ cát vàng êm dịu, nhâm nhi cà phê ngắm sóng biển vỗ bờ."
      }
    ],
    highlights: [
      "Bãi tắm Hoàng Hậu với vô số viên đá tròn nhẵn độc nhất vô nhị",
      "Viếng đồi Thi Nhân và mộ nhà thơ Hàn Mặc Tử, tìm hiểu thơ văn xưa",
      "Ghé thăm nghệ nhân viết thơ bằng bút lửa trên gỗ thông",
      "Không gian làng chài Bãi Xép cổ kính, thanh bình nép mình dưới rặng dừa"
    ],
    tips: [
      "Địa điểm nằm ngay trong thành phố, di chuyển bằng xe máy cực kỳ thuận tiện",
      "Khi bước trên bãi đá trứng cần cẩn thận vì đá tròn nhẵn dễ trơn trượt",
      "Buổi chiều từ 16h là thời điểm ngắm hoàng hôn và chụp ảnh thơ mộng nhất"
    ]
  },

  // === 5: Hầm Hô Tây Sơn ===
  {
    id: 5,
    name: "Hầm Hô (Kỳ Quan Đá Rừng Tây Sơn)",
    category: "thien-nhien",
    location: "Huyện Tây Sơn, Bình Định",
    duration: 1,
    image: "https://images2.thanhnien.vn/528068263637045248/2025/5/9/1-ham-ho-hien-ra-nhu-net-cham-pha-sinh-dong-giua-nui-rung-hung-vianh-dung-nhan-1746806061076850294030.jpg",
    tags: ["Kỳ quan đá bàn", "Chèo thuyền trên suối", "Rừng nguyên sinh"],
    description: "Hầm Hô là một thắng cảnh thiên nhiên kỳ ảo thuộc huyện Tây Sơn, cách Quy Nhơn khoảng 50km. Tại đây, lòng sông rộng thu hẹp lại giữa hai vách đá dựng đứng, nơi những khối đá hoa cương khổng lồ muôn hình vạn trạng nhô lên giữa dòng nước trong vắt mát lạnh. Khung cảnh bạt ngàn của rừng xanh hòa cùng tiếng suối róc rách tạo nên một không gian dã ngoại sơn thủy hữu tình.",
    itinerary: [
      {
        day: 1,
        title: "Một ngày trở về với thiên nhiên đại ngàn",
        detail: "Sáng: Rời thành phố hướng về vùng đất Tây Sơn. Ngồi thuyền nan xuôi dòng kênh Lộc Giang tiến vào trung tâm danh thắng Hầm Hô giữa bóng cây rừng rợp mát. Trưa: Nghỉ chân bên ghềnh đá, thưởng thức gà nướng lá chanh, cơm lam, cá mương chiên giòn cuốn bánh tráng. Chiều: Trekking nhẹ qua các phiến đá Bàn Cờ Tiên, ngắm thác Vực Dông, tắm suối tự nhiên mát lành."
      }
    ],
    highlights: [
      "Đi thuyền nan êm ả lướt trên mặt suối trong vắt giữa hai vách đá kỳ vĩ",
      "Quần thể đá bàn tự nhiên kỳ ảo: Hòn Bóng, Đá Chuông, Bàn Cờ Tiên",
      "Không khí trong lành, mát mẻ tự nhiên của rừng nguyên sinh",
      "Ẩm thực suối rừng độc đáo: cá mương chiên giòn, chim mía Tây Sơn"
    ],
    tips: [
      "Nên chuẩn bị một bộ đồ dự phòng nếu bạn muốn tắm suối",
      "Đeo giày thể thao hoặc sandal có độ bám tốt để leo đá an toàn",
      "Có thể kết hợp tham quan cùng Bảo tàng Quang Trung trong cùng một ngày"
    ]
  },

  // === 6: Di sản Tháp Chăm ===
  {
    id: 6,
    name: "Quần Thể Tháp Chăm (Tháp Đôi & Tháp Bánh Ít)",
    category: "van-hoa",
    location: "Quy Nhơn & Tuy Phước, Bình Định",
    duration: 1,
    image: "https://mia.vn/media/uploads/blog-du-lich/thanh-do-ban-thap-banh-it-1755649067.jpg",
    tags: ["Di sản Chăm Pa", "Kiến trúc gạch nung", "Bánh Ít & Tháp Đôi"],
    description: "Bình Định là trung tâm văn hóa Chăm Pa xưa với mật độ tháp Chăm dày đặc và nguyên vẹn nhất Việt Nam. Tháp Đôi nằm ngay trung tâm thành phố với kiến trúc Angkor độc đáo, còn Tháp Bánh Ít tọa lạc trên đồi cao lộng gió ngắm trọn cánh đồng lúa Tuy Phước. Từng mảng tường gạch nung đỏ rực không vết mạch vữa và các tác phẩm điêu khắc thần thoại chạm khắc tinh xảo là kỳ quan kiến trúc vô giá.",
    itinerary: [
      {
        day: 1,
        title: "Dấu ấn vương triều ngàn năm",
        detail: "Sáng: Ghé thăm Tháp Đôi (nằm ngay đường Trần Hưng Đạo, TP. Quy Nhơn), chiêm ngưỡng các phù điêu thần linh điêu khắc trên đá sa thạch. Di chuyển khoảng 15km đến quần thể Tháp Bánh Ít gồm 4 tòa tháp cổ tọa lạc trên ngọn đồi. Chiều: Leo lên tháp chính ngắm toàn cảnh sông nước đồng quê Bình Định bình yên trong ánh nắng chiều."
      }
    ],
    highlights: [
      "Chiêm ngưỡng kỹ thuật xây gạch không mạch vữa bí ẩn của người Chăm cổ",
      "Quần thể 4 tòa tháp tại Tháp Bánh Ít với kiến trúc khác nhau trên đỉnh đồi",
      "Góc nhìn panorama tuyệt đẹp bao quát đồng quê và dòng sông Côn",
      "Tìm hiểu các tác phẩm điêu khắc tượng thần Shiva, chim thần Garuda"
    ],
    tips: [
      "Trang phục lịch sự, kín đáo khi vào tham quan bên trong các lòng tháp",
      "Nên mang theo ô dù hoặc nón rộng vành vì Tháp Bánh Ít phải leo đồi cao",
      "Thời điểm chụp ảnh kiến trúc đẹp nhất là vào buổi sáng sớm hoặc 15h30 chiều"
    ]
  },

  // === 7: Bảo tàng Quang Trung ===
  {
    id: 7,
    name: "Bảo Tàng Quang Trung (Miền Đất Võ)",
    category: "van-hoa",
    location: "Thị trấn Phú Phong, Tây Sơn, Bình Định",
    duration: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    tags: ["Anh hùng áo vải", "Nhạc võ Tây Sơn", "Cây me cổ thụ 300 năm"],
    description: "Bảo tàng Quang Trung được xây dựng ngay trên chính quê hương của ba anh em Tây Sơn Tam Kiệt (Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ). Nơi đây lưu giữ hàng trăm hiện vật quý giá gắn liền với cuộc khởi nghĩa nông dân áo vải lẫy lừng thế kỷ 18. Đặc biệt, du khách sẽ được thưởng thức màn biểu diễn Nhạc võ Tây Sơn hào hùng với dàn trống trận rực lửa và xem những đường quyền võ cổ truyền Bình Định nức tiếng gần xa.",
    itinerary: [
      {
        day: 1,
        title: "Hào khí Tây Sơn & Tinh hoa Đất Võ",
        detail: "Sáng: Khởi hành đi Tây Sơn, viếng thăm Điện thờ Tây Sơn Tam Kiệt, uống ngụm nước ngọt mát lành từ Giếng nước xưa và nghỉ chân dưới Cây me cổ thụ hơn 300 năm tuổi. Xem biểu diễn Nhạc võ trống trận Tây Sơn và múa võ cổ truyền. Chiều: Tham quan khu trưng bày hiện vật, súng thần công, binh khí và các trận đánh lịch sử Ngọc Hồi - Đống Đa."
      }
    ],
    highlights: [
      "Chiêm bái Điện thờ Tây Sơn Tam Kiệt và các tướng lĩnh phong trào Tây Sơn",
      "Chiêm ngưỡng Cây me cổ thụ 300 năm tuổi và uống nước Giếng đá tổ tiên",
      "Mãn nhãn với màn trình diễn trống trận Tây Sơn 12 chiếc trống hào sảng",
      "Tận mắt xem các thế võ cổ truyền Bình Định - Di sản văn hóa phi vật thể"
    ],
    tips: [
      "Các suất biểu diễn nhạc võ thường diễn ra vào buổi sáng (khoảng 9h00 - 10h00)",
      "Khuôn viên bảo tàng rất rộng và rợp bóng cây xanh mát, thích hợp đi dạo",
      "Đừng quên mua đặc sản rượu Bàu Đá và nem chợ Huyện gần đó về làm quà"
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
