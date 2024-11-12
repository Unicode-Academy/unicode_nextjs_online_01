"use client";
import { use } from "react";
import { deleteSession } from "@/app/utils/session";
import { getProfile, removeToken } from "@/app/utils/utils";
import Link from "next/link";
import useSWR from "swr";
import { AppContext } from "@/app/utils/Provider";
import { useRouter } from "next/navigation";
export default function Menu() {
  const router = useRouter();
  const context = use(AppContext);
  const { data: user } = useSWR(context?.token && `/auth/profile`, () =>
    getProfile(context?.token)
  );
  const handleLogout = async () => {
    //Gọi API logout để thêm token vào blacklist phía server
    await deleteSession("user");
    await removeToken(); //Xóa token trong cookie
    router.push("/auth/login");
    // window.location.href = "/auth/login";
  };
  return (
    <div>
      <ul className="nav nav-pills flex-column">
        <li>
          <Link href={`/`}>Trang chủ</Link>
        </li>
        <li>
          <Link href={`/about`}>Giới thiệu</Link>
        </li>
        <li>
          <Link href={`/profile`}>Profile</Link>
        </li>
        <li>
          <Link href={`/contact`}>Contact</Link>
        </li>
      </ul>
      <hr />
      <div>
        {user ? (
          <>
            <p>Chào bạn: {user.name}</p>
            <button onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <Link href={`/auth/login`}>Đăng nhập</Link>
        )}
      </div>
    </div>
  );
}
