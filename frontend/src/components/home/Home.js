import React from "react";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  // const cardsData = [
  //   { id: 1, title: "Card 1", content: "This is card 1." },
  //   { id: 2, title: "Card 2", content: "This is card 2." },
  //   { id: 3, title: "Card 3", content: "This is card 3." },
  // ];

  return (
    <>
      <h1>Home</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="primary">Primary</Button>
    </>
    // <div>
    //   <h2>Welcome to the Home Page!</h2>
    //   <div className="card-container">
    //     {cardsData.map((card) => (
    //       <Link to={`/cards/${card.id}`} key={card.id} className="card-link">
    //         <div className="card">
    //           <h3>{card.title}</h3>
    //           <p>{card.content}</p>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Home;
