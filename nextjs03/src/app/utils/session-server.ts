import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "../configs/session";

export async function getIronSessionData<T>() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData<T>>(
    cookieStore,
    sessionOptions
  );

  return session.data;
}
