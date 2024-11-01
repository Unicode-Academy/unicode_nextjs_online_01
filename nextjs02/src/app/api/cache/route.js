import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  //Xóa theo path hay theo tag
  const { type, value } = await request.json();
  if (type === "path") {
    revalidatePath(value);
    return NextResponse.json({ success: true });
  }
  if (type === "tags") {
    revalidateTag(value);
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false },
    {
      status: 500,
    }
  );
};
