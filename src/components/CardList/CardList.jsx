import React from "react";
import Card from "../Card/Card";

const CardList = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;
