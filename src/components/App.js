import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import "../index.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          name="user"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__fildset">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              id="popup-name"
              className="popup__input"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error popup__input-error_type_name"></span>
          </label>
          <label className="popup__fildset">
            <input
              type="text"
              name="about"
              placeholder="Род деятельности"
              id="popup-about"
              className="popup__input"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error popup__input-error_type_about"></span>
          </label>
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </PopupWithForm>

        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__fildset">
            <input
              type="text"
              name="imageName"
              required
              placeholder="Название"
              id="input-place-name-image"
              className="popup__input"
              minLength="2"
              maxLength="30"
            />
            <span className="popup__input-error popup__input-error_type_imageName"></span>
          </label>
          <label className="popup__fildset">
            <input
              type="url"
              name="imageLink"
              required
              placeholder="Ссылка на картинку"
              id="input-place-link-image"
              className="popup__input"
            />
            <span className="popup__input-error popup__input-error_type_imageLink"></span>
          </label>
          <button type="submit" className="popup__submit-button">
            Создать
          </button>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__fildset">
            <input
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              className="popup__input"
              required
            />
            <span className="popup__input-error popup__input-error_type_avatar"></span>
          </label>
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </PopupWithForm>

        <PopupWithForm name="accept" title="Вы уверены?">
          <button type="submit" className="popup__submit-button">
            Да
          </button>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
