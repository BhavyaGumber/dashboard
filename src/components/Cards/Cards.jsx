import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = (props) => {
  return (
    <div style={{gap:"-10px"}} className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div  style={{gap:"10px"}} className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={props.mtmSum}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
