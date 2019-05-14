import React, { useState } from "react";
import Bet from "./Bet";

const Game = () => {
  const [bet, setBet] = useState(0);

  const handleIncrement = () => {
    setBet(bet + 1);
  };

  const handleDecrement = () => {
    if (bet > 0) {
      setBet(bet - 1);
    }
  };

  return (
    <div>
      <Bet
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        bet={bet}
        setBet={setBet}
      />
    </div>
  );
};

export default Game;
