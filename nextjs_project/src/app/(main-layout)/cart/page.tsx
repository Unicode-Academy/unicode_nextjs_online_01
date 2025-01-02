import PageTitle from "../_components/PageTitle/PageTitle";
import Cart from "./Cart";
export default function CartPage() {
  return (
    <div>
      <PageTitle pageName="Giỏ hàng" />
      <div className="container py-20">
        <Cart />
      </div>
    </div>
  );
}

/*
Giỏ hàng
- Khi user chưa đăng nhập --> cookie, localStorage
- Khi user đăng nhập --> Lưu database (Back-End API)

{
  productId: 1,
  quantity: 10,
  attributes: [2,5]
}
*/
