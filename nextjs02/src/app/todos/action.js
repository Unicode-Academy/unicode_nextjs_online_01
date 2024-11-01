"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createTodo = async (formData) => {
  const title = formData.get("title");
  if (!title) {
    return {
      success: false,
      message: "Vui lòng điền đầy đủ các trường",
    };
  }
  const response = await fetch(`${process.env.SERVER_API}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    return {
      success: false,
      message: response.statusText,
    };
  }
  revalidatePath("/todos");
  return {
    success: true,
  };
};

export const deleteTodo = async (formData) => {
  const id = formData.get("id");
  const response = await fetch(`${process.env.SERVER_API}/todos/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    revalidatePath("/todos");
    revalidatePath(`/todos/${id}`);
    await cookies().set("id", id, {
      path: "/",
      httpOnly: true,
    });
    return {
      success: true,
    };
  }
  return {
    success: false,
    message: response.statusText,
  };
};
