import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_ACCOUNT_SETTING } from 'navigation/CONSTANTS';
import './PopupConfirmEmail.scss';

export default function PopupConfirmEmail() {
  const nav = useNavigate();
  const [code, setCode] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = e => {
    if (e.target) setCode(e.target.value);
  };
  const handleSend = () => {
    nav(USER_ACCOUNT_SETTING);
  };

  const checkCode = () => {
    if (code === '0000') return handleSend();
    return setIsError(true);
  };
  useEffect(() => {
    if (code.length === 4) {
      return setIsDone(true);
    }
    return () => {
      setIsDone(false);
    };
  }, [code]);

  return (
    <div className="popup__content ">
      <h2 className="popup__title">Подтвердите вашу электронную почту.</h2>

      {isError ? (
        <p className="popup__info">
          Вы ввели не верный код подтверждения. <br></br> Попробуйте снова.
        </p>
      ) : (
        <>
          <p className="popup__paragraf">Введите код подтверждения, который мы отправили на вашу электронную почту.</p>
          <p className="popup__message">
            Если вы не получили письмо с кодом - проверьте папку спам.
            <br /> Если вы ввели не верный адрес электронной почты - вернитесь назад и повторите.
          </p>
        </>
      )}
      <div class="form">
        <input
          type="text"
          id="number"
          class="form__input"
          autocomplete="off"
          maxLength={4}
          value={code}
          onChange={handleChange}
        />
        <label htmlFor="number" class="form__label">
          Введите код подтверждения, который мы вам отправили:
        </label>
      </div>
      <div className="form__wrapper">
        <span className="form__notification">Код подтверждения действует 2 минуты</span>
        {isDone && (
          <button onClick={checkCode} className="form__btn" type="submit">
            Отправить
          </button>
        )}
      </div>
    </div>
  );
}
