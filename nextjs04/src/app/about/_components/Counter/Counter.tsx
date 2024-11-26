"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 2);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
