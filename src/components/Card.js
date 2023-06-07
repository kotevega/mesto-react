import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${
    isLiked && "element__like-button_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element__list">
      <button className="element__button-image">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
      </button>
      {isOwn && (
        <button
          className="element__delete-button"
          onClick={handleDeleteClick}
        />
      )}
      {/* <button type="button" className="element__delete-button"></button> */}
      <div className="element__object">
        <h2 className="element__caption">{card.name}</h2>
        <div className="element__likes">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="element__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
