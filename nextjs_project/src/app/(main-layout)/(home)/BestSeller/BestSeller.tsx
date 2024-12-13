import BestSellerProduct from "../../_components/BestSellerProduct/BestSellerProduct";
import products from "@/app/data/products_best_seller.json";

export default function BestSeller() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10 text-center w-1/2 mx-auto">
          <h2 className="font-[800] text-[5.6rem]">Bestseller Products</h2>
          <p>
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
            <BestSellerProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
