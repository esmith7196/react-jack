import React, { useState } from "react";
const { decks } = require("cards");

const Table = props => {
  const deck = new decks.StandardDeck({ jokers: 0 });
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  deck.shuffleAll();

  return <div style={{ width: "100%" }} />;
};

export default Table;
