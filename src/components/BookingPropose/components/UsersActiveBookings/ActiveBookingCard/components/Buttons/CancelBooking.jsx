import { usePopover } from 'hooks/UI';

import clockIcon from 'assets/icons/proposeCard/clock_karma.svg';
import arrowfree from 'assets/icons/proposeCard/arrowfree.svg';
import s from './button.module.scss';

export const CancelBooking = ({ onClick }) => {
  const [parentPopperAttributes, childPopperAttributes] = usePopover({
    offset: [0, 6],
    placement: 'top',
  });

  return (
    <>
      <button className={s.optionsButton} {...parentPopperAttributes} onClick={onClick}>
        <span className={s.optionsButton_text}>Отменить бесплатно</span>
        <div className={s.icon_free_container}>
          <img src={arrowfree} alt="arrow that symbolize free booking return" />
          Free
        </div>

        <div className={s.button_popover} {...childPopperAttributes}>
          <span className={s.button_popover__number}>- 5</span>
          <img src={clockIcon} alt="clock" />
          <span className={s.button_popover__title}> Booking Karma</span>
        </div>
      </button>
    </>
  );
};
