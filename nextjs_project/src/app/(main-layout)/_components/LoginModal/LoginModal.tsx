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
export default function LoginModal({
  isShow = false,
  onOpenChange,
}: {
  isShow: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={isShow} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-[2rem]">Đăng nhập</DialogTitle>
          <DialogDescription className="text-[1.4rem]">
            Vui lòng điền đầy đủ thông tin để đăng nhập
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
        </div>
        <DialogFooter>
          <Button
            type="submit"
            size={null}
            className="md:text-[1.6rem] py-3 px-7 bg-primaryColor text-white"
          >
            Đăng nhập
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
