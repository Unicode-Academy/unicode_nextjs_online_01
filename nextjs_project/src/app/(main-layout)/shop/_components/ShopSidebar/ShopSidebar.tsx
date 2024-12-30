"use client";
import { useSearchParams } from "next/navigation";
import AttributeFilter from "./widgets/AttributeFilter";
import Categories from "./widgets/Categories";
import PriceFilter from "./widgets/PriceFilter";
import ResetFilter from "./widgets/ResetFilter";

export default function ShopSidebar({
  isFilter = true,
}: {
  isFilter?: boolean;
}) {
  const searchParams = useSearchParams();
  return (
    <div>
      <h2 className="text-[4rem] font-[600] mb-5">Fresh fruits shop</h2>
      <Categories />
      {isFilter && (
        <>
          {[...searchParams.keys()].length ? <ResetFilter /> : ""}
          <PriceFilter />
          <AttributeFilter />
        </>
      )}
    </div>
  );
}
//widget
