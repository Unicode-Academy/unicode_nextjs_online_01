"use client";
import { useActionState, useEffect } from "react";
import clsx from "clsx";
import { handleLogin } from "../../action";
import { useRouter } from "next/navigation";
import { setSession } from "@/app/utils/session";
const initialState = {
  success: false,
  message: "",
  data: {},
};
export default function LoginForm() {
  const [state, formAction] = useActionState(handleLogin, initialState);
  const router = useRouter();
  useEffect(() => {
    const redirect = async () => {
      if (state.success) {
        await setSession("user", state.data);
        if (state.data.role === "admin") {
          return router.push("/admin");
        }
        router.push("/");
      }
    };
    redirect();
  }, [state, router]);

  return (
    <form action={formAction}>
      {state.message && (
        <div
          className={clsx(
            "alert",
            state.success ? "alert-success" : "alert-danger"
          )}
        >
          {state.message}
        </div>
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
