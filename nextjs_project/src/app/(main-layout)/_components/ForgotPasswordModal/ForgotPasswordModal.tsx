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
export default function ForgotPasswordModal({
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
            Quên mật khẩu
          </DialogTitle>
          <DialogDescription className="text-[1.4rem]">
            Vui lòng nhập email để lấy lại mật khẩu
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
        </div>
        <DialogFooter className="flex-wrap">
          <div>
            <Button
              type="submit"
              size={null}
              className="w-full md:text-[1.6rem] py-3 px-7 bg-primaryColor text-white"
            >
              Xác nhận
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
