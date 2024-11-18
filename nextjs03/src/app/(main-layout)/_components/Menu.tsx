"use client";
import { deleteSession } from "@/app/utils/session";
import Link from "next/link";
import useSWR from "swr";
import { authClient } from "@/app/utils/client";
import { removeToken } from "@/app/utils/utils";
import { useEffect } from "react";
export default function Menu() {
  // const router = useRouter();
  const { data: user, mutate } = useSWR(`/auth/profile`, () =>
    authClient.get(`/auth/profile`)
  );
  const handleLogout = async () => {
    //Gọi API logout để thêm token vào blacklist phía server
    await deleteSession("user");
    await removeToken(); //Xóa token trong cookie
    window.location.href = "/auth/login";
  };
  useEffect(() => {
    mutate();
  }, [user, mutate]);
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
            <p>Chào bạn: {(user as { name: string }).name}</p>
            <button onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <Link href={`/auth/login`}>Đăng nhập</Link>
        )}
      </div>
    </div>
  );
}
