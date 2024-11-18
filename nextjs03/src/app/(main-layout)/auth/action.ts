"use server";
import { getProfile } from "@/app/utils/utils";
import { cookies } from "next/headers";
import { z } from "zod";
type FormState = {
  success: boolean;
  message: string;
  // errors?: object;
};

export const handleCreate = async (
  prevState: FormState,
  formData: FormData
) => {
  //Khai báo schema
  const schema = z.object({
    name: z.string().min(3, "Tên phải từ 3 ký tự"),
    email: z
      .string()
      .min(1, "Email bắt buộc phải nhập")
      .email("Email không đúng định dạng"),
    password: z.string().min(6, "Mật khẩu phải từ 6 ký tự"),
  });
  const validateFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validateFields.success) {
    return {
      success: false,
      message: "Dữ liệu không hợp lệ",
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  return {
    success: true,
    message: "Đăng ký tài khoản thành công",
  };
};

export const handleLogin = async (
  prevState: {
    success: boolean;
    message: string;
  },
  formData: FormData
) => {
  const schema = z.object({
    email: z
      .string()
      .min(1, "Email bắt buộc phải nhập")
      .email("Email không đúng định dạng"),
    password: z.string().min(1, "Mật khẩu bắt buộc phải nhập"),
  });
  const validateFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validateFields.success) {
    return {
      success: false,
      message: "Thông tin không hợp lệ",
    };
  }
  const body = validateFields.data;
  const response = await fetch(`${process.env.AUTH_SERVER_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    return {
      success: false,
      message: "Email hoặc mật khẩu không chính xác",
    };
  }
  const data = await response.json();

  //Lưu thông tin token vào cookie
  const cookieStore = await cookies();

  cookieStore.set("token", JSON.stringify(data), {
    httpOnly: true,
    path: "/",
    secure: true,
    maxAge: 86400,
  });
  //Lấy thông tin profile
  const user = await getProfile(data.access_token);

  return {
    success: true,
    data: {
      user,
      accessToken: data.access_token,
    },
    message: "Đăng nhập thành công",
  };
};
