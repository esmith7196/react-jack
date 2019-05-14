import React from "react";

const Bank = props => {
  const { bank } = props;

  return (
    <div>
      <p>Current Bank: {bank}</p>
    </div>
  );
};

export default Bank;
