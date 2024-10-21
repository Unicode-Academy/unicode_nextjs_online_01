import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { token } = await request.json();
  cookies().set("token", token, {
    path: "/",
    maxAge: 1000,
    httpOnly: true,
  });
  return NextResponse.json({
    success: true,
  });
};

//HTTP POST /api/cookies
