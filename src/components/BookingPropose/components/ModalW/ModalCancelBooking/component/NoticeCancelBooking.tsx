import { CancelBooking } from 'components/BookingPropose/components/UsersActiveBookings/ActiveBookingCard/components/Buttons/CancelBooking';
import { CloseBnt } from 'components/UserCabinet/ModalW/Modal/CloseBnt';

import s from './NoticeCancelBooking.module.scss';

interface IProps {
  close: () => void;
  onClick: () => void;
}

export const NoticeCancelBooking = ({ close, onClick }: IProps) => {
  return (
    <div className={s.container}>
      <CloseBnt close={close} styleName={s.go_back_bnt} />
      <h2 className={s.title}>Вы действительно хотите отменить бронирование?</h2>
      <p className={s.text}>Отмена бронирования доставит некоторые неудобства отельеру, который ждет ваш приезд.</p>
      <p className={s.text}>
        Согласно наших правил, если вы отмените бронирование ваша Booking Karma уменьшится на 5 единиц. <br />В случае,
        если вы не отмените бронирование и не прибудете на место - не воспользуетесь бронированием, то ваша Booking
        Karma уменьшится на 10 единиц.
      </p>
      <p className={s.text}>
        Напоминаем, что если ваша Booking Karma достигнет отметки минус 10 (Booking Karma -10) то ваш аккаунт будет
        приостановлен.
      </p>
      <div className={s.button}>
        <CancelBooking onClick={onClick} />
      </div>
    </div>
  );
};
