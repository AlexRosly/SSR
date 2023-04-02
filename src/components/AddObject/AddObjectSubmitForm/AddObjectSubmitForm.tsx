import type { FormEvent } from 'react';
import type {
  Hotel,
  ObjectService,
  PaymentOptionFromDB,
  TAddNewHotelCheck,
  TEditHotelBeforeVerification,
  TEditHotelBeforeVerificationCheck,
} from 'types';

import { useMemo, useCallback } from 'react';
import toast from 'react-hot-toast';
import { HOTELIERS_SUPPORT_TELEGRAM } from 'navigation/CONSTANTS';
import { useTranslation } from 'react-i18next';
import { wait } from 'utils';
import { useAppDispatch, useAppSelector } from 'features';
import { selectActiveLang } from 'features/common';
import { useGetAutocompleteQuery } from 'features/autocomplete';
import {
  useAddHotelMutation,
  useEditHotelMutation,
  useGetObjectPaymentsMethodQuery,
  useGetObjectServicesQuery,
  useGetObjectTypesQuery,
  useLazyGetHotelQuery,
} from 'features/hotels';
import {
  chooseObjectLocation,
  chooseObjectPayments,
  chooseObjectServices,
  chooseObjectTypeId,
  selectActiveObjectId,
  selectObjectActiveLocationId,
  selectObjectActivePaymentsIds,
  selectObjectActiveServicesIds,
  selectObjectAddress,
  selectObjectDescription,
  selectObjectEditedFields,
  selectObjectName,
  selectObjectPhotosLocalUrls,
  selectObjectPhotosFilesOrUrls,
  selectObjectStatus,
  selectObjectTime,
  selectObjectTypeId,
  setActiveObjectId,
  setIsEditingExistingObjectBeforeVerification,
  setObjectAddress,
  setObjectDescription,
  setObjectEditedFields,
  setObjectName,
  setObjectPhotos,
  setObjectTime,
} from 'features/objects';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const getLocalFile = async ({ localUrl, position }: { position: string; localUrl: string }) => {
  try {
    const localResponse = await fetch(localUrl);

    const imageBlob = await localResponse.blob();

    return new File([imageBlob], position, { type: imageBlob.type });
  } catch (error) {
    toast.error('Error while loading photo from disk');
  }
};

export const AddObjectSubmitForm = () => {
  const { t } = useTranslation();

  const appDispatch = useAppDispatch();

  const language = useAppSelector(selectActiveLang);
  const activeObjectId = useAppSelector(selectActiveObjectId);
  const status = useAppSelector(selectObjectStatus);

  const objectActiveLocationId = useAppSelector(selectObjectActiveLocationId);
  const objectTypeId = useAppSelector(selectObjectTypeId);

  const objectName = useAppSelector(selectObjectName);
  const address = useAppSelector(selectObjectAddress);
  const description = useAppSelector(selectObjectDescription);
  const objectPhotosLocalUrls = useAppSelector(selectObjectPhotosLocalUrls);
  const photos = useAppSelector(selectObjectPhotosFilesOrUrls);
  const time = useAppSelector(selectObjectTime);

  const objectActiveServicesIds = useAppSelector(selectObjectActiveServicesIds);
  const activePaymentsIds = useAppSelector(selectObjectActivePaymentsIds);

  const objectEditedFields = useAppSelector(selectObjectEditedFields);

  const isEdited = Boolean(objectEditedFields.length);

  const { location } = useGetAutocompleteQuery(
    { search: '', lang: language },
    { selectFromResult: ({ data }) => ({ location: data?.entities?.[objectActiveLocationId] }) }
  );

  const { type } = useGetObjectTypesQuery(language, {
    selectFromResult: ({ data }) => ({ type: data?.entities?.[objectTypeId] }),
  });

  const { objectServicesEntities } = useGetObjectServicesQuery(language, {
    selectFromResult: ({ data }) => ({ objectServicesEntities: data?.entities }),
  });

  const { objectPaymentOptionsEntities } = useGetObjectPaymentsMethodQuery(language, {
    selectFromResult: ({ data }) => ({ objectPaymentOptionsEntities: data?.entities }),
  });

  const [addHotel, { isLoading: isAddingObject }] = useAddHotelMutation();

  const [editObject, { isSavingEdits }] = useEditHotelMutation({
    selectFromResult: ({ data, isLoading }) => ({
      editedObject: data?.entities?.[activeObjectId],
      isSavingEdits: isLoading,
    }),
  });

  const [refetchHotel] = useLazyGetHotelQuery();

  const services = useMemo(
    () =>
      objectActiveServicesIds.reduce<ObjectService[]>((acc, serviceId) => {
        const serviceItem = objectServicesEntities?.[serviceId];
        return serviceItem ? [...acc, serviceItem] : acc;
      }, []),
    [objectActiveServicesIds, objectServicesEntities]
  );

  const payments = useMemo(
    () =>
      activePaymentsIds.reduce<PaymentOptionFromDB[]>((acc, paymentOptionId) => {
        const paymentItem = objectPaymentOptionsEntities?.[paymentOptionId];
        if (!paymentItem) return acc;

        const { _id, id, type, typeInternational } = paymentItem;

        return [...acc, { _id, id, type, typeInternational }];
      }, []),

    [activePaymentsIds, objectPaymentOptionsEntities]
  );

  const accept = [
    language,
    location?.cityName,
    type?.type,
    objectName,
    address?.city,
    description,
    time?.checkin,
    time?.checkout,
    photos.length,
    services?.[0]?.type,
    payments?.[0]?.type,
  ].every(Boolean);

  const saveToReduxAfterObjectRefetched = useCallback(
    (hotelFromBackend: Hotel) => {
      const {
        location: locationFromBackend,
        type: objectTypeFromBackend,
        objectName: objectNameFromBackend,
        address: addressFromBackend,
        description: descriptionFromBackend,
        photos: objectPhotosFromBackend,
        time: checkinoutFromBackend,
        services: servicesFromBackend,
        payments: paymentMethodsFromBackend,
      } = hotelFromBackend;

      const activeServicesIdsFromBackend = servicesFromBackend.map(({ id }) => id);
      const activePaymentMethodsIdsFromBackend = paymentMethodsFromBackend.map(({ _id }) => _id);

      appDispatch(chooseObjectLocation(locationFromBackend._id));
      appDispatch(chooseObjectTypeId(objectTypeFromBackend._id));
      appDispatch(setObjectName(objectNameFromBackend));
      appDispatch(setObjectAddress(addressFromBackend));
      appDispatch(setObjectDescription(descriptionFromBackend));
      appDispatch(setObjectPhotos(objectPhotosFromBackend));
      appDispatch(setObjectTime(checkinoutFromBackend));
      appDispatch(chooseObjectServices(activeServicesIdsFromBackend));
      appDispatch(chooseObjectPayments(activePaymentMethodsIdsFromBackend));
    },
    [appDispatch]
  );

  const onSubmitAddObject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!status) return;

    const maybeNewPhotos = await Promise.all(objectPhotosLocalUrls.map(getLocalFile));

    const newPhotosFiles = maybeNewPhotos.reduce<File[]>((acc, item) => [...acc, ...(item ? [item] : [])], []);

    if (!accept || !location || !type || !newPhotosFiles.length) {
      toast(
        'Please fill object information: language, location, type, name, address, description, time, photos, services, paymentMethod'
      );
      return;
    }

    const newObject: TAddNewHotelCheck = {
      language,
      objectName,
      description,

      location,
      type,
      address,
      image: newPhotosFiles,
      time,
      services,
      payments,
    };

    if (!Object.values(newObject).every(Boolean)) {
      toast(
        'Please fill object information: language, location, type, name, address, description, time, photos, services, paymentMethod'
      );
      return;
    }

    const formData = new FormData();
    formData.append('language', language);
    formData.append('type[_id]', `${type._id}`);
    formData.append('type[type]', type.type);
    if (type.stars) {
      formData.append('type[stars]', `${type.stars}`);
    }
    formData.append('objectName', objectName);
    formData.append('address[country]', address.country);
    formData.append('address[state]', address.state);
    formData.append('address[city]', address.city);
    formData.append('address[street]', address.street);
    formData.append('address[house]', address.house);
    if (address.apartment) {
      formData.append('address[apartment]', address.apartment);
    }
    formData.append('address[zipCode]', address.zipCode);
    formData.append('address[phone]', address.phone);
    formData.append('address[email]', address.email);
    formData.append('description', description);

    // new photo should have key 'image' with File as value
    newPhotosFiles.forEach(file => {
      formData.append('image', file);
    });

    formData.append('time[checkin]', time.checkin);
    formData.append('time[checkout]', time.checkout);

    services.forEach(({ id, type }, i) => {
      formData.append(`services[${i}][id]`, id);
      formData.append(`services[${i}][type]`, type);
    });

    payments.forEach(({ id, type, _id }, i) => {
      formData.append(`payments[${i}][id]`, id);
      formData.append(`payments[${i}][type]`, type);
      formData.append(`payments[${i}][_id]`, `${_id}`);
    });

    formData.append('location[_id]', location._id);
    formData.append('location[country]', location.country);
    formData.append('location[stateName]', location.stateName);
    formData.append('location[cityName]', location.cityName);

    try {
      const response = await addHotel(formData).unwrap();
      if (!response) return;

      const newActiveObjectId = response?.ids?.[0];
      if (!newActiveObjectId) return;

      const createdHotelFromBackend = response?.entities?.[newActiveObjectId];
      if (!createdHotelFromBackend) return;

      appDispatch(setActiveObjectId(newActiveObjectId));
      saveToReduxAfterObjectRefetched(createdHotelFromBackend);

      toast.success(`Object ${objectName} added`);
    } catch (error) {
      if (error && typeof error === 'object') {
        try {
          toast.error(`Error while adding object: ${JSON.stringify(error, null, 2)}`, { duration: 7000 });
        } catch (error) {
          //
        }
      }
    }
  };

  const onSubmitEditObject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!status) return;

    const maybeUpdatedPhotos = await Promise.all(objectPhotosLocalUrls.map(getLocalFile));

    const updatedPhotosFiles = maybeUpdatedPhotos.reduce<File[]>((acc, item) => [...acc, ...(item ? [item] : [])], []);

    if (!accept || !location || !type) {
      toast('Please fill object information');
      return;
    }

    const objectInfoAllFields: TEditHotelBeforeVerificationCheck = {
      _id: activeObjectId,
      objectName,
      description,
      language,

      location,
      type,
      address,
      photos: updatedPhotosFiles,
      time,
      services,
      payments,
    };

    const changedFields = objectEditedFields.reduce<TEditHotelBeforeVerificationCheck>(
      (acc, item) => ({
        ...acc,
        ...(objectInfoAllFields?.[item] ? { [item]: objectInfoAllFields[item] } : {}),
      }),
      { _id: activeObjectId, language }
    );

    const editObjectFormData = new FormData();

    /*
3. patch додати 1 ключ - з file name робити position у об'єкти в масиві photos (GET | POST | PATCH )
 і об'єкти в масиві image (POST | PATCH)
 position - порядковий номер фотки - з фронта прийде .
    */

    Object.keys(changedFields).forEach(key => {
      switch (key) {
        case 'objectName': {
          editObjectFormData.append('objectName', objectName);
          break;
        }

        case 'description': {
          editObjectFormData.append('description', description);
          break;
        }

        case 'language': {
          editObjectFormData.append('language', language);
          break;
        }

        case 'location': {
          editObjectFormData.append('location[_id]', location._id);
          editObjectFormData.append('location[country]', location.country);
          editObjectFormData.append('location[stateName]', location.stateName);
          editObjectFormData.append('location[cityName]', location.cityName);
          break;
        }

        case 'type': {
          editObjectFormData.append('type[_id]', `${type._id}`);
          editObjectFormData.append('type[type]', type.type);
          if (type.stars) {
            editObjectFormData.append('type[stars]', `${type.stars}`);
          }
          break;
        }

        case 'address': {
          editObjectFormData.append('address[country]', address.country);
          editObjectFormData.append('address[state]', address.state);
          editObjectFormData.append('address[city]', address.city);
          editObjectFormData.append('address[street]', address.street);
          editObjectFormData.append('address[house]', address.house);
          if (address.apartment) {
            editObjectFormData.append('address[apartment]', address.apartment);
          }
          editObjectFormData.append('address[zipCode]', address.zipCode);
          editObjectFormData.append('address[phone]', address.phone);
          editObjectFormData.append('address[email]', address.email);

          break;
        }

        case 'photos': {
          updatedPhotosFiles.forEach(file => {
            // new photo should have key 'image' with File as value
            editObjectFormData.append('image', file);
          });

          break;
        }

        case 'time': {
          editObjectFormData.append('time[checkin]', time.checkin);
          editObjectFormData.append('time[checkout]', time.checkout);
          break;
        }

        case 'services': {
          services.forEach(({ id, type }, i) => {
            editObjectFormData.append(`services[${i}][id]`, id);
            editObjectFormData.append(`services[${i}][type]`, type);
          });
          break;
        }

        case 'payments': {
          payments.forEach(({ id, type, _id }, i) => {
            editObjectFormData.append(`payments[${i}][id]`, id);
            editObjectFormData.append(`payments[${i}][type]`, type);
            editObjectFormData.append(`payments[${i}][_id]`, `${_id}`);
          });
          break;
        }

        default:
          break;
      }
    });

    const editFormData: TEditHotelBeforeVerification = { _id: activeObjectId, editObjectFormData };

    try {
      const updatedObjectName = (await editObject(editFormData).unwrap())?.entities?.[activeObjectId]?.objectName;

      if (!updatedObjectName) return;
      appDispatch(setIsEditingExistingObjectBeforeVerification(false));
      appDispatch(setObjectEditedFields([]));

      await wait(1500);
      const refetchedObject = (await refetchHotel(activeObjectId).unwrap())?.entities?.[activeObjectId];

      if (!refetchedObject) return;

      const refetchedObjectName = refetchedObject?.objectName;

      const isNameDifferent = updatedObjectName !== refetchedObjectName;

      if (isNameDifferent) {
        toast.error(
          `Updated object name "${updatedObjectName}" differs from refetched name "${updatedObjectName}". Please check the object in your account. Or visit Hoteliers support chat: ${HOTELIERS_SUPPORT_TELEGRAM}.`,
          { duration: 7000 }
        );
        return;
      }

      saveToReduxAfterObjectRefetched(refetchedObject);

      toast.success(`Object ${updatedObjectName} updated`);
    } catch (error: any) {
      if (error?.data?.message && typeof error.data.message === 'string') {
        toast.error(`${error.data.message}`);
      }
    }
  };

  const showSpinner = isAddingObject || isSavingEdits;

  const isAddObjectDisabled = !accept || (activeObjectId && !isEdited) || showSpinner ? true : false;

  const submitButtonLabel = isEdited ? t('submitEditObject') : t('submitAddObject');

  const onSubmitAddOrEditObject =
    activeObjectId || (activeObjectId && isEdited) ? onSubmitEditObject : onSubmitAddObject;

  return (
    <form className="selecthouse-listDirection-form" onSubmit={onSubmitAddOrEditObject}>
      <button className="selectlocation-submit" type="submit" disabled={isAddObjectDisabled}>
        <span>{submitButtonLabel}</span>
        {showSpinner && <LoadingSpinner size="20px" />}
      </button>
    </form>
  );
};
