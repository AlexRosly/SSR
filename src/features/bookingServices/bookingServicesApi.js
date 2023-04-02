import { api, endpoints, tagList } from 'features/api';
import { saveManyBookingServicesResults } from './bookingServicesAdapter';

const bookingServicesApi = api.injectEndpoints({
  endpoints: build => ({
    getBookingServices: build.query({
      query: () => endpoints.bookingServices,
      transformResponse: result => saveManyBookingServicesResults(result),
      providesTags: result => tagList(result, 'BookingServices'),
    }),
  }),
});

export const { useGetBookingServicesQuery, useLazyGetBookingServicesQuery } = bookingServicesApi;
