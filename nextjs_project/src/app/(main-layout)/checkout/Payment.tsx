"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
export default function Payment() {
  const [value, setValue] = useState("bank-transfer");
  return (
    <div>
      <h3 className="text-[2rem] font-[600] mb-5">Phương thức thanh toán</h3>
      <RadioGroup
        defaultValue="option-one"
        onValueChange={(value) => {
          setValue(value);
        }}
      >
        <div className="mb-5">
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem
              checked={value === "bank-transfer"}
              value="bank-transfer"
              id="option-one"
            />
            <Label className="md:text-[1.6rem] font-[600]" htmlFor="option-one">
              Chuyển khoản ngân hàng
            </Label>
          </div>
          {value === "bank-transfer" && (
            <>
              <p>Quý khách vui lòng chuyển khoản tới STK sau</p>
              <p>Ngân hàng ABC</p>
              <p>STK: 04123456789</p>
              <p>Chủ tk: Tạ Hoàng An</p>
              <p>Nội dung: Mã đơn hàng</p>
            </>
          )}
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <RadioGroupItem
              checked={value === "cash"}
              value="cash"
              id="option-two"
            />
            <Label className="md:text-[1.6rem] font-[600]" htmlFor="option-two">
              Thanh toán khi nhận hàng
            </Label>
          </div>
          {value === "cash" && (
            <p>Quý khách thanh toán trực tiếp khi nhận hàng</p>
          )}
        </div>
      </RadioGroup>
    </div>
  );
}
