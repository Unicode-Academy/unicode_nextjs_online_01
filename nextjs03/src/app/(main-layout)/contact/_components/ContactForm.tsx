"use client";
import { use, useEffect, useState } from "react";
import { AppContext, Token } from "@/app/utils/Provider";
import Image from "next/image";
type User = {
  name: string;
  email: string;
  avatar: string;
};
export default function ContactForm() {
  const context: { token: Token } | null = use(AppContext);
  const token = context?.token;
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(
        `${process.env.AUTH_SERVER_API}/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token?.access_token}`,
          },
        }
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };
    getProfile();
  }, [token]);
  if (isLoading) {
    return null;
  }
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Image src={user.avatar} alt="avatar" width={200} height={200} />
    </div>
  );
}
