import products from "@/app/data/products.json";
import PageTitle from "../_components/PageTitle/PageTitle";
import ShopSidebar from "./_components/ShopSidebar/ShopSidebar";
import Product from "../_components/Product/Product";
import Pagination from "../_components/Pagination/Pagination";

export default function Shop() {
  return (
    <div>
      <PageTitle pageName="Sản phẩm" />
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
