import React, { useState, useEffect } from "react";
import Playerhand from "./Playerhand";
import axios from "axios";

const Table = props => {
  // Make a request to get n number of decks
  const [deckId, getDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [playerSum, setPlayerSum] = useState([0]);

  useEffect(() => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2`)
      .then(res => {
        getDeckId(res.data.deck_id);
        console.log(res.data);
      });
  }, []);

  // useEffect(() => {

  // }, [deckId]);

  const initlalDraw = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => {
        console.log("deck response is: ", res);
        setCards(res.data.cards);
      });
  };

  useEffect(() => {
    let valueArr = [];

    cards.map(card => {
      if (
        card.value === "KING" ||
        card.value === "QUEEN" ||
        card.value === "JACK"
      ) {
        card.value = 10;
      } else if (card.value === "ACE") {
        alert("handle ace case");
        card.value = 11;
      }
      valueArr.push(parseInt(card.value));
    });
    sumCards(valueArr);

    function sumCards(item) {
      setPlayerSum(item.reduce(getSum, 0));
    }
  }, [cards]);
  function getSum(total, num) {
    return total + num;
  }

  console.log(playerSum);

  return (
    <div style={{ width: "100%" }}>
      <p>this is the table</p>
      <div className="">
        <button onClick={() => initlalDraw()}>Draw</button>
        <Playerhand cards={cards} total={playerSum} />

        <p>Cards remaining: </p>
        <h2>Deck Info</h2>
      </div>
    </div>
  );
};

export default Table;
