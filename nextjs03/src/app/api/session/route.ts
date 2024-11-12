import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { NextResponse, type NextRequest } from "next/server";
import { SessionData, sessionOptions } from "@/app/configs/session";

export async function GET() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData<{ [key: string]: string }>>(
    cookieStore,
    sessionOptions
  );
  return NextResponse.json(session.data);
}

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData<{ [key: string]: string }>>(
    cookieStore,
    sessionOptions
  );
  const body = await request.json();
  if (body.type === "update") {
    session.data = {
      [body.key]: body.data,
    };
  }

  if (body.type === "delete") {
    delete session.data[body.key];
  }

  await session.save();
  return NextResponse.json({ success: true });
}
