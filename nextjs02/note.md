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

## Cache

GET /todos/1 Tag: todo-detail và 1
GET /todos/2 Tag: todo-detail và 2
GET /todos/3 Tag: todo-detail và 3
GET /todos/4 Tag: todo-detail và 4

Revalidate ==>

- Nếu xóa todo-detail ==> Xóa cache cả 4 todo
- Nếu xóa 1 ==> Xóa todo 1 (Rủi ro: Bị trùng)

Giải pháp:

GET /todos/1 Tag: todo-detail-1
GET /todos/2 Tag: todo-detail-2
GET /todos/3 Tag: todo-detail-3
GET /todos/4 Tag: todo-detail-4

Homepage

- Danh sách sản phẩm bán chạy ==> Tag: best-seller
- Danh sách sản phẩm mới ==> Tag: new-product

Cập nhật thông tin 1 sản phẩm ==> Xóa cache

- Trong trang chi tiết sản phẩm
- Xóa trang danh sách liên quan

Ở trên Server Component ==> Gọi hàm fetch ==> Hỗ trợ cache ==> Muốn dễ dàng quản lý ==> Tạo class HTTPClient để thực call API

## Server Action

- Server Action là 1 hàm async chạy ở phía server
- Chỉ áp dụng với FORM

### Form ở phía Server

### Form ở phía client

Áp dụng trong xác thực

Login Form ==> Server Action

- Verify Email và Password với Back-End
- Lưu token trả về từ back-end vào Cookie

## React Hook

1. Quản lý State trong React Client

```
const [tenState, hamThayDoiState] = useState(gia_tri_mac_dinh)
```

Khi nào state thay đổi ==> Component re-render ==> Thường được dùng để cập nhật lại giao diện

2. Quản lý Ref trong React Client

```
const tenRef = useRef(gia_tri_mac_dinh)
```

Tác dụng:

- Tham chiếu tới element đã trả về DOM ==> Thao tác với DOM
- Ghi nhớ lại giá trị lần re-render cuối cùng

3. Vòng đời Component

- Mounting ==> Component khởi tạo và được đưa vào DOM
- Updating ==> Cập nhật dữ liệu trong Component
- Unmounting ==> Loại bỏ khỏi DOM

Trong function component ==> Sử dụng Hook useEffect(callback, dependencies?)

- null hoặc undefined ==> Khi component re-render ==> callback trong useEffect sẽ hoạt động
- [] ==> Khi component được đưa vào DOM (Mounted) ==> callback trong useEffect sẽ chỉ chạy 1 lần
- [bien1, bien2, bien3,...] ==> Khi 1 trong các biến thay đổi ==> callback sẽ chạy

Luồng chạy

- State thay đổi
- Component Re-render
- UI Update
- Clean Up ==> Dọn dẹp các dữ liệu chưa giải pháp ở lần render trước
- Callback trong useEffect sẽ chạy (Phù hợp với điều kiện của dependencies)

Cleanup những gì?

- Event
- Storage: localStorage, sessionStorage, Blob,...
- HTTP Request
  ....
