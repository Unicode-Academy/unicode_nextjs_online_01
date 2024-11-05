"use client";
import { mutate } from "swr";
import { AppContext } from "../_components/Provider";
import { use } from "react";
export default function PostAdd() {
  // const context = useContext(AppContext);
  const context = use(AppContext); //React 19
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    const response = await fetch(`${process.env.SERVER_API}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    if (response.ok) {
      e.target.reset();
      const data = await response.json();
      mutate(
        `/posts`,
        (prevPosts) => {
          return [...prevPosts, data];
        },
        {
          revalidate: false,
        }
      );
    }
  };

  const handleUpdateToken = () => {
    context.setTokenValue("new-token");
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <input type="text" name="title" placeholder="Title..." required />
        </div>
        <div>
          <textarea name="body" placeholder="Content..."></textarea>
        </div>
        <button>Add</button>
      </form>
      <h4>Token: {context.token}</h4>
      <button onClick={handleUpdateToken}>Update Token</button>
    </div>
  );
}
