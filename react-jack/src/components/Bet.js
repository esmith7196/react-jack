import React from "react";

const Bet = props => {
  const { handleDecrement, handleIncrement, bet } = props;

  return (
    <div>
      <p>
        <button onClick={handleIncrement}>Increment Bet</button>
        <button onClick={handleDecrement}>Decrement Bet</button>
      </p>
      <p>The bet is: {bet}</p>
    </div>
  );
};

export default Bet;
