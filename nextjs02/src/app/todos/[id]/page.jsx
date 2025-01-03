import { notFound } from "next/navigation";

export const getTodo = async (id) => {
  const response = await fetch(`${process.env.SERVER_API}/todos/${id}`, {
    cache: "force-cache",
    next: {
      tags: [`todo-detail`],
    },
  });
  if (!response.ok) {
    throw new Error("Fetch to failed");
  }
  return response.json();
};
export default async function TodoDetailPage({ params }) {
  try {
    const { id } = await params;
    const todo = await getTodo(id);
    return (
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.content}</p>
      </div>
    );
  } catch (e) {
    return notFound();
  }
}
