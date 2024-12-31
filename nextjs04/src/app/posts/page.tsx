// import "./posts.scss";
export const getPosts = async (): Promise<
  { id: number; title: string; body: string }[]
> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
export default async function Posts() {
  const postList: { id: number; title: string; body: string }[] =
    await getPosts();
  return (
    <div className="posts">
      <h1 className="title">Post List</h1>
      <div className="post-list">
        {postList.map((post: { id: number; title: string; body: string }) => (
          <div className="item" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
