import FreeButton from '../FreeButton/FreeButton';
import ArrowFree from 'assets/icons/common/ArrowFree.svg';

import s from './Popup.module.scss';

function Popup(props) {
  return (
    <div className={s.popup} ref={props.childRef}>
      <div className={s.popupInner}>
        <p className={s.title}>Отмена бронирования бесплатно</p>
        <FreeButton className={s.freeButtonActive}>
          <img src={ArrowFree} alt="arrow" className={s.arrow} />
          Free
        </FreeButton>
        <div className={s.arrowDown}></div>
      </div>
    </div>
  );
}

export default Popup;
