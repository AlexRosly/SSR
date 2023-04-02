import type { EntityId } from '@reduxjs/toolkit';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'features';
import {
  chooseObjectTypeId,
  selectActiveObjectId,
  selectObjectEditedFields,
  selectObjectStatus,
  selectObjectTypeId,
  setObjectEditedFields,
  setObjectStatus,
} from 'features/objects';
import { ObjectIcon } from './ObjectIcon';
import { useGetHotelQuery, useGetObjectTypesQuery } from 'features/hotels';
import { selectActiveLang } from 'features/common';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { useTranslation } from 'react-i18next';

type ObjectItemProps = {
  objectTypeItemId: EntityId;
  isActive: boolean;
  onClickChooseObjectType: (objectTypeId: EntityId) => void;
};

const makeStarIcons = (stars?: number) =>
  Number(stars)
    ? new Array(Number(stars)).fill(1).map((star, index) => (
        <li key={index}>
          <ObjectIcon className="selecthouse-text-star" iconId="Star" />
        </li>
      ))
    : null;

const ObjectItem = ({ objectTypeItemId, isActive, onClickChooseObjectType }: ObjectItemProps) => {
  const lang = useAppSelector(selectActiveLang);

  const { objectType } = useGetObjectTypesQuery(lang, {
    selectFromResult: ({ data }) => ({
      objectType: data?.entities?.[objectTypeItemId],
    }),
  });

  if (!objectType) return null;

  const { type, stars } = objectType;
  const setActiveObjectTypeId = () => onClickChooseObjectType(objectTypeItemId);

  const starIcons = makeStarIcons(stars);
  const active = isActive ? 'active' : '';

  const showStarsForHotel = stars ? <ul className="selecthouse-text-list">{starIcons}</ul> : null;

  return (
    <li className="selecthouse-item">
      <button className={`selecthouse-button ${active}`} onClick={setActiveObjectTypeId}>
        <ObjectIcon className="selecthouse-icon" iconId="home" />

        <div className="select-button-text">
          <span>{type}</span>
          {showStarsForHotel}
        </div>
      </button>
    </li>
  );
};

export const ObjectAddType = () => {
  const { t } = useTranslation();

  const lang = useAppSelector(selectActiveLang);
  const status = useAppSelector(selectObjectStatus);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const activeObjectTypeId = useAppSelector(selectObjectTypeId);
  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const isTypeEdited = objectEditedFields.includes('type');

  const { objectTypesIds, isLoadingObjectTypes, isSuccess } = useGetObjectTypesQuery(lang, {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      objectTypesIds: data?.ids,
      isLoadingObjectTypes: isLoading,
      isSuccess,
    }),
  });

  const { objectTypeIdFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({ objectTypeIdFromBackend: data?.entities?.[activeObjectId]?.type?._id }),
    skip: !activeObjectId,
  });

  const displayedActiveObjectTypeId =
    !objectTypeIdFromBackend || (objectTypeIdFromBackend && isTypeEdited)
      ? activeObjectTypeId
      : objectTypeIdFromBackend;

  const appDispatch = useAppDispatch();

  const onClickChooseObjectType = useCallback(
    (objectTypeId: EntityId) => {
      appDispatch(chooseObjectTypeId(objectTypeId));

      // for editing functionality
      if (!objectTypeIdFromBackend || objectTypeIdFromBackend === objectTypeId || isTypeEdited) return;
      appDispatch(setObjectEditedFields([...objectEditedFields, 'type']));
    },
    [isTypeEdited, objectEditedFields, objectTypeIdFromBackend, appDispatch]
  );

  useEffect(() => {
    if (displayedActiveObjectTypeId) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [displayedActiveObjectTypeId, status, appDispatch]);

  const objectTypesList =
    isSuccess &&
    objectTypesIds?.length &&
    objectTypesIds.map(objectTypeItemId => (
      <ObjectItem
        key={objectTypeItemId}
        objectTypeItemId={objectTypeItemId}
        isActive={displayedActiveObjectTypeId === objectTypeItemId}
        onClickChooseObjectType={onClickChooseObjectType}
      />
    ));

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{t('chooseObjectTypeIcon')}</h3>

      <div className="selecthouse">
        <ul className="selecthouse-list">{objectTypesList}</ul>

        {isLoadingObjectTypes && <LoadingSpinner size="32px" />}
      </div>
    </section>
  );
};
