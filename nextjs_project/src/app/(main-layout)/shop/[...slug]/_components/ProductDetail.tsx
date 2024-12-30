import PageTitle from "@/app/(main-layout)/_components/PageTitle/PageTitle";
import ShopSidebar from "../../_components/ShopSidebar/ShopSidebar";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Quantity from "../Quantity";

export default function ProductDetail({ slug }: { slug: string }) {
  return (
    <div>
      <PageTitle pageName={`${slug}`} />
      <div className="container py-20">
        <div className="flex">
          <div className="w-[75%] px-10">
            <div className="flex -mx-[15px]">
              <div className="w-[50%] px-[15px]">
                <Image
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPc6ApIJfGaMBJ3WW0AE2OYr3RY1IDHBuxQ&s`}
                  alt="Ảnh sản phẩm"
                  width={500}
                  height={500}
                  style={{ maxWidth: "100%", height: "auto" }}
                  className="rounded-[10px] border-[1px] border-solid border-[#efefef]"
                />
              </div>
              <div className="w-[50%] px-[15px]">
                <h2 className="text-[rgb(69,89,91)] text-[2.4rem] font-[700] mb-5">
                  Brocoli
                </h2>
                <p className="mb-5">
                  Category: <Link href="#">Vegetables</Link>
                </p>
                <p className="text-[rgb(69,89,91)] text-[2.4rem] font-[700] mb-5">
                  3.35$
                </p>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const count = index + 1;
                    return (
                      <Star
                        key={count}
                        size={16}
                        className={clsx(
                          "cursor-pointer hover:fill-primaryColor",
                          count <= 5 && "fill-primaryColor"
                        )}
                      />
                    );
                  })}
                </div>
                <div className="description mb-5">
                  <p>
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                  </p>
                  <p>
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="flex mb-3">
                    <div className="w-[20%]">Màu sắc</div>
                    <div className="w-[80%]">
                      <div className="flex gap-2 flex-wrap">
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <div className="w-[20%]">Size</div>
                    <div className="w-[80%]">
                      <div className="flex gap-2 flex-wrap">
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                        <span className="border py-2 px-5 block cursor-pointer hover:border-primaryColor hover:text-primaryColor">
                          Xanh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Quantity />
                <div>
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
            </div>
            <Tabs defaultValue="description" className="mt-10">
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
                <TabsContent
                  value="description"
                  className="tab-content-description"
                >
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi est ab cumque? Sint, debitis doloribus ipsum
                    voluptate dolores odit illo sapiente dignissimos provident
                    quae repellendus, porro odio? Fugit, quam necessitatibus.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi est ab cumque? Sint, debitis doloribus ipsum
                    voluptate dolores odit illo sapiente dignissimos provident
                    quae repellendus, porro odio? Fugit, quam necessitatibus.
                  </p>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          <div className="w-[25%] px-10">
            <ShopSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
