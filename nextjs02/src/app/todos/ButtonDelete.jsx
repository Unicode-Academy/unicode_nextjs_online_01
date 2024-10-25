"use client";

import { useRouter } from "next/navigation";

export default function ButtonDelete({ id }) {
  const router = useRouter();
  const handleRemove = async () => {
    if (window.confirm("Chắc chưa?")) {
      const response = await fetch(`${process.env.SERVER_API}/todos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        router.refresh();
      }
    }
  };
  return <button onClick={handleRemove}>Delete</button>;
}
