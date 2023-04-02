import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import s from './OptionThree.module.scss';
import close from '../../img/Close.png';
import currentDot from '../../img/currentDot.png';
import dot from '../../img/dot.png';
import arrow from '../../img/arrow.png';
import arrowReady from '../../img/arrowReady.png';
import backArrow from '../../img/backArrow.png';
import { setOpenOneBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import {
  chooseRoomServices,
  setBookingHotelStatus,
  selectRoomServicesIds,
  selectBookingHotelStatus,
  selectActiveBookingId,
  selectBookingHotelEditedFields,
  resetBookingHotelState,
  useGetBookingHotelServicesQuery,
  useGetBookingHotelQuery,
} from 'features/bookingOptionHotel';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { selectActiveLang } from 'features/common';
import { makeEntity } from 'utils';

export const ServicesItem = ({ serviceId, toggleBookingActiveService, isActive }) => {
  const lang = useAppSelector(selectActiveLang);

  const { bookingServiceItemType } = useGetBookingHotelServicesQuery(lang, {
    selectFromResult: ({ data }) => {
      const activeServiceItem =
        data?.entities && Object.values(data?.entities).filter(({ langCode }) => langCode === lang)[0]?.services;

      const servicesInitialState = activeServiceItem && Object.freeze(makeEntity(activeServiceItem));

      return {
        bookingServiceItemType: servicesInitialState?.entities?.[serviceId]?.type,
      };
    },
  });

  const onClickToggleBookingActiveService = useCallback(
    () => toggleBookingActiveService(serviceId),
    [serviceId, toggleBookingActiveService]
  );

  if (!bookingServiceItemType) return null;

  const active = isActive ? 'active' : '';

  return (
    <li>
      <button
        className={`${s.selectservice_list_button} ${active && [s.active]}`}
        onClick={onClickToggleBookingActiveService}
        type="button"
      >
        {bookingServiceItemType}
      </button>
    </li>
  );
};

const OptionThree = () => {
  const appDispatch = useAppDispatch();
  const lang = useAppSelector(selectActiveLang);
  const { t } = useTranslation('common');

  const { servicesLeft, servicesRight, isLoadingServices, isSuccess } = useGetBookingHotelServicesQuery(lang, {
    selectFromResult: ({ data, isLoading, isSuccess }) => {
      const activeServiceItem =
        data?.entities && Object.values(data?.entities).filter(({ langCode }) => langCode === lang)[0]?.services;
      const servicesInitialState = activeServiceItem && Object.freeze(makeEntity(activeServiceItem));

      return {
        servicesLeft: servicesInitialState?.ids?.slice(0, servicesInitialState?.ids?.length / 2),
        servicesRight: servicesInitialState?.ids?.slice(servicesInitialState?.ids?.length / 2),
        isLoadingServices: isLoading,
        isSuccess,
      };
    },
  });

  const status = useAppSelector(selectBookingHotelStatus);

  const roomServicesIds = useAppSelector(selectRoomServicesIds);
  const [activeBookingHotelServicesIds, setActiveBookingHotelServicesIds] = useState(new Set(roomServicesIds));
  const activeBookingHotelId = useAppSelector(selectActiveBookingId);

  const { objectActiveBookingServicesIdsFromBackend } = useGetBookingHotelQuery(activeBookingHotelId, {
    selectFromResult: ({ data }) => {
      const idsArray = data?.entities?.[activeBookingHotelId]?.services?.map(({ _id }) => _id);
      return {
        objectActiveBookingServicesIdsFromBackend: idsArray ? new Set(idsArray) : undefined,
      };
    },
    skip: !activeBookingHotelId,
  });

  const objectEditedFields = useAppSelector(selectBookingHotelEditedFields);

  const areServicesEdited = objectEditedFields.includes('services');

  const displayedActiveBookingServicesIds =
    !objectActiveBookingServicesIdsFromBackend || (objectActiveBookingServicesIdsFromBackend && areServicesEdited)
      ? activeBookingHotelServicesIds
      : objectActiveBookingServicesIdsFromBackend;

  const toggleBookingActiveService = useCallback(
    serviceId => {
      const ActiveBookingServicesIdsHaveNoProvidedId = !displayedActiveBookingServicesIds.has(serviceId);

      // toggle functionality
      if (ActiveBookingServicesIdsHaveNoProvidedId) {
        setActiveBookingHotelServicesIds(prev => new Set(prev).add(serviceId));
        appDispatch(chooseRoomServices([...displayedActiveBookingServicesIds, serviceId]));
      } else {
        setActiveBookingHotelServicesIds(prev => {
          const newSetOfServicesIds = new Set(prev);
          newSetOfServicesIds.delete(serviceId);
          return newSetOfServicesIds;
        });

        const newSetOfActiveBookingServicesIds = new Set(displayedActiveBookingServicesIds);
        newSetOfActiveBookingServicesIds.delete(serviceId);

        appDispatch(chooseRoomServices(Array.from(newSetOfActiveBookingServicesIds)));
      }

      // editing functionality
      if (!objectActiveBookingServicesIdsFromBackend || areServicesEdited) return;
      appDispatch(selectBookingHotelEditedFields([...objectEditedFields, 'services']));
    },

    [
      areServicesEdited,
      displayedActiveBookingServicesIds,
      objectEditedFields,
      objectActiveBookingServicesIdsFromBackend,
      appDispatch,
    ]
  );

  useEffect(() => {
    if (displayedActiveBookingServicesIds) {
      if (!status) appDispatch(setBookingHotelStatus(true));
      return;
    }

    if (status) appDispatch(setBookingHotelStatus(false));
  }, [displayedActiveBookingServicesIds, appDispatch, status]);

  const closeComponent = () => {
    appDispatch(setOpenOneBlock(0));
    appDispatch(resetBookingHotelState());
  };
  const lastComponent = () => {
    appDispatch(setOpenOneBlock(10));
  };

  const nextComponent = () => {
    if (roomServicesIds.length !== 0) appDispatch(setOpenOneBlock(7));
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const showSpinner = isLoadingServices && <LoadingSpinner size="20px" />;
  const servicesListLeft =
    isSuccess &&
    servicesLeft?.map(serviceId => (
      <ServicesItem
        key={serviceId}
        serviceId={serviceId}
        toggleBookingActiveService={toggleBookingActiveService}
        isActive={displayedActiveBookingServicesIds.has(serviceId)}
      />
    ));

  const servicesListRight =
    isSuccess &&
    servicesRight?.map(serviceId => (
      <ServicesItem
        key={serviceId}
        serviceId={serviceId}
        toggleBookingActiveService={toggleBookingActiveService}
        isActive={displayedActiveBookingServicesIds.has(serviceId)}
      />
    ));

  return (
    <div className={s.booking_block}>
      <div className={s.booking_block_content_wrap}>
        <div className={s.booking_block_content}>
          <div className={s.booking_block_content_header}>
            <div className={s.content_header_back}>
              <img src={backArrow} onClick={() => lastComponent()} alt="back" />
            </div>
            <div className={s.content_header_close} onClick={closeComponent}>
              <img src={close} alt="close" />
            </div>
          </div>
          <div className={s.booking_block_content_main}>
            <div className={s.content_main_text}>
              <h3>{t('chooseObjectServices')}</h3>
            </div>
            <div className={s.booking_block_content_block}>
              <div className={s.select_booking_service_booking}>
                {showSpinner}
                <ul>{servicesListLeft}</ul>
                <ul className={s.selectservice_list2_booking}>{servicesListRight}</ul>
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
              <img
                className={s.content_btn_arrow}
                src={roomServicesIds.length !== 0 ? arrowReady : arrow}
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
export default OptionThree;
