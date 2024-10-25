import { notFound } from "next/navigation";
import Profile from "./Profile";
import NotFound from "../not-found";

export default async function AdminPage() {
  const a = 10;
  if (a <= 10) {
    return notFound();
    // return <NotFound />;
  }
  return (
    <div>
      <h1>Admin Page</h1>
      <Profile />
    </div>
  );
}
