import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';
import { hotelsAdapter, hotelsInitState } from './hotelsAdapter';
import { selectHotelsResult } from './hotelsApi';

/** Creates memoized selector
 * returns normalized state object with ids and entities */
const selectHotelsData = createSelector(selectHotelsResult, result => result.data);

/** This will be future active code, when API is ready */
export const {
  selectEntities: selectHotelsEntities,
  selectById: selectHotelById,
  selectIds: selectHotelsIds,
} = hotelsAdapter.getSelectors<RootState>(state => selectHotelsData(state) ?? hotelsInitState);
