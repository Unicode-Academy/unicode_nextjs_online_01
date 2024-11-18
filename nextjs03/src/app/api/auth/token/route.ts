import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export const GET = async () => {
  const cookieStore = await cookies();
  const tokenFromCookie = cookieStore.get("token")?.value;
  if (tokenFromCookie) {
    const token = JSON.parse(tokenFromCookie);
    return NextResponse.json({
      success: true,
      data: token,
      message: "Get Token Success",
    });
  }
  return NextResponse.json(
    {
      success: false,
      message: "Token not found",
    },
    {
      status: 404,
    }
  );
};

export const POST = async (request: NextRequest) => {
  const { token } = await request.json();
  const cookieStore = await cookies();
  cookieStore.set("token", JSON.stringify(token), {
    httpOnly: true,
    path: "/",
    secure: true,
    maxAge: 86400,
  });
  return NextResponse.json({
    success: true,
    message: "Save Token Success",
  });
};

export const DELETE = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  return NextResponse.json({
    success: true,
    message: "Remove Token Success",
  });
};
