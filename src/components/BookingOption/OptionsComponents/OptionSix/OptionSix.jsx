import s from './OptionSix.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import currentDot from '../../img/currentDot.png';
import backArrow from '../../img/backArrow.png';
import { setBookingNumber, setOpenOneBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';
import {
  setUniqueNumber,
  setTotalSquare,
  chooseBookingHotelSmoking,
  selectUniqueNumber,
  selectTotalSquare,
  // selectBookingHotelSmoking,
  resetBookingHotelState,
  selectTypeOfObject,
  selectBookingHotelBedrooms,
  selectRoomServicesIds,
  selectBookingHotelAnimals,
  selectBookingHotelDescription,
  selectDetailedBedrooms,
  selectBookingHotelSmoking,
  selectBookingPhotosLocalUrls,
  useAddNewHotelMutation,
  setActiveBookingId,
  useGetBookingHotelServicesQuery,
} from 'features/bookingOptionHotel';
import { useMemo } from 'react';

const getLocalFile = async ({ localUrl, position }) => {
  try {
    const localResponse = await fetch(localUrl);

    const imageBlob = await localResponse.blob();

    return new File([imageBlob], position, { type: imageBlob.type });
  } catch (error) {
    console.log(error, 'Error while loading photo from disk');
  }
};

const OptionSix = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation('booking');
  const totalSquare = useAppSelector(selectTotalSquare);
  // const smoking = useAppSelector(selectBookingHotelSmoking);

  const type = useAppSelector(selectTypeOfObject);
  const bedrooms = useAppSelector(selectBookingHotelBedrooms);
  const detailedBedrooms = useAppSelector(selectDetailedBedrooms);
  const roomServicesIds = useAppSelector(selectRoomServicesIds);
  const animals = useAppSelector(selectBookingHotelAnimals);
  const description = useAppSelector(selectBookingHotelDescription);
  const uniqueNumber = useAppSelector(selectUniqueNumber);

  const smoking = useAppSelector(selectBookingHotelSmoking);
  const language = useAppSelector(selectActiveLang);
  const bookingPhotosLocalUrls = useAppSelector(selectBookingPhotosLocalUrls);

  const [addBookingHotel /* { isLoading } */] = useAddNewHotelMutation();

  const { objectServicesEntities } = useGetBookingHotelServicesQuery(language, {
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
    appDispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };
  const lastComponent = () => {
    appDispatch(setOpenOneBlock(8));
  };
  const nextComponent = () => {
    appDispatch(setBookingNumber(uniqueNumber));
    if (uniqueNumber !== '' && totalSquare >= 1) appDispatch(setOpenOneBlock(11));
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const onSubmitAddBookingHotel = async e => {
    const maybeNewPhotos = await Promise.all(bookingPhotosLocalUrls.map(getLocalFile));
    const newPhotosFiles = maybeNewPhotos.reduce((acc, item) => [...acc, ...(item ? [item] : [])], []);

    const formData = new FormData();
    formData.append('type', type);
    formData.append('bedrooms', bedrooms);
    formData.append('description', description);
    formData.append('uniqueNumber', uniqueNumber);
    formData.append('totalSquare', totalSquare);
    formData.append('smoking', smoking);
    newPhotosFiles.forEach(file => {
      formData.append(`image`, file);
    });
    roomServices.forEach(({ id, type }, i) => {
      formData.append(`roomServices[${i}][id]`, id);
      formData.append(`roomServices[${i}][type]`, type);
    });
    Object.keys(animals).forEach(animal => {
      if (animals[animal]) {
        formData.append(`animals[${animal}]`, animals[animal]);
      }
    });
    Object.keys(detailedBedrooms).forEach(bedroom => {
      Object.keys(detailedBedrooms[bedroom]).forEach(bed => {
        if (detailedBedrooms[bedroom][bed] > 0) {
          formData.append(`detailedBedrooms[${[bedroom]}][${bed}]`, detailedBedrooms[bedroom][bed]);
        }
      });
    });

    try {
      const response = await addBookingHotel(formData).unwrap();
      console.log(response);
      if (!response) return;
      const newActiveBookingId = response?.ids?.[0];
      console.log(newActiveBookingId);

      if (!newActiveBookingId) return;

      appDispatch(setActiveBookingId(newActiveBookingId));
    } catch (error) {
      console.log(error);
    }

    appDispatch(resetBookingHotelState());
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
                  value={uniqueNumber}
                  onChange={event => appDispatch(setUniqueNumber(event.target.value))}
                />
              </div>
              {uniqueNumber === '0000' && <div className={s.content_unique_number}>{t('error')}</div>}

              <div className={s.content_main_second_input}>
                <div>{t('totalArea')}</div>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={totalSquare}
                    onChange={event => appDispatch(setTotalSquare(event.target.value))}
                  />
                </div>
              </div>

              <div className={s.content_main_third_input}>
                <div>{t('smoking')}</div>

                <label className={s.checkbox_container}>
                  <input type="checkbox" className={s.checkbox_i_container} />
                  <span
                    className={s.checkmark}
                    // smoking={smoking}
                    onClick={() => appDispatch(chooseBookingHotelSmoking(true))}
                  ></span>
                </label>
              </div>
              <button
                className={s.booking_block_content_ready}
                type="submit"
                onClick={() => {
                  if (uniqueNumber === '0000') {
                    return;
                  }
                  if (uniqueNumber !== '' && totalSquare >= 1) {
                    nextComponent();
                    onSubmitAddBookingHotel();
                    appDispatch(resetBookingHotelState());
                  }
                }}
              >
                {t('ready')}
              </button>
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
export default OptionSix;
