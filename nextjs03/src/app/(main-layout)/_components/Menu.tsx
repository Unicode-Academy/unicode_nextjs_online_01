import { getProfile } from "@/middleware";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Menu() {
  let user;
  const tokenFromCookie = (await cookies()).get("token")?.value;
  if (tokenFromCookie) {
    const token = JSON.parse(tokenFromCookie);
    user = await getProfile(token.access_token);
  }
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
            <button>Đăng xuất</button>
          </>
        ) : (
          <Link href={`/auth/login`}>Đăng nhập</Link>
        )}
      </div>
    </div>
  );
}
