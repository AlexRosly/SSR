import type { EntityId } from '@reduxjs/toolkit';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'features';
import {
  selectObjectStatus,
  chooseObjectServices,
  setObjectStatus,
  selectObjectActiveServicesIds,
  selectActiveObjectId,
  selectObjectEditedFields,
  setObjectEditedFields,
} from 'features/objects';
import { useGetHotelQuery, useGetObjectServicesQuery } from 'features/hotels';
import { selectActiveLang } from 'features/common';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';

type ServiceItemProps = {
  serviceId: EntityId;
  toggleActiveService: (serviceId: EntityId) => void;
  isActive: boolean;
  liClass: string;
};

const ServiceItem = ({ serviceId, toggleActiveService, isActive, liClass }: ServiceItemProps) => {
  const lang = useAppSelector(selectActiveLang);

  const { objectServiceItemType } = useGetObjectServicesQuery(lang, {
    selectFromResult: ({ data }) => ({
      objectServiceItemType: data?.entities?.[serviceId]?.type,
    }),
  });

  const onClickToggleActiveService = useCallback(
    () => toggleActiveService(serviceId),
    [serviceId, toggleActiveService]
  );

  if (!objectServiceItemType) return null;

  const active = isActive ? 'active' : '';

  return (
    <li className={liClass}>
      <button className={`selectservice-list-button ${active}`} onClick={onClickToggleActiveService} type="button">
        {objectServiceItemType}
      </button>
    </li>
  );
};

export const ObjectAddServices = () => {
  const { t } = useTranslation();

  const lang = useAppSelector(selectActiveLang);

  // 1. Where do I get All services ids from backend?
  const { servicesLeft, servicesRight, isLoadingServices, isSuccess } = useGetObjectServicesQuery(lang, {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      servicesLeft: data?.ids?.slice(0, data?.ids?.length / 2),
      servicesRight: data?.ids?.slice(data?.ids?.length / 2),
      isLoadingServices: isLoading,
      isSuccess,
    }),
  });

  const status = useAppSelector(selectObjectStatus);

  // 2. Where do I get active services ids from Redux?
  const objectActiveServicesIdsRedux = useAppSelector(selectObjectActiveServicesIds);

  // 3. Where do I get local in-component active services ids?
  const [activeServicesIds, setActiveServicesIds] = useState(new Set<EntityId>(objectActiveServicesIdsRedux));

  const activeObjectId = useAppSelector(selectActiveObjectId);

  // 4. Where do I get active services ids from backend?
  const { objectActiveServicesIdsFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => {
      const idsArray = data?.entities?.[activeObjectId]?.services?.map(({ id }) => id);
      return {
        objectActiveServicesIdsFromBackend: idsArray ? new Set<EntityId>(idsArray) : undefined,
      };
    },
    skip: !activeObjectId,
  });

  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const areServicesEdited = objectEditedFields.includes('services');

  const displayedActiveServicesIds =
    !objectActiveServicesIdsFromBackend || (objectActiveServicesIdsFromBackend && areServicesEdited)
      ? activeServicesIds
      : objectActiveServicesIdsFromBackend;

  const appDispatch = useAppDispatch();

  const toggleActiveService = useCallback(
    (serviceId: EntityId) => {
      const inComponentActiveServicesIdsDoesNotHaveProvidedId = !displayedActiveServicesIds.has(serviceId);

      // toggle functionality
      if (inComponentActiveServicesIdsDoesNotHaveProvidedId) {
        setActiveServicesIds(prev => new Set<EntityId>(prev).add(serviceId));
        appDispatch(chooseObjectServices([...displayedActiveServicesIds, serviceId]));
      } else {
        setActiveServicesIds(prev => {
          const newSetOfServicesIds = new Set<EntityId>(prev);
          newSetOfServicesIds.delete(serviceId);
          return newSetOfServicesIds;
        });

        const newSetOfActiveServicesIds = new Set<EntityId>(displayedActiveServicesIds);
        newSetOfActiveServicesIds.delete(serviceId);

        appDispatch(chooseObjectServices(Array.from(newSetOfActiveServicesIds)));
      }

      // editing functionality
      if (!objectActiveServicesIdsFromBackend || areServicesEdited) return;
      appDispatch(setObjectEditedFields([...objectEditedFields, 'services']));
    },

    [areServicesEdited, displayedActiveServicesIds, objectEditedFields, objectActiveServicesIdsFromBackend, appDispatch]
  );

  useEffect(() => {
    if (displayedActiveServicesIds.size) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [displayedActiveServicesIds.size, status, appDispatch]);

  const showSpinner = isLoadingServices && <LoadingSpinner size="20px" />;

  const servicesListLeft =
    isSuccess &&
    servicesLeft?.map(serviceId => (
      <ServiceItem
        key={serviceId}
        serviceId={serviceId}
        liClass="selectservice-list-item"
        toggleActiveService={toggleActiveService}
        isActive={displayedActiveServicesIds.has(serviceId)}
      />
    ));

  const servicesListRight =
    isSuccess &&
    servicesRight?.map(serviceId => (
      <ServiceItem
        key={serviceId}
        serviceId={serviceId}
        liClass="selectservice-list-item right"
        toggleActiveService={toggleActiveService}
        isActive={displayedActiveServicesIds.has(serviceId)}
      />
    ));

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{t('chooseObjectServices')}</h3>

      <div className="selectservice">
        {showSpinner && <div className="selectservice-spinner">{showSpinner}</div>}

        <ul className="selectservice-list">{servicesListLeft}</ul>

        <ul className="selectservice-list2">{servicesListRight}</ul>
      </div>
    </section>
  );
};
