"use client";
import useSWR from "swr";
import { createContext, useEffect } from "react";
import { getToken } from "./utils";
import { usePathname } from "next/navigation";

export const AppContext = createContext<{ token: string } | null>(null);
export default function Provider({ children }: { children: React.ReactNode }) {
  const { data: token, mutate } = useSWR(`/auth/token`, getToken);
  const accessToken = token?.data?.access_token ?? "";
  const pathname = usePathname();
  useEffect(() => {
    mutate();
  }, [pathname, mutate]);
  return (
    <AppContext.Provider value={{ token: accessToken }}>
      {children}
    </AppContext.Provider>
  );
}
