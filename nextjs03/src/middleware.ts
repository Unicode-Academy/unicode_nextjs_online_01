import { NextResponse, type NextRequest } from "next/server";
import { getIronSessionData } from "./app/utils/session-server";

const protectedRoutes = ["/profile", "/admin", "/orders"];
const isProtectedRoute = (path: string) => {
  return protectedRoutes.some((item: string) => {
    return path.startsWith(item);
  });
};
export async function middleware(request: NextRequest) {
  const { nextUrl, url } = request;
  const session = await getIronSessionData<{
    user: {
      role: string;
    };
  }>();
  const user = session?.user;

  if (isProtectedRoute(nextUrl.pathname)) {
    if (!user || !request.cookies.get("token")?.value) {
      return NextResponse.redirect(new URL("/auth/login", url));
    }
    //Nếu role là customer và pathname là /admin --> Chuyển về trang chủ
    if (user.role === "customer" && nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", url));
    }
    //Nếu role là admin và pathname là các trường hợp còn lại trong protectedRoutes --> Đi tiếp (Không làm gì cả)
  }

  if (user && !isProtectedRoute(nextUrl.pathname)) {
    if (user.role === "admin") {
      return NextResponse.redirect(new URL("/admin", url));
    }
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/admin/:path*",
    "/orders/:path*",
    "/auth/:path*",
  ],
};

//Buổi sau:
// - Refresh Token
// - Build Http Client để call API --> Tự động Refresh Token khi hết hạn --> Cập nhật session (Cả client và server)
