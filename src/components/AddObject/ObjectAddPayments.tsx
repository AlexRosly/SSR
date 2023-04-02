import type { EntityId } from '@reduxjs/toolkit';
import { useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'features';
import {
  chooseObjectPayments,
  selectActiveObjectId,
  selectObjectActivePaymentsIds,
  selectObjectEditedFields,
  selectObjectStatus,
  setObjectEditedFields,
  setObjectStatus,
} from 'features/objects';
import { ObjectIcon } from './ObjectIcon';
import { useGetHotelQuery, useGetObjectPaymentsMethodQuery } from 'features/hotels';
import { selectActiveLang } from 'features/common';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';

type PaymentMethodItemProps = {
  paymentMethodId: EntityId;
  isActive: boolean;
  toggleActivePayment: (paymentId: EntityId) => void;
};

const PaymentMethodItem = ({ paymentMethodId, isActive, toggleActivePayment }: PaymentMethodItemProps) => {
  const { t } = useTranslation();

  const lang = useAppSelector(selectActiveLang);

  const { objectPaymentsMethodItem } = useGetObjectPaymentsMethodQuery(lang, {
    selectFromResult: ({ data }) => ({ objectPaymentsMethodItem: data?.entities?.[paymentMethodId] }),
  });

  const onClickToggleActivePayment = useCallback(
    () => toggleActivePayment(paymentMethodId),
    [paymentMethodId, toggleActivePayment]
  );

  if (!objectPaymentsMethodItem) return null;

  const { type, inDevelopment, icon, id } = objectPaymentsMethodItem;

  const active = isActive ? ' active' : '';
  const isFirstPaymentOption = id === '1' ? ' first' : '';

  const iconClassName = `selectpay-icon${active}`;
  const buttonClassName = `selectpay-button${active}${isFirstPaymentOption}`;

  const onClick = inDevelopment || isFirstPaymentOption ? undefined : onClickToggleActivePayment;

  const paymentMethodInDevelopmentPopup = inDevelopment ? (
    <span className="selectpay-button-develop">
      <span>{t('paymentMethodInDevelopment')}</span>

      <ObjectIcon className="selectpay-span-icon" iconId="strel" />
    </span>
  ) : null;

  return (
    <li className="selectpay-item">
      <button className={buttonClassName} onClick={onClick} disabled={inDevelopment} type="button">
        <ObjectIcon className={iconClassName} iconId={icon} />

        <p>{type}</p>

        {paymentMethodInDevelopmentPopup}
      </button>
    </li>
  );
};

export const ObjectAddPayments = () => {
  const { t } = useTranslation();

  const lang = useAppSelector(selectActiveLang);

  // 1. Where do i get All paymentMethods ids from backend?
  const { objectPaymentsMethods, isLoadingObjectPaymentsMethod, isSuccess } = useGetObjectPaymentsMethodQuery(lang, {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      objectPaymentsMethods: data,
      isLoadingObjectPaymentsMethod: isLoading,
      isSuccess,
    }),
  });

  const status = useAppSelector(selectObjectStatus);

  // 2. Where do i get active paymentMethod ids from Redux?
  const objectActivePaymentsIdsRedux = useAppSelector(selectObjectActivePaymentsIds);

  // 3. Where do i get local in-component active paymentMethod ids?
  const [activePaymentsIds, setActivePaymentsIds] = useState(new Set<EntityId>(objectActivePaymentsIdsRedux));

  const activeObjectId = useAppSelector(selectActiveObjectId);

  // 4. Where do I get active payment methods ids from backend?
  const { objectActivePaymentMethodsIdsFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => {
      const idsArray = data?.entities?.[activeObjectId]?.payments?.map(({ _id }) => _id);
      return {
        objectActivePaymentMethodsIdsFromBackend: idsArray ? new Set<EntityId>(idsArray) : undefined,
      };
    },
    skip: !activeObjectId,
  });

  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const arePaymentsEdited = objectEditedFields.includes('payments');

  const displayedActivePaymentMethodsIds =
    !objectActivePaymentMethodsIdsFromBackend || (objectActivePaymentMethodsIdsFromBackend && arePaymentsEdited)
      ? activePaymentsIds
      : objectActivePaymentMethodsIdsFromBackend;

  const appDispatch = useAppDispatch();

  const toggleActivePayment = useCallback(
    (paymentOptionId: EntityId) => {
      // toggle functionality
      if (!displayedActivePaymentMethodsIds.has(paymentOptionId)) {
        setActivePaymentsIds(prev => new Set<EntityId>(prev).add(paymentOptionId));
        appDispatch(chooseObjectPayments([...displayedActivePaymentMethodsIds, paymentOptionId]));
      } else {
        setActivePaymentsIds(prev => {
          const newSetOfPaymentMethodsIds = new Set<EntityId>(prev);
          newSetOfPaymentMethodsIds.delete(paymentOptionId);
          return newSetOfPaymentMethodsIds;
        });

        const newSetOfActiveIds = new Set<EntityId>(displayedActivePaymentMethodsIds);
        newSetOfActiveIds.delete(paymentOptionId);
        appDispatch(chooseObjectPayments(Array.from(newSetOfActiveIds)));
      }

      // editing functionality
      if (!objectActivePaymentMethodsIdsFromBackend || arePaymentsEdited) return;
      appDispatch(setObjectEditedFields([...objectEditedFields, 'payments']));
    },
    [
      arePaymentsEdited,
      displayedActivePaymentMethodsIds,
      objectEditedFields,
      objectActivePaymentMethodsIdsFromBackend,
      appDispatch,
    ]
  );

  useEffect(() => {
    if (!objectPaymentsMethods?.entities) return;

    const cashMethodId = Object.values(objectPaymentsMethods.entities).find(val => val?.id === '1')?._id;
    if (!cashMethodId || displayedActivePaymentMethodsIds.has(cashMethodId)) return;

    setActivePaymentsIds(prev => new Set<EntityId>(prev).add(cashMethodId));
    appDispatch(chooseObjectPayments([...displayedActivePaymentMethodsIds, cashMethodId]));
  }, [displayedActivePaymentMethodsIds, objectPaymentsMethods?.entities, appDispatch]);

  useEffect(() => {
    if (displayedActivePaymentMethodsIds.size) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [displayedActivePaymentMethodsIds.size, status, appDispatch]);

  const showSpinner = isLoadingObjectPaymentsMethod && <LoadingSpinner size="20px" />;

  const paymentsMethods =
    isSuccess &&
    objectPaymentsMethods?.ids?.map(paymentMethodId => (
      <PaymentMethodItem
        key={paymentMethodId}
        paymentMethodId={paymentMethodId}
        toggleActivePayment={toggleActivePayment}
        isActive={displayedActivePaymentMethodsIds.has(paymentMethodId)}
      />
    ));

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{t('chooseObjectPaymentMethods')}</h3>

      <div className="selectpay">
        <ul className="selectpay-list">{paymentsMethods}</ul>
        {showSpinner}
      </div>
    </section>
  );
};
