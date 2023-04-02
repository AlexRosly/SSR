import type { RootState } from 'redux/store';
import { createSelector } from '@reduxjs/toolkit';
import { searchObjectsAdapter, searchObjectsAdapterInitState } from './searchObjectsAdapter';
import { selectSearchObjectsResult } from './searchObjectsApi';
import { selectActiveSearchId } from './searchObjectsSlice';

const selectSearchObjectsData = createSelector(selectSearchObjectsResult, result => result.data);

export const {
  selectEntities: selectSearchObjectsEntities,
  selectById: selectSearchObjectById,
  selectIds: selectSearchObjectsIds,
} = searchObjectsAdapter.getSelectors<RootState>(
  state => selectSearchObjectsData(state) ?? searchObjectsAdapterInitState
);

export const selectActiveSearchObject = createSelector(
  selectSearchObjectsEntities,
  selectActiveSearchId,
  (searchObjectsEntities, activeSearchObjectId) =>
    activeSearchObjectId ? searchObjectsEntities[activeSearchObjectId] : undefined
);
