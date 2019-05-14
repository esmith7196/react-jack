import React, { useState } from "react";
import Bet from "./Bet";
import Bank from "./Bank";

const Game = () => {
  const [bet, setBet] = useState(0);
  const [bank, setBank] = useState(10);

  const handleIncrement = () => {
    setBet(bet + 1);
    setBank(bank - 1);
  };

  const handleDecrement = () => {
    if (bet > 0 && bank > 0) {
      setBet(bet - 1);
      setBank(bank + 1);
    }
  };

  return (
    <div>
      <Bet
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        bet={bet}
      />
      <Bank bank={bank} setBank={setBank} />
    </div>
  );
};

export default Game;
