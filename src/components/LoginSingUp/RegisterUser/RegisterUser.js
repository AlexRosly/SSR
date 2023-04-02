import { LOGIN_USER, ROOT, RegexpEmail, _REGISTER_CODE_USER_URL, _REGISTER_USER_URL } from 'navigation/CONSTANTS';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import spinner from '../spinner/circle752.svg';
import { useNavigate, Link } from 'react-router-dom';

import rsi from './RegisterUser.module.scss';

export default function RegisterUser() {
  const { t } = useTranslation('auth');

  const { activeLanguageId } = useSelector(state => state.userSettings);
  let timer;
  const [form, setForm] = useState({ name: '', surname: '', email: '', status: false });
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [isError2, setIsError2] = useState(false);
  const [isErrorCode, setIsErrorCode] = useState(false);
  const [isErrorTimeCode, setIsErrorTimeCode] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  const isEmail = em => RegexpEmail.test(em);
  const navigate = useNavigate();

  const linkToLoginPage = LOGIN_USER;

  const handleClose = () => navigate(ROOT);
  // const GOlogin = () => navigate(linkToLogin);

  const handleChangeForm = event => {
    setForm({ ...form, [event.target.name]: event.target.value.trim() });
  };
  const handleChangeCode = e => {
    setCode(e.target.value.trim());
  };

  const handleSend = async e => {
    e.preventDefault();
    if (!isDone && !isEmail(form.email)) {
      setForm({ ...form, email: '' });
      setIsDone(false);
      console.log(' incorrect email');
    }
    if (!isDone && isEmail(form.email)) {
      setIsDone(false);
      setIsError(false);
      setIsError2(false);
      setIsErrorCode(false);
      setIsErrorTimeCode(false);

      try {
        setIsLoading(true);
        const response = await axios.post(_REGISTER_USER_URL, {
          lastName: form.surname,
          firstName: form.name,
          email: form.email,
          language: activeLanguageId,
        });
        console.log(response, '===response register user===');
        setIsLoading(false);
        setForm({ ...form, status: response.status });

        if (!isDone && response.status === 500) {
          setIsError(true);
          setIsErrorCode(false);
          setIsError2(false);
          setIsDone(false);
        }
        if (!isDone && response.status === 200) {
          setIsError(false);
          setIsError2(false);
          setIsErrorCode(false);
          setIsDone(true);
          setCode('');
          timer = setTimeout(() => {
            setIsErrorTimeCode(true);
            setIsError(true);
            setIsDone(false);
            setIsError2(false);
            setIsErrorCode(false);
            setCode('');
          }, 180000);
        }
      } catch (err) {
        console.log(err.request, '====== email err Agent =====');
        if (!isDone && err.request.status !== 434) {
          setIsError(true);
          setIsErrorCode(false);
          setIsError2(false);
          setIsDone(false);
        } else {
          setIsError(false);
          setIsErrorCode(false);
          setIsError2(true);
          setIsDone(false);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (isDone) {
      console.log('======шлю запит на код =====');
      try {
        setIsLoading(true);
        const res = await axios.post(_REGISTER_CODE_USER_URL, {
          lastName: form.surname,
          firstName: form.name,
          email: form.email,
          language: activeLanguageId,
          secretCode: code,
        });
        console.log(res, '===response user code===');
        setIsLoading(false);
        setForm({ ...form, status: res.status });
        setIsError(false);
        setIsError2(false);
        setIsErrorCode(false);
        setCode('');
        setIsDone(true);
        setForm({ ...form, email: '', name: '', surname: '' });
        navigate(-1);
      } catch (err) {
        console.log(err.request, '======err User code =====');
        if (isDone && err.request.status === 435) {
          setIsError(false);
          setIsError2(false);
          setIsErrorCode(true);
          setIsDone(true);
        }
        if (isDone && err.request.status === 436) {
          setIsErrorTimeCode(true);
          setIsDone(false);
          setIsError(false);
          setIsError2(false);
          setIsErrorCode(false);
          setCode('');
        }
      } finally {
        setIsLoading(false);
      }
    }
  };
  const LoadingIndicator = () => (
    <div className={rsi.loading}>
      <img src={spinner} alt="Loading..." />
    </div>
  );

  return (
    <div id="popup" className={rsi.popup}>
      {isLoading && LoadingIndicator()}
      <div className={rsi.popup__wrapper}>
        <button onClick={handleClose} className={rsi.popup__close} />
        <div className={rsi.popup__image}></div>
        <div className={rsi.popup__content}>
          <form className={rsi.popup__form}>
            {isDone ? (
              <>
                <p className={rsi.popup_info}>{t('enterConfirmCode')}</p>
                <p className={rsi.popup_info2}>
                  {t('enterConfirmCodeTextInfo')}
                  <br /> {t('enterConfirmCodeTextInfo2')}
                </p>
              </>
            ) : (
              <>
                <h2 className={rsi.popup_title}>{t('register')}</h2>
                <p className={rsi.popup_text}>
                  {t('popupText')} <br />
                  <a className={rsi.popup_link} href="/terms-conditions-users">
                    {t('termsConditionsUsers')}
                  </a>
                  <span>&nbsp;{t('and')}</span>
                  <br />
                  <a className={rsi.popup_link} href="/privacy-policy-users">
                    {t('privacyPolicyUsers')}
                  </a>
                </p>
              </>
            )}
            <div className={rsi.popup_info_error_block}>
              <div className={isErrorCode ? `${rsi.popup_error}` : `${rsi.popup_error_off}`}>
                <>{t('errorConfirmCode')}</>
              </div>
              <div className={isError2 ? `${rsi.popup_error}` : `${rsi.popup_error_off}`}>
                {t('error2RegisterEmail')}
              </div>
            </div>

            {isDone ? (
              <fieldset className={rsi.popup_field}>
                <input
                  type="text"
                  id="form-Confirmation"
                  className={code ? `${rsi.popup_input_value}` : `${rsi.popup_input}`}
                  autocomplete="off"
                  // maxLength={4}
                  value={code}
                  onChange={handleChangeCode}
                />
              </fieldset>
            ) : (
              <>
                <fieldset className={rsi.popup_field}>
                  <input
                    className={form.email ? `${rsi.popup_input_value}` : `${rsi.popup_input}`}
                    id="form-Confirmation"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChangeForm}
                  />
                  <label className={rsi.popup_label} htmlFor="form-Confirmation">
                    {isDone ? <>{t('popupLabelCode')}</> : <>E-mail:</>}
                  </label>
                </fieldset>
                <fieldset className={rsi.popup_field}>
                  <input
                    className={form.name ? `${rsi.popup_input_value}` : `${rsi.popup_input}`}
                    id="name-Confirmation"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChangeForm}
                  />
                  <label className={rsi.popup_label} htmlFor="name-Confirmation">
                    {t('popupLabelName')}
                  </label>
                </fieldset>

                <fieldset className={rsi.popup_field}>
                  <input
                    className={form.surname ? `${rsi.popup_input_value}` : `${rsi.popup_input}`}
                    id="secondName-Confirmation"
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleChangeForm}
                  />
                  <label className={rsi.popup_label} htmlFor="secondName-Confirmation">
                    {t('popupLabelSurname')}
                  </label>
                </fieldset>
              </>
            )}

            <div className={rsi.popup_info_error_register_block}>
              <p className={isDone ? `${rsi.popup_info3}` : ` ${rsi.popup_info3_off}`}>
                <>{t('popupInfo3CodeTime')}</>
              </p>
              <div className={isError && !isDone ? `${rsi.popup_error_email}` : `${rsi.popup_error_email_off}`}>
                {isErrorTimeCode ? <>{t('errorTimeCode')}</> : <> {t('errorRegisterEmailHotelier')}</>}
              </div>
            </div>

            <button
              disabled={isDone ? !code : !(form.name && form.name && form.surname)}
              className={rsi.popup_btn}
              type="submit"
              onClick={handleSend}
            >
              {t('btnSubmit')}
            </button>

            {!isDone && (
              <p className={rsi.popup_text}>
                {t('popupText3')}

                <Link className={rsi.popup_text_register} to={linkToLoginPage}>
                  {' '}
                  &nbsp; {t('popupTextEnter')}
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
