import Category from "./_components/Category";
import Product from "./_components/Product";

export default async function CategoryProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug.length > 1) {
    return <Product />;
  }

  return <Category />;
}
