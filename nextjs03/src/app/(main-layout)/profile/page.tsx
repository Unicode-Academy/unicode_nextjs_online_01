import { getProfile } from "../../../middleware";
import { cookies } from "next/headers";
import Image from "next/image";
export default async function ProfilePage() {
  let user;
  const tokenFromCookie = (await cookies()).get("token")?.value;
  if (tokenFromCookie) {
    const token = JSON.parse(tokenFromCookie);
    user = await getProfile(token.access_token);
  }
  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>Tên: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <Image src={user?.avatar} alt="avatar" width={200} height={200} />
    </div>
  );
}
