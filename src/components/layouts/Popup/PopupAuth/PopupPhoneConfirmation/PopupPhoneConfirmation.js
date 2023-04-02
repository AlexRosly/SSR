import Authentication from 'api/auth.api';
import { USER_ACCOUNT_SETTING } from 'navigation/CONSTANTS';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPage, setCode as setAuthCode } from 'redux/authentication/authentication.actions';
import { authCode, authPhone } from 'redux/authentication/authentication.reducer';
import { generationCode } from 'utils/generationVerify';
import { sendSMS } from 'utils/sms';
import './PopupPhoneConfirmation.scss';

export default function PopupPhoneConfirmation() {
  const [code, setCode] = useState('');
  const codeServer = useSelector(authCode);
  const phoneNumber = useSelector(authPhone);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  // const [isDone, setIsDone] = useState(false);
  const auth = new Authentication();

  // useEffect(() => {
  //   if (code.length === 4) {
  //     return setIsDone(true);
  //   }
  //   setIsDone(false);
  // }, [code]);

  const nav = useNavigate();
  const handleSend = e => {
    e?.stopPropagation();
    setIsError(false);
    if (+code !== codeServer) return setIsError(true);

    auth
      .checkPhone(phoneNumber)
      .then(() => {
        return nav(USER_ACCOUNT_SETTING);
      })
      .catch(err => {
        const {
          response: { data },
        } = err;
        if (data.message === 'This number is not found in DB') {
          return dispatch(setPage(5));
        }
      });
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    setInterval(() => {
      const code = generationCode(4);
      dispatch(setAuthCode(code));
      sendSMS(phoneNumber, code).then(res => console.log(res));
    }, 120000);
  }, [dispatch, phoneNumber]);

  return (
    <div className="popup__content popup-phoneConfirmation">
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
          Вы ввели не верный код подтверждения.
          <br /> Попробуйте снова.
        </p>
      ) : null}
      <fieldset className="popup__field popup-phoneConfirmation__field">
        <input
          className="popup__input"
          id="form-phoneConfirmation"
          type="number"
          value={code}
          onChange={e => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <label className="popup__label" htmlFor="form-phoneConfirmation">
          Введите код подтверждения:
        </label>
      </fieldset>
      <span className="popup__info">Код подтверждения действует 2 минуты</span>

      {/* {isDone ? ( */}
      <button className="btn btn-ready popup-phoneConfirmation__ready-btn" type="submit" onClick={handleSend}>
        Отправить
      </button>
      {/* ) : null} */}
    </div>
  );
}
