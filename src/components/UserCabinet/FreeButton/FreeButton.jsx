import arrowfree from 'assets/icons/proposeCard/arrowfree.svg';
import s from './FreeButton.module.scss';

import { usePopover } from 'hooks/UI';
import { Popup } from 'components/UserCards/Popup/withPopper/Popup';

export const FreeButton = ({ color }) => {
  const offset = color === 'grey' ? [0, 5] : [8, -10];
  const [parentPopperAttributes, childPopperAttributes, arrowAttributes] = usePopover({
    placement: 'top',
    offset,
  });

  return (
    <div className={s.card__btn_free__wrapper} {...parentPopperAttributes}>
      <button className={color === 'grey' ? s.card__btn_free__grey : s.card__btn_free} type="button">
        <img src={arrowfree} alt="arrow that symbolize free booking return" />
        Free
      </button>
      <Popup popper={childPopperAttributes} arrow={arrowAttributes} />
    </div>
  );
};
