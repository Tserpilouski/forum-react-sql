import React, { useRef } from "react";
import {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../services/postsServices";

const Home = () => {
  const { data: posts, isLoading, isSuccess } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      id: 3,
      user_id: 23,
      title: inputRef.current.value,
      content: "Brother",
      created_at: new Date(),
    });
    inputRef.current.value = "";
  };

  let content;

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!posts?.posts) {
    return <div>No posts available</div>;
  } else if (isSuccess) {
    console.log("update component");
    content = posts.posts.map((post) => {
      return (
        <div key={post.id}>
          <input
            type="checkbox"
            checked={post.completed}
            id={post.id}
            onChange={() => updatePost({ ...post, completed: !post.completed })}
          />
          <label htmlFor={post.id}>{post.title}</label>
          <div>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="container">
      <h1>Hello Home user</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      {content.map((item) => item)}
    </div>
  );
};

export default Home;
