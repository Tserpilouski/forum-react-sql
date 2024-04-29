import React from "react";
import "../styles/card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header__title">Nazwa cards</h3>
        <div className="card-header__box-buttons">
          <button className="card-header__btn-update">Update</button>
          <button className="card-header__btn-delete">Delete</button>
        </div>
      </div>
      <div className="card-main">
        <span>Main info</span>
      </div>
    </div>
  );
};

export default Card;
