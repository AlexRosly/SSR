import { createEntityAdapter } from '@reduxjs/toolkit';
import { ObjectPhoto } from 'types';

export const objectPhotosAdapter = createEntityAdapter<ObjectPhoto>({
  selectId: photo => photo._id,
  sortComparer: (a, b) => Number(a?.position) - Number(b?.position),
});

export const objectPhotosAdapterInitState = objectPhotosAdapter.getInitialState();
