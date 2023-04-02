import { LOGIN_HOTELIER, ROOT, RegexpEmail,_REGISTER_HOTELIER_URL,_REGISTER_CODE_HOTELIER_URL } from 'navigation/CONSTANTS';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import spinner from '../spinner/circle752.svg';

import { useNavigate, Link } from 'react-router-dom';

import rh from './RegisterHotelier.module.scss';

export default function RegisterEmail() {
  const { t } = useTranslation('auth');
  // const dispatch = useDispatch();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmail = em =>
RegexpEmail.test(
      em
    );
  const navigate = useNavigate();

  const linkToLoginPage = LOGIN_HOTELIER;

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
      setIsError(false);
      setIsError2(false);
      setIsErrorCode(false);
      setIsErrorTimeCode(false);

      try {
        setIsLoading(true);
        const response = await axios.post(_REGISTER_HOTELIER_URL, {
          lastName: form.surname,
          firstName: form.name,
          email: form.email,
          language: activeLanguageId,
        });
        setIsLoading(false);
        setForm({ ...form, status: response.status });
        console.log(response, '===response hotelier===');
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
        console.log(err.request, '=== email err Hotelier =====');
        if (!isDone && err.request.status !== 433) {
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
      try {
        setIsLoading(true);
        const res = await axios.post(_REGISTER_CODE_HOTELIER_URL, {
          lastName: form.surname,
          firstName: form.name,
          email: form.email,
          language: activeLanguageId,
          secretCode: code,
        });
        console.log(res, '===response hotelier code===');
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
        console.log(err.request, '======err code HOTELIER =====');
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
    <div className={rh.loading}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
  return (
    <div id="popup" className={rh.popup}>
      {isLoading && LoadingIndicator()}
      <div className={rh.popup__wrapper}>
        <button onClick={handleClose} className={rh.popup__close} />
        <div className={rh.popup__image}></div>
        <div className={rh.popup__content}>
          <form className={rh.popup__form} action="/">
            {isDone ? (
              <>
                <p className={rh.popup_info}>{t('enterConfirmCode')}</p>
                <p className={rh.popup_info2}>
                  {t('enterConfirmCodeTextInfo')}
                  <br /> {t('enterConfirmCodeTextInfo2')}
                </p>
              </>
            ) : (
              <>
                <h2 className={rh.popup_title}>{t('registerHotelier')}</h2>
                <p className={rh.popup_text}>
                  {t('popupText')} <br />
                  <a className={rh.popup_link} href="/terms-conditions-users">
                    {t('termsConditionsUsers')}
                  </a>
                  <span>&nbsp;{t('and')}</span>
                  <br />
                  <a className={rh.popup_link} href="/privacy-policy-users">
                    {t('privacyPolicyUsers')}
                  </a>
                </p>
              </>
            )}
            <div className={rh.popup_info_error_block}>
              <div className={isErrorCode ? `${rh.popup_error}` : `${rh.popup_error_off}`}>
                <>{t('errorConfirmCode')}</>
              </div>
              <div className={isError2 ? `${rh.popup_error}` : `${rh.popup_error_off}`}>{t('error2RegisterEmail')}</div>
            </div>

            {isDone ? (
              <fieldset className={rh.popup_field}>
                <input
                  type="text"
                  id="form-Confirmation"
                  className={code ? `${rh.popup_input_value}` : `${rh.popup_input}`}
                  autocomplete="off"
                  // maxLength={4}
                  value={code}
                  onChange={handleChangeCode}
                />
              </fieldset>
            ) : (
              <>
                <fieldset className={rh.popup_field}>
                  <input
                    className={form.email ? `${rh.popup_input_value}` : `${rh.popup_input}`}
                    id="form-Confirmation"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChangeForm}
                  />
                  <label className={rh.popup_label} htmlFor="form-Confirmation">
                    {isDone ? <>{t('popupLabelCode')}</> : <>E-mail:</>}
                  </label>
                </fieldset>
                <fieldset className={rh.popup_field}>
                  <input
                    className={form.name ? `${rh.popup_input_value}` : `${rh.popup_input}`}
                    id="name-Confirmation"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChangeForm}
                  />
                  <label className={rh.popup_label} htmlFor="name-Confirmation">
                    {t('popupLabelName')}
                  </label>
                </fieldset>

                <fieldset className={rh.popup_field}>
                  <input
                    className={form.surname ? `${rh.popup_input_value}` : `${rh.popup_input}`}
                    id="secondName-Confirmation"
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleChangeForm}
                  />
                  <label className={rh.popup_label} htmlFor="secondName-Confirmation">
                    {t('popupLabelSurname')}
                  </label>
                </fieldset>
              </>
            )}

            <div className={rh.popup_info_error_register_block}>
              <p className={isDone ? `${rh.popup_info3}` : ` ${rh.popup_info3_off}`}>
                <>{t('popupInfo3CodeTime')}</>
              </p>
              <div className={isError && !isDone ? `${rh.popup_error_email}` : `${rh.popup_error_email_off}`}>
                {isErrorTimeCode && !isDone ? <>{t('errorTimeCode')}</> : <> {t('errorRegisterEmailHotelier')}</>}
              </div>
            </div>

            <button
              disabled={isDone ? !code : !(form.name && form.name && form.surname)}
              className={rh.popup_btn}
              type="submit"
              onClick={handleSend}
            >
              {t('btnSubmit')}
            </button>

            {!isDone && (
              <p className={rh.popup_text}>
                {t('popupText3')}

                <Link className={rh.popup_text_register} to={linkToLoginPage}>
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
