import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function ResetFilter() {
  const pathname = usePathname();
  // const router = useRouter();
  const handleReset = () => {
    // router.push(pathname);
    window.location.href = pathname;
  };
  return (
    <Button
      variant="destructive"
      className="lg:text-[1.6rem]"
      onClick={handleReset}
    >
      Xóa bộ lọc
    </Button>
  );
}
