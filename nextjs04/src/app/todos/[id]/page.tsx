export default async function TodoDetail({
  params,
}: {
  params: Promise<{ id: number | string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Todo Detail</h1>
      <h2>Todo ID: {id.toString().replace(/(.+)-\d+\.html$/, "$1")}</h2>
    </div>
  );
}
