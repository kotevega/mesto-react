import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [namePlace, setNamePlace] = React.useState("");
  const [linkPlace, setLinkPlace] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setNamePlace("");
    setLinkPlace("");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: namePlace,
      link: linkPlace,
    });
  }

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Создание..." : "Создать"}
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
          value={namePlace || ""}
          onChange={(e) => setNamePlace(e.target.value)}
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
          onChange={(evt) => setLinkPlace(evt.target.value)}
          value={linkPlace || ""}
        />
        <span className="popup__input-error popup__input-error_type_imageLink"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
