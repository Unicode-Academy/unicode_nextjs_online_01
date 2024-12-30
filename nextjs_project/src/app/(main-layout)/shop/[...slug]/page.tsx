import ProductCategory from "./_components/ProductCategory";
import ProductDetail from "./_components/ProductDetail";

export default async function CategoryProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug.length > 1) {
    return <ProductDetail slug={slug[1]} />;
  }

  return <ProductCategory slug={slug[0]} />;
}
