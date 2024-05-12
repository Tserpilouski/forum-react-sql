import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/card.scss";

const HomeCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cards/${data.id}`, { state: { postData: data } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <h3 className="card-header__title">{data.title}</h3>
      </div>
      <div className="card-main">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default HomeCard;
