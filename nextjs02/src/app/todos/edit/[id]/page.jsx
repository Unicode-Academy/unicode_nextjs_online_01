import { getTodo } from "../../[id]/page";
import Form from "./Form";
import Form2 from "./Form2";

export default async function EditPage({ params }) {
  const { id } = await params;
  const todo = await getTodo(id);

  return (
    <div>
      <h2>Edit Todo</h2>
      <Form2 todo={todo} />
    </div>
  );
}
