"use client";
import { useRef, useState } from "react";
import { createTodo } from "./action";

export default function TodoAdd2() {
  const [msg, setMsg] = useState("");
  const inputRef = useRef();

  return (
    <form
      action={async (formData) => {
        const { success, message } = await createTodo(formData);
        if (!success) {
          setMsg(message);
          inputRef.current.focus();
        } else {
          setMsg("Thêm todo thành công");
        }
      }}
    >
      <input type="text" name="title" placeholder="Title..." ref={inputRef} />
      <button type="submit">Add</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}
