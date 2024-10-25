export default async function AboutDetailPage({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>Giới thiệu: {id}</h1>
    </div>
  );
}
