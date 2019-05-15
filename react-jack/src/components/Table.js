import React, { useState, useEffect } from "react";
import Playerhand from "./Playerhand";
import axios from "axios";

const Table = props => {
  // Make a request to get n number of decks
  const [deckId, getDeckId] = useState(null);

  useEffect(() => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2`)
      .then(res => {
        getDeckId(res.data.deck_id);
        console.log(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => {
        console.log("deck response is: ", res);
      });
  }, [deckId]);

  return (
    <div style={{ width: "100%" }}>
      <p>this is the table</p>
      <div className="">
        <Playerhand />

        <p>Cards remaining: </p>
        <h2>Deck Info</h2>
        <ul>
          <li>The deck id is: {deckId}</li>
        </ul>
      </div>
    </div>
  );
};

export default Table;
