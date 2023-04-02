import s from './OptionTwoSecond.module.scss';
import { useTranslation } from 'react-i18next';
import close from '../../img/Close.png';
import currentDot from '../../img/currentDot.png';
import dot from '../../img/dot.png';
import arrow from '../../img/arrow.png';
import arrowReady from '../../img/arrowReady.png';
import backArrow from '../../img/backArrow.png';
import { ServicesItem } from '../../OptionsComponents/OptionThree/OptionThree';
import { setOpenTwoBlock } from 'redux/BookingOptions/bookingOptions.actions';
import { useAppDispatch, useAppSelector } from 'features';
import {
  chooseBookingHostelRoomServices,
  selectBookingHostelRoomServicesIds,
  selectActiveBookingId,
  resetBookingHostelState,
  setBookingHostelStatus,
  selectBookingHostelStatus,
  selectBookingHostelEditedFields,
} from 'features/bookingOptionHostel';
import { useGetBookingHotelServicesQuery, useGetBookingHotelQuery } from 'features/bookingOptionHotel';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { selectActiveLang } from 'features/common';
import { useCallback, useEffect, useState } from 'react';
import { makeEntity } from 'utils';

const OptionTwoSecond = () => {
  const lang = useAppSelector(selectActiveLang);
  const { t } = useTranslation('common');

  const appDispatch = useAppDispatch();

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
  const status = useAppSelector(selectBookingHostelStatus);

  const roomServicesIds = useAppSelector(selectBookingHostelRoomServicesIds);
  const [activeBookingHostelServicesIds, setActiveBookingHostelServicesIds] = useState(new Set(roomServicesIds));
  const activeBookingHostelId = useAppSelector(selectActiveBookingId);
  const { objectActiveBookingServicesIdsFromBackend } = useGetBookingHotelQuery(activeBookingHostelId, {
    selectFromResult: ({ data }) => {
      const idsArray = data?.entities?.[activeBookingHostelId]?.services?.map(({ _id }) => _id);
      return {
        objectActiveBookingServicesIdsFromBackend: idsArray ? new Set(idsArray) : undefined,
      };
    },
    skip: !activeBookingHostelId,
  });

  const objectEditedFields = useAppSelector(selectBookingHostelEditedFields);

  const areServicesEdited = objectEditedFields.includes('services');

  const displayedActiveBookingServicesIds =
    !objectActiveBookingServicesIdsFromBackend || (objectActiveBookingServicesIdsFromBackend && areServicesEdited)
      ? activeBookingHostelServicesIds
      : objectActiveBookingServicesIdsFromBackend;

  const toggleBookingActiveService = useCallback(
    serviceId => {
      const ActiveBookingServicesIdsHaveNoProvidedId = !displayedActiveBookingServicesIds.has(serviceId);

      // toggle functionality
      if (ActiveBookingServicesIdsHaveNoProvidedId) {
        setActiveBookingHostelServicesIds(prev => new Set(prev).add(serviceId));
        appDispatch(chooseBookingHostelRoomServices([...displayedActiveBookingServicesIds, serviceId]));
      } else {
        setActiveBookingHostelServicesIds(prev => {
          const newSetOfServicesIds = new Set(prev);
          newSetOfServicesIds.delete(serviceId);
          return newSetOfServicesIds;
        });

        const newSetOfActiveBookingServicesIds = new Set(displayedActiveBookingServicesIds);
        newSetOfActiveBookingServicesIds.delete(serviceId);

        appDispatch(chooseBookingHostelRoomServices(Array.from(newSetOfActiveBookingServicesIds)));
      }

      // editing functionality
      if (!objectActiveBookingServicesIdsFromBackend || areServicesEdited) return;
      appDispatch(selectBookingHostelEditedFields([...objectEditedFields, 'services']));
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
      if (!status) appDispatch(setBookingHostelStatus(true));
      return;
    }

    if (status) appDispatch(setBookingHostelStatus(false));
  }, [displayedActiveBookingServicesIds, appDispatch, status]);

  const closeComponent = () => {
    appDispatch(setOpenTwoBlock(0));
    appDispatch(resetBookingHostelState());
  };
  const lastComponent = () => {
    appDispatch(setOpenTwoBlock(5));
  };

  const nextComponent = () => {
    if (roomServicesIds.length !== 0) appDispatch(setOpenTwoBlock(3));
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
export default OptionTwoSecond;
