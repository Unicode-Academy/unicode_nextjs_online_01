"use client";

import { clearCacheByPath, clearCacheByTag } from "@/app/utils/cache";
import { useRouter } from "next/navigation";

export default function Form({ todo }) {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    if (!title) {
      return alert("Vui lòng nhập");
    }
    const body = { title };
    const response = await fetch(`${process.env.SERVER_API}/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      //   router.refresh();
      clearCacheByPath(`/todos/${todo.id}`);
      //   clearCacheByTag(`todo-detail`);
      clearCacheByTag("todo-list");
      alert("Cập nhật thành công");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        defaultValue={todo.title}
      />
      <button type="submit">Update</button>
    </form>
  );
}
