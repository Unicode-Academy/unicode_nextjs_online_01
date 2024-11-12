import { getIronSessionData } from "@/app/utils/session-server";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await getIronSessionData<{
    user: {
      name: string;
      email: string;
      avatar: string;
    };
  }>();
  const user = session.user;
  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>Tên: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <Image src={user?.avatar} alt="avatar" width={200} height={200} />
    </div>
  );
}
