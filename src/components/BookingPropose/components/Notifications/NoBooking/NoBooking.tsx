import NoticeIcon from 'components/BookingPropose/media/Notice-sprite.svg';
import s from './NoBooking.module.scss';

export const NoBooking = () => (
  <div className={s.notification__wrapp}>
    <div className={s.notification__block}>
      <div>
        <p className={s.notification__title}>Сейчас у вас нет действующих бронирований</p>
        <p className={s.notification__text}>Как только вы забронируете проживание, бронирование отобразится здесь</p>
      </div>
      <svg className={s.notification__icon}>
        <use href={`${NoticeIcon}#home`}></use>
      </svg>
    </div>
  </div>
);
