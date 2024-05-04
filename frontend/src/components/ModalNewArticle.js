import React, { useState } from "react";
import NewArticle from "../models/NewArticle";

import { useAddPostMutation } from "../services/postsServices";

import "../styles/modalarticle.scss";

const ModalNewArticle = ({ onCloseModal }) => {
  const [addPost] = useAddPostMutation();
  const [articleData, setArticleData] = useState(new NewArticle());
  console.log(articleData);

  const handleSubmitPost = (type) => {
    if (type === "add") {
      addPost({
        id: 4,
        user_id: 23,
        title: articleData.title,
        content: articleData.text,
        created_at: new Date(),
      });
      onCloseModal();
      console.log("add");
    } else {
      onCloseModal();
      console.log("close");
    }
  };

  return (
    <div className="modal modal-box">
      <h2>Create new Article</h2>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        onChange={(e) =>
          setArticleData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        type="text"
        name="text"
        placeholder="Content..."
        onChange={(e) =>
          setArticleData((prev) => ({ ...prev, text: e.target.value }))
        }
      />
      <div className="modal-box__buttons">
        <button
          className="modal-box__button green-btn"
          onClick={() => handleSubmitPost("add")}
        >
          Add post
        </button>
        <button
          className="modal-box__button red-btn"
          onClick={() => handleSubmitPost("close")}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalNewArticle;
