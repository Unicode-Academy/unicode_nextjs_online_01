import { AlertCircle, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
const AlertSuccess = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Thành công!</AlertTitle>
      <AlertDescription>
        Đã kích hoạt thành không. Bạn có thể đăng nhập ngay bây giờ
      </AlertDescription>
    </Alert>
  );
};
export default function VerifyPage() {
  const status = true;
  return (
    <div className="container py-10">
      {!status ? <AlertError /> : <AlertSuccess />}
    </div>
  );
}
