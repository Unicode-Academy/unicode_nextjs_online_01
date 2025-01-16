"use client";

import { Button } from "@/components/ui/button";
import Cart from "./Cart";
import Payment from "./Payment";
import CheckoutField from "./CheckoutField";
import LoginModal from "../_components/LoginModal/LoginModal";
import { useState } from "react";

export default function Checkout() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <p className="mb-5">
        Bạn chưa đăng nhập. Vui lòng
        <span
          className="text-primaryColor font-[600] cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          đăng nhập
        </span>
        để thuận tiện khi mua hàng
      </p>
      <form className="flex gap-10">
        <div className="w-1/2">
          <CheckoutField />
        </div>
        <div className="w-1/2">
          <Cart />
          <Payment />
          <Button
            size={null}
            variant={"outline"}
            className="md:text-[1.6rem] px-10 py-5 mt-5 border-primaryColor text-primaryColor"
          >
            Đặt hàng
          </Button>
        </div>
      </form>
      <LoginModal
        isShow={showModal}
        onOpenChange={() => {
          setShowModal(!showModal);
        }}
      />
    </div>
  );
}
