"use client";

import { useRouter } from "next/navigation";

export default function ButtonEdit({ id }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/todos/edit/${id}/`);
  };
  return <button onClick={handleClick}>Edit</button>;
}
