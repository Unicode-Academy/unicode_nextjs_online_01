import { headers } from "next/headers";
export const can = async (name: string) => {
  const allHeaders = await headers();
  const permissions = JSON.parse(allHeaders.get("x-permissions") as string);
  return permissions.includes(name);
};
