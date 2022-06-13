import React from "react";
import '../style_components/cardsDescription.css';

function CardsInfo (props) {
  return (
    <div className="cards__container">
      <img className="image__container" src={require(`../imgs/${props.imagen}`)} alt="" />
        <div className="text__container">
          <p className="card__title"><span>{props.title}</span></p>
          <p className="card__content">{props.content}</p>
        </div>
    </div>
  );
}

export default CardsInfo;
