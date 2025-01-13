"use client";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Account() {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const handleToggleSearch = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <>
      <div className="flex gap-6 items-center">
        <span
          className="w-[44px] h-[44px] border-[1px] border-solid border-secondaryColor rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-secondaryColor"
          onClick={handleToggleSearch}
        >
          <Search size={18} className="text-primaryColor font-bold" />
        </span>
        <Link href="/cart">
          <ShoppingBag size={30} className="text-primaryColor cursor-pointer" />
        </Link>
        <Link href={"/account/dashboard"}>
          <UserRound size={30} className="text-primaryColor cursor-pointer" />
        </Link>
      </div>
      {searchOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-[#ffffffe5] p-10">
          <div className="container flex justify-between">
            <h3 className="text-[2rem] text-[#45595b] font-[600]">
              Search by keyword
            </h3>
            <span
              className="cursor-pointer text-[3.2rem] font-bold"
              onClick={handleToggleSearch}
            >
              &times;
            </span>
          </div>
          <div className="container h-[80vh] w-full flex items-center">
            <form action="" className="w-[75%] mx-auto">
              <div className="flex border rounded-[10px]">
                <Input
                  placeholder="Keyword"
                  type="search"
                  className="h-[58px] flex-grow border-[0] lg:text-[1.6rem] bg-white rounded-[10px]"
                />
                <button className="text-[#747d88] bg-[#e9ecef] border-[1px] border-solid border-[#ced4da] rounded-[10px] p-[1.6rem] rounded-tl-none rounded-bl-none">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
