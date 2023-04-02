import { createEntityAdapter } from '@reduxjs/toolkit';

export const bookingPhotosAdapter = createEntityAdapter({
  selectId: photo => photo.id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

export const bookingPhotosAdapterInitState = bookingPhotosAdapter.getInitialState();
