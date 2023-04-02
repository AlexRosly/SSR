import type { IHotelsData } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';
import checkInIcon from 'assets/icons/proposeCard/checkin.svg';
import checkOutIcon from 'assets/icons/proposeCard/checkout.svg';
import s from 'components/BookingPropose/components/HoteliersProposes/HoteliersProposeCard/HoteliersProposeCard.module.scss';

interface IProps {
  data: IHotelsData;
}

export const CheckInOut = ({ data }: IProps) => (
  <div className={`${s.booking} ${s.wrap}`}>
    <div className={s.booking__dates}>
      {data.dateFrom.toLocaleString('ru', { year: 'numeric', month: 'short', day: 'numeric' })} -{' '}
      {data.dateTo.toLocaleString('ru', { year: 'numeric', month: 'short', day: 'numeric' })}
    </div>
    <div className={s.booking__checkin}>
      <img className={s.checkin__icon} src={checkInIcon} alt="checkin" />
      <p className={s.checkin__title}>Check In</p>
      <p className={s.checkin__time}>{data.timeCheckIn}</p>
    </div>
    <div className={s.booking__checkout}>
      <img className={s.checkout__icon} src={checkOutIcon} alt="checkout" />
      <p className={s.checkout__title}>Check Out</p>
      <p className={s.checkout__time}>{data.timeCheckOut}</p>
    </div>
    <p className={s.booking__appSize}>{data.apartmentsSize} м.кв.</p>
  </div>
);
