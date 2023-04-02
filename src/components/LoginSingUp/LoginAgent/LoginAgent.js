import { REGISTER_AGENT, ROOT, _CODE_LOG_AGENT_URL, _LOGIN_AGENT_URL, RegexpEmail } from 'navigation/CONSTANTS';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { useTranslation } from 'react-i18next';
import spinner from '../spinner/circle752.svg';
import { useNavigate, Link } from 'react-router-dom';

import la from './LoginAgent.module.scss';

export default function LoginAgent() {
  const { t } = useTranslation('auth');

  // eslint-disable-next-line no-empty-character-class
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

  const linkToRegistrationPage = REGISTER_AGENT;

  const handleClose = () => navigation(ROOT);

  const handleChangeEmail = e => {
    e.preventDefault();
    setEmail(e.target.value.trim());
  };

  const handleChangeCode = e => {
    setCode(e.target.value.trim());
  };

  const handleSend = async e => {
    e.preventDefault();

    if (!isDone && !isEmail(email)) {
      setEmail('');
      setIsDone(false);
      setIsErrorCode(false);
      setIsErrorTimeCode(false);
      console.log(' incorrect email');
    }
    if (!isDone && isEmail(email)) {
      setIsError(false);
      setIsErrorCode(false);
      setIsErrorTimeCode(false);

      console.log('corect email ');
      if (!isDone) {
        try {
          console.log('===шлю запит log Agent===');
          setIsLoading(true);
          const response = await axios.patch(
            _LOGIN_AGENT_URL,
            {
              email: email,
            }
            // { withCredentials: true }
          );
          console.log(response, '===response log Agent===');
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
          console.log(err.request, '===err log Agent===');
          if (!isDone && err) {
            setIsError(true);
            setIsErrorCode(false);
            setIsDone(false);
          }
        } finally {
          setIsLoading(false);
        }
      }
    }

    if (isDone) {
      console.log('======шлю запит на код =====');
      try {
        setIsLoading(true);
        const res = await axios.post(_CODE_LOG_AGENT_URL, {
          email: email,
          secretCode: code,
        });
        console.log(res, '===res login code agent');
        setIsLoading(false);
        setIsError(false);
        setIsErrorCode(false);
        setIsDone(true);
        setCode('');
        setEmail('');
        navigation(-1);
      } catch (err) {
        console.log(err.request, '===err login code agent');

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
    <div className={la.loading}>
      <img src={spinner} alt="Loading..." />
    </div>
  );

  return (
    <div id="popup" className={la.popup}>
      {isLoading && LoadingIndicator()}

      <div className={la.popup__wrapper}>
        <button onClick={handleClose} className={la.popup__close} />
        <div className={la.popup__image}></div>
        <div className={la.popup__content}>
          <form className={la.popup__form} action="/">
            {isDone ? (
              <>
                <p className={la.popup_info}>{t('enterConfirmCode')}</p>
                <p className={la.popup_info2}>
                  {t('enterConfirmCodeTextInfo')}
                  <br />
                  {t('enterConfirmCodeTextInfo2')}
                </p>
              </>
            ) : (
              <>
                <h2 className={la.popup_title}>{t('enterAgent')}</h2>
                <p className={la.popup_text}>
                  {t('popupText')}
                  <br />
                  <a className={la.popup_link} href="/terms-conditions-users">
                    {t('termsConditionsUsers')}
                  </a>
                  <span>&nbsp;{t('and')}</span>
                  <br />
                  <a className={la.popup_link} href="/privacy-policy-users">
                    {t('privacyPolicyUsers')}
                  </a>
                </p>
              </>
            )}
            <div className={la.popup_info_error_block}>
              <div className={isError ? `${la.popup_error}` : `${la.popup_error_off}`}>
                {isErrorCode ? <>{t('errorConfirmCode')}</> : <>{t('errorLoginEmailAgent')}</>}
              </div>
            </div>

            <fieldset className={la.popup_field}>
              {isDone ? (
                <input
                  type="text"
                  id="form-Confirmation"
                  className={code ? `${la.popup_input_value}` : `${la.popup_input}`}
                  autocomplete="off"
                  // maxLength={4}
                  value={code}
                  onChange={handleChangeCode}
                />
              ) : (
                <input
                  className={email ? `${la.popup_input_value}` : `${la.popup_input}`}
                  id="form-Confirmation"
                  type="text"
                  value={email}
                  onChange={handleChangeEmail}
                />
              )}

              <label className={la.popup_label} htmlFor="form-Confirmation">
                {isDone ? <>{t('popupLabelCode')}</> : <>{t('popupLabelEmailAddress')}</>}
              </label>
            </fieldset>
            <div className={la.popup_info_error_block}>
              <p className={isDone ? `${la.popup_info3}` : ` ${la.popup_info3_off}`}>
                <>{t('popupInfo3CodeTime')}</>
              </p>
              <p className={isErrorTimeCode && !isDone ? `${la.popup_info3}` : ` ${la.popup_info3_off}`}>
                <>{t('errorTimeCode')}</>
              </p>
            </div>

            <button
              className={la.popup_btn}
              type="submit"
              onClick={e => handleSend(e)}
              disabled={isDone ? !code : !email}
            >
              {t('btnSubmit')}
            </button>

            {!isDone && (
              <p className={la.popup_text}>
                {t('popupText2')}

                <Link className={la.popup_text_register} to={linkToRegistrationPage}>
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
