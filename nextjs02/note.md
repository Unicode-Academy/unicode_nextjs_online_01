# Middleware

Request ==> Middleware ==> RootLayout ==> Custom Layout ==> Page ==> Response

## Authentication

Request ==> Middleware:

- Lấy token từ Cookie
- Gọi api phía back-end để xác thực token
- Nếu thành công ==> Lấy được thông tin user ==> Lưu thông tin vào Session (File, Redis,...) ==> Trả về Client 1 session-id và lưu ở cookie

Ví dụ:

/profile: Middleware ==> Layout ==> profie/page.jsx

Tại sao không nên lưu user ở cookie?

- Người dùng có thể thay đổi

## Data Fetching

- Đọc dữ liệu từ API (Back-End)
- 2 loại:

* Server Data Fetching: Từ Server NextJS gọi đến Server của Back-End
* Client Data Fetching: Từ trình duyệt gọi đến Server của Back (Chú ý lỗi CORS)
