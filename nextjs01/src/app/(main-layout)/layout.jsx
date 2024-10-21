import Link from "next/link";
import Menu from "./_components/Menu";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Menu />
      <div className="content">{children}</div>
    </div>
  );
}
