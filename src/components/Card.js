function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
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
      <button type="button" className="element__delete-button"></button>
      <div className="element__object">
        <h2 className="element__caption">{card.name}</h2>
        <div className="element__likes">
          <button type="button" className="element__like-button"></button>
          <span className="element__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
