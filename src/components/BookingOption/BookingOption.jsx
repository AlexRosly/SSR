import s from './BookingOption.module.scss';
import { useTranslation } from 'react-i18next';
import btnPlus from './img/btnPlus.png';

import OptionOne from './OptionsComponents/OptionOne/OptionOne';
import OptionTwo from './OptionsComponents/OptionTwo/OptionTwo';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenOneBlock, setOpenTwoBlock } from 'redux/BookingOptions/bookingOptions.actions';
import OptionTwoRoomsTwo from './OptionsComponents/OptionTwo/OptionTwoRoomsTwo';
import OptionTwoRoomsThree from './OptionsComponents/OptionTwo/OptionTwoRoomsThree';
import OptionTwoRoomsFour from './OptionsComponents/OptionTwo/OptionTwoRoomsFour';
import OptionThree from './OptionsComponents/OptionThree/OptionThree';
import OptionFour from './OptionsComponents/OptionFour/OptionFour';
import OptionFive from './OptionsComponents/OptionFive/OptionFive';
import OptionSix from './OptionsComponents/OptionSix/OptionSix';
import OptionSeven from './OptionsComponents/OptionSeven/OptionSeven';
import OptionEight from './OptionsComponents/OptionEight/OptionEight';
import OptionOneSecond from './OptionsComponentsSecond/OptionOneSecond/OptionOneSecond';
import OptionTwoSecond from './OptionsComponentsSecond/OptionTwoSecond/OptionTwoSecond';
import OptionThreeSecond from './OptionsComponentsSecond/OptionThreeSecond/OptionThreeSecond';
import OptionFourSecond from './OptionsComponentsSecond/OptionFourSecond/OptionFourSecond';
import OptionFiveSecond from './OptionsComponentsSecond/OptionFiveSecond/OptionFiveSecond';
import OptionSixSecond from './OptionsComponentsSecond/OptionSixSecond/OptionSixSecond';
import { setTypeOfObject } from 'features/bookingOptionHotel';
import { setBookingHostelTypeOfObject } from 'features/bookingOptionHostel';
const BookingOption = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const openOne = useSelector(state => state.bookingOptions.openOneBlock);
  const openTwo = useSelector(state => state.bookingOptions.openTwoBlock);

  const OpenBlock = () => {
    switch (openOne) {
      case 1:
        return <OptionOne />;
      case 2:
        return <OptionTwo />;
      case 3:
        return <OptionTwoRoomsTwo />;
      case 4:
        return <OptionTwoRoomsThree />;
      case 5:
        return <OptionTwoRoomsFour />;
      case 6:
        return <OptionThree />;
      case 7:
        return <OptionFour />;
      case 8:
        return <OptionFive />;
      case 9:
        return <OptionSix />;
      case 10:
        return <OptionSeven />;
      case 11:
        return <OptionEight />;

      default:
        <div></div>;
    }
  };
  const TwoBlock = () => {
    switch (openTwo) {
      case 1:
        return <OptionOneSecond />;
      case 2:
        return <OptionTwoSecond />;
      case 3:
        return <OptionThreeSecond />;
      case 4:
        return <OptionFourSecond />;
      case 5:
        return <OptionFiveSecond />;
      case 6:
        return <OptionSixSecond />;

      default:
        <div></div>;
    }
  };

  const CurrentBlock = OpenBlock();
  const CurrentBlockSecond = TwoBlock();

  return (
    <div className={s.booking_block}>
      <div className={s.booking_block_btn}>
        <button
          className={s.booking_btn}
          onClick={() => {
            dispatch(setOpenOneBlock(1));
            dispatch(setTypeOfObject('hotel'));
          }}
        >
          <img src={btnPlus} className={s.booking_btn_img} alt="plus object" />
          {t('addBookingOption')}
        </button>
      </div>
      <div className={s.booking_block_btn} style={{ marginTop: '10px' }}>
        <button
          className={s.booking_btn}
          onClick={() => {
            dispatch(setOpenTwoBlock(1));
            dispatch(setBookingHostelTypeOfObject('hostel'));
          }}
        >
          <img src={btnPlus} className={s.booking_btn_img} alt="plus object" />
          {t('addBookingOption')} 2
        </button>
      </div>
      <div>{CurrentBlock}</div>
      <div>{CurrentBlockSecond}</div>
    </div>
  );
};
export default BookingOption;
