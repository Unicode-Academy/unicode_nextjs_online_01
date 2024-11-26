"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
type Todo = {
  id: string;
  title: string;
};
export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData(e.target as HTMLFormElement);
    const title: string = formData.get("title") as string;
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        title,
      },
    ]);
    (e.target as HTMLFormElement).reset();
  };
  const handleRemove = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div data-testid="todo-list">
        {todoList.map((todo: Todo) => {
          return (
            <div key={todo.id}>
              <h3>
                {todo.title}
                <button
                  onClick={() => handleRemove(todo.id)}
                  data-testid="remove-todo"
                >
                  &times;
                </button>
              </h3>
            </div>
          );
        })}
      </div>
      <form data-testid="form-todo" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Please input your todo"
          required
        />
        <button>Add</button>
      </form>
    </>
  );
}
