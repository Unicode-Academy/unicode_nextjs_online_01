export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const getPost = async () => {
    const response = await fetch(`${process.env.SERVER_API}/posts/${id}`);
    return response.json();
  };
  const post = await getPost();
  return {
    title: post.title,
  };
};

import PostDetail2 from "./PostDetail2";

export default async function PostDetailPage({ params }) {
  const { id } = await params;
  return <PostDetail2 id={id} />;
}
