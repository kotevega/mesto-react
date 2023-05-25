import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfoFromApi()
      .then((dataUser) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));

    api
      .getInitialCardsApi()
      .then((dataCards) => {
        setCards(
          dataCards.map((data) => ({
            likes: data.likes,
            link: data.link,
            name: data.name,
            cardId: data._id,
          }))
        );
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          type="button"
          aria-label="Редактирование аватара"
          className="profile__edit-avatar"
          onClick={onEditAvatar}
        >
          <img
            src={userAvatar}
            alt="фото пользователя"
            className="profile__avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__user">
            <div className="profile__user-edit">
              <h1 id="profile-name" className="profile__name">
                {userName}
              </h1>
              <button
                type="button"
                aria-label="Редактирование профиля"
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p id="profile-occupation" className="profile__occupation">
              {userDescription}
            </p>
          </div>
          <button
            type="button"
            aria-label="Редактирование карточки"
            className="profile__add-button"
            onClick={onAddPlace}
          ></button>
        </div>
      </section>
      <section className="elements" aria-label="Фотографии пользователя">
        <ul className="element">
          {cards.map((card) => (
            <Card key={card.cardId} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
