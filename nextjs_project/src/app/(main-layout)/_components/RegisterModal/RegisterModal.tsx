"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function RegisterModal({
  isShow = false,
  onOpenChange,
  onOpenLogin,
}: {
  isShow: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenLogin: () => void;
}) {
  return (
    <Dialog open={isShow} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-[2rem]">
            Đăng ký tài khoản
          </DialogTitle>
          <DialogDescription className="text-[1.4rem]">
            Vui lòng điền đầy đủ thông tin để đăng ký
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-[1.6rem]">
              Tên
            </Label>
            <Input
              id="name"
              placeholder="Name..."
              className="col-span-3 md:text-[1.6rem] px-5 py-7"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-[1.6rem]">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email..."
              className="col-span-3 md:text-[1.6rem] px-5 py-7"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right text-[1.6rem]">
              Mật khẩu
            </Label>
            <Input
              id="password"
              placeholder="Mật khẩu..."
              className="col-span-3 md:text-[1.6rem] px-5 py-7"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="confirm_password"
              className="text-right text-[1.6rem]"
            >
              Nhập lại mật khẩu
            </Label>
            <Input
              id="confirm_password"
              placeholder="Nhập lại mật khẩu..."
              className="col-span-3 md:text-[1.6rem] px-5 py-7"
            />
          </div>
        </div>
        <DialogFooter className="flex-wrap">
          <div>
            <Button
              type="submit"
              size={null}
              className="w-full md:text-[1.6rem] py-3 px-7 bg-primaryColor text-white"
            >
              Đăng ký
            </Button>
          </div>
          <div className="w-full text-center py-3">
            <p className="cursor-pointer" onClick={onOpenLogin}>
              Quay lại đăng nhập
            </p>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
