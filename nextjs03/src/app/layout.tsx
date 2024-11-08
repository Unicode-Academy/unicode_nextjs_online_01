import { cookies } from "next/headers";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./utils/Provider";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tokenFromCookie = (await cookies()).get("token")?.value;
  const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
  return (
    <html lang="en">
      <body>
        <Provider token={token}>{children}</Provider>
      </body>
    </html>
  );
}
