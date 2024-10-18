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
