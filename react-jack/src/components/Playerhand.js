import React from "react";

const Playerhand = props => {
  return (
    <div>
      <button onClick={props.deal}>Deal</button>
      <p>Player cards are</p>
    </div>
  );
};

export default Playerhand;
