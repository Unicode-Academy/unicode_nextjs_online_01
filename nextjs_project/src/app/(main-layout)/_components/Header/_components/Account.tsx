"use client";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";
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
        <ShoppingBag size={30} className="text-primaryColor cursor-pointer" />
        <UserRound size={30} className="text-primaryColor cursor-pointer" />
      </div>
      {searchOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffe5] p-10">
          <div className="container flex justify-between">
            <h3 className="text-[2.4rem] text-[gray]">Search by keyword</h3>
            <span
              className="cursor-pointer text-[3.2rem] font-bold"
              onClick={handleToggleSearch}
            >
              &times;
            </span>
          </div>
          <div className="container h-[80vh] flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            suscipit voluptates iusto animi provident consequuntur illum
            accusantium quas aperiam est. Sapiente omnis praesentium ipsam
            magnam ab ullam impedit soluta iste!
          </div>
        </div>
      )}
    </>
  );
}
