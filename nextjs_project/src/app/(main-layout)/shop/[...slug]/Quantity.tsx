"use client";
import { Minus, Plus } from "lucide-react";

export default function Quantity() {
  const handleInput = (e: React.KeyboardEvent) => {
    console.log(e);

    // const charValue = String.fromCharCode(e.code);
    // if (isNaN(charValue) && e.which != 8) {
    //   // BSP KB code is 8
    //   e.preventDefault();
    // }
    return true;
  };
  return (
    <div className="flex gap-3 items-center mb-5">
      <Minus className="cursor-pointer" />
      <input
        type="text"
        className="bg-[#efefef] w-[40px] p-3 text-center"
        defaultValue={1}
        onKeyDown={handleInput}
      />
      <Plus className="cursor-pointer" />
    </div>
  );
}
