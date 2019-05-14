import React from "react";

const Playerhand = props => {
  console.log(props);
  return (
    <div>
      <button onClick={props.deal}>Deal</button>
      <p>Player cards are</p>
      {props.hand.map(card => (
        <p>
          {card.rank.shortName} of {card.suit.name}
        </p>
      ))}
    </div>
  );
};

export default Playerhand;
