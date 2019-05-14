import React, { useState } from "react";
import Playerhand from "./Playerhand";
import Dealerhand from "./Dealerhand";
const { decks } = require("cards");

const Table = props => {
  const deck = new decks.StandardDeck({ jokers: 0 });
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  deck.shuffleAll();

  const deal = () => {
    console.log("dealing");
    setUserCards(deck.draw(2));
    setDealerCards(deck.draw(2));
  };

  return (
    <div style={{ width: "100%" }}>
      <p>this is the table</p>
      <div className="hands">
        <Playerhand hand={userCards} deal={deal} />
        {dealerCards.length ? <Dealerhand hand={dealerCards} /> : null}
      </div>
    </div>
  );
};

export default Table;
