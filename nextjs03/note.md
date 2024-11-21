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

Đăng xuất

--> Gọi api /logout --> Gửi kèm token lên back-end
--> Xóa session
--> Xóa token ở cookie

## Fetch Wrapper API

## Đăng nhập thông qua mạng xã hội

1. Bản chất

- Sử dụng thông tin tài khoản mạng xã hội của user
- Lưu vào thông tin đó vào Database của ứng dụng (online.unicode.vn) --> Tự động đăng nhập
- OAuth 2.0

2. Luồng chạy

2.1. Bước 1: Tạo redirect link

- Nhiệm vụ: Back-End làm
- Font-End: Call API tới back-end --> Back-end sẽ trả về Redirect Link (Hoặc gọi trực tiếp link api --> back-end sẽ tự chuyển hướng)
- User đăng nhập tk mạng xã hội --> Chuyển sang bước 2

  2.2. Bước 2: Xử lý để lấy thông tin user

- Bước 1 sau khi user đăng nhập xong --> Tự động chuyển hướng về callback url (Ứng dụng của mình)
- Trong callback (Back-End) sẽ tự động xử lý lấy thông tin user mạng xã hội --> insert database --> Tạo access token và refresh token (Của ứng dụng chứ không phải của mạng xã hội)
- Chuyển hướng tới URL của front-end --> Để front-end call và lấy về token
- Lưu vào cookie / localStorage --> Làm mới lại trang

  2.3. Đăng xuất

Xóa token, session, blacklist ==> Không liên quan đến mạng xã hội (Xử lý phía ứng dụng)
