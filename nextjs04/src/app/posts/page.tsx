// import "./posts.scss";
// export const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };
export default async function Posts() {
  // const postList = await getPosts();
  return (
    <div className="posts">
      <h1 className="title">Post List</h1>
      <div className="post-list">
        {/* {postList.map((post: { id: number; title: string; body: string }) => (
          <div className="item" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
