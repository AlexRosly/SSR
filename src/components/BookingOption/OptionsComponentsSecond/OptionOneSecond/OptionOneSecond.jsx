import s from './OptionOneSecond.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import currentDot from '../../img/currentDot.png';
import dot from '../../img/dot.png';
import arrow from '../../img/arrow.png';
import arrowReady from '../../img/arrowReady.png';
import backArrow from '../../img/backArrow.png';
import { setOpenOneBlock, setOpenTwoBlock, setOpenChoosedBlock } from 'redux/BookingOptions/bookingOptions.actions';
import bedForCounter from '../../img//bedForCounter.png';
import { useAppDispatch, useAppSelector } from 'features';
import {
  setBookingHostelIncreaseBedInRoom,
  setBookingHostelDecreaseBedInRoom,
  setBookingHostelIncreaseBedAddSite,
  setBookingHostelDecreaseBedAddSite,
  selectBookingHostelBedInRoom,
  selectBookingHostelBedAddSites,
  resetBookingHostelState,
} from 'features/bookingOptionHostel';
import { setTypeOfObject } from 'features/bookingOptionHotel';

const OptionOneSecond = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');
  const counter = useAppSelector(selectBookingHostelBedInRoom);
  const counterForUs = useAppSelector(selectBookingHostelBedAddSites);

  const increase = () => {
    if (counter < 100) appDispatch(setBookingHostelIncreaseBedInRoom(1));
  };

  const decrease = () => {
    if (counter > 0) appDispatch(setBookingHostelDecreaseBedInRoom(1));
  };

  const increaseForUs = () => {
    if (counterForUs < 100) appDispatch(setBookingHostelIncreaseBedAddSite(1));
  };

  const decreaseForUs = () => {
    if (counterForUs > 0) appDispatch(setBookingHostelDecreaseBedAddSite(1));
  };
  const closeComponent = () => {
    appDispatch(setOpenTwoBlock(0));
    appDispatch(resetBookingHostelState());
  };
  const nextComponent = () => {
    if (counterForUs > 0 && counter > 0) appDispatch(setOpenTwoBlock(5));

    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const openFirstBlock = () => {
    appDispatch(setOpenTwoBlock(0));
    appDispatch(setOpenOneBlock(1));
    appDispatch(setOpenChoosedBlock(1));

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
            <div className={s.content_header_back}>
              <img src={backArrow} alt="back" />
            </div>
            <div className={s.content_header_close} onClick={() => closeComponent()}>
              <img src={close} alt="close" />
            </div>
          </div>
          <div className={s.content_main}>
            <div className={s.content_main_txt}>{t('specify')}</div>
            <div className={s.content_main_counter_wrap}>
              <div className={s.content_main_counter_left}>
                <img src={bedForCounter} className={s.content_main_counter_left_img} alt="bed" />{' '}
                <div>{t('totalNumber')}</div>
              </div>
              <div className={s.content_main_counter}>
                <div
                  className={counter > 0 ? s.content_main_counter_minus_more : s.content_main_counter_minus}
                  onClick={() => decrease()}
                ></div>
                {counter}
                <div className={s.content_main_counter_plus} onClick={() => increase()}></div>
              </div>
            </div>
            <div className={s.content_main_txt} style={{ marginTop: '40px' }}>
              {t('numberOfBeds')}
            </div>
            <div className={s.content_main_counter_wrap}>
              <div className={s.content_main_counter_left}>
                <img src={bedForCounter} className={s.content_main_counter_left_img} alt="bed for us" />
                <div>{t('addToSite')}</div>
              </div>
              <div className={s.content_main_counter}>
                <div
                  className={counterForUs > 0 ? s.content_main_counter_minus_more : s.content_main_counter_minus}
                  onClick={() => decreaseForUs()}
                ></div>
                {counterForUs}
                <div className={s.content_main_counter_plus} onClick={() => increaseForUs()}></div>
              </div>
            </div>
            <button
              className={s.content_main_btn}
              onClick={() => {
                openFirstBlock();
                appDispatch(setTypeOfObject('hotel'));
              }}
            >
              {t('withoutNeighbors')}
            </button>
          </div>

          <div className={s.content_btn}>
            <div>
              <img src={currentDot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img
                className={s.content_btn_arrow}
                src={counterForUs > 0 && counter > 0 ? arrowReady : arrow}
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
export default OptionOneSecond;
