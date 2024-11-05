"use client";

import { createContext, useState } from "react";

export const AppContext = createContext();
export default function Provider({ children, token }) {
  const [tokenValue, setTokenValue] = useState(token);
  return (
    <AppContext.Provider value={{ token: tokenValue, setTokenValue }}>
      {children}
    </AppContext.Provider>
  );
}

/*
Context: 
- Đối tượng context ==> Khởi tạo bằng React.createContext()
- Đưa dữ liệu cần chia sẻ vào Provider
- Nhận dữ liệu của context thông qua Consumer

Lưu ý: context chỉ hoạt động ở client component

Tối ưu hiệu từ react 18 trở xuống

React.memo --> Ngăn tình trạng re-render không cần thiết của component con khi component cha re-render. Component con chỉ re-render khi props thay đổi
useMemo --> Cache giá trị tính toán giữa các lần re-render
useCallback --> Cache hàm giữa các lần re-render
*/

// const a = (value) => {
//   console.log(value);
// };
// const b = a;
// const c = b;
// c("Hoàng An");
