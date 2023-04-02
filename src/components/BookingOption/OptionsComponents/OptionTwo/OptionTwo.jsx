import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './OptionTwo.module.scss';
import close from '../../img/Close.png';
import backArrow from '../../img/backArrow.png';
import { useDispatch } from 'react-redux';
import currentDot from '../../img/currentDot.png';
import dot from '../../img/dot.png';
import arrow from '../../img/arrow.png';
import arrowReady from '../../img/arrowReady.png';
import bedTwoImg from '../../img/bedTwo.png';
import bedOneImg from '../../img/bedOne.png';
import { setBedForOne, setBedForTwo, setOpenOneBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import {
  setDetailedBedroomsDecrease,
  setDetailedBedroomsIncrease,
  selectDetailedBedrooms,
  resetBookingHotelState,
} from 'features/bookingOptionHotel';

const OptionTwo = () => {
  const appDispatch = useAppDispatch();

  const { t } = useTranslation('booking');

  const bed = useAppSelector(selectDetailedBedrooms);
  const bedOne = bed.firstBedroom.singleBed;
  const bedTwo = bed.firstBedroom.doubleBed;
  const roomOne2 = {
    bedroom: 'firstBedroom',
    bed: 'doubleBed',
  };
  const roomOne = {
    bedroom: 'firstBedroom',
    bed: 'singleBed',
  };
  const [borderStyle, setBorderStyle] = useState(true);
  const dispatch = useDispatch();

  const increaseForTwo = () => {
    if (bedTwo + bedOne < 3) appDispatch(setDetailedBedroomsIncrease(roomOne2));
  };
  const decreaseForTwo = () => {
    if (bedTwo > 0) appDispatch(setDetailedBedroomsDecrease(roomOne2));
  };
  const increaseForOne = () => {
    if (bedTwo + bedOne < 3) appDispatch(setDetailedBedroomsIncrease(roomOne));
  };
  const decreaseForOne = () => {
    if (bedOne > 0) appDispatch(setDetailedBedroomsDecrease(roomOne));
  };

  const closeComponent = () => {
    dispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };
  const lastComponent = () => {
    dispatch(setOpenOneBlock(1));
  };
  const nextComponent = () => {
    if (bedOne > 0 || bedTwo > 0) dispatch(setOpenOneBlock(10));
    if (bedOne === 0 && bedTwo === 0) setBorderStyle(false);
    dispatch(setBedForOne(bedOne));
    return dispatch(setBedForTwo(bedTwo));
  };
  return (
    <div className={s.booking_block}>
      <div className={s.booking_block_content_wrap}>
        <div className={s.booking_block_content}>
          <div className={s.booking_block_content_header}>
            <div className={s.content_header_back} onClick={() => lastComponent()}>
              <img src={backArrow} alt="back" />
            </div>
            <div className={s.content_header_close} onClick={closeComponent}>
              <img src={close} alt="close" />
            </div>
          </div>

          <div className={s.content_main}>
            <div className={s.content_main_name}>{t('specify')}</div>
            <div className={s.content_main_blocks_wrap}>
              <div className={s.content_main_block}>
                <div className={s.content_main_block_name}>{t('bedroom')} 1</div>
                <div
                  className={
                    borderStyle || bedOne > 0 || bedTwo > 0
                      ? s.content_main_block_bedrooms
                      : s.content_main_block_bedrooms_false
                  }
                >
                  <div className={s.block_bedrooms_bed}>
                    <div className={s.block_bedrooms_img_wrap}>
                      <div className={s.block_bedrooms_img}>
                        <img src={bedTwoImg} alt="bed for two" />
                      </div>
                      <div className={s.block_bedrooms_img_txt}>{t('doubleBed')}</div>
                    </div>

                    <div className={s.block_bedrooms_bed_counter}>
                      <div
                        className={bedTwo > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForTwo()}
                      ></div>
                      {bedTwo}
                      <div className={s.bed_counter_plus} onClick={() => increaseForTwo()}></div>
                    </div>
                  </div>
                  <div className={s.block_bedrooms_bed}>
                    <div className={s.block_bedrooms_img_wrap}>
                      <div className={s.block_bedrooms_img}>
                        <img src={bedOneImg} alt="bed for one" />
                      </div>
                      <div className={s.block_bedrooms_img_txt}>{t('singleBed')}</div>
                    </div>

                    <div className={s.block_bedrooms_bed_counter}>
                      <div
                        className={bedOne > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForOne()}
                      ></div>
                      {bedOne}
                      <div className={s.bed_counter_plus} onClick={() => increaseForOne()}></div>
                    </div>
                  </div>
                </div>
              </div>
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
                src={bedOne > 0 || bedTwo > 0 ? arrowReady : arrow}
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
export default OptionTwo;
