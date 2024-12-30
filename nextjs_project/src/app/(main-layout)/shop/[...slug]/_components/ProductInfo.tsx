"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Attributes from "./Attributes";
import { useEffect, useRef, useState } from "react";
import { getCategoryUrl } from "@/app/utils/url";
import Comments from "./Comments/Comments";
import Quantity from "@/app/(main-layout)/_components/Quantity";
import { cloneDeep, equalsArray } from "@/app/utils/utils";
import { useToast } from "@/hooks/use-toast";
export default function ProductInfo({
  attributes,
  product,
}: {
  attributes: { [key: string]: unknown }[];
  product: { [key: string]: unknown };
}) {
  const [productData, setProductData] = useState(product);
  const tabRef = useRef<null | HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState<string>("description");
  const [productMeta, setProductMeta] = useState<{
    quantity: number;
    attributes?: number[];
  }>({
    quantity: 1,
  });
  const [cartData, setCartData] = useState<
    {
      productId: number;
      quantity: number;
      attributes?: number[];
    }[]
  >([] as { productId: number; quantity: number; attributes?: number[] }[]);
  const { toast } = useToast();
  const handleChooseAttribute = (data: { [key: string]: unknown }) => {
    setProductData(data);
  };
  const handleClickStar = () => {
    if (!tabRef.current) return;
    tabRef.current.scrollIntoView({ behavior: "smooth" });
    setCurrentTab("reviews");
  };
  const handleClickAddToCart = () => {
    const productId = productData.id as number;
    const quantity = productMeta.quantity;
    const attributes = productMeta.attributes as number[];
    const data = { productId, quantity, attributes };
    const cartDataClone = cloneDeep(cartData);
    const cartProduct = cartDataClone.find((cartItem) => {
      if (cartItem.attributes) {
        return (
          cartItem.productId === productId &&
          equalsArray(cartItem.attributes, attributes)
        );
      }
      return cartItem.productId === productId;
    });
    if (!cartProduct) {
      setCartData([...cartDataClone, data]);
    } else {
      cartProduct.quantity += quantity;
      setCartData([...cartDataClone]);
    }
    toast({
      title: "Add to cart successfully",
    });
  };

  useEffect(() => {
    if (cartData.length) {
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
  }, [cartData]);

  return (
    <>
      <div className="flex -mx-[15px]">
        <div className="w-[50%] px-[15px]">
          <Image
            src={productData.image as string}
            alt={productData.name as string}
            width={500}
            height={500}
            style={{ maxWidth: "100%", height: "auto" }}
            className="rounded-[10px] border-[1px] border-solid border-[#efefef]"
          />
        </div>
        <div className="w-[50%] px-[15px]">
          <h2 className="text-[rgb(69,89,91)] text-[2.4rem] font-[700] mb-5">
            {productData.name as string}
          </h2>
          <p className="mb-5">
            Category:{" "}
            <Link
              href={getCategoryUrl(
                (productData.category as { [key: string]: unknown })
                  .slug as string
              )}
            >
              {
                (productData.category as { [key: string]: unknown })
                  .name as string
              }
            </Link>
          </p>
          <p className="text-[rgb(69,89,91)] text-[2.4rem] font-[700] mb-5">
            ${productData.price as number}
          </p>
          <div className="flex gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, index) => {
              const count = index + 1;
              return (
                <Star
                  key={count}
                  onClick={handleClickStar}
                  size={16}
                  className={clsx(
                    "cursor-pointer hover:fill-primaryColor",
                    count <= (productData.star as number) && "fill-primaryColor"
                  )}
                />
              );
            })}
          </div>
          <div className="description mb-5">
            <p>{productData.short_description as string}</p>
          </div>
          <Attributes
            attributes={attributes}
            onChange={handleChooseAttribute}
            onChooseValueId={(ids) => {
              setProductMeta({ ...productMeta, attributes: ids });
            }}
          />
          <Quantity
            onChange={(value) => {
              setProductMeta({ ...productMeta, quantity: value });
            }}
          />
          <div>
            <Button
              variant={`outline`}
              className="text-[1.6rem] font-[600] text-primaryColor py-[6px] px-[16px] rounded-[999px] border-secondaryColor hover:bg-secondaryColor hover:text-white [&_svg]:size-6"
              size={null}
              onClick={handleClickAddToCart}
            >
              <ShoppingBag className="text-primaryColor" />
              Thêm vào giỏ
            </Button>
          </div>
        </div>
      </div>
      <Tabs
        value={currentTab}
        className="mt-10"
        ref={tabRef}
        onValueChange={(value) => setCurrentTab(value)}
      >
        <TabsList className="flex gap-5 bg-white mb-10 border-b-2 border-gray">
          <TabsTrigger
            value="description"
            className="text-[1.6rem] data-[state=active]:text-[gray]  px-[30px] py-[11px] data-[state=active]:text-primaryColor data-[state=active]:border-b-2 data-[state=active]:border-primaryColor"
          >
            Mô tả
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="text-[1.6rem] data-[state=active]:text-[gray]  px-[30px] py-[10px] data-[state=active]:text-primaryColor data-[state=active]:border-b-2 data-[state=active]:border-primaryColor"
          >
            Đánh giá
          </TabsTrigger>
        </TabsList>
        <div>
          <TabsContent value="description" className="tab-content-description">
            <div
              dangerouslySetInnerHTML={{
                __html: productData.description as string,
              }}
            />
          </TabsContent>
          <TabsContent value="reviews" className="tab-content-reviews">
            <Comments />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
