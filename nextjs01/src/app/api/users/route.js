//Định nghĩa các hàm tương với các HTTP METHOD

//GET ==> HTTP GET
//POST ==> HTTP POST
//PUT ==> HTTP PUT
//PATCH ==> HTTP PATCH
//DELETE ==> HTTP DELETE
import { NextResponse } from "next/server";
//Lấy dữ liệu
export const GET = (request) => {
  //Logic xử lý
  const status = request.nextUrl.searchParams.get("status");
  console.log(`Status: ${status}`);

  //Trả về JSON
  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
    {
      id: 4,
      name: "User 4",
    },
  ];
  return NextResponse.json(users, {
    status: 201,
  });
};

//Dùng để thêm mới
export const POST = async (request) => {
  const body = await request.json();
  return NextResponse.json({
    success: true,
    body,
  });
};
