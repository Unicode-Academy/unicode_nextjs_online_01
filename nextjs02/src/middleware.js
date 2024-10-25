import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  //   console.log(request.headers.get("user-agent"));
  //   const cookie = request.headers.get("cookie");
  //   console.log(cookie);
  //   const email = request.cookies.get("email")?.value;
  //   console.log(`Email`, email);

  //   const name = request.cookies.get("name")?.value;
  //   console.log(`Name`, name);

  //   const cookie = request.cookies.getAll();
  //   console.log(cookie);

  //Thêm request header
  const requestHeader = new Headers(request.headers); //Lấy tất cả headers
  //   requestHeader.set("x-user", "Hoang An");

  //Khởi tạo Response
  const response = NextResponse.next({
    request: {
      headers: requestHeader,
    },
  });
  //   response.headers.set("x-api-key", "ahihi");
  //Thêm cookie
  //   response.cookies.set("email", "hoangan.web@gmail.com", {
  //     path: "/",
  //     httpOnly: true,
  //     maxAge: 1000,
  //   });

  //Xóa cookie
  //   response.cookies.delete("email");
  const isLogin = request.cookies.get("is_login") ?? false;
  if (pathname.startsWith("/admin") && !isLogin) {
    const loginPage = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginPage);
  }

  if (pathname.startsWith("/gioi-thieu")) {
    return NextResponse.rewrite(new URL("/about", request.url));
  }

  return response;
};

export const config = {
  matcher: [
    // "/about/:path*", //Tất cả các đường dẫn con của /about
    // "/posts/:path*", //Tất cả các đường dẫn con của /posts
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
  ],
};
