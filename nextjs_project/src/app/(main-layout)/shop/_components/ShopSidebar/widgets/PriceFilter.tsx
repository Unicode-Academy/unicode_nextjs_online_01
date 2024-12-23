import { debounce } from "@/app/utils/utils";
import { Slider } from "@/components/ui/slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
const MIN = 100000;
const MAX = 1000000;
let useFilterPrice = false; //Kiểm tra xem đã filter price hay chưa?
export default function PriceFilter() {
  const [price, setPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const priceFromUrl = searchParams.get("price");
  const currentSearchParams = [...searchParams.entries()];
  const handleChangePrice = ([value]: number[]) => {
    setPrice(value);
  };

  useEffect(() => {
    //call api --> lấy được min, max
    setMinPrice(MIN);
    setMaxPrice(MAX);
    if (priceFromUrl) {
      setPrice(Number(priceFromUrl));
    } else {
      setPrice(MIN);
    }
    setLoading(false);
  }, [priceFromUrl]);

  const navigationPrice = useCallback(
    debounce((value: number, currentSearchParams: string[][]) => {
      let isPrice = false;
      currentSearchParams.forEach((items, index) => {
        if (items[0] === "price") {
          currentSearchParams[index][1] = value.toString();
          isPrice = true;
        }
        if (items[0] === "page") {
          currentSearchParams[index][1] = "1";
        }
      });
      if (!isPrice) {
        currentSearchParams.push(["price", value.toString()]);
      }
      const queryString = currentSearchParams
        .map((items) => {
          return items.join("=");
        })
        .join("&");

      router.push(`${pathname}?${queryString}`);
    }),
    []
  );
  useEffect(() => {
    if (useFilterPrice) {
      navigationPrice(price, currentSearchParams);
    }
    return () => {
      if (price) {
        useFilterPrice = true;
      }
    };
  }, [price, navigationPrice]);
  if (isLoading) {
    return;
  }
  return (
    <div className="mb-5">
      <h3 className="text-[2.4rem] font-[600]">Price</h3>
      <Slider
        defaultValue={[price]}
        min={minPrice}
        step={1000}
        max={maxPrice}
        className="mt-5"
        onValueChange={handleChangePrice}
      />
      <span className="mt-3 block">{price.toLocaleString()} đ</span>
    </div>
  );
}
