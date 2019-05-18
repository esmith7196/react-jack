import React from "react";

const Playerhand = props => {
  return (
    <div>
      <button onClick={props.deal}>Deal</button>
      <p>Player cards are:</p>
      <div className="card-container">
        {props.cards.map(card => (
          <img src={card.image} alt={card.value} />
        ))}
      </div>
    </div>
  );
};

export default Playerhand;
