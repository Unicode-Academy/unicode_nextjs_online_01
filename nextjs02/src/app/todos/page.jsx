import SearchForm from "./SearchForm";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default async function TodosPage({ searchParams }) {
  const search = await searchParams;

  return (
    <div>
      <h1>Todos</h1>
      <SearchForm />
      <TodoList searchParams={search} />
      <hr />
      <TodoAdd />
    </div>
  );
}