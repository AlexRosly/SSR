import { api, endpoints, tag } from 'features/api/api';
import { getBookingHotel, getManyHotelServices } from 'features/api';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const bookingHotelAdapter = createEntityAdapter({
  selectId: newHotel => newHotel._id,
  sortComparer: (a, b) => a.id?.localCompare(b.id),
});
const bookingHotelServicesAdapter = createEntityAdapter({
  selectId: type => type._id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const newHotelInitState = bookingHotelAdapter.getInitialState();
export const bookingHotelServicesAdapterInitState = bookingHotelServicesAdapter.getInitialState();

export const saveOneNewHotel = result => {
  const newHotel = getBookingHotel(result);
  if (!newHotel || typeof newHotel !== 'object') return undefined;
  return bookingHotelAdapter.upsertOne(newHotelInitState, newHotel);
};

export const saveManyHotelServices = result => {
  const bookingHotelServices = getManyHotelServices(result);
  return bookingHotelServicesAdapter.setAll(bookingHotelServicesAdapterInitState, bookingHotelServices);
};

export const bookingHotelApi = api.injectEndpoints({
  endpoints: build => ({
    addNewHotel: build.mutation({
      query: body => ({
        url: endpoints.bookingOptionHotel,
        method: 'POST',
        body,
      }),
      transformResponse: result => saveOneNewHotel(result),
    }),
    getBookingHotel: build.query({
      query: id => `${endpoints.bookingOptionHotel}/${id}`,
      transformResponse: result => saveOneNewHotel(result),
      providesTags: (_, __, id) => tag(id, 'BookingHotel'),
    }),
    getBookingHotelServices: build.query({
      query: lang => `${endpoints.bookingServices}?search=${lang}`,
      transformResponse: result => saveManyHotelServices(result),
      providesTags: (_, __, lang) => tag(lang, 'HotelServices'),
    }),
  }),
});

export const { useAddNewHotelMutation, useGetBookingHotelQuery, useGetBookingHotelServicesQuery } = bookingHotelApi;

// export const selectHotelsResult = bookingHotelsApi.endpoints.getHotels.select();
