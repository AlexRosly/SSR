import type {
  TBookingVariant,
  ManyHotels,
  OneHotel,
  ManyObjectTypes,
  ObjectType,
  ObjectService,
  ManyObjectServices,
  Hotel,
  ManyObjectPaymentsMethods,
  PaymentMethodLocal,
  PaymentOptionFromDBWithIcon,
} from 'types';
import { createEntityAdapter } from '@reduxjs/toolkit';
import {
  getManyHotels,
  getManyObjectPaymentsMethods,
  getManyObjectServices,
  getManyObjectTypes,
  getOneHotel,
} from 'features/api';

export const bookingVariantsAdapter = createEntityAdapter<TBookingVariant>({
  selectId: bookingVariant => bookingVariant._id,
  sortComparer: (a, b) => b.userVariantId.localeCompare(a.userVariantId),
});

export const bookingVariantsInitState = bookingVariantsAdapter.getInitialState();

const sortByBookingNowAscAndRatingDscAndIdAsc = (a: Hotel, b: Hotel) => {
  if (typeof a._id === 'string' && typeof b._id === 'string') {
    return a._id?.localeCompare(b._id);
  }

  return 0;
};

export const hotelsAdapter = createEntityAdapter<Hotel>({
  selectId: hotel => hotel._id,
  sortComparer: sortByBookingNowAscAndRatingDscAndIdAsc,
});

// additional properties to include in initial state
export const hotelsInitState = hotelsAdapter.getInitialState(/* {sortBy: 'bookingNow' } */);

/** @returns object { ids; entities } saved to RTK Query endpoint via hotelsAdapter.setAll */
export const saveManyHotels = (result?: ManyHotels) => {
  const hotels = getManyHotels(result);

  return hotelsAdapter.setAll(hotelsInitState, hotels);
};

/** @returns object { ids; entities } saved to RTK Query endpoint via hotelsAdapter.upsertOne */
export const saveOneHotel = (result?: OneHotel) => {
  const hotel = getOneHotel(result);
  if (!hotel || typeof hotel !== 'object') return undefined;

  return hotelsAdapter.upsertOne(hotelsInitState, hotel);
};

const objectTypesAdapter = createEntityAdapter<ObjectType>({
  selectId: objectType => objectType._id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const objectTypesAdapterInitState = objectTypesAdapter.getInitialState();

export const saveManyObjectTypes = (result?: ManyObjectTypes) => {
  const objectTypes = getManyObjectTypes(result);
  return objectTypesAdapter.setAll(objectTypesAdapterInitState, objectTypes);
};

const objectServicesAdapter = createEntityAdapter<ObjectService>({
  selectId: objectService => objectService.id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const objectServicesAdapterInitState = objectServicesAdapter.getInitialState();

export const saveManyObjectServices = (result?: ManyObjectServices) => {
  const objectServices = getManyObjectServices(result);
  return objectServicesAdapter.setAll(objectServicesAdapterInitState, objectServices);
};

const objectPaymentsMethodsAdapter = createEntityAdapter<PaymentOptionFromDBWithIcon>({
  selectId: objectType => objectType._id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const objectPaymentsMethodsAdapterInitState = objectPaymentsMethodsAdapter.getInitialState();

const paymentMethodsLocal: PaymentMethodLocal[] = [
  { id: '1', typeInternational: 'cash', icon: 'cash', inDevelopment: false },
  { id: '2', typeInternational: 'Visa', icon: 'JCB', inDevelopment: false },
  { id: '3', typeInternational: 'MasterCard', icon: 'JCB', inDevelopment: false },
  { id: '4', typeInternational: 'UnionPay', icon: 'JCB', inDevelopment: false },
  { id: '5', typeInternational: 'JCB', icon: 'JCB', inDevelopment: false },
  { id: '6', typeInternational: 'American Express', icon: 'JCB', inDevelopment: false },
  { id: '7', typeInternational: 'online payment', icon: 'JCB', inDevelopment: true },
  { id: '8', typeInternational: 'PayPal', icon: 'PayPal', inDevelopment: true },
  { id: '9', typeInternational: 'Bitcoin', icon: 'Bitcoin', inDevelopment: true },
];

export const saveManyObjectPaymentsMethod = (result?: ManyObjectPaymentsMethods) => {
  const objectPaymentsMethods = getManyObjectPaymentsMethods(result);

  const objectPaymentsMethodsWithIcons: PaymentOptionFromDBWithIcon[] = objectPaymentsMethods.map(
    objectPaymentsMethod => {
      const item = paymentMethodsLocal.find(paymentMethodLocal => paymentMethodLocal.id === objectPaymentsMethod.id);

      return {
        ...objectPaymentsMethod,
        icon: item ? item.icon : '',
        inDevelopment: item ? item.inDevelopment : false,
      };
    }
  );

  return objectPaymentsMethodsAdapter.setAll(objectPaymentsMethodsAdapterInitState, objectPaymentsMethodsWithIcons);
};
