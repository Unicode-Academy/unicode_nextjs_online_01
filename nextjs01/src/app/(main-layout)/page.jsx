import ClientDemo from "@/app/components/DemoComponent/ClientDemo";
import ServerDemo from "@/app/components/DemoComponent/ServerDemo";
import Link from "next/link";
import { cookies } from "next/headers";
export const metadata = {
  title: "Trang chủ - Unicode Academy",
};

export default async function HomePage() {
  console.log(cookies().get("token"));
  // cookies().set("token", "bhihi");
  // const data = await saveCookie("bhihi");
  // console.log(data);

  return (
    <div>
      {/* <Header /> */}
      {/* <h1>HomePage</h1>
      <button>Click me</button> */}
      {/* <Login /> */}
      <ClientDemo>
        <ServerDemo />
      </ClientDemo>
      <Link href="/auth/logout">Logout</Link>
    </div>
  );
}
