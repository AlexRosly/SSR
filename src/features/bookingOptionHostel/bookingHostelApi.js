import { api, endpoints, tag } from 'features/api/api';
import { getBookingHostel, getManyHostelServices } from 'features/api';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const bookingHostelAdapter = createEntityAdapter({
  selectId: hostel => hostel._id,
  sortComparer: (a, b) => a._id?.localCompare(b._id),
});
const bookingHostelServicesAdapter = createEntityAdapter({
  selectId: type => type._id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});
export const hostelInitState = bookingHostelAdapter.getInitialState;
export const bookingHostelServicesAdapterInitState = bookingHostelServicesAdapter.getInitialState();

export const saveOneHostel = result => {
  const hostel = getBookingHostel(result);
  if (!hostel || typeof newHotel !== 'object') return undefined;
  return bookingHostelAdapter.upsertOne(hostelInitState, hostel);
};
export const saveManyHostelServices = result => {
  const bookingHotelServices = getManyHostelServices(result);
  return bookingHostelServicesAdapter.setAll(bookingHostelServicesAdapterInitState, bookingHotelServices);
};
export const bookingHostelApi = api.injectEndpoints({
  endpoints: build => ({
    addNewHostel: build.mutation({
      query: body => ({
        url: endpoints.bookingOptionHostel,
        method: 'POST',
        body,
      }),
      transformResponse: result => saveOneHostel(result),
    }),
    getBookingHostelServices: build.query({
      query: lang => `${endpoints.bookingServices}?search=${lang}`,
      transformResponse: result => saveManyHostelServices(result),
      providesTags: (_, __, lang) => tag(lang, 'HostelServices'),
    }),
  }),
});

export const { useAddNewHostelMutation, useGetBookingHostelServicesQuery } = bookingHostelApi;

// export const selectHotelsResult = bookingHotelsApi.endpoints.getHotels.select();
