import checkoutIcon from 'assets/icons/proposeCard/checkout.svg';
import checkinIcon from 'assets/icons/proposeCard/checkin.svg';

import s from '../../HoteliersProposeCard.module.scss';

interface IProps {
  dates: Record<'dateFrom' | 'dateTo' | 'checkInTime' | 'checkOutTime', Date>;
  apartmentsSize: number;
}

export const BookingDates = ({ dates, apartmentsSize }: IProps) => {
  const { dateFrom, dateTo, checkInTime, checkOutTime } = dates;
  return (
    <div className={s.booking}>
      <div className={s.booking__dates}>
        {dateFrom.toLocaleString('ru', { year: 'numeric', month: 'short', day: 'numeric' })} -
        {dateTo.toLocaleString('ru', { year: 'numeric', month: 'short', day: 'numeric' })}
      </div>
      <div className={s.booking__checkin}>
        <img className={s.checkin__icon} src={checkinIcon} alt="checkin" />
        <p className={s.checkin__title}>Check In</p>
        <p className={s.checkin__time}>{checkInTime}</p>
      </div>
      <div className={s.booking__checkout}>
        <img className={s.heckout__icon} src={checkoutIcon} alt="checkout" />
        <p className={s.checkout__title}>Check Out</p>
        <p className={s.checkout__time}>{checkOutTime}</p>
      </div>
      <p className={s.booking__appsize}>{apartmentsSize} м.кв.</p>
    </div>
  );
};
