"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menuLink = [
  {
    link: "/account/dashboard",
    title: "Tổng quan",
  },
  {
    link: "/account/dashboard/profile",
    title: "Thông tin cá nhân",
  },
  {
    link: "/account/dashboard/orders",
    title: "Đơn hàng",
  },
];
export default function AccountDashboardSidebar() {
  const pathname = usePathname();
  return (
    <div>
      <div className="mb-5">
        <div className="mb-5">
          <h2 className="text-[2rem] font-[600]">Chào Hoàng An</h2>
          <p className="text-[gray]">hoangan.web@gmail.com</p>
        </div>
        <Button
          className="md:text-[1.3rem] bg-primaryColor text-white px-10 py-3"
          size={null}
        >
          Đăng xuất
        </Button>
      </div>
      <div>
        <ul>
          {menuLink.map((item, index) => (
            <li
              key={index}
              className={cn(
                "mb-3 border bg-gray-200 px-5 py-2 hover:bg-primaryColor",
                pathname === item.link && "bg-primaryColor"
              )}
            >
              <Link
                href={item.link}
                className={cn(
                  "hover:text-white block",
                  pathname === item.link && "text-white"
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
