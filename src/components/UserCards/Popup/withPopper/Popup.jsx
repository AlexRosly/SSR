import FreeButton from '../../FreeButton/FreeButton';
import ArrowFree from 'assets/icons/common/ArrowFree.svg';

import s from './Popup.module.scss';
import { Arrow, PopperContainer } from './component';

export const Popup = ({ popper, arrow }) => {
  return (
    <PopperContainer popper={popper}>
      <div className={s.popupInner}>
        <p className={s.title}>Отмена бронирования бесплатно</p>
        <FreeButton className={s.freeButtonActive}>
          <img src={ArrowFree} alt="arrow" className={s.arrow} />
          Free
        </FreeButton>
        <Arrow attributes={arrow} />
      </div>
    </PopperContainer>
  );
};
