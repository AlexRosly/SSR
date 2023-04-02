import { Link } from 'react-router-dom';
import EmailUsedAlready from '../EmailUsedAlready/EmailUsedAlready';
import EmailNotExist from '../EmailNotExist/EmailNotExist';
import './PopupSignUp.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from 'redux/authentication/authentication.actions';
import Authentication from 'api/auth.api';
import { authPhone } from 'redux/authentication/authentication.reducer';

export default function PopupSignUp() {
  const dispatch = useDispatch();
  const auth = new Authentication();
  const [isErrorAlready, setIsErrorAlready] = useState(false);
  const [isErrorExist, setIsErrorExist] = useState(false);
  const [, setIsDone] = useState(false);
  const phone = useSelector(authPhone);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');

  const handleEmail = e => {
    if (e.target) setEmail(e.target.value);
  };
  const handleName = e => {
    if (e.target) setName(e.target.value);
  };
  const handleSurName = e => {
    if (e.target) setSurName(e.target.value);
  };

  const handleSend = () => {
    let done;
    setIsErrorAlready(false);
    setIsErrorExist(false);

    if (email.trim() === 'admin1@admin.com') {
      return setIsErrorExist(true);
    }

    if (name !== '' && surname !== '') {
      setIsDone(true);
      done = true;
    } else {
      setIsDone(false);
      done = false;
    }

    if (done) {
      auth
        .register({
          email: email.trim(),
          mobileNumber: phone,
          password: '12345',
        })
        .then(res => {
          dispatch(setPage(4));
        })
        .catch(err => {
          const data = err.response.data;
          if (data.message === 'This email is already existed') {
            return setIsErrorAlready(true);
          }
        });
    }
  };

  return (
    <div className="popup__content popup_signup">
      <h2 className="popup__title">
        Здравствуйте!
        <br /> Я вижу, что вы у нас впервые!
      </h2>
      <p className="popup__text">
        Впишите свой адрес электронной почты, имя и фамилию, чтобы закончить регистрацию. Или нажмите{' '}
        <Link className="popup__link" to="/">
          завершить позже
        </Link>
      </p>
      {isErrorAlready ? <EmailUsedAlready /> : null}
      {isErrorExist ? <EmailNotExist /> : null}
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input
            className={`popup__input ${email.length > 0 ? 'popup__input-active' : null}`}
            type="email"
            name="email"
            placeholder=" "
            autocomplete="off"
            value={email}
            onChange={handleEmail}
          />
          <span className="popup__inputText">E-mail:</span>
        </label>
        <label className="popup__label">
          <input
            className={`popup__input ${name.length > 0 ? 'popup__input-active' : null}`}
            type="text"
            name="username"
            placeholder=" "
            autocomplete="off"
            value={name}
            onChange={handleName}
          />
          <span className="popup__inputText">Имя</span>
        </label>
        <label className="popup__label" htmlFor="usersurname">
          <input
            className={`popup__input ${surname.length > 0 ? 'popup__input-active' : null}`}
            type="text"
            name="usersurname"
            placeholder=" "
            autocomplete="off"
            value={surname}
            onChange={handleSurName}
          />
          <span className="popup__inputText">Фамилия</span>
        </label>
      </fieldset>
      <button className="btn" onClick={handleSend}>
        Отправить
      </button>
    </div>
  );
}
