"use client";

import { useUser } from "@/app/utils/hook";
// import { authClient } from "@/app/utils/client";
// import { AppContext } from "@/app/utils/Provider";
// import { deleteSession } from "@/app/utils/session";
// import { removeToken } from "@/app/utils/utils";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { use } from "react";
// import useSWR from "swr";
// const getProfile = async () => {
//   return authClient.get("/auth/profile");
// };
export default function ContactForm() {
  // const context = use(AppContext);

  // const router = useRouter();
  // const { data: user, isLoading } = useSWR(
  //   context?.accessToken && `/auth/profile`,
  //   () => getProfile(context?.accessToken, context?.refreshToken)
  // );
  // const { data: user, isLoading } = useSWR(`/auth/profile`, getProfile);
  // const user = context.user;
  const context = useUser();
  const user = context?.user as {
    name: string;
    email: string;
    avatar: string;
  };
  const accessToken = context?.accessToken;
  console.log(accessToken);

  // const handleLogout = async () => {
  //   await deleteSession("user");
  //   await removeToken(); //Xóa token trong cookie
  //   router.push("/auth/login");
  // };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (user === false) {
  //   handleLogout();
  // }

  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      {user?.avatar && (
        <Image src={user?.avatar} alt="avatar" width={200} height={200} />
      )}
    </div>
  );
}

//Custom Hook: useUser() --> Lấy thông tin user, token ở phía client
//Trong react: Tự tạo được hook chỉ cần đảm bảo nguyên tắc
// - Hàm bắt đầu bằng từ khóa use
// - Trong custom hook được phép sử dụng các hook khác
// Custom Hook trong React không khác gì 1 component, chỉ khác là trả về kiểu dữ liệu không phải jsx
