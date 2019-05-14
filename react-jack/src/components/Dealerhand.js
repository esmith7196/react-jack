import React from "react";

const Dealerhand = props => {
  return (
    <div>
      <p>Dealer card is</p>
      <p>
        {props.hand[0].rank.shortName} of {props.hand[0].suit.name}
      </p>
    </div>
  );
};

export default Dealerhand;
