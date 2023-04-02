import check from '../image/icon/check.svg';
import runMen from '../image/icon/run_men.svg';
import s from './CheckInOut.module.scss';

export const CheckInOut = ({ checkIn, checkOut }) => {
  return (
    <div className={s.checkTime__container}>
      <div className={s.checkTime__wrapper}>
        <img src={check} alt="check icon" className={s.checkTime__icon} />
        <div className={s.checkTime__text}>Check In</div>
        <div>{checkIn}</div>
      </div>
      <div className={s.checkTime__wrapper}>
        <img src={runMen} alt="run men icon" className={s.checkTime__icon} />
        <div className={s.checkTime__text}>Check Out</div>
        <div>{checkOut}</div>
      </div>
    </div>
  );
};
