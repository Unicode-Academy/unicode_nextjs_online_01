import { NextResponse, type NextRequest } from "next/server";
import { getIronSessionData } from "./app/utils/session-server";

const protectedRoutes = ["/profile", "/admin", "/orders"];
const modules: Record<string, string> = {
  "/admin/products": "products.read",
  "/admin/products/create": "products.add",
  "/admin/products/edit/*": "products.update",
  "/admin/products/delete/*": "products.delete",
};
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
    token: string;
  }>();
  const user = session?.user;
  const allHeaders = new Headers(request.headers);
  if (isProtectedRoute(nextUrl.pathname)) {
    if (!user || !request.cookies.get("token")?.value) {
      return NextResponse.redirect(new URL("/auth/login", url));
    }
    //Nếu role là customer và pathname là /admin --> Chuyển về trang chủ
    if (user.role === "customer" && nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", url));
    }

    //Kiểm tra quyền (Authorization)
    if (nextUrl.pathname.startsWith("/admin")) {
      const checkPermission = async () => {
        const response = await fetch(`${process.env.API_SERVER}/permissions`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,
          },
        });
        const permissions = await response.json();
        allHeaders.set("x-permissions", JSON.stringify(permissions));
        //Kiểm tra
        const findPath = Object.keys(modules).find((path) => {
          const pattern = new RegExp(`^${path.replaceAll("*", ".+?")}$`);
          return pattern.test(nextUrl.pathname);
        });
        if (findPath && permissions.includes(modules[findPath])) {
          return true;
        }
        return false;
      };
      const isPermission = await checkPermission();
      if (!isPermission && nextUrl.pathname !== "/admin") {
        return NextResponse.redirect(new URL("/forbidden", request.url));
      }
    }

    //Nếu role là admin và pathname là các trường hợp còn lại trong protectedRoutes --> Đi tiếp (Không làm gì cả)
  }

  if (user && !isProtectedRoute(nextUrl.pathname)) {
    if (user.role === "admin") {
      return NextResponse.redirect(new URL("/admin", url));
    }
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next({
    request: {
      headers: allHeaders,
    },
  });
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
