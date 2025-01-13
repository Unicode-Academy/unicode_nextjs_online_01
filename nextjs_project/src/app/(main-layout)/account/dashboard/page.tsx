export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-[2.5rem] font-[600] mb-10">Tổng quan</h2>
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-[#f4f6f8] p-5 text-center">
          <h3 className="text-[2rem] font-[600]">Đơn hàng</h3>
          <h4 className="text-[3rem] font-[600]">10</h4>
        </div>
        <div className="bg-[#f4f6f8] p-5 text-center">
          <h3 className="text-[2rem] font-[600]">Đã hoàn thành</h3>
          <h4 className="text-[3rem] font-[600]">5</h4>
        </div>
        <div className="bg-[#f4f6f8] p-5 text-center">
          <h3 className="text-[2rem] font-[600]">Chưa hoàn thành</h3>
          <h4 className="text-[3rem] font-[600]">3</h4>
        </div>
        <div className="bg-[#f4f6f8] p-5 text-center">
          <h3 className="text-[2rem] font-[600]">Tổng giá trị</h3>
          <h4 className="text-[3rem] font-[600]">1000$</h4>
        </div>
      </div>
    </div>
  );
}
