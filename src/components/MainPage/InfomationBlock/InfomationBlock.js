import "./InfomationBlock.scss";
import infoSprite from "../Assents/image/infoSprite.svg";

export default function InfomationBlock(params) {
  return (
    <div className="info-section">
      <h2 className="info__title">Проверьте цены бронирования на</h2>
      <p className="info__indent">
        <span className="info__highlight info__highlight--orange">
          Your price
        </span>
        <span className="info__highlight info__highlight--blue ">Booking</span>
        потому, что
      </p>
      <ul className="info__list">
        <li className="info__item">
          <span className="info__text">
            Отельеры могут снижать цену бронирования на свободные номера. Мы их
            в этом не ограничиваем.
          </span>
          <svg className="arow-icon">
            <use href={`${infoSprite}#arows`}></use>
          </svg>
        </li>
        <li className="info__item">
          <span className="info__text">
            Отельеры видят каждого пользователя кто ищет бронирование рядом и
            могут предложить персональные скидки.
          </span>
          <svg className="people-icon">
            <use href={`${infoSprite}#people`}></use>
          </svg>
        </li>
        <li className="info__item">
          <span className="info__text">
            Предложите свою цену бронирования. Ваше предложение увидят отелеры.
            Договоритесь напрямую.
          </span>
          <svg className="circle-icon">
            <use href={`${infoSprite}#circle`}></use>
          </svg>
        </li>
      </ul>
    </div>
  );
}
