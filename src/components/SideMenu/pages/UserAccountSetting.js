import { useState } from 'react';
import NavbarSideMenu from 'components/SideMenu/navbar';

import NavigationSprite from '../../../assets/images/header/NavigationSprite.svg';

import '../../../styles/common/_userAccountSetting.scss';

export default function UserAccountSetting() {
  const initialState = [{ login: '', email: '', code: '', error: '' }];

  const [form, setForm] = useState(initialState);
  const [editLog, setEditLog] = useState(false);
  const [editEm, setEditEm] = useState(false);
  const [codeLog, setCodelog] = useState(false);
  const [codeEm, setCodeEm] = useState(false);
  const [codeErr, setCodeErr] = useState(false);
  const [fieldErr, setFieldErr] = useState(false);
  const [tractor, setTractor] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [nick, setNick] = useState(false);
  const [remove, setRemove] = useState(false);
  const [message] = useState(false);
  const [, setSelectedFile] = useState(null);

  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
  };

  const sendlogin = () => {
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
  // const TristaHandler = () => {
  //   setFieldErr(false);
  //   setEditLog(false);
  //   setEditEm(false);
  //   setCodeEm(false);
  //   setCodelog(false);
  //   setTractor(false);
  // };
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

  const [timer, setTimer] = useState(60);

  const startTimer = () => {
    const time = () => setTimer(timer => timer - 1);
    const times = setInterval(time, 1000);
    if (time === 0) {
      clearInterval(times);
    }
  };

  const deleteAccount = () => {
    setRemove(!remove);
    startTimer();
  };

  const cancleDelete = () => {
    setRemove(!remove);
  };

  const inputImg = e => {
    // // input;
    // setInput(!input);
    // let files = e.target.files;
    // console.log(files);
    setSelectedFile(e.target.files);
  };

  const addPhoto = e => {
    setPhoto(!photo);
    inputImg(e);
    // input.onClick;
  };

  const addNick = () => {
    setNick(!nick);
  };

  return (
    <div>
      <NavbarSideMenu />
      <div className="userAccountSettingContainer">
        <div className="user__container">
          <form onSubmit={handleSubmit} className={tractor ? 'main-container1' : null}>
            <div className="containet__block-input1">
              <div className="container__block-login1">
                <label htmlFor="name" className="text-label-login1">
                  Логин:
                </label>
                <input
                  type="tel"
                  className=" block-input-login1 text-input1 "
                  placeholder="+ 380976752329"
                  name="login"
                  value={form.login}
                  disabled={!editLog}
                  onChange={handleChange}
                  maxLength="17"
                />
                <div>
                  {editLog ? (
                    <input type="submit" value="Отправить" onClick={sendlogin} className="send-btn-login1 text__btn1" />
                  ) : (
                    <button disabled={codeEm || codeLog || fieldErr} className="edit-btn-login1" onClick={editLogin}>
                      <svg className="icon-pen">
                        <use href={`${NavigationSprite}#pen`}></use>
                      </svg>
                    </button>
                  )}
                </div>
                {fieldErr && (
                  <label htmlFor="name" className="text-label-fieldLogErr1">
                    Уже зарегистрирован. Введите другой.
                  </label>
                )}
              </div>

              <div
                className={
                  codeLog
                    ? 'container__block-codelog1'
                    : codeEm
                    ? 'container__block-codeEm1'
                    : 'container__block-codeNone1'
                }
              >
                {!codeErr ? (
                  <label htmlFor="name" className="text-label-codelog1">
                    Введите код, который мы отправили на ваш телефон:
                  </label>
                ) : (
                  <label htmlFor="name" className="text-label-codeErr1">
                    Вы ввели неправильный проверочный код. Попробуйте снова.
                  </label>
                )}

                <input
                  type="text"
                  className="block-input-codelog1 text-input1 "
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  maxLength="17"
                />
                <label htmlFor="name" className="text-label-codelog-time1">
                  Код подтверждения действует 3 минуты
                </label>
                <input type="submit" value="Отправить" onClick={sendCodeLog} className="send-btn-code1 text__btn1" />
              </div>

              <div className={!codeLog ? 'container__block-email1' : 'container__block__code1 '}>
                <label htmlFor="email" className="text-label-email1">
                  Email:
                </label>

                <input
                  type="email"
                  className="block-input-email1 text-input1"
                  placeholder="pochdsvdta423@gmail.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={!editEm}
                />

                <div>
                  {editEm ? (
                    <input type="submit" value="Отправить" onClick={sendEmail} className="send-btn-email1 text__btn1" />
                  ) : (
                    <button disabled={codeEm || codeLog || fieldErr} className="edit-btn-email1" onClick={editEmail}>
                      <svg className="icon-pen">
                        <use href={`${NavigationSprite}#pen`}></use>
                      </svg>

                      {/* <img className="btm-em1 " src={penIcon} alt="penEditE" /> */}
                    </button>
                  )}
                </div>
              </div>

              <div></div>
            </div>
          </form>
          <div className={!codeLog && !codeEm ? 'container__block-info1' : 'container__block__code1 '}>
            <h5 className="text__id1">ID 12345678910</h5>
            <h5 className="text__registaration1">Дата регистрации 22 янв. 2020 </h5>
          </div>
          <div className="delete__section">
            {remove ? (
              <div className="delete__message">
                <div className="delete__container">
                  <span className="delete__info">Аккаунт удалён</span>
                  <span>{timer}</span>
                </div>
                <button type="button" className="delete__confirm" onClick={cancleDelete}>
                  Отмена
                  <svg className="icon__arrowBack">
                    <use href={`${NavigationSprite}#arrow-back`}></use>
                  </svg>
                </button>
              </div>
            ) : (
              message && (
                <div className="delete__message">
                  <span className="delete__text">
                    У вас есть действующие бронирования, вы сможете удалить аккаунт после их завершения.
                  </span>
                </div>
              )
            )}
            <button type="button" className="delete__Btn" onClick={deleteAccount}>
              Удалить аккаунт
            </button>
          </div>
        </div>
        <div className="photo__container">
          <div className="photo__line"></div>
          <div className="photo__block">
            <div className="photo__img">
              <svg className="photo__icon">
                <use href={`${NavigationSprite}#men`}></use>
              </svg>
              <input type="file" onChange={inputImg} />
            </div>
            {!nick && <p className="photo__nick">Competitive Syrup_215</p>}
          </div>
          {photo && (
            <div className="photo__zoom">
              <div className="photo__change-block"></div>
              <label className="photo__change">
                {/* <div className="photo__change-block"></div> */}
                <svg className="icon__zoom">
                  <use href={`${NavigationSprite}#zoom-out`}></use>
                </svg>
                <input type="range" className="photo__input" min={0} max={100} />
                <svg className="icon__zoom">
                  <use href={`${NavigationSprite}#zoom-in`}></use>
                </svg>
              </label>
            </div>
          )}
          {nick && (
            <div className="nick__block">
              <form className="nick__form">
                <label className="nick__label">
                  <input className="nick__input" />
                  <span className="nick__text">Имя</span>
                </label>
                <label className="nick__label">
                  <input className="nick__input" />
                  <span className="nick__text">Фамилия</span>
                </label>
              </form>
            </div>
          )}
          <div className="photo__btnBlock">
            {/* first btn */}
            {photo ? (
              <button className="photo__bnConfirm" type="button" onClick={addPhoto}>
                Подтвердить изменения
              </button>
            ) : (
              <button className="photo__bnt" type="button" onClick={addPhoto}>
                Добавить фото
              </button>
            )}
            {/* second btn */}
            {nick ? (
              <button className="photo__bnConfirm" type="button" onClick={addNick}>
                Подтвердить изменения
              </button>
            ) : (
              <button className="photo__bnt" type="button" onClick={addNick}>
                Редактировать имя и фамилию
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
