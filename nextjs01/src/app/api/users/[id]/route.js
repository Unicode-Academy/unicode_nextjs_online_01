import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  const { id } = params;
  return NextResponse.json({
    success: true,
    id,
  });
};
