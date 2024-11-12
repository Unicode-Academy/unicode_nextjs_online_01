"use client";

import { AppContext } from "@/app/utils/Provider";
// import { getSession } from "@/app/utils/session";
// import { setSession } from "@/app/utils/session";
import { getProfile } from "@/app/utils/utils";
import Image from "next/image";
import { use } from "react";
import useSWR from "swr";

export default function ContactForm() {
  const context = use(AppContext);

  const { data: user, isLoading } = useSWR(
    context?.token && `/auth/profile`,
    () => getProfile(context?.token)
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // setSession("user", {
  //   name: "Hoàng An",
  //   email: "hoangan.web@gmail.com",
  // });
  // getSession().then((data) => {
  //   console.log(data);
  // });
  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      {user?.avatar && (
        <Image src={user?.avatar} alt="avatar" width={200} height={200} />
      )}
    </div>
  );
}
