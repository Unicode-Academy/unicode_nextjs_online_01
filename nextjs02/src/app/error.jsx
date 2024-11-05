"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Đã có lỗi xảy ra</h1>
      <h2>{error.message}</h2>
      <button onClick={reset}>Thử lại</button>
    </div>
  );
}
