import { CloseBnt } from 'components/UserCabinet/ModalW/';
import s from '../../ModalPayment/ModalPayment.module.scss';

interface IProps {
  close: () => void;
}

export const CantBooking = ({ close }: IProps) => {
  return (
    <div className={s.text_container}>
      <CloseBnt close={close} styleName={s.text_closebnt} />
      <ul>
        <li className={`${s.text_item} ${s.text_item_accent}`}>Сейчас у вас есть одно действующее бронирование</li>
        <li className={`${s.text_item} ${s.text_item_accent}`}>
          Вы не сможете совершить новое бронирование пока не завершится ваше действующее бронирование{' '}
        </li>

        <li className={s.text_item}>
          Возможность иметь два действующих бронирования вам будет доступна после того как ваша Booking Karma выростет
          до отметки 20.
        </li>
      </ul>
    </div>
  );
};
