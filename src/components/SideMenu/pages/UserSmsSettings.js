import { useState } from "react";
import NavbarSideMenu from 'components/SideMenu/navbar';
import "../../../styles/common/_userSmsSettings.scss";
import NavigationSprite from "../../../assets/images/header/NavigationSprite.svg";

export default function UserSmsSettings() {
  const arrTime = [
    "15 минут",
    "30 минут",
    "1 час",
    "2 часа",
    "3 часа",
    "4 часа",
    "5 часов",
    "6 часов",
    "8 часов",
    "12 часов",
  ];
  let initialState = ["1 час"];
  const [time, setTime] = useState(initialState);

  const changeSelect = (e) => {
    setTime(e.target.innerHTML);
  };
  const option = arrTime.map((text, index) => {
    return (
      <li
        className={
          time === text || text === time[0]
            ? " select-text-block-sms selected-time-sms"
            : "select-text-block-sms"
        }
        key={index}
        value={index}
      >
        <p className="sms-time-select-text " onClick={changeSelect}>
          {text}
        </p>
      </li>
    );
  });
  return (
    <div>
      <NavbarSideMenu />
      <div className="userSmsSettings">
        <div className="time-setting">
          <span className="time-message">
            Получать уведомления
            <br /> не чаще чем раз в:
          </span>
          <div className="sms-select">
            <div className="sms-time"> {time}</div>
            <div className="sms-select-window">
              <ul className="sms-select-cont">{option}</ul>
            </div>
          </div>
        </div>
        <div className="content">
          <span className="sms-message">
            На ваш телефон будут
            <br /> приходить уведомления о:
          </span>
          <ul className="sms-list">
            <li className="sms-item">
              <svg className="sms-icon-house">
                <use href={`${NavigationSprite}#house`}></use>
              </svg>
              Предложение от отельера
            </li>
            <li className="sms-item">
              <svg className="sms-icon-envelope">
                <use href={`${NavigationSprite}#envelope`}></use>
              </svg>
              Сообщение
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
