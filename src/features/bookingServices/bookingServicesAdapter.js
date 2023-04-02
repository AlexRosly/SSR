import { createEntityAdapter } from '@reduxjs/toolkit';
// import { getManyServices } from 'features/api';
export const getManyServices = ({ data: { services } = {} }) => services ?? Object.freeze([]);

export const bookingServicesAdapter = createEntityAdapter({
  selectId: bookingServices => bookingServices._id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});
export const servicesInitStateInitState = bookingServicesAdapter.getInitialState();

export const saveManyBookingServicesResults = result => {
  const services = getManyServices(result);
  return bookingServicesAdapter.setAll(servicesInitStateInitState, services);
};
export const bookingServicesAdapterInitState = bookingServicesAdapter.getInitialState();
