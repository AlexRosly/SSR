import s from './OptionEight.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import btnPlus from '../../img/btnPlus.png';
import { useSelector } from 'react-redux';
import { setOpenOneBlock, setOpenTwoBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { resetBookingHotelState, setTypeOfObject } from 'features/bookingOptionHotel';
import { useAppDispatch } from 'features';

const OptionEight = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');

  const bookingNbr = useSelector(state => state.bookingOptions.bookingNumber);
  const choosedOpt = useSelector(state => state.bookingOptions.openChoosedBlock);

  const closeComponent = () => {
    appDispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };

  return (
    <div className={s.booking_block}>
      <div className={s.booking_block_content_wrap}>
        <div className={s.booking_block_content}>
          <div className={s.booking_block_content_header}>
            <div className={s.content_header_close} onClick={() => closeComponent()}>
              <img src={close} alt="close" />
            </div>
          </div>
          <div className={s.booking_block_content_main}>
            <div className={s.content_main_text}>
              {t('added')} <br /> {t('variant')}
            </div>
            <div className={s.content_main_input_wrap}>
              <div className={s.content_main_input}>
                <div className={s.content_main_number}>{bookingNbr}</div>
                <div className={s.content_main_inObj}>
                  <div className={s.content_main_inObj_first}>{t('inObj')}</div>
                  <div className={s.content_main_inObj_second}>Hilton NYC</div>
                </div>
              </div>
              <div className={s.content_main_options}>
                <div className={s.content_main_options_header}>{t('verifying')}</div>
                <div className={s.content_main_options_main}>
                  <ul>
                    <li>{t('settingPrice')}</li>
                    <li>{t('bookingSale')}</li>
                    <li>{t('list')}</li>
                    <li>{t('offers')}</li>
                  </ul>
                </div>
              </div>
              <div className={s.content_main_btn}>
                {choosedOpt !== 1 ? (
                  <button
                    onClick={() => {
                      appDispatch(setOpenOneBlock(1));
                      appDispatch(setTypeOfObject('hotel'));
                    }}
                  >
                    <img src={btnPlus} alt="new component" />
                    {t('addMore')}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      appDispatch(setOpenTwoBlock(1));
                      appDispatch(setTypeOfObject('hotel'));
                    }}
                  >
                    <img src={btnPlus} alt="new component" />
                    {t('addMore')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OptionEight;
