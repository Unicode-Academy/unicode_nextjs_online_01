import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <Link href={`/`}>Home</Link>
      <Link href={`/about`}>About</Link>
      <Link href={`/auth/login`}>Login</Link>
      <Link href={`/posts`}>Posts</Link>
      <Link href={`/todos`}>Todos</Link>
    </div>
  );
}
