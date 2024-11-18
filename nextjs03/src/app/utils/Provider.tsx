"use client";
import useSWR from "swr";
import { createContext, useEffect } from "react";
import { getToken } from "./utils";
import { usePathname } from "next/navigation";
import { authClient } from "./client";

export const AppContext = createContext<{
  accessToken: string;
  refreshToken: string;
  user: unknown;
} | null>(null);
export default function Provider({ children }: { children: React.ReactNode }) {
  const { data: token, mutate } = useSWR(`/auth/token`, getToken);
  const { data: user } = useSWR(`/auth/profile`, () =>
    authClient.get(`/auth/profile`)
  );
  const accessToken = token?.data?.access_token ?? "";
  const refreshToken = token?.data?.refresh_token ?? "";
  const pathname = usePathname();
  useEffect(() => {
    mutate();
  }, [pathname, mutate]);
  return (
    <AppContext.Provider value={{ accessToken, refreshToken, user }}>
      {children}
    </AppContext.Provider>
  );
}
