"use client";
import { Minus, Plus } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export default function Quantity({
  value = 1,
  onChange,
}: {
  value?: number;
  onChange?: (value: number) => void;
}) {
  const [quantity, setQuantity] = useState<number>(value);
  const handleInput = (e: React.KeyboardEvent) => {
    const key = e.key;
    const pattern = /[0-9]/;
    if (pattern.test(key)) return true;
    e.preventDefault();
  };
  const handleMinus = () => {
    setQuantity(quantity - 1);
    if (typeof onChange === "function") {
      onChange(quantity - 1);
    }
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
    if (typeof onChange === "function") {
      onChange(quantity + 1);
    }
  };
  useLayoutEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);
  return (
    <div className="flex gap-3 items-center mb-5">
      <Minus className="cursor-pointer" onClick={handleMinus} />
      <input
        type="text"
        className="bg-[#efefef] w-[40px] p-3 text-center"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        onKeyDown={handleInput}
      />
      <Plus className="cursor-pointer" onClick={handlePlus} />
    </div>
  );
}
