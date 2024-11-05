"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function PostList() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw new Error("Fetch to failed /posts");
      }
      const data = await response.json();
      setPostList(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  if (error) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        postList.map((post) => (
          <h3 key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
        ))
      )}
    </div>
  );
}
