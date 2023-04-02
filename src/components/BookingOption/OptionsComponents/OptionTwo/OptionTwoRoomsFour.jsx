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
import {
  setBedForOne,
  setBedForOneRoomFour,
  setBedForOneRoomThree,
  setBedForOneRoomTwo,
  setBedForTwo,
  setBedForTwoRoomFour,
  setBedForTwoRoomThree,
  setBedForTwoRoomTwo,
  setOpenOneBlock,
} from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import {
  setDetailedBedroomsDecrease,
  setDetailedBedroomsIncrease,
  selectDetailedBedrooms,
  resetBookingHotelState,
} from 'features/bookingOptionHotel';

const OptionTwoRoomsFour = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');

  const bed = useAppSelector(selectDetailedBedrooms);
  const bedOne = bed.firstBedroom.singleBed;
  const bedTwo = bed.firstBedroom.doubleBed;
  const bedOneRoomTwo = bed.secondBedroom.singleBed;
  const bedTwoRoomTwo = bed.secondBedroom.doubleBed;
  const bedOneRoomThree = bed.thirdBedroom.singleBed;
  const bedTwoRoomThree = bed.thirdBedroom.doubleBed;
  const bedOneRoomFour = bed.fourthBedroom.singleBed;
  const bedTwoRoomFour = bed.fourthBedroom.doubleBed;

  const roomOne2 = {
    bedroom: 'firstBedroom',
    bed: 'doubleBed',
  };
  const roomOne = {
    bedroom: 'firstBedroom',
    bed: 'singleBed',
  };
  const roomTwo2 = {
    bedroom: 'secondBedroom',
    bed: 'doubleBed',
  };
  const roomTwo = {
    bedroom: 'secondBedroom',
    bed: 'singleBed',
  };
  const roomThree2 = {
    bedroom: 'thirdBedroom',
    bed: 'doubleBed',
  };
  const roomThree = {
    bedroom: 'thirdBedroom',
    bed: 'singleBed',
  };
  const roomFour2 = {
    bedroom: 'fourthBedroom',
    bed: 'doubleBed',
  };
  const roomFour = {
    bedroom: 'fourthBedroom',
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

  const increaseForTwoRoomTwo = () => {
    if (bedTwoRoomTwo + bedOneRoomTwo < 3) appDispatch(setDetailedBedroomsIncrease(roomTwo2));
  };

  const decreaseForTwoRoomTwo = () => {
    if (bedTwoRoomTwo > 0) appDispatch(setDetailedBedroomsDecrease(roomTwo2));
  };
  const increaseForOneRoomTwo = () => {
    if (bedTwoRoomTwo + bedOneRoomTwo < 3) appDispatch(setDetailedBedroomsIncrease(roomTwo));
  };

  const decreaseForOneRoomTwo = () => {
    if (bedOneRoomTwo > 0) appDispatch(setDetailedBedroomsDecrease(roomTwo));
  };

  const increaseForTwoRoomThree = () => {
    if (bedTwoRoomThree + bedOneRoomThree < 3) appDispatch(setDetailedBedroomsIncrease(roomThree2));
  };

  const decreaseForTwoRoomThree = () => {
    if (bedTwoRoomThree > 0) appDispatch(setDetailedBedroomsDecrease(roomThree2));
  };
  const increaseForOneRoomThree = () => {
    if (bedTwoRoomThree + bedOneRoomThree < 3) appDispatch(setDetailedBedroomsIncrease(roomThree));
  };

  const decreaseForOneRoomThree = () => {
    if (bedOneRoomThree > 0) appDispatch(setDetailedBedroomsDecrease(roomThree));
  };

  const increaseForTwoRoomFour = () => {
    if (bedTwoRoomFour + bedOneRoomFour < 3) appDispatch(setDetailedBedroomsIncrease(roomFour2));
  };

  const decreaseForTwoRoomFour = () => {
    if (bedTwoRoomFour > 0) appDispatch(setDetailedBedroomsDecrease(roomFour2));
  };
  const increaseForOneRoomFour = () => {
    if (bedTwoRoomFour + bedOneRoomFour < 3) appDispatch(setDetailedBedroomsIncrease(roomFour));
  };

  const decreaseForOneRoomFour = () => {
    if (bedOneRoomFour > 0) appDispatch(setDetailedBedroomsDecrease(roomFour));
  };

  const closeComponent = () => {
    dispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };
  const lastComponent = () => {
    dispatch(setOpenOneBlock(1));
  };
  const nextComponent = () => {
    if (
      (bedOne > 0 || bedTwo > 0) &&
      (bedOneRoomTwo > 0 || bedTwoRoomTwo > 0) &&
      (bedOneRoomThree > 0 || bedTwoRoomThree > 0) &&
      (bedOneRoomFour > 0 || bedTwoRoomFour > 0)
    )
      dispatch(setOpenOneBlock(10));
    if (
      (bedOne === 0 && bedTwo === 0) ||
      (bedOneRoomTwo === 0 && bedTwoRoomTwo === 0) ||
      (bedOneRoomThree === 0 && bedTwoRoomThree === 0) ||
      (bedOneRoomFour === 0 && bedTwoRoomFour === 0)
    )
      setBorderStyle(false);
    dispatch(setBedForOneRoomFour(bedOneRoomFour));
    dispatch(setBedForTwoRoomFour(bedTwoRoomFour));
    dispatch(setBedForOneRoomThree(bedOneRoomThree));
    dispatch(setBedForTwoRoomThree(bedTwoRoomThree));
    dispatch(setBedForOneRoomTwo(bedOneRoomTwo));
    dispatch(setBedForTwoRoomTwo(bedTwoRoomTwo));
    dispatch(setBedForOne(bedOne));
    dispatch(setBedForTwo(bedTwo));
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
              <div className={s.content_main_block}>
                <div className={s.content_main_block_name}>{t('bedroom')} 2</div>
                <div
                  className={
                    borderStyle || bedOneRoomTwo > 0 || bedTwoRoomTwo > 0
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
                        className={bedTwoRoomTwo > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForTwoRoomTwo()}
                      ></div>
                      {bedTwoRoomTwo}
                      <div className={s.bed_counter_plus} onClick={() => increaseForTwoRoomTwo()}></div>
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
                        className={bedOneRoomTwo > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForOneRoomTwo()}
                      ></div>
                      {bedOneRoomTwo}
                      <div className={s.bed_counter_plus} onClick={() => increaseForOneRoomTwo()}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.content_main_block}>
                <div className={s.content_main_block_name}>{t('bedroom')} 3</div>
                <div
                  className={
                    borderStyle || bedOneRoomThree > 0 || bedTwoRoomThree > 0
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
                        className={bedTwoRoomThree > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForTwoRoomThree()}
                      ></div>
                      {bedTwoRoomThree}
                      <div className={s.bed_counter_plus} onClick={() => increaseForTwoRoomThree()}></div>
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
                        className={bedOneRoomThree > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForOneRoomThree()}
                      ></div>
                      {bedOneRoomThree}
                      <div className={s.bed_counter_plus} onClick={() => increaseForOneRoomThree()}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.content_main_block}>
                <div className={s.content_main_block_name}>{t('bedroom')} 4</div>
                <div
                  className={
                    borderStyle || bedOneRoomFour > 0 || bedTwoRoomFour > 0
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
                        className={bedTwoRoomFour > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForTwoRoomFour()}
                      ></div>
                      {bedTwoRoomFour}
                      <div className={s.bed_counter_plus} onClick={() => increaseForTwoRoomFour()}></div>
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
                        className={bedOneRoomFour > 0 ? s.bed_counter_minus_more : s.bed_counter_minus}
                        onClick={() => decreaseForOneRoomFour()}
                      ></div>
                      {bedOneRoomFour}
                      <div className={s.bed_counter_plus} onClick={() => increaseForOneRoomFour()}></div>
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
                src={
                  (bedOne > 0 || bedTwo > 0) &&
                  (bedOneRoomTwo > 0 || bedTwoRoomTwo > 0) &&
                  (bedOneRoomThree > 0 || bedTwoRoomThree > 0) &&
                  (bedOneRoomFour > 0 || bedTwoRoomFour > 0)
                    ? arrowReady
                    : arrow
                }
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
export default OptionTwoRoomsFour;
