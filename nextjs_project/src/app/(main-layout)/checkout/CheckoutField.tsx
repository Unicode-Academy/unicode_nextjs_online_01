"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CheckoutField() {
  return (
    <>
      <div className="mb-5">
        <label className="mb-3 block">Họ và tên</label>
        <Input
          type="text"
          className="md:text-[1.6rem] px-5 py-7"
          placeholder="Họ và tên"
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block">Email</label>
        <Input
          type="email"
          className="md:text-[1.6rem] px-5 py-7"
          placeholder="Email"
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block">Địa chỉ</label>
        <Input
          type="text"
          className="md:text-[1.6rem] px-5 py-7"
          placeholder="Địa chỉ"
        />
      </div>

      <div className="mb-5">
        <label className="mb-3 block">Điện thoại</label>
        <Input
          type="text"
          className="md:text-[1.6rem] px-5 py-7"
          placeholder="Điện thoại"
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block">Ghi chú</label>
        <Textarea
          className="md:text-[1.6rem] px-5 py-7 h-[241px]"
          placeholder="Ghi chú đặt hàng"
        />
      </div>
    </>
  );
}
