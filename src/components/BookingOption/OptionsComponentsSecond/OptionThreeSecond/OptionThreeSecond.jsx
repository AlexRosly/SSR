import s from './OptionThreeSecond.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import currentDot from '../../img/currentDot.png';
import dot from '../../img/dot.png';
import arrow from '../../img/arrow.png';
import arrowReady from '../../img/arrowReady.png';
import backArrow from '../../img/backArrow.png';
import { setOpenTwoBlock } from 'redux/BookingOptions/bookingOptions.actions';

import { useAppDispatch, useAppSelector } from 'features';
import {
  setBookingHostelDescription,
  selectBookingHostelDescription,
  resetBookingHostelState,
} from 'features/bookingOptionHostel';

const OptionThreeSecond = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');

  const textDescription = useAppSelector(selectBookingHostelDescription);

  const closeComponent = () => {
    appDispatch(setOpenTwoBlock(0));
    appDispatch(resetBookingHostelState());
  };
  const lastComponent = () => {
    appDispatch(setOpenTwoBlock(2));
  };
  const nextComponent = () => {
    if (textDescription.length > 300) appDispatch(setOpenTwoBlock(4));
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={s.booking_block}>
      <div className={s.booking_block_content_wrap}>
        <div className={s.booking_block_content}>
          <div className={s.booking_block_content_header}>
            <div className={s.content_header_back} onClick={() => lastComponent()}>
              <img src={backArrow} alt="back" />
            </div>
            <div className={s.content_header_close} onClick={() => closeComponent()}>
              <img src={close} alt="close" />
            </div>
          </div>
          <div className={s.booking_block_content_main}>
            <div className={s.content_main_text}>{t('description')}</div>
            <div className={s.content_main_input_wrap}>
              <textarea
                defaultValue={textDescription}
                maxLength={500}
                placeholder={t('descLength')}
                onChange={event => appDispatch(setBookingHostelDescription(event.target.value))}
              />
            </div>
          </div>

          <div className={s.content_btn}>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>

            <div>
              <img
                className={s.content_btn_arrow}
                src={textDescription.length > 300 ? arrowReady : arrow}
                onClick={() => nextComponent()}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OptionThreeSecond;
