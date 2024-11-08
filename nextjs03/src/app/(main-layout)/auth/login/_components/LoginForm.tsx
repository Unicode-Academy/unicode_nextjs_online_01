"use client";
import { useActionState } from "react";
import { handleLogin } from "../../action";
import { useRouter } from "next/navigation";
const initialState = {
  success: false,
  message: "",
};
export default function LoginForm() {
  const [state, formAction] = useActionState(handleLogin, initialState);
  const router = useRouter();
  if (state.success) {
    router.push("/");
  }
  return (
    <form action={formAction}>
      {state.message && (
        <div className="alert alert-danger">{state.message}</div>
      )}

      <div className="mb-3">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Mật khẩu</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Mật khẩu..."
        />
      </div>
      <div className="d-grid">
        <button className="btn btn-primary">Đăng nhập</button>
      </div>
    </form>
  );
}
