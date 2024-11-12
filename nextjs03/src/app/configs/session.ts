export type SessionData<T> = {
  data: T;
};
export const sessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: process.env.COOKIE_NAME as string,
};
