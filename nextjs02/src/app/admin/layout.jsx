export default function AdminLayout({ children }) {
  return (
    <div>
      <nav>Menu</nav>
      <div>{children}</div>
    </div>
  );
}
