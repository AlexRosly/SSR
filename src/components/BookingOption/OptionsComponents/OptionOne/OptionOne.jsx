import s from './OptionOne.module.scss';
import close from '../../img/Close.png';
import currentDot from '../../img/currentDot.png';
import dot from '../../img/dot.png';
import arrow from '../../img/arrow.png';
import arrowReady from '../../img/arrowReady.png';
import backArrow from '../../img/backArrow.png';
import { setBedroomsNb, setOpenOneBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import {
  chooseBookingHotelIncreaseBedrooms,
  chooseBookingHotelDecreaseBedrooms,
  selectBookingHotelBedrooms,
  resetBookingHotelState,
} from 'features/bookingOptionHotel';
import { useTranslation } from 'react-i18next';

const OptionOne = () => {
  const appDispatch = useAppDispatch();

  const { t } = useTranslation('booking');

  const bedrooms = useAppSelector(selectBookingHotelBedrooms);
  const increase = () => {
    if (bedrooms < 4) appDispatch(chooseBookingHotelIncreaseBedrooms());
  };

  const decrease = () => {
    if (bedrooms > 0) appDispatch(chooseBookingHotelDecreaseBedrooms());
  };
  const closeComponent = () => {
    appDispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };
  const nextComponent = () => {
    if (bedrooms === 1) appDispatch(setOpenOneBlock(2));
    if (bedrooms === 2) appDispatch(setOpenOneBlock(3));
    if (bedrooms === 3) appDispatch(setOpenOneBlock(4));
    if (bedrooms === 4) appDispatch(setOpenOneBlock(5));

    appDispatch(setBedroomsNb(bedrooms));
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
            <div className={s.content_main_txt}>{t('numberOfBedrooms')}</div>
            <div className={s.content_main_counter}>
              <div
                className={bedrooms > 0 ? s.content_main_counter_minus_more : s.content_main_counter_minus}
                onClick={() => decrease()}
              ></div>
              {bedrooms}
              <div className={s.content_main_counter_plus} onClick={() => increase()}></div>
            </div>
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
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img src={dot} alt="dot" />
            </div>
            <div>
              <img
                className={s.content_btn_arrow}
                src={bedrooms === 0 ? arrow : arrowReady}
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
export default OptionOne;
