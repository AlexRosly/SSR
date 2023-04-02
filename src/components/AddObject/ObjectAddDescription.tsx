import { useAppDispatch, useAppSelector } from 'features';
import { useGetHotelQuery } from 'features/hotels';
import {
  selectActiveObjectId,
  selectObjectDescription,
  selectObjectEditedFields,
  selectObjectStatus,
  setObjectDescription,
  setObjectEditedFields,
  setObjectStatus,
} from 'features/objects';
import debounce from 'lodash.debounce';
import { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const MIN = 300;
const MAX = 700;

export const ObjectAddDescription = () => {
  const { t } = useTranslation();

  const status = useAppSelector(selectObjectStatus);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const objectDescription = useAppSelector(selectObjectDescription);
  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const isDescriptionEdited = objectEditedFields.includes('description');

  const { objectDescriptionFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({ objectDescriptionFromBackend: data?.entities?.[activeObjectId]?.description }),
    skip: !activeObjectId,
  });

  const displayedObjectDescription =
    !objectDescriptionFromBackend || (objectDescriptionFromBackend && isDescriptionEdited)
      ? objectDescription
      : objectDescriptionFromBackend;

  const appDispatch = useAppDispatch();

  const writeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newDesc = e.target.value.trim();
      if (newDesc === undefined) return;

      appDispatch(setObjectDescription(newDesc));

      // for editing functionality
      if (!objectDescriptionFromBackend || objectDescriptionFromBackend === newDesc || isDescriptionEdited) return;
      appDispatch(setObjectEditedFields([...objectEditedFields, 'description']));
    },
    [objectDescriptionFromBackend, objectEditedFields, isDescriptionEdited, appDispatch]
  );

  const debouncedOnChangeWriteDescription = useMemo(() => debounce(writeDescription, 500), [writeDescription]);
  const descLength = displayedObjectDescription.length;

  useEffect(() => {
    return () => {
      debouncedOnChangeWriteDescription.cancel();
    };
  }, [debouncedOnChangeWriteDescription]);

  useEffect(() => {
    if (MIN <= descLength && descLength <= MAX) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [descLength, status, appDispatch]);

  const descriptionLabel = `${descLength}/${MAX}`;

  const descReq = t('objectDescriptionRequirements', { min: MIN, max: MAX });
  const descPlaceholder = `${descReq} ${t('objectDescriptionRightToTranslate')}`;

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{t('enterObjectDescriptionTitle')}</h3>

      <form className="description">
        <label className="description-label">
          <textarea
            name="displayedObjectDescription"
            className="description-textarea"
            minLength={MIN}
            maxLength={MAX}
            defaultValue={displayedObjectDescription}
            placeholder={descPlaceholder}
            onChange={debouncedOnChangeWriteDescription}
          />
        </label>

        <span className="description-span">{descriptionLabel}</span>

        {displayedObjectDescription && <p className="description-text">{descReq}</p>}
      </form>
    </section>
  );
};
