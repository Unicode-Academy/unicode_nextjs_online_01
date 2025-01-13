"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import cartDataFromAPI from "@/app/data/cart.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCartUrl } from "@/app/utils/url";
type CartItem = {
  id: number;
  name: string;
  price: number;
  slug: string;
  image: string;
  quantity: number;
  amount: number;
  attributes?: { [key: string]: string };
};
export default function Cart() {
  const [cartData, setCartData] = useState<CartItem[]>([] as CartItem[]);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cartData = JSON.parse(localStorage.getItem("cart") as string);
      if (!cartData?.length) {
        router.push(getCartUrl());
        return;
      }

      //Call API bằng cách gửi cartData lên Back-End để trả về cartDataFromAPI
      setCartData(cartDataFromAPI);
    }
  }, []);
  const cartTotal = cartData.reduce((total, item) => total + item.amount, 0);
  return (
    <div>
      <Table className="md:text-[1.6rem] mb-5 border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15%] py-5">Products</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartData.map((item, index) => {
            let attribute = null;
            if (item.attributes) {
              attribute = Object.entries(item.attributes)
                .map(([key, value]) => `${key}: ${value}`)
                .join(", ");
            }
            return (
              <TableRow key={index}>
                <TableCell>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.name}
                  />
                </TableCell>
                <TableCell>
                  <p>{item.name}</p>
                  {attribute && <p className="pt-5 italic">{attribute}</p>}
                </TableCell>
                <TableCell>{item.price} $</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.amount} $</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <h3 className="text-end text-[1.8rem] font-[600]">
        Total: {cartTotal.toLocaleString()} $
      </h3>
    </div>
  );
}
