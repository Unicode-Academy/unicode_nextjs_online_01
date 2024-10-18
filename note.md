# NextJS Online

## Cách hoạt động của website

- Gõ địa chỉ tên miền lên trình duyệt ==> Gửi yêu cầu tới DNS Server ==> Trả về địa chỉ IP cho trình duyệt
- Trình duyệt dựa vào địa chỉ IP đã có bước trên ==> Gửi yêu cầu tới Server chứa website ==> Server trả về phản hồi (HTML)

## Làm thế nào để Client và Server giao tiếp được với nhau?

- Thông qua các giao thức web: HTTP, WebSocket,...
- Khi Client gửi yêu cầu tới Server thông qua HTTP gọi là HTTP Request
- Khi Server phản hồi cho Client thông qua HTTP gọi là HTTP Response
- HTTP là giao thức không liên tục

## Thông tin Request - Response

HTTP Request

- Method: GET, POST, PUT, PATCH, DELETE...
- URL: Đường dẫn của Server
- Headers: Thông tin đi kèm của Request
- Body: Nội dung cần gửi lên Server

HTTP Response

- Status Code
- Response Header
- Response Body

## Các kiến thức cần chuẩn bị

- HTML + CSS
- Javascript

* Cú pháp, kiểu dữ liệu,...
* DOM
* ES6: biến, arrow function, rest parameter, spread, dustructuring, enhanced object literal, module (import, export),...
* Fetch API hoặc kiến thức tương đương: XHR, Axios (XHR)

* Package (npm, yarn,...)

## Cơ chế Render của website

- Client Side Rendering (CSR)
- Server Side Rendering (SSR)

NextJS sử dụng cả 2 cơ chế, trong đó SSR là mặc định
