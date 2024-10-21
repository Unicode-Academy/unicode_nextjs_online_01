export default function ProductDetailPage({ params }) {
  const { path } = params;
  const [slug, id] = path;
  console.log(path);

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>Slug: {slug}</h2>
      <h2>Id: {id}</h2>
    </div>
  );
}
