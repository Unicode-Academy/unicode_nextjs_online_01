"use client";

import { useEffect, useState } from "react";

export default function PostDetail({ id }) {
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.ok) {
          throw new Error(`Fetch to failed /posts/${id}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);
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

//closure
