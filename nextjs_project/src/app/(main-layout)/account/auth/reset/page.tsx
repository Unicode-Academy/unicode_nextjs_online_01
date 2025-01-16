import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const AlertError = () => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Có lỗi</AlertTitle>
      <AlertDescription>
        Liên kết không tồn tại. Vui lòng thử lại sau
      </AlertDescription>
    </Alert>
  );
};
export default function ResetPassword() {
  const status = false;

  return (
    <div className="w-[400px] mx-auto py-10">
      {!status ? (
        <AlertError />
      ) : (
        <>
          <h1 className="text-center text-[2.4rem] font-[600]">
            Đặt lại mật khẩu
          </h1>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="password" className="text-right text-[1.6rem]">
                Mật khẩu
              </Label>
              <Input
                id="password"
                placeholder="Mật khẩu..."
                className="col-span-3 md:text-[1.6rem] px-5 py-7"
              />
            </div>
            <div>
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
            <Button
              type="submit"
              size={null}
              className="w-full md:text-[1.6rem] py-5 px-7 bg-primaryColor text-white"
            >
              Đặt lại mật khẩu
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
