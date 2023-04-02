import { useState, useCallback, useMemo } from 'react';
import useTimeout from './useTimeout';
// import penIcon from '../../../assets/images/sidemenu/penEdit.svg'
import NavbarSideMenu from 'components/SideMenu/navbar';
// import { isAbsolute } from 'path/posix'
import '../../../styles/common/_userAccountSetting.scss';
import '../../../styles/common/_sideMenu.scss';
import NavigationSprite from '../../../assets/images/header/NavigationSprite.svg';

import '../../../styles/common/_userAccountSetting.scss';
// import { setInterval } from 'timers'

export default function AccountSetting() {
  // let video = 'https://www.youtube.com/watch?v=lFsKr1AyXKw'
  const initialState = [{ login: '', email: '', code: '', error: '' }];

  const [form, setForm] = useState(initialState);
  const [editLog, setEditLog] = useState(false);
  const [editEm, setEditEm] = useState(false);
  const [codeLog, setCodelog] = useState(false);
  const [codeEm, setCodeEm] = useState(false);
  const [codeErr, setCodeErr] = useState(false);
  const [fieldErr, setFieldErr] = useState(false);
  const [tractor, setTractor] = useState(false);

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
  };

  const sendlogin = e => {
    if (form.login === 3) {
      setFieldErr(true);
      return;
    } else if (form.login === 300) {
      setTractor(true);
      setFieldErr(false);
      setEditLog(false);
      setEditEm(false);
      setCodeEm(false);
      return;
    }
    setFieldErr(false);
    setEditLog(false);
    setEditEm(false);
    setCodeEm(false);
    setCodelog(true);
  };
  const TristaHandler = () => {
    setFieldErr(false);
    setEditLog(false);
    setEditEm(false);
    setCodeEm(false);
    setCodelog(false);
    setTractor(false);
  };
  const sendEmail = () => {
    if (form.email === 3) {
      setFieldErr(true);
      return;
    }
    setFieldErr(false);
    setEditLog(false);
    setEditEm(false);
    setCodelog(false);
    setCodeEm(true);
  };
  // useEffect(() => {
  //   sendCodeLog()
  //   return () => {}
  // }, [form.code])

  const sendCodeLog = () => {
    if (form.code === 8) {
      setCodeErr(true);
      return;
    } else if (!codeErr) {
      setCodelog(false);
      setCodeEm(false);
    }
    setCodeErr(false);
  };

  const editLogin = () => {
    setEditLog(true);
    setEditEm(false);
  };
  const editEmail = () => {
    setEditEm(true);
    setEditLog(false);
  };

  const [count, timerOn, setTimerOn] = useTimeout();
  // console.log(count)

  const StartTimer = () => {
    if (!timerOn) {
      setTimerOn(true);
    }
  };
  const stopTimer = useCallback(() => {
    setTimerOn(false);
  }, [setTimerOn]);

  useMemo(() => {
    stopTimer();
  }, [stopTimer]);

  return (
    <div>
      <NavbarSideMenu />
      <div className="account-setting-container ">
        {/*  <div className="page_account-name"> Настройка аккаунта</div> */}
        <form onSubmit={handleSubmit} className={tractor ? 'main-container' : null}>
          <div className="container__block-input">
            <div className="container__block-login">
              <label htmlFor="name" className="text-label-login">
                Логин:
              </label>
              <input
                type="tel"
                className=" block-input-login text-input "
                placeholder="+380345678900 for test put 3 or 8"
                name="login"
                value={form.login}
                disabled={!editLog}
                onChange={handleChange}
                maxlength="17"
              />
              <div>
                {editLog ? (
                  <input type="submit" value="Отправить" onClick={sendlogin} className="send-btn-login text__btn" />
                ) : (
                  <button disabled={codeEm || codeLog || fieldErr} className="edit-btn-login " onClick={editLogin}>
                    <svg className="icon-pen">
                      <use href={`${NavigationSprite}#pen`}></use>
                    </svg>
                    {/*  <img className="btn-l " src={penIcon} alt="penEdit" /> */}
                  </button>
                )}
              </div>
              {fieldErr && (
                <label htmlFor="name" className="text-label-fieldLogErr">
                  Уже зарегистрирован. Введите другой.
                </label>
              )}
            </div>

            <div
              className={
                codeLog ? 'container__block-codelog' : codeEm ? 'container__block-codeEm' : 'container__block-codeNone'
              }
            >
              {!codeErr ? (
                <label htmlFor="name" className="text-label-codelog">
                  Введите код, который мы отправили на ваш телефон:
                </label>
              ) : (
                <label htmlFor="name" className="text-label-codeErr">
                  Вы ввели неправильный проверочный код. Попробуйте снова.
                </label>
              )}

              <input
                type="text"
                className="block-input-codelog text-input "
                name="code"
                value={form.code}
                onChange={handleChange}
                maxlength="17"
              />
              <label htmlFor="name" className="text-label-codelog-time">
                Проверочный код действует 3 минуты
              </label>
              <input type="submit" value="Отправить" onClick={sendCodeLog} className="send-btn-code text__btn" />
            </div>

            <div className={!codeLog ? 'container__block-email' : 'container__block__code '}>
              <label htmlFor="email" className="text-label-email">
                E-mail:
              </label>

              <input
                type="email"
                className="block-input-email text-input"
                placeholder="pochta4243@gmal.com "
                name="email"
                value={form.email}
                onChange={handleChange}
                disabled={!editEm}
              />

              <div>
                {editEm ? (
                  <input type="submit" value="Отправить" onClick={sendEmail} className="send-btn-email text__btn" />
                ) : (
                  <button disabled={codeEm || codeLog || fieldErr} className="edit-btn-email" onClick={editEmail}>
                    <svg className="icon-pen">
                      <use href={`${NavigationSprite}#pen`}></use>
                    </svg>
                    {/*  <img className="btm-em " src={penIcon} alt="penEditE" /> */}
                  </button>
                )}
              </div>
            </div>

            <div></div>
          </div>
        </form>
        {tractor && (
          <div className="App">
            <iframe
              width="1664"
              height="681"
              src="https://www.youtube.com/embed/lFsKr1AyXKw"
              title="YouTube video player"
              allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="btn_trista" type="reset" onClick={TristaHandler}>
              STOP and Clear
            </button>
            <div className="play-trista">смотреть доконца!!!!!!!! жми плей!!!!!!!!!!!</div>
          </div>
        )}
        <div className={!codeLog && !codeEm ? 'container__block-info' : 'container__block-info '}>
          <h5 className="text__id">ID 12345678910</h5>
          <h5 className="text__registaration">Дата регистрации 22 янв. 2020 </h5>
        </div>
        <button type="button" className="deleteBtn1" disabled={!count} onClick={StartTimer}>
          Удалить аккаунт
        </button>
        {timerOn && (
          <div className="container__block-delete">
            <div className="block-delete-info  text-delete-info">
              У вас есть действующие бронирования, вы сможете удалить аккаунт после их завершения.
            </div>
            <div className="block-delete-btn ">
              <span className=" text-delete-btn"> Аккаунт удалён </span>
              <span className="text-delete-timer">{count}</span>
              <button onClick={stopTimer} className="block-cancel-btn-account text-btn-cancel ">
                Отмена
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
