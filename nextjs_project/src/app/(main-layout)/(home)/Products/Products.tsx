import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import product1 from "./images/fruite-item-5.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
export default function Products() {
  return (
    <section className="py-20">
      <div className="container">
        <Tabs defaultValue="all">
          <div className="flex align-center mb-10">
            <div className="w-2/5">
              <h2 className="text-[4rem] font-[600]">Our Organic Products</h2>
            </div>
            <div className="w-3/5">
              <TabsList className="flex gap-5 bg-white justify-end">
                <TabsTrigger
                  value="all"
                  className="text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                >
                  All Products
                </TabsTrigger>
                <TabsTrigger
                  value="vegetables"
                  className="bg-[#f4f6f8] text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                >
                  Vegetables
                </TabsTrigger>
                <TabsTrigger
                  value="fruits"
                  className="bg-[#f4f6f8] text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                >
                  Fruits
                </TabsTrigger>
                <TabsTrigger
                  value="bread"
                  className="bg-[#f4f6f8] text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                >
                  Bread
                </TabsTrigger>
                <TabsTrigger
                  value="meat"
                  className="bg-[#f4f6f8] text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                >
                  Meat
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div>
            <TabsContent value="all">
              <div className="grid-cols-4 grid gap-10">
                <Card className="rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
                <Card className=" rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
                <Card className=" rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
                <Card className=" rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
                <Card className=" rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
                <Card className=" rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
                <Card className=" rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
                <Card className=" rounded-[10px]">
                  <CardHeader className="p-0 relative">
                    <Link href={"#"}>
                      <Image
                        src={product1}
                        alt="Product 01"
                        className="rounded-[10px] rounded-bl-none rounded-br-none"
                      />
                    </Link>
                    <span className="absolute bg-secondaryColor text-white top-[5px] left-[5px] px-[16px] py-[4px] rounded-[10px]">
                      Fruits
                    </span>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="py-5">
                      <Link
                        href={"#"}
                        className="text-[rgb(69,89,91)] font-[600] text-[2.4rem] "
                      >
                        Grapes
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-[2rem] text-[#45595b] font-[600]">
                      $4.99 / kg
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
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
