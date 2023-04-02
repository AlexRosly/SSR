import { FreeButton } from 'components/UserCabinet/FreeButton/FreeButton';
import { CheckInOut } from '../CheckInOut/CheckInOut';
import s from './OptionButton.module.scss';

export const OptionButton = ({ checkInTime, onOpen }) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onOpen}>
        Забронировать
      </button>

      <div className={s.wrapper__center}>
        <FreeButton color="grey" />
      </div>

      <div className={s.wrapper__end}>
        <CheckInOut checkIn={checkInTime.in} checkOut={checkInTime.out} />
      </div>
    </div>
  );
};
