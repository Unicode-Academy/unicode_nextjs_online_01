import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-[2.5rem] font-[600] mb-10">Thông tin cá nhân</h2>
      <form action="">
        <div className="mb-5">
          <label className="mb-3 block">Họ và tên</label>
          <Input
            type="text"
            className="md:text-[1.6rem] px-5 py-7"
            placeholder="Họ và tên"
          />
        </div>
        <div className="mb-5">
          <label className="mb-3 block">Email</label>
          <Input
            type="email"
            className="md:text-[1.6rem] px-5 py-7"
            placeholder="Email"
          />
        </div>
        <div className="mb-5">
          <label className="mb-3 block">Địa chỉ</label>
          <Input
            type="text"
            className="md:text-[1.6rem] px-5 py-7"
            placeholder="Địa chỉ"
          />
        </div>

        <div className="mb-5">
          <label className="mb-3 block">Điện thoại</label>
          <Input
            type="text"
            className="md:text-[1.6rem] px-5 py-7"
            placeholder="Điện thoại"
          />
        </div>
        <Button className="md:text-[1.6rem] bg-primaryColor text-white px-10 py-7">
          Lưu thay đổi
        </Button>
      </form>
    </div>
  );
}
