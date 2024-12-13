import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Shop Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(openSans.className)}>{children}</body>
    </html>
  );
}
