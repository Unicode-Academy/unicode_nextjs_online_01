"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import products from "@/app/data/products.json";
import productsTabOnServer from "@/app/data/products_tab.json";
import tabs from "@/app/data/tabs.json";
import Product from "../../_components/Product/Product";
import { useEffect, useState } from "react";

export default function Products() {
  const [productTab, setProductTab] = useState([]);
  const [currentTab, setCurrenTab] = useState("all");
  const handleTabChange = (tab: string) => {
    // console.log(`Call api: /api/home-products?category=${tab}`);
    setCurrenTab(tab);
  };

  useEffect(() => {
    const getProductByCategory = async () => {
      if (currentTab === "all") return;
      console.log(`Call ${currentTab}`);
      setProductTab(productsTabOnServer);
    };
    getProductByCategory();
  }, [currentTab]);
  return (
    <section className="py-20">
      <div className="container">
        <Tabs defaultValue="all" onValueChange={handleTabChange}>
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
                  Tất cả
                </TabsTrigger>
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.slug}
                    className="bg-[#f4f6f8] text-[1.6rem] data-[state=active]:bg-secondaryColor rounded-[999px] px-[30px] py-[10px] data-[state=active]:text-[#fff]"
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          <div>
            <TabsContent value="all">
              <div className="grid-cols-4 grid gap-10">
                {products.map((product) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </TabsContent>
            {/*
            Hiển thị thêm TabsContent khi call api           
            */}
            {currentTab !== "all" && (
              <TabsContent value={currentTab}>
                <div className="grid-cols-4 grid gap-10">
                  {productsTabOnServer.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </TabsContent>
            )}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
