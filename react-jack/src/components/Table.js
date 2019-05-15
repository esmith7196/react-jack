import React, { useState } from "react";
import Playerhand from "./Playerhand";
import Dealerhand from "./Dealerhand";

const Table = props => {
  return (
    <div style={{ width: "100%" }}>
      <p>this is the table</p>
      <div className="hands">
        <Playerhand />

        <p>Cards remaining: </p>
      </div>
    </div>
  );
};

export default Table;
