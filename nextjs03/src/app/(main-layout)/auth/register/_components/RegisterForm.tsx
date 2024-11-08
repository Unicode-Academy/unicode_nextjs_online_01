"use client";

import { useActionState } from "react";
import { handleCreate } from "../../action";
const initialState = {
  success: false,
  message: "",
  errors: {},
};
export default function RegisterForm() {
  const [state, formAction] = useActionState(handleCreate, initialState);

  return (
    <form action={formAction}>
      {state.message && (
        <div className="alert alert-danger">{state.message}</div>
      )}
      <div className="mb-3">
        <label htmlFor="">Tên</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tên..."
        />
        {state.errors?.name && (
          <span className="text-danger">{state.errors.name[0]}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email..."
        />
        {state.errors?.email && (
          <span className="text-danger">{state.errors.email[0]}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="">Mật khẩu</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Mật khẩu..."
        />
        {state.errors?.password && (
          <span className="text-danger">{state.errors.password[0]}</span>
        )}
      </div>
      <div className="d-grid">
        <button className="btn btn-primary">Đăng ký tài khoản</button>
      </div>
    </form>
  );
}
