import React from "react";
import {
  useGetPostsQuery,
  // useUpdatePostMutation,
  // useDeletePostMutation,
} from "../services/postsServices";
import HomeCard from "../components/HomeCard";
import "../styles/homeview.scss";

const Home = () => {
  const { data: posts, isLoading, isSuccess } = useGetPostsQuery();
  // const [updatePost] = useUpdatePostMutation();
  // const [deletePost] = useDeletePostMutation();

  let content;

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!posts?.posts) {
    return <div>No posts available</div>;
  } else if (isSuccess) {
    content = posts.posts.map((post) => {
      console.log(post);
      return <HomeCard data={post} key={post.id} />;
    });
  }

  return (
    <div className="container home">
      <h1 className="home__title">Home</h1>
      <div className="article-box">{content.map((item) => item)}</div>
    </div>
  );
};

export default Home;
