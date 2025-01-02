"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleX } from "lucide-react";
import Quantity from "../_components/Quantity";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import cartDataFromAPI from "@/app/data/cart.json";
import { cloneDeep } from "@/app/utils/utils";
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
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cartData = JSON.parse(localStorage.getItem("cart") as string);
      if (!cartData) return;

      console.log(`LocalStorage: ${cartData}`);

      //Call API bằng cách gửi cartData lên Back-End để trả về cartDataFromAPI
      setCartData(cartDataFromAPI);
    }
  }, []);
  const cartTotal = cartData.reduce((total, item) => total + item.amount, 0);
  const handleChangeQuantity = (value: number, index: number) => {
    //Update localStorage
    updateCartStorage(value, index);

    //Update state cart
    const newCartData = cloneDeep(cartData);
    newCartData[index].quantity = value;
    newCartData[index].amount = value * newCartData[index].price;
    setCartData(newCartData);
  };

  const handleRemoveItem = (index: number) => {
    removeCartStorage(index);

    const newCartData = cloneDeep(cartData);
    newCartData.splice(index, 1);
    setCartData(newCartData);
  };

  const updateCartStorage = (value: number, index: number): void => {
    const cartData = JSON.parse(localStorage.getItem("cart") as string);
    cartData[index].quantity = value;
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const removeCartStorage = (index: number): void => {
    const cartData = JSON.parse(localStorage.getItem("cart") as string);
    cartData.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };
  return (
    <>
      <Table className="md:text-[1.6rem] mb-20 border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[15%] py-5">Products</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-center">Handle</TableHead>
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
                <TableCell>
                  <Quantity
                    value={item.quantity}
                    onChange={(quantity) => {
                      handleChangeQuantity(quantity, index);
                    }}
                  />
                </TableCell>
                <TableCell>{item.amount} $</TableCell>
                <TableCell className="text-center">
                  <CircleX
                    className="text-red-500 cursor-pointer inline"
                    onClick={() => handleRemoveItem(index)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {cartData.length ? (
        <div className="flex justify-end">
          <div className="bg-[#747d8862] w-[30%] rounded-[10px] p-[30px]">
            <h2 className="text-[2.4rem] font-[600]">Cart Total</h2>
            <h3 className="text-[1.6rem] mb-10">
              Total: {cartTotal.toLocaleString()} $
            </h3>
            <Button
              size={null}
              className="px-20 py-8 md:text-[2rem] rounded-[999px] text-primaryColor  font-[600]"
              variant={"outline"}
            >
              Checkout
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
