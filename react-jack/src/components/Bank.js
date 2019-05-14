import React from "react";

const Bet = props => {
  const { bank } = props;

  return (
    <div>
      <p>Current Bank: {bank}</p>
    </div>
  );
};

export default Bet;
