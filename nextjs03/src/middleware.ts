// import { NextRequest, NextResponse } from "next/server";

export const getProfile = async (token: string) => {
  const response = await fetch(`${process.env.AUTH_SERVER_API}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return false;
  }
  const data = await response.json();
  return data;
};
export const middleware = async () => {
  // const pathname = request.nextUrl.pathname;
  // if (pathname.startsWith("/profile")) {
  //   const tokenFromCookie = request.cookies.get("token")?.value;
  //   if (!tokenFromCookie) {
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
  //   const token = JSON.parse(tokenFromCookie);
  //   //Call API lấy thông tin profile
  //   const user = await getProfile(token.access_token);
  //   if (!user) {
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
  // }
};

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
