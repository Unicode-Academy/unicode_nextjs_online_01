import Image from "next/image";
import PageTitle from "../_components/PageTitle/PageTitle";
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

export default function CartPage() {
  return (
    <div>
      <PageTitle pageName="Giỏ hàng" />
      <div className="container py-20">
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
            <TableRow>
              <TableCell>
                <Image
                  src="https://themewagon.github.io/fruitables/img/vegetable-item-3.png"
                  width={100}
                  height={100}
                  alt="Product"
                />
              </TableCell>
              <TableCell>Sản phẩm 1</TableCell>
              <TableCell>2.99 $</TableCell>
              <TableCell>
                <Quantity value={1} />
              </TableCell>
              <TableCell>2.99 $</TableCell>
              <TableCell className="text-center">
                <CircleX className="text-red-500 cursor-pointer inline" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  src="https://themewagon.github.io/fruitables/img/vegetable-item-3.png"
                  width={100}
                  height={100}
                  alt="Product"
                />
              </TableCell>
              <TableCell>Sản phẩm 1</TableCell>
              <TableCell>2.99 $</TableCell>
              <TableCell>
                <Quantity value={1} />
              </TableCell>
              <TableCell>2.99 $</TableCell>
              <TableCell className="text-center">
                <CircleX className="text-red-500 cursor-pointer inline" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-end">
          <div className="bg-[#747d8862] w-[30%] rounded-[10px] p-[30px]">
            <h2 className="text-[2.4rem] font-[600]">Cart Total</h2>
            <h3 className="text-[1.6rem] mb-10">Total: 2.99 $</h3>
            <Button
              size={null}
              className="px-20 py-8 md:text-[2rem] rounded-[999px] text-primaryColor  font-[600]"
              variant={"outline"}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
Giỏ hàng
- Khi user chưa đăng nhập --> cookie, localStorage
- Khi user đăng nhập --> Lưu database (Back-End API)

{
  productId: 1,
  quantity: 10,
  attributes: [2,5]
}
*/
