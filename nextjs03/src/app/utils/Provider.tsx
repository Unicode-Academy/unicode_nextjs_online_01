"use client";

import { createContext } from "react";
export type Token = { access_token: string; refresh_token: string };

export const AppContext = createContext<{ token: Token } | null>(null);
export default function Provider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: Token;
}) {
  return (
    <AppContext.Provider value={{ token }}>{children}</AppContext.Provider>
  );
}
