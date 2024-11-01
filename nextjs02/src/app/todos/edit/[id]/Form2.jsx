"use client";

import { useRef, useState } from "react";
import { updateTodo } from "./action";
import { useRouter } from "next/navigation";

export default function Form2({ todo }) {
  const [msg, setMsg] = useState("");
  const inputRef = useRef();
  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        formData.append("id", todo.id);
        const { success, message } = await updateTodo(formData);
        if (!success) {
          setMsg(message);
          inputRef.current.focus();
        } else {
          setMsg("Cập nhật todo thành công");
          router.push("/todos");
        }
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Title..."
        defaultValue={todo.title}
      />
      <button type="submit">Update</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}
