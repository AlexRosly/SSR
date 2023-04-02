import { LOGIN_AGENT, ROOT, _REGISTER_AGENT_URL, _REGISTER_CODE_AGENT_URL, RegexpEmail } from 'navigation/CONSTANTS';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { useTranslation } from 'react-i18next';
import spinner from '../spinner/circle752.svg';
import { useNavigate, Link } from 'react-router-dom';

import ra from './RegisterAgent.module.scss';

export default function RegisterAgent() {
  const { t } = useTranslation('auth');
  // const dispatch = useDispatch();
  let timer;
  const [form, setForm] = useState({ name: '', surname: '', email: '', status: null });
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [isError2, setIsError2] = useState(false);
  const [isErrorTimeCode, setIsErrorTimeCode] = useState(false);
  const [isErrorCode, setIsErrorCode] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmail = em => RegexpEmail.test(em);
  const navigate = useNavigate();

  const linkToLoginPage = LOGIN_AGENT;

  const handleClose = () => navigate(ROOT);

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
        const response = await axios.post(_REGISTER_AGENT_URL, {
          lastName: form.surname,
          firstName: form.name,
          email: form.email,
        });
        console.log(response, '===response agent===');
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
        console.log(err.request.status, '=== email err Agent =====');
        if (!isDone && err.request.status !== 432) {
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
        const res = await axios.post(_REGISTER_CODE_AGENT_URL, {
          lastName: form.surname,
          firstName: form.name,
          email: form.email,
          secretCode: code,
        });
        console.log(res, '===response agent code===');
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
        console.log(err.request, '===== код Agent err =====');
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
    <div className={ra.loading}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
  return (
    <div id="popup" className={ra.popup}>
      {isLoading && LoadingIndicator()}
      <div className={ra.popup__wrapper}>
        <button onClick={handleClose} className={ra.popup__close} />
        <div className={ra.popup__image}></div>
        <div className={ra.popup__content}>
          <form className={ra.popup__form}>
            {isDone ? (
              <>
                <p className={ra.popup_info}>{t('enterConfirmCode')}</p>
                <p className={ra.popup_info2}>
                  {t('enterConfirmCodeTextInfo')}
                  <br /> {t('enterConfirmCodeTextInfo2')}
                </p>
              </>
            ) : (
              <>
                <h2 className={ra.popup_title}>{t('registerAgent')}</h2>
                <p className={ra.popup_text}>
                  {t('popupText')} <br />
                  <a className={ra.popup_link} href="/terms-conditions-users">
                    {t('termsConditionsUsers')}
                  </a>
                  <span>&nbsp;{t('and')}</span>
                  <br />
                  <a className={ra.popup_link} href="/privacy-policy-users">
                    {t('privacyPolicyUsers')}
                  </a>
                </p>
              </>
            )}
            <div className={ra.popup_info_error_block}>
              <div className={isErrorCode ? `${ra.popup_error}` : `${ra.popup_error_off}`}>
                <>{t('errorConfirmCode')}</>
              </div>
              <div className={isError2 ? `${ra.popup_error}` : `${ra.popup_error_off}`}>{t('error2RegisterEmail')}</div>
            </div>

            {isDone ? (
              <fieldset className={ra.popup_field}>
                <input
                  type="text"
                  id="form-Confirmation"
                  className={code ? `${ra.popup_input_value}` : `${ra.popup_input}`}
                  autocomplete="off"
                  // maxLength={4}
                  value={code}
                  onChange={handleChangeCode}
                />
              </fieldset>
            ) : (
              <>
                <fieldset className={ra.popup_field}>
                  <input
                    className={form.email ? `${ra.popup_input_value}` : `${ra.popup_input}`}
                    id="form-Confirmation"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChangeForm}
                  />
                  <label className={ra.popup_label} htmlFor="form-Confirmation">
                    {isDone ? <>{t('popupLabelCode')}</> : <>E-mail:</>}
                  </label>
                </fieldset>
                <fieldset className={ra.popup_field}>
                  <input
                    className={form.name ? `${ra.popup_input_value}` : `${ra.popup_input}`}
                    id="name-Confirmation"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChangeForm}
                  />
                  <label className={ra.popup_label} htmlFor="name-Confirmation">
                    {t('popupLabelName')}
                  </label>
                </fieldset>

                <fieldset className={ra.popup_field}>
                  <input
                    className={form.surname ? `${ra.popup_input_value}` : `${ra.popup_input}`}
                    id="secondName-Confirmation"
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleChangeForm}
                  />
                  <label className={ra.popup_label} htmlFor="secondName-Confirmation">
                    {t('popupLabelSurname')}
                  </label>
                </fieldset>
              </>
            )}

            <div className={ra.popup_info_error_register_block}>
              <p className={isDone ? `${ra.popup_info3}` : ` ${ra.popup_info3_off}`}>
                <>{t('popupInfo3CodeTime')}</>
              </p>
              <div className={isError && !isDone ? `${ra.popup_error_email}` : `${ra.popup_error_email_off}`}>
                {isErrorTimeCode && !isDone ? <>{t('errorTimeCode')}</> : <> {t('errorRegisterEmailHotelier')}</>}
              </div>
            </div>

            <button
              disabled={isDone ? !code : !(form.name && form.name && form.surname)}
              className={ra.popup_btn}
              type="submit"
              onClick={handleSend}
            >
              {t('btnSubmit')}
            </button>

            {!isDone && (
              <p className={ra.popup_text}>
                {t('popupText3')}

                <Link className={ra.popup_text_register} to={linkToLoginPage}>
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
