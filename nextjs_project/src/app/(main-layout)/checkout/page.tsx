import PageTitle from "../_components/PageTitle/PageTitle";
import Checkout from "./Checkout";

export default function CheckoutPage() {
  return (
    <div>
      <PageTitle pageName="Thanh toán" />
      <div className="container py-20">
        <h2 className="text-[4rem] font-[600] text-[#45595b] mb-5">
          Thông tin khách hàng
        </h2>
        <Checkout />
      </div>
    </div>
  );
}
