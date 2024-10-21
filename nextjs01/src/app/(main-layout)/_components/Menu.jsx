"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Menu.css";

export default function Menu() {
  //Hook: Hàm đặc biệt của react, chỉ được gọi trong Function component
  const pathname = usePathname();
  return (
    <aside>
      <h2>Menu</h2>
      <ul className="menu">
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Trang chủ</Link>
        </li>
        <li className={pathname === "/products" ? "active" : ""}>
          <Link href="/products">Sản phẩm</Link>
        </li>
        <li className={pathname === "/posts" ? "active" : ""}>
          <Link href="/posts" prefetch={false}>
            Bài viết
          </Link>
        </li>
      </ul>
    </aside>
  );
}
