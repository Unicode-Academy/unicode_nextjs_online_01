import Link from "next/link";
import ButtonView from "./ButtonView";
import ButtonDelete from "./ButtonDelete";

export const getTodoList = async (q) => {
  const response = await fetch(
    `${process.env.SERVER_API}/todos?_sort=id&_order=desc&q=${q ?? ""}`,
    {
      // cache: "force-cache",
    }
  );
  return response.json();
};
export default async function TodoList({ searchParams }) {
  const q = searchParams.q;
  //Gọi api
  const todoList = await getTodoList(q);

  return (
    <>
      {todoList.map((todo) => (
        <>
          <h3 key={todo.id}>{todo.title}</h3>
          <ButtonView id={todo.id} />
          <ButtonDelete id={todo.id} />
        </>
      ))}
    </>
  );
}
