import s from './OptionFourSecond.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import currentDot from '../../img/currentDot.png';
import backArrow from '../../img/backArrow.png';
import { setBookingNumberAgent, setOpenTwoBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import {
  setBookingHostelUniqueNumber,
  selectBookingHostelUniqueNumber,
  resetBookingHostelState,
  useAddNewHostelMutation,
  selectBookingHostelPhotosLocalUrls,
  useGetBookingHostelServicesQuery,
  setBookingHostelActiveBookingId,
  selectBookingHostelTypeOfObject,
  selectBookingHostelBedInRoom,
  selectBookingHostelBedAddSites,
  selectBookingHostelRoomServicesIds,
  selectBookingHostelDescription,
} from 'features/bookingOptionHostel';
import { useMemo } from 'react';
import { selectActiveLang } from 'features/common';

const getLocalFile = async ({ localUrl, position }) => {
  try {
    const localResponse = await fetch(localUrl);

    const imageBlob = await localResponse.blob();

    return new File([imageBlob], position, { type: imageBlob.type });
  } catch (error) {
    console.log(error, 'Error while loading photo from disk');
  }
};
const OptionFourSecond = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');

  const bookingName = useAppSelector(selectBookingHostelUniqueNumber);
  const [addBookingHostel /* { isLoading } */] = useAddNewHostelMutation();

  const language = useAppSelector(selectActiveLang);
  const typeOfObject = useAppSelector(selectBookingHostelTypeOfObject);
  const bedInRoom = useAppSelector(selectBookingHostelBedInRoom);
  const roomServicesIds = useAppSelector(selectBookingHostelRoomServicesIds);
  const bedAddSite = useAppSelector(selectBookingHostelBedAddSites);
  const description = useAppSelector(selectBookingHostelDescription);
  const uniqueNumber = useAppSelector(selectBookingHostelUniqueNumber);
  const bookingPhotosLocalUrls = useAppSelector(selectBookingHostelPhotosLocalUrls);
  const { objectServicesEntities } = useGetBookingHostelServicesQuery(language, {
    selectFromResult: ({ data }) => ({ objectServicesEntities: data?.entities }),
  });

  const roomServices = useMemo(
    () =>
      roomServicesIds.reduce((acc, serviceId) => {
        const serviceItem = objectServicesEntities?.[serviceId];
        return serviceItem ? [...acc, serviceItem] : acc;
      }, []),
    [roomServicesIds, objectServicesEntities]
  );

  const closeComponent = () => {
    appDispatch(setOpenTwoBlock(0));
    appDispatch(resetBookingHostelState());
  };
  const lastComponent = () => {
    appDispatch(setOpenTwoBlock(3));
  };
  const nextComponent = () => {
    appDispatch(setBookingNumberAgent(bookingName));
    if (bookingName !== '') appDispatch(setOpenTwoBlock(6));
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const onSubmitAddBookingHostel = async e => {
    const maybeNewPhotos = await Promise.all(bookingPhotosLocalUrls.map(getLocalFile));
    const newPhotosFiles = maybeNewPhotos.reduce((acc, item) => [...acc, ...(item ? [item] : [])], []);

    const formData = new FormData();
    formData.append('typeOfObject', typeOfObject);
    formData.append('uniqueNumber', uniqueNumber);
    formData.append('description', description);
    newPhotosFiles.forEach(file => {
      formData.append(`image`, file);
    });
    formData.append('bedInRoom', bedInRoom);
    roomServices.forEach(({ id, type }, i) => {
      formData.append(`roomServices[${i}][id]`, id);
      formData.append(`roomServices[${i}][type]`, type);
    });
    formData.append('bedAddSite', bedAddSite);

    try {
      const response = await addBookingHostel(formData).unwrap();
      console.log(response);
      if (!response) return;
      const newActiveBookingId = response?.ids?.[0];
      console.log(newActiveBookingId);

      if (!newActiveBookingId) return;

      appDispatch(setBookingHostelActiveBookingId(newActiveBookingId));
    } catch (error) {
      console.log(error);
    }

    appDispatch(resetBookingHostelState());
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
            <div className={s.content_main_text}>
              {t('uniqueNumber')}
              <br /> {t('uniqueName')}
              <br /> {t('symbols')}
            </div>
            <div className={s.content_main_input_wrap}>
              <div className={s.content_main_first_input}>
                <input
                  type="text"
                  maxLength={5}
                  onChange={event => appDispatch(setBookingHostelUniqueNumber(event.target.value))}
                />
              </div>

              {uniqueNumber === '0000' && <div className={s.content_unique_number}>{t('error')}</div>}
            </div>
          </div>
          <div className={s.booking_block_content_ready}>
            <button
              className={s.booking_block_button}
              type="submit"
              onClick={() => {
                if (uniqueNumber === '0000') {
                  return;
                }
                if (uniqueNumber) {
                  nextComponent();
                  onSubmitAddBookingHostel();
                  appDispatch(resetBookingHostelState());
                }
              }}
            >
              {t('ready')}
            </button>
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
              <img src={currentDot} alt="dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OptionFourSecond;
