"use client";
import Link from "next/link";
import useSWR from "swr";
import PostAdd from "./PostAdd";
import { AppContext } from "../_components/Provider";
import { use } from "react";
const postFetcher = async () => {
  const response = await fetch(`${process.env.SERVER_API}/posts`);
  if (!response.ok) {
    throw new Error("Fetch to faied /posts");
  }
  return response.json();
};

export default function PostList2() {
  const {
    data: postList,
    isLoading,
    error,
  } = useSWR(`/posts`, postFetcher, {
    fallbackData: [],
    // revalidateOnFocus: false,
    // refreshInterval: 1000,
  });
  const context = use(AppContext);
  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div>
      <h4>Token: {context.token}</h4>
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
