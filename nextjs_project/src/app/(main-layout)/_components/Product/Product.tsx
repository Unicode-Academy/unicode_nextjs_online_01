// "use client";
import { getProductUrl } from "@/app/utils/url";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export type ProductProps = {
  product: {
    id: number;
    image: string;
    slug: string;
    name: string;
    category: string;
    description: string;
    price: string;
  };
};
export default function Product({ product }: ProductProps) {
  return (
    <Card className="rounded-[10px]">
      <div className="p-0 relative">
        <Link href={getProductUrl(product.slug)}>
          <Image
            src={product.image}
            alt={product.name}
            className="rounded-[10px] rounded-bl-none rounded-br-none"
            width={1000}
            height={1000}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Link>
        <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
          {product.category}
        </span>
      </div>

      <CardContent className="text-center">
        <h3 className="py-5">
          <Link
            href={getProductUrl(product.slug)}
            className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
          >
            {product.name}
          </Link>
        </h3>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-[2rem] text-[#45595b] font-[600]">
          {product.price}
        </span>
        <Button
          variant={`outline`}
          className="text-[1.6rem] font-[600] text-primaryColor py-[6px] px-[16px] rounded-[999px] border-secondaryColor hover:bg-secondaryColor hover:text-white [&_svg]:size-6"
          size={null}
        >
          <ShoppingBag className="text-primaryColor" />
          Thêm vào giỏ
        </Button>
      </CardFooter>
    </Card>
  );
}
