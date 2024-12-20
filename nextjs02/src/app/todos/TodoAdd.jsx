"use client";

import { useRouter } from "next/navigation";
import { clearCacheByPath, clearCacheByTag } from "../utils/cache";

export default function TodoAdd() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    if (!title) {
      return alert("Vui lòng nhập");
    }
    const body = { title };
    const response = await fetch(`${process.env.SERVER_API}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      router.refresh();
      // clearCacheByPath("/todos"); //Xóa tất cả cache của path /todos
      clearCacheByTag("todo-list");
      e.target.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title..." />
      <button type="submit">Add</button>
    </form>
  );
}
