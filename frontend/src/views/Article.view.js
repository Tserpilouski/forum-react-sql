import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  useGetCommentsQuery,
  useAddCommentMutation,
} from "../services/commentsServices";

import "../styles/Article.scss";

const Article = () => {
  const location = useLocation();
  const postData = location.state.postData;
  const { data: commentsData, isLoading } = useGetCommentsQuery(postData.id);
  const [newComment, setNewComment] = useState("");

  const [
    addComment,
    { isError: addCommentError, error: addCommentErrorDetail },
  ] = useAddCommentMutation();

  useEffect(() => {
    if (addCommentError) {
      console.error("Error adding comment:", addCommentErrorDetail);
    }
  }, [addCommentError, addCommentErrorDetail]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    addComment({
      post_id: postData.id,
      user_id: 123,
      content: newComment,
    });
    setNewComment("");
  };

  return (
    <div className="container article">
      <h1 className="article__title">{postData.title}</h1>
      <p className="article__text">{postData.content}</p>
      <hr></hr>
      <div className="comments-box">
        <h2 className="comments-box__title">Comments</h2>
        <div>
          {isLoading && <li>Loading comments...</li>}
          {commentsData &&
            commentsData.map((comment, index) => (
              <div key={index} className="comment">
                <span>{comment.content}</span>
                <div>
                  <span>User: {comment.email}</span>
                </div>
              </div>
            ))}
        </div>
        <form onSubmit={handleSubmitComment}>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a new comment..."
            rows="4"
            cols="50"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Article;
