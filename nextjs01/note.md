# Nextjs 01

## Kiến thức căn bản React

### Component

- Thành phần trong React giúp tách giao diện của trang web thành các phần riêng biệt
- Có 2 loại:

* Functional Component
* Class Component

- Cấu trúc

* Tên function, class phải viết hoa ký tự đầu
* Trả về React Element

- Cách gọi: <TenComponent /> hoặc <TenComponent></TenComponent>

## React Element

Khởi tạo React Element (Object) ==> Thông qua thư viện React DOM ==> Chuyển thành DOM Element ==> Hiển thị lên trình duyệt

Cách mở nhanh Terminal đang chạy: Ctrl + ` (backtick)

## JSX

- Viết tắt: Javascript XML
- Tác dụng:

* Cú pháp tạo ra các element ngắn gọn
* Thân thiện với HTML

Để trình duyệt hiểu được cú pháp jsx ==> Sử dụng các Javascript Compiler (Babel, SWC,...)

Khi làm việc với React: JSX sẽ chuyển về React Element

Các cú pháp căn bản của JSX

## Props

- Truyền dữ liệu từ Component cha xuống Component con
- Tại Component cha, truyền tên props và giá trị props giống như thuộc tính HTML

<TenComponent prop1=value1 prop2=value2 />

- Tại Component con, gọi giá trị props tại tham số của hàm

```js
function TenComponent(props) {
  const prop1 = props.prop1;
  const prop2 = props.prop2;
}
```

- Nếu muốn thay đổi dữ liệu của props ==> Thay đổi ở component cha
- Component chỉ được đọc dữ liệu từ Props, không được phép thay đổi

Lưu ý: Khi sử dụng Destructuring để lấy dữ liệu từ props ==> JS gán ra 1 biến mới ==> Được phép thay đổi

## Children Prop

- Áp dụng trong trường hợp gọi Component theo kiểu đầy đủ
- Chính là phần nằm giữa mở và đóng thẻ

## Page và Layout

1. Page:

- Nội dung của 1 trang
- Mỗi URL tương ứng với 1 trang

2. Layout

- Bố cục của 1 trang (Bọc ở ngoài trang)
- 1 layout có thể thuộc nhiều URL

NextJS có 2 loại Layout

- RootLayout: Tạo cấu trúc của 1 trang HTML
- Custom Layout: Layout theo từng nhóm cụ thể: Danh mục sản phẩm, Chi tiết sản phẩm, Trang chủ,...

Lưu ý: Các layout trong Nextjs sẽ hoạt động nối tiếp

```
RootLayout
  Layout 1
    Layout 2
      Layout 3
        Page
```

## Server Component - Client Component

### Server Component

- Mặc định trong NextJS là Server Component
- NextJS xử lý để trả về HTML từ phía server ==> Trình duyệt thực hiện hiển thị HTML ==> Người dùng sẽ thấy giao diện
- Khi gọi 1 component vào page của NextJS ==> Server Component
- Khi muốn xem log, debug ==> Kiểm tra trên Server thông qua Terminal: Ctrl + `
- Chỉ có tác dụng: Hiển thị dữ liệu html tĩnh sau khi được server xử lý

Cách cũ ngày xưa (Server Side)

Server trả HTML (Đi kèm với 1 file Js) ==> File JS xử lý DOM sau khi HTML về trình duyệt
==> Nhược điểm: Xử lý DOM thủ công (Can thiệp trực tiếp vào Browser DOM)

### Client Component

- Để chuyển 1 server component thành client component ==> Thêm từ khóa "use client" ở đầu file của Server Component
- Luồng chạy: Server ==> Tạo ra HTML ==> Trả về Client ==> Client thêm các trình quản lý sự kiện, trình lắng nghe sự kiện, các tác vụ để thao tác với DOM
- Khi sử dụng các hàm, object mà chỉ hoạt động được từ phía client ==> Đảm bảo là component đã được chạy ở phía Client (Trình duyệt) ==> Sử dụng React Hook: useEffect()

Sự kiện trong React

- Hàm xử lý kiện khi đưa vào tên sự kiện ==> Truyền theo kiểu callback (Chỉ đưa tên hàm)
- Nếu hàm xử lý sự kiện có tham số ==> Truyền đối số cho hàm đó bằng cách bọc 1 hàm không tham số ra ngoài để gọi hàm xử lý sự kiện trên

Trong JS, có 2 cách gọi hàm

- Lời gọi hàm chủ động
- Lời gọi hàm bị động (Callback)

--> Tìm hiểu về callback trong JS

Danh sách sự kiện: Tương tự Javascript, chỉ khác về convention (CamelCase)

Lưu ý: Không nên chuyển Page thành Client Component

Bài toàn phức tạp

- Cha là Server ==> Con sẽ là Server hoặc Client
- Cha là Client ==> Con sẽ là Server

## Routing

- Trong NextJS hỗ trợ sẵn
- Xử lý thông qua file system

Quy ước:

ten-folder/page.jsx ==> Tạo đường dẫn /ten-folder
ten-folder-1/ten-subfolder-1/page.jsx ==> Tạo đường dẫn /ten-folder-1/ten-subfolder-1

Lưu ý: Việc tạo ra 1 folder không có ý nghĩa tạo đường dẫn, nó chỉ tạo khi có file page.jsx và nội dung file tuân thủ cấu trúc của Component

### Static Routing

### Dynamic Routing

- Tạo 1 folder theo cấu trúc [tenthamso]
- Tên của folder chính là giá trị tham số cần lấy khi gọi trong Page
- Sau lấy được param từ URL ==> Sử dụng để gọi tới Back-End thông qua API
- Nếu trên URL có nhiều params => Đặt tên folder theo cấu trúc sau: [...tenthamso]
- Nếu muốn nhiều params ở dạng tùy chọn (Không bắt buộc) ==> Đặt tên folder theo cấu trúc sau: [[...tenthamso]]

### Group Router

- Tạo 1 folder theo cấu trúc: (tenfolder)
- Đưa các page tương ứng vào folder này
- Đưa các layout tương mà muốn nhóm

### Link

- Khi dùng Component để tạo ra các liên kết ==> NextJS xử lý chuyển trang ở phía client
- Mặc định Component Link sẽ được kích hoạt prefetch (Tìm nạp trước để trăng trải nghiệm người dùng, chỉ hoạt động trên production)
- Có thể sử dụng prop prefetch trong Component Link để không cho prefetch tự động

## Chuyển hướng

- Nếu chuyển hướng phía client dùng Hook useRouter() (next/navigation)
- Nếu chuyển hướng phía server dùng hàm redirect (next/navigation)

* Server Component
* Middleware
* Server Actions

## Router Handler

- Chạy phía Server
- Được sử dụng để tạo ra các API nội bộ của NextJS

* Có thể kết nối với Database (Làm Back-End)
* Truy cập vào các phương thức / hàm của NEXT, thư viện bên ngoài, cookie,...

- Khá giống các page thông thường, chỉ khác như sau

* Tên file: route.js
* Trả về JSON

Để Test API ==> Sử dụng phần mềm Postman để test

Ví dụ: Viết API Set cookie (Có hỗ trợ HTTP Only)

Client ==> Gọi API ở Router Handler ==> Router Handler sẽ cookie và đánh dấu HTTP Only
