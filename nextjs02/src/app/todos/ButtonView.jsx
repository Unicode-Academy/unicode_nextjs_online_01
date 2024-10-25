"use client";

import { useRouter } from "next/navigation";

export default function ButtonView({ id }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/todos/${id}`);
  };
  return <button onClick={handleClick}>View</button>;
}
