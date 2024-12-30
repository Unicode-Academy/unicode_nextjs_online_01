import PageTitle from "@/app/(main-layout)/_components/PageTitle/PageTitle";
import ShopSidebar from "../../_components/ShopSidebar/ShopSidebar";
import ProductInfo from "./ProductInfo";
import productAttributes from "@/app/data/attribute_filter.json";
import productData from "@/app/data/product.json";

export default async function ProductDetail({ slug }: { slug: string }) {
  //Call API
  const product = productData;
  return (
    <div>
      <PageTitle pageName={`${slug}`} />
      <div className="container py-20">
        <div className="flex">
          <div className="w-[75%] px-10">
            <ProductInfo attributes={productAttributes} product={product} />
          </div>
          <div className="w-[25%] px-10">
            <ShopSidebar isFilter={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
