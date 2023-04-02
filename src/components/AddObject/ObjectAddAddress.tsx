import type { ChangeEvent, FormEvent } from 'react';
import type { EntityId } from '@reduxjs/toolkit';
import type { AddObjectAddressType, AddressInputName, Ids } from 'types';
import { useState, useCallback, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useAppDispatch, useAppSelector } from 'features';
import {
  selectActiveObjectId,
  selectObjectAddress,
  selectObjectEditedFields,
  selectObjectStatus,
  setObjectAddress,
  setObjectEditedFields,
  setObjectStatus,
} from 'features/objects';
import { useObjectNextTab } from './ObjectTabsNavigation';
import { useGetHotelQuery } from 'features/hotels';
import { useTranslation } from 'react-i18next';

type InputType = 'text' | 'email' | 'tel';

type Placeholder =
  | 'country'
  | 'provinceOrState'
  | 'settlement'
  | 'street'
  | 'house'
  | 'apartment'
  | 'notRequired'
  | 'zipCode'
  | 'phone'
  | 'email';

type AddressInput = {
  id: EntityId;
  type?: InputType;
  name: AddressInputName;
  placeholder: Placeholder;
  required?: boolean;
};

type AddressInputs = {
  ids: Ids;
  entities: Record<EntityId, AddressInput>;
};

const initialState: AddressInputs = {
  ids: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
  entities: {
    '0': { id: '0', name: 'country', placeholder: 'country' },
    '1': { id: '1', name: 'state', placeholder: 'provinceOrState' },
    '2': { id: '2', name: 'city', placeholder: 'settlement' },
    '3': { id: '3', name: 'street', placeholder: 'street' },
    '4': { id: '4', name: 'house', placeholder: 'house' },
    '5': { id: '5', name: 'apartment', placeholder: 'apartment', required: false },
    '6': { id: '6', name: 'zipCode', placeholder: 'zipCode' },
    '7': { id: '7', name: 'phone', placeholder: 'phone', type: 'tel' },
    '8': { id: '8', name: 'email', placeholder: 'email', type: 'email' },
  },
};

const inputsIds1 = initialState.ids.slice(0, 2);
const inputsIds2 = initialState.ids.slice(2);

type AddressInputProps = {
  addressInputId: EntityId;
  labelClassName?: string;
  inputClassName?: string;
  type?: InputType;
  name: AddressInputName;
  defaultValue?: string;
  placeholder: string;
  required?: boolean;
  debouncedOnChangeSaveObjectAddressInfo: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddressInputItem = ({
  labelClassName = 'selectaddress-form-label',
  inputClassName = 'selectaddress-form-input',
  type = 'text',
  name,
  defaultValue = '',
  placeholder,
  required = true,
  debouncedOnChangeSaveObjectAddressInfo,
}: AddressInputProps) => {
  return (
    <label className={labelClassName}>
      <input
        name={name}
        type={type}
        className={inputClassName}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={debouncedOnChangeSaveObjectAddressInfo}
        required={required}
      />
      {defaultValue && <p className="selectaddress-form-country-text active">{placeholder}</p>}
    </label>
  );
};

export const ObjectAddAddress = () => {
  const { t } = useTranslation();

  const status = useAppSelector(selectObjectStatus);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const objectAddressRedux = useAppSelector(selectObjectAddress);
  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const [, openNextTab] = useObjectNextTab();

  const { objectAddressFromBackend } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({ objectAddressFromBackend: data?.entities?.[activeObjectId]?.address }),
    skip: !activeObjectId,
  });

  const isAddressEdited = objectEditedFields.includes('address');

  const displayedObjectAddress =
    !objectAddressFromBackend || (objectAddressFromBackend && isAddressEdited)
      ? objectAddressRedux
      : objectAddressFromBackend;

  const appDispatch = useAppDispatch();

  const [inputs] = useState(initialState);

  const onChangeSaveObjectAddressInfo = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { form } = e.target;
      if (!form) return;

      const newAddress: AddObjectAddressType = {
        country: '',
        state: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
        zipCode: '',
        phone: '',
        email: '',
        ...Object.fromEntries(new FormData(form)),
      };

      appDispatch(setObjectAddress(newAddress));

      // for editing functionality
      if (!objectAddressFromBackend || isAddressEdited) return;

      const { country, state, city, street, house, apartment, zipCode, phone, email } = objectAddressFromBackend;

      const {
        country: newCountry,
        state: newArea,
        city: newCity,
        street: newStreet,
        house: newHouse,
        apartment: newApartment,
        zipCode: newZipCode,
        phone: newPhone,
        email: newEmail,
      } = newAddress;

      const isSameAddress =
        newCountry === country &&
        newArea === state &&
        newCity === city &&
        newStreet === street &&
        newHouse === house &&
        newApartment === apartment &&
        newZipCode === zipCode &&
        newPhone === phone &&
        newEmail === email;

      if (isSameAddress) return;
      appDispatch(setObjectEditedFields([...objectEditedFields, 'address']));
    },
    [isAddressEdited, objectAddressFromBackend, objectEditedFields, appDispatch]
  );

  const debouncedOnChangeSaveObjectAddressInfo = useMemo(
    () => debounce(onChangeSaveObjectAddressInfo, 200),
    [onChangeSaveObjectAddressInfo]
  );

  useEffect(() => {
    return () => {
      debouncedOnChangeSaveObjectAddressInfo.cancel();
    };
  }, [debouncedOnChangeSaveObjectAddressInfo]);

  useEffect(() => {
    const shouldFillInfo = Object.values({ ...displayedObjectAddress, apartment: ' ' }).some(string => !string); // apartment is optional

    if (shouldFillInfo) {
      if (status) appDispatch(setObjectStatus(false));
      return;
    }

    if (!status) appDispatch(setObjectStatus(true));
  }, [displayedObjectAddress, status, appDispatch]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!status) return;

      openNextTab();
    },
    [openNextTab, status]
  );

  return (
    <section className="selectlocation-section">
      <h3 className="selectlocation-text">{t('objectPostalAddress')}</h3>

      <div className="selectaddress">
        <form className="selectaddress-form" onSubmit={onSubmit}>
          <div className="selectaddress-form-country">
            {inputsIds1.map(addressInputId => {
              const { type, name, placeholder, required } = inputs.entities[addressInputId];

              const displayedValue = displayedObjectAddress?.[name];

              return (
                <AddressInputItem
                  key={addressInputId}
                  addressInputId={addressInputId}
                  labelClassName="selectaddress-form-country-label"
                  inputClassName="selectaddress-form-country-input"
                  type={type}
                  name={name}
                  defaultValue={displayedValue}
                  placeholder={t(placeholder)}
                  debouncedOnChangeSaveObjectAddressInfo={debouncedOnChangeSaveObjectAddressInfo}
                  required={required}
                />
              );
            })}
          </div>

          {inputsIds2.map(addressInputId => {
            const { type, name, placeholder, required } = inputs.entities[addressInputId];

            const displayedValue = displayedObjectAddress?.[name];

            const placeholder2 =
              placeholder === 'apartment' ? t('notRequired', { what: t('apartment') }) : t(placeholder);

            return (
              <AddressInputItem
                key={addressInputId}
                addressInputId={addressInputId}
                type={type}
                name={name}
                defaultValue={displayedValue}
                placeholder={placeholder2}
                debouncedOnChangeSaveObjectAddressInfo={debouncedOnChangeSaveObjectAddressInfo}
                required={required}
              />
            );
          })}

          <button type="submit" className="visually-hidden">
            Save address to Redux store by pressing enter
          </button>
        </form>
      </div>
    </section>
  );
};
