import s from './infoComponentPrime.module.scss';
import pencil from '../../MainPage/Assents/image/SelectBed.svg';
import OptionsRoom from './OptionsRoom';
import OptionsHostelRoom from './OptionsHostelRoom';
import { useEffect, useState } from 'react';

export default function RoomInTheHotel({ el, onClick, activeCard, setCurentCardIndex, HTC, activeCards, onArr }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [checked, setChecked] = useState(false);

  const openModal = index => {
    setIsActive(index);
    console.log(122);
    setIsOpen(true);
  };
  const closeModal = () => {
    setCurentCardIndex(null);
    setIsActive(null);
    setIsOpen(false);
    setChecked(false);
  };

  const [isActiveCard, setIsActiveCard] = useState(activeCard);
  useEffect(() => setIsActiveCard(activeCard), [activeCard]);
  return (
    <li
      className={`${s.hotelier_roms__item} ${isActiveCard ? s.hotelier_roms__item_active : ''} ${!HTC && s.testHover} ${
        activeCards && HTC === false && s.activeCards
      }`}
      key={el.number}
      onClick={!HTC && onArr}
    >
      <div className={s.hotelier_roms__box_bed_img}>
        <div className={s.hotelier_roms__box_number_room}>
          <p className={s.hotelier_roms__number_room}>{el.number}</p>
        </div>
        {HTC && (
          <button className={s.hotelier_roms__button_change_room}>
            <svg className={s.hotelier_roms__icon_change_room}>
              <use href={`${pencil}#pencil`}></use>
            </svg>
          </button>
        )}
        <ul className={`${s.hotelier_options_rooms__list}`}>
          {el.hostel ? (
            <OptionsHostelRoom
              HTC={HTC}
              optionsHostelRoom={el.optionsroom}
              onClick={onClick}
              setCurentCardIndex={setCurentCardIndex}
            />
          ) : (
            el.optionsroom.map(room => (
              <OptionsRoom
                isOpen={isOpen}
                closeModal={closeModal}
                room={room}
                quantityRooms={el.rooms}
                key={room.key}
                isActive={isActive}
                checked={checked}
                setChecked={setChecked}
              />
            ))
          )}
        </ul>
      </div>
      {!isActiveCard && (
        <div className={el.hostel ? s.hotelier_roms__box_price_hostel : s.hotelier_roms__box_price}>
          {!el.hostel && (
            <button onClick={HTC && openModal} className={s.hotelier_roms__button_change_price}>
              Цена/Даты
            </button>
          )}

          <p className={s.hotelier_roms__text_price}>Цена на сегодня:</p>
          <p className={s.hotelier_roms__price}>{el.price}</p>
        </div>
      )}
    </li>
  );
}
