"use client";
import { usePathname, useRouter } from "next/navigation";

export default function PostList({ search }) {
  const { keyword, status } = search;
  const router = useRouter();
  const pathname = usePathname();
  const handleRedirect = () => {
    // window.location.href = "/products";
    router.refresh();
  };
  const handleChangeInput = (e) => {
    const value = e.target.value;
    const newUrl = pathname + "?keyword=" + value;
    router.push(newUrl);
  };
  return (
    <div>
      <h1>PostList</h1>
      <input
        type="search"
        placeholder="Nhập từ khóa..."
        onChange={handleChangeInput}
      />
      <h3>Keyword: {keyword}</h3>
      <h3>Status: {status}</h3>
      <button onClick={handleRedirect}>Click me</button>
    </div>
  );
}
