import type { EntityId } from '@reduxjs/toolkit';
import { api, endpoints, tag, tagList } from 'features/api/api';
import type {
  AddNewHotel,
  LanguageCodeLowercase,
  ManyHotels,
  ManyObjectPaymentsMethods,
  ManyObjectServices,
  ManyObjectTypes,
  MaybeHotelsEntity,
  MaybeObjectPaymentsMethodFromDBWithIconEntity,
  MaybeObjectServiceEntity,
  MaybeObjectTypeEntity,
  OneHotel,
  TEditHotelBeforeVerification,
} from 'types';
import {
  saveManyHotels,
  saveManyObjectPaymentsMethod,
  saveManyObjectServices,
  saveManyObjectTypes,
  saveOneHotel,
} from './hotelsAdapter';

export const hotelsApi = api.injectEndpoints({
  endpoints: build => ({
    getHotels: build.query<MaybeHotelsEntity, void>({
      query: () => endpoints.hotels,
      transformResponse: (result?: ManyHotels) => saveManyHotels(result),
      providesTags: result => tagList(result, 'Hotel'),
    }),
    getHotel: build.query<MaybeHotelsEntity, EntityId>({
      query: id => `${endpoints.hotels}/${id}`,
      transformResponse: (result?: OneHotel) => saveOneHotel(result),
      providesTags: (_, __, id) => tag(id, 'Hotel'),
    }),
    getObjectTypes: build.query<MaybeObjectTypeEntity, LanguageCodeLowercase>({
      query: lang => `${endpoints.getObjectTypes}?search=${lang}`,
      transformResponse: (result?: ManyObjectTypes) => saveManyObjectTypes(result),
      providesTags: (_, __, lang) => tag(lang, 'ObjectType'),
    }),
    getObjectServices: build.query<MaybeObjectServiceEntity, LanguageCodeLowercase>({
      query: lang => `${endpoints.services}?search=${lang}`,
      transformResponse: (result?: ManyObjectServices) => saveManyObjectServices(result),
      providesTags: (_, __, lang) => tag(lang, 'ObjectService'),
    }),
    getObjectPaymentsMethod: build.query<MaybeObjectPaymentsMethodFromDBWithIconEntity, LanguageCodeLowercase>({
      query: lang => `${endpoints.paymentsMethod}?search=${lang}`,
      transformResponse: (result?: ManyObjectPaymentsMethods) => saveManyObjectPaymentsMethod(result),
      providesTags: (_, __, lang) => tag(lang, 'ObjectPaymentMethod'),
    }),
    addHotel: build.mutation<MaybeHotelsEntity, AddNewHotel>({
      query: body => ({
        url: endpoints.hotels,
        method: 'POST',
        body,
      }),

      transformResponse: (result?: OneHotel) => saveOneHotel(result),
      // invalidatesTags: (_, __, arg) => tag(arg._id, 'Hotel'),
    }),
    editHotel: build.mutation<MaybeHotelsEntity, TEditHotelBeforeVerification>({
      query: ({ _id, editObjectFormData }) => ({
        url: `${endpoints.hotels}/${_id}`,
        method: 'PATCH',
        body: editObjectFormData,
      }),

      transformResponse: (result?: OneHotel) => saveOneHotel(result),
      // invalidatesTags: (_, __, arg) => tag(arg._id, 'Hotel'),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useLazyGetHotelsQuery,
  useGetHotelQuery,
  useLazyGetHotelQuery,
  useAddHotelMutation,
  useGetObjectTypesQuery,
  useGetObjectServicesQuery,
  useGetObjectPaymentsMethodQuery,
  useEditHotelMutation,
} = hotelsApi;

export const selectHotelsResult = hotelsApi.endpoints.getHotels.select();
