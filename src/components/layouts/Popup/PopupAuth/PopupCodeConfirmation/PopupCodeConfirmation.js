import "./PopupCodeConfirmation.scss";

export default function PoputCodeConfirmation() {
  return (
    <div className="popup__content popup-phoneConfirmation">
      <form className="form">
        <div className="popup__textWrapper">
          <h2 className="popup__title">Впишите код подтверждения,</h2>
          <p className="popup__paragraf">
            который мы отправили на ваш
            <br /> адрес электронной почты.
          </p>
        </div>
        <p className="popup__message">
          Вы ввели не верный код подтверждения.
          <br /> Попробуйте снова.
        </p>
        <label className="popup__label">
          <input
            className="popup__input"
            type="text"
            name="name"
            placeholder=""
          />
          <span className="popup__inputText">Введите код подтверждения:</span>
        </label>
        <p className="popup__attetion">Код подтверждения действует 3 минуты</p>
      </form>
    </div>
  );
}
