import PostDetail from "./PostDetail";
import PostList from "./PostList";

export default function PostsPage({ params, searchParams }) {
  const { path } = params;

  return path ? (
    <PostDetail id={path[0]} />
  ) : (
    <PostList search={searchParams} />
  );
}
