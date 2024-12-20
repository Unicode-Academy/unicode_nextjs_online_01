import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProductUrl } from "@/app/utils/url";
import clsx from "clsx";
// import { StarHalf } from "lucide-react";
export default function BestSellerProduct({
  product,
}: {
  product: {
    name: string;
    slug: string;
    image: string;
    price: string;
    star: number;
  };
}) {
  return (
    <Card className="bg-[#f4f6f8]">
      <CardContent>
        <div className="flex">
          <div className="w-2/5">
            <Link href={getProductUrl(product.slug)}>
              <Image
                src={product.image}
                width={200}
                height={200}
                alt={product.name}
                className="rounded-[50%] w-[150px] h-[150px] object-fill"
              />
            </Link>
          </div>
          <div className="w-3/5 px-10 py-5">
            <h2 className="text-[2rem] font-[600] mb-3">
              <Link href={getProductUrl(product.slug)}>{product.name}</Link>
            </h2>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, index) => {
                const count = index + 1;

                return (
                  <Star
                    key={count}
                    size={16}
                    className={clsx(
                      "cursor-pointer hover:fill-primaryColor",
                      count <= product.star && "fill-primaryColor"
                    )}
                  />
                );
              })}
            </div>
            <span className="font-[600] text-[2rem] text-[rgb(69,89,91)] block mb-3">
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
