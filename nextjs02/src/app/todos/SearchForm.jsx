"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();
  const handleChangeValue = debounce((e) => {
    const value = e.target.value;
    router.push(`${pathname}?q=${encodeURIComponent(value)}`);
  }, 500);
  return (
    <input
      type="search"
      placeholder="Tìm kiếm..."
      onChange={handleChangeValue}
    />
  );
}
