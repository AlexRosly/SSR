import type { EntityId } from '@reduxjs/toolkit';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'features';
import {
  chooseObjectLocation,
  selectActiveObjectId,
  selectObjectActiveLocationId,
  selectObjectEditedFields,
  selectObjectStatus,
  setObjectEditedFields,
  setObjectStatus,
} from 'features/objects';
import { useGetAutocompleteQuery } from 'features/autocomplete';
import { ObjectIcon } from './ObjectIcon';
import { useGetHotelQuery } from 'features/hotels';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';
import { selectActiveLang } from 'features/common';

type LocationItemProps = {
  locationId: EntityId;
  isActive: boolean;
  onClickChooseLocation: (locationId: EntityId) => void;
};

const LocationItem = ({ locationId, isActive, onClickChooseLocation }: LocationItemProps) => {
  const lang = useAppSelector(selectActiveLang);

  const { item } = useGetAutocompleteQuery(
    { search: '', lang },
    { selectFromResult: ({ data }) => ({ item: data?.entities?.[locationId] }) }
  );

  const onClickChooseObjectLocation = useCallback(
    () => onClickChooseLocation(locationId),
    [locationId, onClickChooseLocation]
  );

  if (!item) return null;

  const { country, cityName, stateName } = item;

  const active = isActive ? 'active' : '';

  return (
    <li className="selectlocation__city-item">
      <button className={`selectlocation__city-button ${active}`} onClick={onClickChooseObjectLocation} type="button">
        <span className="selectlocation__city-span">
          <ObjectIcon className="selectlocation__city-icon" iconId="location" />
        </span>

        <p className="selectlocation__city-text">
          <span className="selectlocation__city-city">{cityName}</span>
          <span className="selectlocation__city-region">{stateName}</span>
          <span className="selectlocation__city-country">{country}</span>
        </p>
      </button>
    </li>
  );
};

export const ObjectAddLocation = () => {
  const { t } = useTranslation();

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{t('chooseObjectLocation')}</h3>

      <div className="selectlocation">
        <LocationList />
      </div>

      <p className="object__window-text">
        <ObjectIcon className="object__window-text-icon" iconId="Clock" />
        <span>{t('addingObjectAvgDuration')}</span>
      </p>
    </section>
  );
};

// [x] 1. after click on return button from ObjectAddDocument page -> set isEditing to true
// [x] 2. after click on submit button from AddObjectSubmitForm -> set isEditing to false
// [x] 3. after click on next button from ObjectTabsButtons -> set isEditing to false

const LocationList = () => {
  const { t } = useTranslation();
  const lang = useAppSelector(selectActiveLang);
  const status = useAppSelector(selectObjectStatus);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const activeLocationId = useAppSelector(selectObjectActiveLocationId);
  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const { data: locations, isLoading, isSuccess, isError, error } = useGetAutocompleteQuery({ search: '', lang: lang });

  const { objectLocationIdFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({ objectLocationIdFromBackend: data?.entities?.[activeObjectId]?.location?._id }),
    skip: !activeObjectId,
  });

  const isLocationEdited = objectEditedFields.includes('location');

  const displayedActiveLocationId =
    !objectLocationIdFromBackend || (objectLocationIdFromBackend && isLocationEdited)
      ? activeLocationId
      : objectLocationIdFromBackend;

  const appDispatch = useAppDispatch();

  const onClickChooseLocation = useCallback(
    (locationId: EntityId) => {
      appDispatch(chooseObjectLocation(locationId));

      // for editing functionality
      if (!objectLocationIdFromBackend || objectLocationIdFromBackend === locationId || isLocationEdited) return;
      appDispatch(setObjectEditedFields([...objectEditedFields, 'location']));
    },
    [isLocationEdited, objectEditedFields, objectLocationIdFromBackend, appDispatch]
  );

  useEffect(() => {
    if (displayedActiveLocationId) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [displayedActiveLocationId, status, appDispatch]);

  let content = null;

  if (isLoading) {
    content = <LoadingSpinner size="20px" />;
  } else if (isSuccess) {
    content = (
      <>
        <div className="selectlocation__city-blue" />

        <div className="selectlocation__city-select">
          <ul className="selectlocation__city-list">
            {locations?.ids?.length ? (
              locations.ids.map(locationId => (
                <LocationItem
                  key={locationId}
                  locationId={locationId}
                  isActive={displayedActiveLocationId === locationId}
                  onClickChooseLocation={onClickChooseLocation}
                />
              ))
            ) : (
              <li className="selectlocation__city-item">{t('noQueryResults')}</li>
            )}
          </ul>
        </div>
      </>
    );
  } else if (isError && error) {
    content = <p>{JSON.stringify(error, null, '\t')}</p>;
  }

  return <div className="selectlocation__city">{content}</div>;
};

// const SelectLocationFilter = () => {
//   const filter = useAppSelector(selectObjectLocationFilter);

//   const appDispatch = useAppDispatch();

//   const onChangeSearch = useCallback(
//     (e: ChangeEvent<HTMLInputElement>) => {
//       const { value } = e.target;
//       appDispatch(setObjectLocationFilter(value));
//     },
//     [appDispatch]
//   );

//   const debouncedOnChangeSearch = useMemo(() => debounce(onChangeSearch, 1000), [onChangeSearch]);

//   useEffect(() => {
//     return () => {
//       debouncedOnChangeSearch.cancel();
//     };
//   }, [debouncedOnChangeSearch]);

//   return (
//     <label aria-label="search location">
//       <input type="text" onChange={debouncedOnChangeSearch} defaultValue={filter} />
//     </label>
//   );
// };
