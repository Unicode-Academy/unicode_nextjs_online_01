export const metadata = {
  title: "Danh sách bài viết",
};
import PostAdd from "./PostAdd";
import PostList2 from "./PostList2";

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <PostList2 />
      <PostAdd />
    </div>
  );
}
