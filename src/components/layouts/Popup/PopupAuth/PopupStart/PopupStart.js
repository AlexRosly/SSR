import { CodeCountry } from 'components/codeCountry/CodeCountry';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCode, setPage, setAuthPhone } from 'redux/authentication/authentication.actions';
// import Authentication from "api/auth.api";
import './PopupStart.scss';
import { generationCode } from 'utils/generationVerify';
import { sendSMS } from 'utils/sms';

export default function PopupStart() {
  // const auth = new Authentication();
  const [phone, setPhone] = useState('');
  const [isHide, setIsHide] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+380');
  const dispatch = useDispatch();

  useEffect(() => {
    if (phone.length >= 4 && phone.length <= 17) return setIsDone(true);
    return setIsDone(false);
  }, [phone]);

  const handleSend = () => {
    const mobileNumber = phoneCode + phone;
    const code = generationCode(4);
    console.log(mobileNumber, code);
    dispatch(setCode(code));
    dispatch(setAuthPhone(mobileNumber));
    dispatch(setPage(1));
    sendSMS(mobileNumber, code)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          dispatch(setPage(1));
        }
      })
      .catch(err => console.log(err));
  };
  const onClickReg = () => {
    dispatch(setPage(5));
  };
  const handleReset = () => {
    dispatch(setPage(3));
  };

  const handleChange = event => {
    console.log(event.target.value);
    event.target.value.length > 0 ? setIsHide(true) : setIsHide(false);
    if (event.target.value.length > 17) return;

    const regex = /^\d*$/;
    if (event.target.value.match(regex)) {
      setPhone(event.target.value);
    }
  };

  const handleChangeCode = code => setPhoneCode(code);

  const handleKeyDown = event => {
    if (event.key === 'Enter' && phone.length > 0) {
      handleSend();
    }
  };

  return (
    <div className="popup__content popup-start">
      <h2 className="popup-start__title popup-title" onClick={onClickReg}>
        Войти <span>/</span> Зарегистрироваться
      </h2>

      <p className="popup-phoneConfirmation__text">
        Продолжая, вы соглашаетесь с нашим <br />
        <button className="popup-link">Пользовательским соглашением</button>
        &nbsp; и <br />
        <button className="popup-link">Политикой конфиденциальности</button>.
      </p>
      <div style={{ display: 'flex', columnGap: '10px' }}>
        <CodeCountry onChangeCode={handleChangeCode} />
        <fieldset className="popup__field popup-start__field">
          <input
            className="popup__input"
            id="form-phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <label className={`popup__label label-phone ${isHide ? 'active__hover' : ''}`} htmlFor="form-phone">
            Номер мобильного телефона
            <span className="circle" style={{ display: isHide ? 'none' : '' }}></span>
          </label>
        </fieldset>
      </div>
      <button
        className={`btn popup-start__ready-btn ${isDone ? ' btn-ready' : ' btn-blue'}`}
        type="submit"
        onClick={handleSend}
      >
        Отправить
      </button>
      <button onClick={handleReset} className="btn btn-lost popup-start__lost-btn" type="button">
        Я потерял телефон
      </button>
    </div>
  );
}
