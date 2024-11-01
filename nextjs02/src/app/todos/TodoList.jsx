import ButtonView from "./ButtonView";
import ButtonDelete from "./ButtonDelete";
import { Fragment } from "react";
import ButtonEdit from "./ButtonEdit";

export const getTodoList = async (q) => {
  const response = await fetch(
    `${process.env.SERVER_API}/todos?_sort=id&_order=desc&q=${q ?? ""}`,
    {
      cache: "force-cache",
      next: {
        // revalidate: 5 //Tự động xóa khi hết thời gian
        tags: ["todo-list"],
      },
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
        <Fragment key={todo.id}>
          <h3>{todo.title}</h3>
          <ButtonView id={todo.id} />
          <ButtonEdit id={todo.id} />
          <ButtonDelete id={todo.id} />
        </Fragment>
      ))}
    </>
  );
}
