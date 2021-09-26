import React from "react";
import Card from "./Card";
import cardData from "./cardData";
const Cards = () => {
  return (
    <>
      <div className="main__cards">
        {cardData.map((c) => (
          <Card cards={c} />
        ))}
      </div>
    </>
  );
};

export default Cards;
