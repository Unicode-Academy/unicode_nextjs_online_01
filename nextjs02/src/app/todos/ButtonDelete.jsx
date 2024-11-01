"use client";
import { deleteTodo } from "./action";

export default function ButtonDelete({ id }) {
  return (
    <>
      <form
        action={async (formData) => {
          if (window.confirm("Bạn có chắc?")) {
            const { success } = await deleteTodo(formData);
            if (success) {
              setMsg("Xóa todo thành công");
            }
          }
        }}
        style={{ display: "inline-block" }}
      >
        <button>Delete</button>
        <input type="hidden" name="id" value={id} />
      </form>
    </>
  );
}
