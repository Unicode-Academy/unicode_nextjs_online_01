import SearchForm from "./SearchForm";
import TodoAdd from "./TodoAdd";
import TodoAdd2 from "./TodoAdd2";
import TodoList from "./TodoList";
export const generateMetadata = async ({ searchParams }) => {
  const q = (await searchParams).q;
  return {
    title: q ? `Tìm kiếm: ${q}` : "Danh sách công việc",
  };
};
export default async function TodosPage({ searchParams }) {
  const search = await searchParams;
  return (
    <div>
      <h1>Todos</h1>
      <SearchForm />
      <TodoList searchParams={search} />
      <hr />
      {/* <TodoAdd /> */}
      <TodoAdd2 />
    </div>
  );
}
