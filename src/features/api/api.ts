import type { EntityId } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  MaybeAutocompleteEntity,
  MaybeHotelsEntity,
  MaybeSearchObjectsEntity,
  MaybeTransactionsEntity,
  MaybeObjectTypeEntity,
  MaybeObjectServiceEntity,
  MaybeObjectPaymentsMethodEntity,
} from 'types';

const prod = true;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: prod ? 'https://server-your-price-booking.onrender.com/api/' : 'http://localhost:3000/api',

    //  TODO: 'ADD authorization'
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  keepUnusedDataFor: 120,
  tagTypes: [
    'Language',
    'Country',
    'State',
    'City',
    'District',
    'Hotel',
    'Object',
    'Autocomplete',
    'Transaction',
    'ObjectType',
    'ObjectService',
    'ObjectPaymentMethod',
    'BookingServices',
    'HotelServices',
    'HostelServices',
  ],
  endpoints: () => ({}),
});

export const endpoints = {
  // locationDistrict: '/location-district' as const,
  // locationCity: '/location-city' as const,
  // locationState: '/location-state' as const,
  // countries: '/countries' as const,
  // languages: '/languages' as const,
  hotels: '/hotels' as const,
  transactions: '/transactions' as const,
  objects: '/objects' as const,
  autocomplete: '/autocomplete' as const,
  getObjectTypes: '/get-objects' as const,
  services: '/services' as const,
  paymentsMethod: '/payments-method' as const,
  bookingServices: '/booking-services' as const,
  bookingOptionHotel: '/bookingOption-hotel' as const,
  bookingOptionHostel: '/bookingOption-hostel' as const,
};

export const frozenArr = Object.freeze([]);

export type Result =
  // | MaybeLanguagesEntity
  // | MaybeCountriesEntity
  // | MaybeStatesEntity
  // | MaybeCitiesEntity
  // | MaybeDistrictsEntity
  | MaybeHotelsEntity
  | MaybeSearchObjectsEntity
  | MaybeTransactionsEntity
  | MaybeAutocompleteEntity
  | MaybeObjectTypeEntity
  | MaybeObjectServiceEntity
  | MaybeObjectPaymentsMethodEntity;

export type Type =
  // | 'Language'
  // | 'Country'
  // | 'State'
  // | 'City'
  // | 'District'
  'Hotel' | 'Object' | 'Autocomplete' | 'Transaction' | 'ObjectType' | 'ObjectService' | 'ObjectPaymentMethod';

export type KeysSelect =
  // | 'languages'
  // | 'countries'
  // | 'states'
  // | 'cities'
  // | 'districts'
  'hotels' | 'objects' | 'autocomplete' | 'transactions';

export const tagList = (result: Result, type: Type) => [
  { type, id: 'LIST' },
  ...(result ? result.ids.map(id => ({ type, id })) : []),
];

export const tag = (id: EntityId | 'LIST', type: Type) => [{ type, id }];
