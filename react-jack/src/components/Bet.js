import React from "react";

const Bet = props => {
  return (
    <div>
      <p>
        <button onClick={props.handleIncrement}>Increment Bet</button>
        <button onClick={props.handleDecrement}>Decrement Bet</button>
      </p>
      <p>The bet is: {props.bet}</p>
    </div>
  );
};

export default Bet;
