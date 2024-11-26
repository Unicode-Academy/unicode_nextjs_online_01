import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoPage from "./page";
import TodoList from "./_components/TodoList";
describe("TodoPage", () => {
  it("render todo page", () => {
    render(<TodoPage />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: "TodoList App",
    });
    expect(heading).toBeInTheDocument();
  });

  it("render TodoList Component", () => {
    render(<TodoList />);
    const todoList = screen.getByTestId("todo-list");
    expect(todoList).toBeInTheDocument();

    const addForm = screen.getByTestId("form-todo");
    expect(addForm).toBeInTheDocument();
  });

  it("add todo", () => {
    render(<TodoList />);
    // const todoList = screen.getByTestId("todo-list");

    const addForm = screen.getByTestId("form-todo");
    const input = screen.getByRole("textbox");

    //Change input
    fireEvent.change(input, { target: { value: "Learn ReactJS" } });

    //Submit
    fireEvent.submit(addForm);

    //Change input
    fireEvent.change(input, { target: { value: "Learn NextJS" } });

    //Submit
    fireEvent.submit(addForm);

    const todo1 = screen.getByText("Learn ReactJS");
    expect(todo1).toBeInTheDocument();

    const todo2 = screen.getByText("Learn NextJS");
    expect(todo2).toBeInTheDocument();

    //Kiểm tra ô input đã được xóa chưa?
    expect(input).toHaveValue("");
  });

  it("delete todo", () => {
    render(<TodoList />);
    const addForm = screen.getByTestId("form-todo");
    const input = screen.getByRole("textbox");
    const todo = screen.getByTestId("todo-list");
    //Change input
    fireEvent.change(input, { target: { value: "Learn ReactJS" } });

    //Submit
    fireEvent.submit(addForm);

    //Change input
    fireEvent.change(input, { target: { value: "Learn NextJS" } });

    //Submit
    fireEvent.submit(addForm);

    //Xóa todo
    const deleteBtn = screen.getAllByTestId("remove-todo");

    //Xóa todo 1
    fireEvent.click(deleteBtn[0]);

    expect(todo).not.toHaveTextContent("Learn ReactJS");

    //Xóa todo 2
    fireEvent.click(deleteBtn[1]);
    expect(todo).not.toHaveTextContent("Learn NextJS");
  });
});
