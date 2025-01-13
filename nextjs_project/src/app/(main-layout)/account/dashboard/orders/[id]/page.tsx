import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import OrderItems from "./OrderItems";

export default async function OrderDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsStore = await params;
  const { id } = paramsStore;
  return (
    <div>
      <h2 className="text-[2.5rem] font-[600] mb-10">
        Chi tiết đơn hàng #{id}
      </h2>
      <h3 className="mb-5 text-[2rem] font-[600]">Thông tin đơn hàng</h3>
      <Table className="md:text-[1.6rem] mb-20 border">
        <TableBody>
          <TableRow>
            <TableHead className="w-[25%] py-5">Mã đơn hàng</TableHead>
            <TableCell>#{id}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="py-5">Trạng thái</TableHead>
            <TableCell>Đã thanh toán</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="py-5">Thời gian đặt hàng</TableHead>
            <TableCell>1/1/2025 09:00:00</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="py-5">Tổng tiền</TableHead>
            <TableCell>1000$</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="py-5">Phương thức thanh toán</TableHead>
            <TableCell>Chuyển khoản</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h3 className="mb-5 text-[2rem] font-[600]">Danh sách sản phẩm</h3>
      <OrderItems />
    </div>
  );
}
