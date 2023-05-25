function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={`popup_form_${name}`} className="popup__form" noValidate>
          {children}
        </form>
        <button
          type="button"
          aria-label="Закртыие попапа"
          className="popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
