"use client";
import { client } from "@/app/utils/client";
import useSWR from "swr";
const getTodo = async () => {
  return client.get("/todos");
};
export default function TodoPage() {
  const { data: todoList, isLoading } = useSWR(`/todos`, getTodo);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Todo</h1>
      {(todoList as { id: number; title: string }[]).map(
        (todo: { id: number; title: string }) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
          </div>
        )
      )}
    </div>
  );
}
