# Xử lý xác thực trong NextJS

- Lấy token ở phía Server thông qua middleware (Đọc từ cookie)
- Verify token ở middleware --> Lấy được thông tin user --> Lưu vào session --> Áp dụng với các tình huống muốn lấy nhanh thông tin user (Tránh việc có nhiều request tới back-end)
- Với các yêu cầu bắt buộc phải xác thực bên Back-end --> Gửi kèm Token --> Đọc trực tiếp từ cookie
- Với các yêu cầu cần sử dụng token nhưng lại đang ở client component

* Viết router handler để lấy token thông qua cookie
* Share trực tiếp token từ middleware qua client component (Dùng context)

Lưu ý:

Khi xử lý từng request cần Authorization

- Lấy token -> Kèm header
- Thông tin trả về thành công --> Thực hiện update giao diện
- Token bị hết hạn --> Gọi API refresh token -->

* Trả về được token mới --> Lưu token mới vào cookie --> Gọi lại request bị failed
* Refresh cũng hết hạn --> Đăng xuất

Vấn đề: Trên 1 trang có nhiều request cùng lúc --> Cấp lại refresh nhiều

- Request 1 --> Thành công
- Request 2 --> failed --> Refresh token --> Gọi lại request 2
- Request 3 --> failed --> Refresh token --> Gọi lại request 3
- Request 4 --> failed --> Refresh token --> Gọi lại request 4
