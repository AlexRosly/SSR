import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from 'redux/authentication/authentication.actions';
import './PopupPhoneConfirmation.scss';

export default function PopupEmail() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (email.length > 8) {
      return setIsDone(true);
    }
    setIsDone(false);
  }, [email]);

  const handleSend = () => {
    if (email.trim() === 'admin@admin.com') {
      dispatch(setPage(4));
    } else {
      setIsError(true);
      setEmail('');
      setIsDone(false);
    }
  };

  return (
    <div className="popup__content popup-phoneConfirmation">
      <form className="popup-phoneConfirmation__form" action="#">
        <h2 className="popup-phoneConfirmation__title popup-title">
          Войти <span>/</span> Зарегистрироваться
        </h2>
        <p className="popup-phoneConfirmation__text">
          Продолжая, вы соглашаетесь с нашим <br />
          <a className="popup-link" href="/">
            Пользовательским соглашением
          </a>
          &nbsp; и <br />
          <a className="popup-link" href="/">
            Политикой конфиденциальности
          </a>
          .
        </p>
        {isError ? (
          <p className="popup__error">
            Эта почта не зарегистрирована у нас, введите другую
            <br /> Попробуйте снова.
          </p>
        ) : null}
        <fieldset className="popup__field popup-phoneConfirmation__field">
          <input
            className="popup__input"
            id="form-phoneConfirmation"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label className="popup__label" htmlFor="form-phoneConfirmation">
            Введите адрес электронной почты:
          </label>
        </fieldset>

        {isDone ? (
          <button className="btn btn-ready popup-phoneConfirmation__ready-btn" type="submit" onClick={handleSend}>
            Отправить
          </button>
        ) : null}
      </form>
    </div>
  );
}
