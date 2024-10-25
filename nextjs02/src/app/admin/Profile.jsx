import { headers } from "next/headers";
export default async function Profile() {
  const requestHeader = new Headers(await headers());
  const user = requestHeader.get("x-user");
  return <h2>User Login: {user}</h2>;
}
