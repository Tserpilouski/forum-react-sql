import React from "react";
import Card from "../components/Card";

import "../styles/dashboard.scss";

const Dashboard = () => {
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
        <h2 className="dashboard-main__title">Yours Article</h2>
        <div className="dashboard-main__articles-box">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
