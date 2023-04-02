import { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'features';
import {
  selectActiveObjectId,
  selectObjectEditedFields,
  selectObjectStatus,
  selectObjectTime,
  setObjectEditedFields,
  setObjectStatus,
  setObjectTime,
} from 'features/objects';
import { ObjectIcon } from './ObjectIcon';
import debounce from 'lodash.debounce';
import { useGetHotelQuery } from 'features/hotels';
import { useTranslation } from 'react-i18next';

export const ObjectAddCheckinTime = () => {
  const { t } = useTranslation();

  const status = useAppSelector(selectObjectStatus);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const objectTime = useAppSelector(selectObjectTime);
  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const { objectCheckinOutTimeFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({ objectCheckinOutTimeFromBackend: data?.entities?.[activeObjectId]?.time }),
    skip: !activeObjectId,
  });

  const isObjectTimeEdited = objectEditedFields.includes('time');

  const displayedObjectTime =
    !objectCheckinOutTimeFromBackend || (objectCheckinOutTimeFromBackend && isObjectTimeEdited)
      ? objectTime
      : objectCheckinOutTimeFromBackend;

  const { checkin, checkout } = displayedObjectTime;

  const appDispatch = useAppDispatch();

  const setAvailableBookingTime = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { form } = e.target;
      if (!form) return;
      const newCheckInOut = { checkin: '', checkout: '', ...Object.fromEntries(new FormData(form)) };

      appDispatch(setObjectTime(newCheckInOut));

      // for editing functionality
      if (!objectCheckinOutTimeFromBackend || isObjectTimeEdited) return;
      appDispatch(setObjectEditedFields([...objectEditedFields, 'time']));
    },
    [objectEditedFields, isObjectTimeEdited, objectCheckinOutTimeFromBackend, appDispatch]
  );

  const debouncedOnChangeSetAvailableBookingTime = useMemo(
    () => debounce(setAvailableBookingTime, 300),
    [setAvailableBookingTime]
  );

  useEffect(() => {
    return () => {
      debouncedOnChangeSetAvailableBookingTime.cancel();
    };
  }, [debouncedOnChangeSetAvailableBookingTime]);

  useEffect(() => {
    if (checkin && checkout) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [checkin, checkout, status, appDispatch]);

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{t('chooseObjectCheckinOutTime')}</h3>

      <form className="checktime">
        <div className="checktime__checkin">
          <ObjectIcon className="checktime-checktime-icon" iconId="checkin" />

          <label className="checktime__label">
            <span className="checktime-checktime-text">{t('checkIn')}</span>
            <input
              type="time"
              name="checkin"
              className="checktime-input"
              maxLength={2}
              defaultValue={checkin}
              onChange={debouncedOnChangeSetAvailableBookingTime}
            />
          </label>
        </div>

        <div className="checktime__checkout">
          <ObjectIcon className="checktime-checkout-icon" iconId="checkout" />

          <label className="checktime__label">
            <span className="checktime-checkout-text">{t('checkOut')}</span>
            <input
              type="time"
              name="checkout"
              className="checktime-input"
              maxLength={2}
              defaultValue={checkout}
              onChange={debouncedOnChangeSetAvailableBookingTime}
            />
          </label>
        </div>
      </form>
    </section>
  );
};
