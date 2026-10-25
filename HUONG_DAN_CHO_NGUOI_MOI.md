# 📘 Hướng Dẫn Dành Cho Người Mới: Cách Xây Dựng Website "Thập Tứ Tour" Từ Con Số 0

> **Chào bạn!** Nếu bạn là người mới bắt đầu học lập trình web hoặc là một thành viên của lớp 10A4 muốn hiểu trang web **Thập Tứ Tour (https://104tour.vercel.app)** hoạt động như thế nào, tài liệu này được viết riêng cho bạn.
> 
> Mọi khái niệm kỹ thuật ở đây đều được giải thích bằng ngôn ngữ gần gũi, trực quan và dễ hiểu nhất!

---

## 🧭 PHẦN 1: BỨC TRANH TỔNG QUAN — LÀM WEB GIỐNG NHƯ XÂY MỘT NGÔI NHÀ

Để tạo ra một trang web hoàn chỉnh, chúng mình sử dụng bộ 3 công nghệ cốt lõi của Internet:

```
┌────────────────────────────────────────────────────────┐
│                   WEBSITE HOÀN CHỈNH                   │
├─────────────────┬───────────────────┬──────────────────┤
│      HTML5      │       CSS3        │   JAVASCRIPT     │
│  (Khung xương)  │ (Trang trí/Màu)   │ (Hành động/Não)  │
├─────────────────┼───────────────────┼──────────────────┤
│ Cột, tường,     │ Màu sơn biển cả,  │ Chuyển tab ngày, │
│ các phòng, cửa, │ hiệu ứng kính mờ, │ đổi Sáng/Tối,    │
│ chữ và video.   │ bóng đổ, bố cục.  │ phát video, lọc. │
└─────────────────┴───────────────────┴──────────────────┘
                           │
                           ▼
              ĐƯA LÊN MẠNG (DEPLOYMENT)
       GitHub (Kho mã nguồn) ➔ Vercel (Máy chủ)
```

1. **HTML5 (`index.html`, `tour-detail.html`) — Khung xương của ngôi nhà:**
   - Quyết định trên trang web có những gì: có logo ở trên cùng, có thanh menu, có banner biển Quy Nhơn, có video, có danh sách ngày đi chơi và chân trang (footer).
2. **CSS3 (`css/style.css`) — Sơn tường, nội thất & thẩm mỹ:**
   - Giúp ngôi nhà trở nên lung linh: chọn tông màu xanh biển Quy Nhơn (`#0369a1`), căn lề ngay ngắn, bo tròn các góc thẻ, tạo hiệu ứng phát sáng, làm cho giao diện co giãn vừa vặn trên cả màn hình điện thoại lẫn máy tính (Responsive Design).
3. **JavaScript (`js/main.js`, `js/tours.js`, `js/i18n.js`) — Hệ thống điện thông minh:**
   - Giúp ngôi nhà "sống dậy": khi bấm nút "Ngày 2" thì nội dung Ngày 2 hiện ra, khi bấm đổi giao diện thì bật nền tối (Dark Mode), khi bấm cờ Anh/Việt thì chữ tự dịch, khi rê chuột thì thẻ nghiêng 3D.
4. **Git & Vercel — Chiếc cầu nối ra thế giới:**
   - **Git/GitHub:** Giúp lưu trữ mã nguồn an toàn trên mạng, quản lý lịch sử từng lần sửa đổi.
   - **Vercel:** Máy chủ đám mây miễn phí, mỗi khi chúng ta đẩy code mới lên GitHub, Vercel sẽ tự động cập nhật trang web chỉ trong 10 đến 20 giây!

---

## 📁 PHẦN 2: BẢN ĐỒ THƯ MỤC — FILE NÀO LÀM NHIỆM VỤ GÌ?

Khi mở thư mục dự án, bạn sẽ thấy cấu trúc rất gọn gàng:

```
tour-website/
├── 📄 index.html              <-- Trang chủ toàn cảnh (Hero, Video, Lịch trình, Danh mục...)
├── 📄 tour-detail.html         <-- Trang xem bài viết chi tiết của từng địa danh
├── 📄 contact.html             <-- Trang phụ tự động chuyển hướng về mục Về chúng tôi
├── 🎨 css/
│   └── style.css              <-- "Tủ trang điểm" chứa toàn bộ mã làm đẹp & Dark Mode
├── 🧠 js/
│   ├── tours.js               <-- "Kho dữ liệu": chứa danh sách điểm đến, ảnh, lịch trình 4 ngày
│   ├── i18n.js                <-- "Từ điển": chứa bản dịch Tiếng Việt & Tiếng Anh
│   └── main.js                <-- "Bộ não điều khiển": xử lý toàn bộ tương tác bấm nút, cuộn trang
├── 🎬 quy-nhon.mp4            <-- File video hành trình Quy Nhơn thực tế của lớp 10A4
├── 🖼️ about-quynhon.jpg        <-- Ảnh bìa toàn cảnh biển Quy Nhơn làm poster video
├── 🖼️ logo.png                <-- Logo biểu tượng thuyền buồm của Thập Tứ Tour
├── 🌐 favicon.svg             <-- Icon nhỏ hiển thị trên tab của trình duyệt
└── ⚙️ vercel.json             <-- Cấu hình máy chủ hosting Vercel
```

---

## 🛠️ PHẦN 3: BÓC TÁCH CÁCH LÀM TỪNG TÍNH NĂNG "XỊN XÒ"

### 1. Lịch trình 4 Ngày 3 Đêm & Nút chuyển ngày thông minh
- **Dữ liệu được lưu ở đâu?**
  Trong file `js/tours.js`, chúng mình tạo một biến danh sách `TIMELINE_DATA`. Mỗi ngày là một khối thông tin gồm: số ngày, tiêu đề, ngày tháng thực tế, danh sách các mốc giờ và phương án dự phòng khi trời mưa.
- **Cách hiển thị lên màn hình:**
  Trong file `js/main.js`, hàm `renderTimeline(dayNumber)` sẽ lấy dữ liệu của ngày đó, ghép vào các thẻ HTML tương ứng rồi chèn vào `<div id="timelineContainer">`.
- **Nút điều hướng dưới chân lịch trình:**
  Có 4 nút: `« Về ngày đầu`, `‹ Ngày trước đó`, `Ngày tiếp theo ›`, `Đến ngày cuối »`.
  Khi bạn bấm nút, hàm `switchTimelineDay(targetDay)` làm 3 việc:
  1. Tô sáng tab ngày tương ứng ở trên.
  2. Vẽ lại lịch trình của ngày mới.
  3. Tự động cuộn trang êm ái lên đúng thanh chọn Ngày 1 / 2 / 3 / 4 (dừng cách mép trên 80px để không bị thanh menu che khuất).
  4. Nếu đang ở Ngày 1, nút "Ngày trước đó" tự động bị mờ (`disabled`). Nếu ở Ngày 4, nút "Ngày tiếp theo" tự động bị khóa lại!

---

### 2. Chế độ Tối (Dark Mode) chuẩn quốc tế & Nút chuyển Sáng/Tối
- **Vấn đề ban đầu:** Trên một số trình duyệt điện thoại (như Chrome, Samsung Internet), khi máy bật chế độ tối, trình duyệt tự động "đảo màu cưỡng ép" (Force Dark). Vì nó không hiểu thiết kế của mình nên làm màu bị loang lổ: chỗ thì đen thui, chỗ thì trắng bóc, chữ tệp vào nền không đọc được.
- **Cách giải quyết:**
  1. Thêm thẻ `<meta name="color-scheme" content="light dark">` vào thẻ `<head>` để nói với trình duyệt: *"Website này đã có chế độ tối riêng của tác giả, xin đừng đảo màu tự động!"*
  2. Tạo thuộc tính `data-theme="dark"` trên thẻ `<html>`.
  3. Trong file `css/style.css`, viết quy tắc: khi ở chế độ tối, nền chính chuyển sang xanh biển đêm sâu thẳm (`#0b1320` - Midnight Navy), các thẻ thông tin đổi sang màu xanh đen trầm (`#151f32`), chữ giữ nguyên màu sáng rõ nét (`#f1f5f9`).
  4. **Nút bấm ☀️ / 🌙 trên thanh menu:** Khi bấm, JavaScript sẽ đổi qua lại giữa `light` và `dark`, đồng thời lưu lựa chọn vào bộ nhớ trình duyệt (`localStorage.setItem('thap_tu_theme', newTheme)`). Khi bạn tắt trang web đi mở lại, giao diện vẫn nhớ đúng chế độ bạn thích!

---

### 3. Đa ngôn ngữ (Song ngữ Tiếng Việt & Tiếng Anh)
- **Cách hoạt động:**
  File `js/i18n.js` đóng vai trò như một cuốn từ điển gồm 2 phần: `I18N.vi` và `I18N.en`.
- Mỗi đoạn chữ trên trang HTML đều được gắn một chiếc "nhãn", ví dụ:
  ```html
  <h2 data-i18n="about_title">Về Chúng Tôi</h2>
  ```
- Khi bạn nhấn nút chuyển sang **🇬🇧 EN**, hàm `switchLanguage('en')` sẽ duyệt qua toàn bộ trang web, tìm những chỗ có nhãn `data-i18n` và thay thế chữ Tiếng Việt bằng chữ Tiếng Anh tương ứng trong tích tắc mà **không cần tải lại trang**!

---

### 4. Trình phát Video Quy Nhơn tích hợp
- File video `quy-nhon.mp4` dung lượng khoảng 22MB được đặt ngay giữa dải chữ chạy Marquee và phần "Về Chúng Tôi".
- **Tối ưu tốc độ tải:**
  Nếu để video tự tải ngay khi vừa mở web thì người dùng điện thoại sẽ bị tốn dữ liệu và đơ máy. Vì vậy, video được gán thuộc tính `preload="metadata"` (chỉ tải thông số cơ bản) và `poster="about-quynhon.jpg"` (hiển thị ảnh bìa sắc nét).
- Ở giữa video có một nút tròn Play phát sáng nhấp nháy (`animation: playPulse`). Khi bạn chạm vào nút Play, lớp ảnh bìa sẽ biến mất và video bắt đầu phát mượt mà với âm thanh và thanh điều khiển đầy đủ.

---

### 5. Xem bài viết chi tiết từng địa danh (`tour-detail.html`)
- Bạn có để ý khi bấm vào Kỳ Co thì thanh địa chỉ hiện `tour-detail.html?id=ky-co`, còn bấm vào Eo Gió thì hiện `tour-detail.html?id=eo-gio` không?
- Đó gọi là **Truy vấn tham số URL (URL Query Parameter)**.
- Khi trang `tour-detail.html` mở lên:
  1. JavaScript đọc phần `?id=...` trên thanh địa chỉ.
  2. Tìm kiếm trong kho dữ liệu `tours.js` xem địa danh nào có mã trùng khớp.
  3. Lấy tên, hình ảnh, bài giới thiệu dài, mốc thời gian ghé thăm và các lưu ý chuẩn bị để vẽ ra một trang bài viết hoàn chỉnh!

---

### 6. Những hiệu ứng thị giác hiện đại (Visual Polish)
- **Magic Cursor (Chuột ma thuật):** Trên máy tính, có một chấm tròn nhỏ và vòng tròn đuổi theo con trỏ chuột. Khi rê vào các nút bấm, vòng tròn sẽ nở to và phát sáng màu vàng cam.
- **3D Tilt Card (Nghiêng thẻ 3D):** Khi bạn rê chuột qua các tấm thẻ (card), tấm thẻ sẽ khẽ nghiêng theo hướng chuột và có vệt sáng lướt qua như một tấm thẻ bài tráng gương.
- **Scroll Progress Bar:** Dải màu gradient chạy dài ở mép trên cùng màn hình cho bạn biết mình đã đọc được bao nhiêu phần trăm trang web.

---

## 🚀 PHẦN 4: 6 BƯỚC XÂY DỰNG TỪ ĐẦU ĐẾN CUỐI

Nếu bạn muốn tự làm một trang web tương tự cho lớp hoặc sở thích cá nhân, đây là lộ trình chuẩn:

```
[BƯỚC 1] Chuẩn bị nội dung & hình ảnh chuyến đi
   │
[BƯỚC 2] Viết khung sườn HTML (tạo các thẻ, tiêu đề, nút bấm)
   │
[BƯỚC 3] Trang trí CSS (chọn màu sắc, font chữ, chia cột)
   │
[BƯỚC 4] Lập trình JavaScript (chuyển tab, đổi ngôn ngữ, lọc tìm kiếm)
   │
[BƯỚC 5] Thử nghiệm trên điện thoại (đảm bảo không bị vỡ giao diện)
   │
[BƯỚC 6] Đưa lên GitHub và kết nối với Vercel để lấy link chia sẻ
```

---

## 💡 PHẦN 5: BÍ KÍP TỰ CHỈNH SỬA WEBSITE (DÀNH CHO BẠN)

Sau này, nếu bạn muốn tự tay thay đổi thông tin trên web, hãy mở Visual Studio Code và xem cẩm nang tra cứu nhanh dưới đây:

### 1. Muốn sửa giá tiền hoặc câu chữ giới thiệu tour:
- **Tiếng Việt:** Mở file `js/i18n.js` ➔ tìm mục `cost_heading` hoặc `hero_desc` để sửa chữ.
- **Tiếng Anh:** Kéo xuống mục `en` trong cùng file `js/i18n.js` để cập nhật bản dịch tương ứng.
- **Lưu ý:** Nếu có chữ số tiền kèm đơn vị (ví dụ `5.920.000đ`), hãy giữ thẻ `<strong class="price-nowrap">5.920.000đ</strong>` để chữ không bị rớt dòng trên màn hình điện thoại nhỏ.

### 2. Muốn thêm một địa điểm ăn uống hoặc tham quan mới:
- Mở file `js/tours.js`.
- Kéo xuống mảng `TOURS = [...]`, copy một khối địa điểm có sẵn và dán xuống dưới, sau đó đổi:
  - `id`: tên viết liền không dấu (VD: `banh-canh-ba-o`).
  - `name`: tên địa danh (VD: `Bánh Canh Chả Cá Bà O`).
  - `category`: thuộc nhóm nào (`food`, `island`, `culture`...).
  - `image`: link ảnh chất lượng cao.
  - `description`: lời giới thiệu cảm xúc của bạn.
- Trang web sẽ **tự động thêm thẻ card mới** vào danh sách địa điểm mà bạn không cần phải sửa HTML!

### 3. Muốn thay đổi màu sắc chủ đạo của toàn bộ trang:
- Mở file `css/style.css`.
- Ở ngay đầu trang (khoảng dòng 14), bạn sẽ thấy phần `:root`:
  ```css
  :root {
    --primary: #0369a1;       /* Màu xanh biển chính */
    --primary-dark: #075985;  /* Màu xanh biển đậm */
    --accent: #f59e0b;        /* Màu vàng cam điểm nhấn */
  }
  ```
- Chỉ cần đổi mã màu ở đây, toàn bộ nút bấm, thanh tiêu đề và đường viền trên toàn trang web sẽ đổi màu đồng loạt!

### 4. Muốn cập nhật lên mạng sau khi đã sửa xong trên máy:
Mở cửa sổ dòng lệnh (Terminal / PowerShell) trong thư mục dự án và gõ đúng 3 câu lệnh thần thánh:

```bash
# 1. Gom tất cả các file bạn vừa chỉnh sửa
git add -A

# 2. Ghi chú nội dung bạn vừa sửa (ví dụ sửa giá tiền)
git commit -m "cap nhat gia tien tour va them dia diem moi"

# 3. Đẩy lên GitHub (Vercel sẽ tự động cập nhật web trong 15 giây!)
git push origin master
```

---

## 🏆 LỜI KẾT
Trang web **Thập Tứ Tour** không sử dụng những công nghệ cao siêu hay các thư viện cồng kềnh, mà được xây dựng từ nền tảng **HTML, CSS và JavaScript thuần khiết nhất**. 

Chính sự tỉ mỉ trong từng chi tiết — từ khả năng tương thích màn hình nhỏ, chế độ Dark Mode bảo vệ mắt, cho đến những hiệu ứng mượt mà — đã làm nên một dự án học sinh lớp 10A4 vừa chỉn chu, vừa mang đậm tinh thần tuổi trẻ!

Chúc bạn có những trải nghiệm thật thú vị khi khám phá và làm chủ thế giới lập trình web! 🌊✨
