import React, { useState } from "react";
import Card from "../components/Card";
import ModalNewArticle from "../components/ModalNewArticle";

import "../styles/dashboard.scss";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="container dashboard">
      <div className="dashboard-menu">
        <h2>Menu</h2>
        <ul>
          <li>My articles</li>
          <li>My statistic</li>
          <li>My profile</li>
        </ul>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-main__header">
          <h2>Yours Article</h2>
          <button onClick={() => setIsOpen(!isOpen)}>New article</button>
        </div>
        <div className="dashboard-main__articles-box">
          <Card />
        </div>
      </div>
      {isOpen ? <ModalNewArticle onCloseModal={handleCloseModal} /> : null}
    </main>
  );
};

export default Dashboard;
