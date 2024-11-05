"use client";

import useSWR from "swr";

const getPost = async (id) => {
  const response = await fetch(`${process.env.SERVER_API}/posts/${id}`);
  if (!response.ok) {
    throw new Error("Fetch to faied /posts/" + id);
  }
  return response.json();
};
export default function PostDetail2({ id }) {
  const {
    data: post,
    isLoading,
    error,
  } = useSWR(`/posts/${id}`, () => getPost(id));
  if (error) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}
