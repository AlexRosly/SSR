import RatingComponent from 'pages/HousePage/HouseComponents/RatingComponent';
import s from './infoComponentPrime.module.scss';
import hilton from '../../../assets/images/hoteliers/Hilton.jpg';
import plus from '../../MainPage/Assents/image/SelectBed.svg';
import { useState } from 'react';
import AllRoomsInTheHotel from './AllRoomsInTheHotel';

export default function UserCardBooking({ hotels }) {
  const [showBed, setShowBed] = useState(false);

  const showAllBed = () => setShowBed(!showBed);

  return (
    <div className={s.user_card}>
      <button className={s.user_card_button__add}>ДОБАВИТЬ ОБЪЕКТ</button>
      <ul className={s.user_card_list}>
        {hotels.map(({ _id, name, bedOptions }) => {
          return (
            <li key={_id} className={s.user_card_item}>
              <div className={s.user_card_box}>
                <div className={s.user_card_box__img}>
                  <div className={s.user_card_box__img__active}>
                    <img src={hilton} alt={name} className={s.user_card_img} />
                  </div>
                  <span className={s.user_card_name__hotel}>{name}</span>
                  <div className={s.user_card_raiting__hotel}>
                    <RatingComponent rating="0" cardSize="s" title={name} />
                  </div>
                  <button className={s.user_card_button__small__add}></button>
                  <div className={s.user_card_notification}>Добавить вариант бронирования</div>
                </div>
                {showBed ? (
                  <AllRoomsInTheHotel allRooms={bedOptions} />
                ) : (
                  <button className={s.user_card_button__big__add} onClick={showAllBed}>
                    <div className={s.user_card_icon__box}>
                      <svg className={s.user_card_icon__plus}>
                        <use href={`${plus}#plus`}></use>
                      </svg>
                    </div>
                    <p>Добавьте вариант бронирования в этом объекте</p>
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
