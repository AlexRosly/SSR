import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useMemo, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useAppDispatch, useAppSelector } from 'features';
import {
  selectActiveObjectId,
  selectObjectEditedFields,
  selectObjectName,
  selectObjectStatus,
  setObjectEditedFields,
  setObjectName,
  setObjectStatus,
} from 'features/objects';
import toast from 'react-hot-toast';
import { useObjectNextTab } from './ObjectTabsNavigation';
import { useGetHotelQuery } from 'features/hotels';
import { useTranslation } from 'react-i18next';

const MAX = 23;

export const ObjectAddName = () => {
  const { t } = useTranslation();

  const status = useAppSelector(selectObjectStatus);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const objectNameRedux = useAppSelector(selectObjectName);
  const objectEditedFields = useAppSelector(selectObjectEditedFields);
  const [, openNextTab] = useObjectNextTab();

  const isNameEdited = objectEditedFields.includes('objectName');

  const { objectNameFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({ objectNameFromBackend: data?.entities?.[activeObjectId]?.objectName }),
    skip: !activeObjectId,
  });

  const displayedObjectName =
    !objectNameFromBackend || (objectNameFromBackend && isNameEdited) ? objectNameRedux : objectNameFromBackend;

  const appDispatch = useAppDispatch();

  const nameLength = displayedObjectName?.length;

  const onChangeSetName = useMemo(
    () => (e: ChangeEvent<HTMLInputElement>) => {
      const newObjectName = e.target.value.trim();

      if (newObjectName === undefined) return;

      appDispatch(setObjectName(newObjectName));

      // for editing functionality
      if (!objectNameFromBackend || objectNameFromBackend === newObjectName || isNameEdited) return;

      appDispatch(setObjectEditedFields([...objectEditedFields, 'objectName']));
    },
    [objectEditedFields, objectNameFromBackend, isNameEdited, appDispatch]
  );

  const debouncedOnChangeSetName = useMemo(() => debounce(onChangeSetName, 300), [onChangeSetName]);

  useEffect(() => {
    return () => {
      debouncedOnChangeSetName.cancel();
    };
  }, [debouncedOnChangeSetName]);

  useEffect(() => {
    if (displayedObjectName && displayedObjectName.length <= MAX) {
      if (!status) appDispatch(setObjectStatus(true));
      return;
    }

    if (status) appDispatch(setObjectStatus(false));
  }, [displayedObjectName, status, appDispatch]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      const newObjectName = formData.get('objectName')?.toString().trim();
      if (!newObjectName) {
        toast('Please fill object name');
        return;
      }

      openNextTab();
    },
    [openNextTab]
  );

  const nameLengthClassName = `selectname-length ${nameLength >= MAX ? 'active' : ''}`;
  const nameLengthLabel = `${nameLength}/${MAX}`;

  const title = t('nameOfTheProperty');
  const enterObjectName = t('enterObjectName');

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{title}</h3>

      <div className="selectname">
        <form className="selectname-form" onSubmit={onSubmit}>
          <label className="selectname-label">
            {nameLength ? <p className="selectname-label-text">{enterObjectName}</p> : null}
            <input
              type="text"
              name="objectName"
              className="selectname-input"
              placeholder={enterObjectName}
              maxLength={MAX}
              defaultValue={displayedObjectName}
              onChange={debouncedOnChangeSetName}
            />
          </label>

          <span className={nameLengthClassName}>{nameLengthLabel}</span>
        </form>

        {/* <p className="selectname-text">уже зарегистрированное в вашем аккаунте</p> */}
      </div>
    </section>
  );
};
