import { Apple } from "lucide-react";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="mb-5">
      <h3 className="text-[2.4rem] font-[600]">Categories</h3>
      <ul className="mt-5">
        <li>
          <Link href={"#"} className="flex gap-2 items-center">
            <Apple size={16} /> Apples
          </Link>
        </li>
        <li>
          <Link href={"#"} className="flex gap-2 items-center">
            <Apple size={16} /> Apples
          </Link>
        </li>
        <li>
          <Link href={"#"} className="flex gap-2 items-center">
            <Apple size={16} /> Apples
          </Link>
        </li>
        <li>
          <Link href={"#"} className="flex gap-2 items-center">
            <Apple size={16} /> Apples
          </Link>
        </li>
      </ul>
    </div>
  );
}
