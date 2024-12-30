import PageTitle from "@/app/(main-layout)/_components/PageTitle/PageTitle";
import products from "@/app/data/products.json";
import ShopSidebar from "../../_components/ShopSidebar/ShopSidebar";
import Pagination from "@/app/(main-layout)/_components/Pagination/Pagination";
import Product from "@/app/(main-layout)/_components/Product/Product";

export default function ProductCategory({ slug }: { slug: string }) {
  return (
    <div>
      <PageTitle pageName={`Chuyên mục: ${slug}`} />
      <div className="container py-20">
        <div className="flex">
          <div className="w-[25%] px-10">
            <ShopSidebar />
          </div>
          <div className="w-[75%] px-10">
            <div className="grid-cols-3 grid gap-5">
              {products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
            <Pagination
              pageSize={10}
              page={1}
              isPushParams={true}
              prevBtn={true}
              nextBtn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
