"use client";

import { useEffect, useRef, useState } from "react";
export default function PostList() {
  //   const [count, setCount] = useState(0);
  //   const myRef = useRef(0);

  //   const handleIncrement = () => {
  //     // setCount(count + 1);
  //     setCount((prevCount) => {
  //       const newCount = prevCount + 1;
  //       if (newCount <= 5) {
  //         myRef.current = newCount;
  //       }

  //       return newCount;
  //     });
  //   };
  //   useEffect(() => {
  //     localStorage.setItem("user", "hoangan");
  //   }, []);
  //   console.log("Re-render", count);

  //   useEffect(() => {
  //     console.log(`Effect ${count}`);
  //     return () => {
  //       console.log(`Clean up ${count}`);
  //     };
  //   });
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPostList(data);
    setLoading(false);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {/* <h2>Count: {count}</h2>
      {console.log(`Update UI`, count)}
      <button onClick={handleIncrement}>Up</button> */}
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        postList.map((post) => <h3 key={post.id}>{post.title}</h3>)
      )}
    </div>
  );
}
