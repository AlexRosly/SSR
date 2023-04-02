import { usePopover } from 'hooks/UI';

import clockIcon from 'assets/icons/proposeCard/clock_karma.svg';
import s from '../subcard.module.scss';

export const ButtonRating = ({ onClick, isPopupVisible }) => {
  const [parentPopperAttributes, childPopperAttributes] = usePopover({
    offset: [0, 6],
    placement: 'top',
  });

  return (
    <button className={s.button} {...parentPopperAttributes} onClick={onClick}>
      <span>Поставьте оценку</span>

      {!isPopupVisible && (
        <div className={s.button_popover} {...childPopperAttributes}>
          <span className={s.button_popover__number}>+ 1</span>
          <img src={clockIcon} alt="clock" />
          <span className={s.button_popover__title}> Booking Karma</span>
        </div>
      )}
    </button>
  );
};
