import {
  REGISTER_HOTELIER,
  ROOT,
  RegexpEmail,
  _CODE_LOG_HOTELIER_URL,
  _LOGIN_HOTELIER_URL,
} from 'navigation/CONSTANTS';
import { useEffect, useState } from 'react';
import axios from '../axios';
import { useTranslation } from 'react-i18next';
import spinner from '../spinner/circle752.svg';
import { useNavigate, Link } from 'react-router-dom';

import lh from './LoginHotelier.module.scss';

export default function LoginHotelier() {
  const { t } = useTranslation('auth');

  let timer;
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [isErrorCode, setIsErrorCode] = useState(false);
  const [isErrorTimeCode, setIsErrorTimeCode] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmail = em => RegexpEmail.test(em);
  const navigation = useNavigate();

  const linkToRegistrationPage = REGISTER_HOTELIER;

  const handleClose = () => navigation(ROOT);

  const handleChangeEmail = e => {
    setEmail(e.target.value.trim());
  };
  const handleChangeCode = e => {
    setCode(e.target.value.trim());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSend = async e => {
    e.preventDefault();
    if (!isDone && !isEmail(email)) {
      setEmail('');
      setIsDone(false);
      console.log(' incorrect email');
    }
    if (!isDone && isEmail(email)) {
      setIsError(false);
      setIsErrorCode(false);
      setIsErrorTimeCode(false);

      try {
        setIsLoading(true);
        const response = await axios.patch(
          _LOGIN_HOTELIER_URL,
          {
            email: email,
          }
          // { withCredentials: true }
        );

        console.log(response, '===response hotelier email===');
        setIsLoading(false);

        if (!isDone && response.status === 500) {
          setIsError(true);
          setIsErrorCode(false);
          setIsDone(false);
        }
        if (!isDone && response.status === 200) {
          setIsError(false);
          setIsErrorCode(false);
          setIsDone(true);
          setCode('');
          timer = setTimeout(() => {
            setIsErrorTimeCode(true);
            setIsError(false);
            setIsErrorCode(false);
            setIsDone(false);
          }, 180000);
        }
      } catch (err) {
        console.log(err.request, '===err hotelier email===');
        if (!isDone && err) {
          setIsError(true);
          setIsErrorCode(false);
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
        const res = await axios.post(_CODE_LOG_HOTELIER_URL, {
          email: email,
          secretCode: code,
        });
        console.log(res, '===response hotelier code===');
        setIsLoading(false);
        setIsError(false);
        setIsErrorCode(false);
        setCode('');
        setIsDone(true);
        setEmail('');
        navigation(-1);
      } catch (err) {
        console.log(err.request, '===err hotelier code===');
        if (isDone && err.request.status === 435) {
          setIsError(true);
          setIsErrorCode(true);
          setIsDone(true);
        }
        if (isDone && err.request.status === 436) {
          setIsErrorTimeCode(true);
          setIsError(false);
          setIsErrorCode(false);
          setIsDone(false);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const LoadingIndicator = () => (
    <div className={lh.loading}>
      <img src={spinner} alt="Loading..." />
    </div>
  );

  return (
    <div id="popup" className={lh.popup}>
      {isLoading && LoadingIndicator()}
      <div className={lh.popup__wrapper}>
        <button onClick={handleClose} className={lh.popup__close} />
        <div className={lh.popup__image}></div>
        <div className={lh.popup__content}>
          <form className={lh.popup__form} action="/">
            {isDone ? (
              <>
                <p className={lh.popup_info}>{t('enterConfirmCode')}</p>
                <p className={lh.popup_info2}>
                  {t('enterConfirmCodeTextInfo')}
                  <br />
                  {t('enterConfirmCodeTextInfo2')}
                </p>
              </>
            ) : (
              <>
                <h2 className={lh.popup_title}>{t('enterHotelier')}</h2>
                <p className={lh.popup_text}>
                  {t('popupText')}
                  <br />
                  <a className={lh.popup_link} href="/terms-conditions-users">
                    {t('termsConditionsUsers')}
                  </a>
                  <span>&nbsp;{t('and')}</span>
                  <br />
                  <a className={lh.popup_link} href="/privacy-policy-users">
                    {t('privacyPolicyUsers')}
                  </a>
                </p>
              </>
            )}
            <div className={lh.popup_info_error_block}>
              <div className={isError ? `${lh.popup_error}` : `${lh.popup_error_off}`}>
                {isErrorCode ? <>{t('errorConfirmCode')}</> : <>{t('errorLoginEmailHotelier')}</>}
              </div>
            </div>

            <fieldset className={lh.popup_field}>
              {isDone ? (
                <input
                  type="text"
                  id="form-Confirmation"
                  className={code ? `${lh.popup_input_value}` : `${lh.popup_input}`}
                  autocomplete="off"
                  // maxLength={4}
                  value={code}
                  onChange={handleChangeCode}
                />
              ) : (
                <input
                  className={email ? `${lh.popup_input_value}` : `${lh.popup_input}`}
                  id="form-Confirmation"
                  type="text"
                  value={email}
                  onChange={handleChangeEmail}
                />
              )}

              <label className={lh.popup_label} htmlFor="form-Confirmation">
                {isDone ? <>{t('popupLabelCode')}</> : <>{t('popupLabelEmailAddress')}</>}
              </label>
            </fieldset>
            <div className={lh.popup_info_error_block}>
              <p className={isDone ? `${lh.popup_info3}` : ` ${lh.popup_info3_off}`}>
                <>{t('popupInfo3CodeTime')}</>
              </p>
              <p className={isErrorTimeCode && !isDone ? `${lh.popup_info3}` : ` ${lh.popup_info3_off}`}>
                <>{t('errorTimeCode')}</>
              </p>
            </div>

            <button className={lh.popup_btn} type="submit" onClick={handleSend} disabled={isDone ? !code : !email}>
              {t('btnSubmit')}
            </button>

            {!isDone && (
              <p className={lh.popup_text}>
                {t('popupText2')}

                <Link className={lh.popup_text_register} to={linkToRegistrationPage}>
                  &nbsp;{t('popupTextRegister')}
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
