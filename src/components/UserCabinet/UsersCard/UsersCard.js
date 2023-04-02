import { Link } from 'react-router-dom';
import './UsersCard.scss';
import Sprite from './img/usersCard-sprite.svg';
import Image from './img/JackieChan.jpg';
import IconClock from './img/iconClock.svg';
import { BookingKarma } from 'components/UserRequestCard/BookingKarma';
import { useEffect, useState } from 'react';
import { usePopover } from 'hooks/UI';

export default function UsersCard() {
  const [toggleKarma, setToggleKarma] = useState(false);
  const [parentPopperAttributes, childPopperAttributes] = usePopover({
    offset: [16, 4],
    placement: 'bottom',
  });

  useEffect(() => {
    const checkClose = () => {
      if (toggleKarma) setToggleKarma(false);
    };

    document.addEventListener('click', checkClose);

    return () => {
      document.removeEventListener('click', checkClose);
    };
  }, [toggleKarma]);

  return (
    <div className="usersCard__section">
      <Link className="usersCard__link" to="/user-account-setting">
        <svg className="usersCard__icon-gear">
          <use href={`${Sprite}#icon-gear`}></use>
        </svg>
      </Link>
      <div className="usersCard__thumb">
        <img src={Image} alt="user avatar" className="usersCard__image" />
      </div>
      <p className="usersCard__title"> Джеки Чан</p>
      <div className="usersCard__infoBlock">
        <div
          className={toggleKarma ? ' usersCard__infoBlock__wrapper active ' : ' usersCard__infoBlock__wrapper '}
          {...parentPopperAttributes}
          onClick={() => setToggleKarma(!toggleKarma)}
        >
          <div className="usersCard__infoBlock__title">
            <img src={IconClock} alt="" className="usersCard__infoBlock__icon" />

            <p className="usersCard__infoBlock__text">Booking Karma</p>
          </div>

          <span className="usersCard__infoBlock__number">22</span>

          <div className={toggleKarma ? 'karma__container_open' : 'karma__container_close'} {...childPopperAttributes}>
            <BookingKarma />
          </div>
        </div>

        <div className="usersCard__infoBlock__wrapper">
          <div className="usersCard__infoBlock__title">
            <svg className="usersCard__infoBlock__icon-weekly">
              <use href={`${Sprite}#icon-weekly-calendar`}></use>
            </svg>

            <p className="usersCard__infoBlock__text">Дата регистрации</p>
          </div>

          <span className="usersCard__infoBlock__date">27 янв. 2020 </span>
        </div>
      </div>
    </div>
  );
}
