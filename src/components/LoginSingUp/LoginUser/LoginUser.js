import { REGISTER_USER, ROOT, _CODE_LOG_USER_URL, _LOGIN_USER_URL, RegexpEmail } from 'navigation/CONSTANTS';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { useTranslation } from 'react-i18next';
import spinner from '../spinner/circle752.svg';
import { useNavigate, Link } from 'react-router-dom';

import lsi from './LoginUser.module.scss';

export default function LoginUser() {
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

  const linkToRegistrationPage = REGISTER_USER;

  const handleClose = () => navigation(ROOT);

  const handleChangeEmail = e => {
    setEmail(e.target.value.trim());
  };
  const handleChangeCode = e => {
    setCode(e.target.value.trim());
  };
  // const LogoutSend = async e => {
  //   e.preventDefault();
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get(_LOGOUT_USER_URL);
  //     console.log(response, '===response log user===');
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log(err, '===err logout user===');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSend = async e => {
    e.preventDefault();
    if (!isDone && !isEmail(email)) {
      setEmail('');
      setIsDone(false);
      setIsErrorTimeCode(false);
      console.log(' incorrect email');
    }
    if (!isDone && isEmail(email)) {
      setIsError(false);
      setIsErrorCode(false);
      setIsErrorTimeCode(false);
      try {
        setIsLoading(true);
        const response = await axios.patch(_LOGIN_USER_URL, {
          email: email,
        });
        console.log(response, '==response login user===');
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
        console.log(err.request.status, '==errr login  user===');
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
        const res = await axios.post(
          _CODE_LOG_USER_URL,
          {
            email: email,
            secretCode: code,
          }
          // { withCredentials: true }
        );
        console.log(res, '===response login code user===');
        setIsLoading(false);
        setIsError(false);
        setIsErrorCode(false);
        setCode('');
        setIsDone(true);
        setEmail('');
        navigation(-1);
      } catch (err) {
        console.log(err.request, '===err log code user===');
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
    <div className={lsi.loading}>
      <img src={spinner} alt="Loading..." />
    </div>
  );

  return (
    <div id="popup" className={lsi.popup}>
      {isLoading && LoadingIndicator()}
      <div className={lsi.popup__wrapper}>
        <button onClick={handleClose} className={lsi.popup__close} />
        <div className={lsi.popup__image}></div>
        <div className={lsi.popup__content}>
          <form className={lsi.popup__form} action="/">
            {isDone ? (
              <>
                <p className={lsi.popup_info}>{t('enterConfirmCode')}</p>
                <p className={lsi.popup_info2}>
                  {t('enterConfirmCodeTextInfo')}
                  <br />
                  {t('enterConfirmCodeTextInfo2')}
                </p>
              </>
            ) : (
              <>
                <h2 className={lsi.popup_title}>{t('enter')}</h2>
                <p className={lsi.popup_text}>
                  {t('popupText')}
                  <br />
                  <a className={lsi.popup_link} href="/terms-conditions-users">
                    {t('termsConditionsUsers')}
                  </a>
                  <span>&nbsp;{t('and')}</span>
                  <br />
                  <a className={lsi.popup_link} href="/privacy-policy-users">
                    {t('privacyPolicyUsers')}
                  </a>
                </p>
              </>
            )}
            <div className={lsi.popup_info_error_block}>
              <div className={isError ? `${lsi.popup_error}` : `${lsi.popup_error_off}`}>
                {isErrorCode ? <>{t('errorConfirmCode')}</> : <>{t('errorLoginEmailUser')}</>}
              </div>
            </div>

            <fieldset className={lsi.popup_field}>
              {isDone ? (
                <input
                  type="text"
                  id="form-Confirmation"
                  className={code ? `${lsi.popup_input_value}` : `${lsi.popup_input}`}
                  autocomplete="off"
                  // maxLength={4}
                  value={code}
                  onChange={handleChangeCode}
                />
              ) : (
                <input
                  className={email ? `${lsi.popup_input_value}` : `${lsi.popup_input}`}
                  id="form-Confirmation"
                  type="text"
                  value={email}
                  onChange={handleChangeEmail}
                />
              )}

              <label className={lsi.popup_label} htmlFor="form-Confirmation">
                {isDone ? <>{t('popupLabelCode')}</> : <>{t('popupLabelEmailAddress')}</>}
              </label>
            </fieldset>
            <div className={lsi.popup_info_error_block}>
              <p className={isDone ? `${lsi.popup_info3}` : ` ${lsi.popup_info3_off}`}>
                <>{t('popupInfo3CodeTime')}</>
              </p>
              <p className={isErrorTimeCode && !isDone ? `${lsi.popup_info3}` : ` ${lsi.popup_info3_off}`}>
                <>{t('errorTimeCode')}</>
              </p>
            </div>

            <button className={lsi.popup_btn} type="submit" onClick={handleSend} disabled={isDone ? !code : !email}>
              {t('btnSubmit')}
            </button>

            {!isDone && (
              <p className={lsi.popup_text}>
                {t('popupText2')}

                <Link className={lsi.popup_text_register} to={linkToRegistrationPage}>
                  {' '}
                  &nbsp; {t('popupTextRegister')}
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
