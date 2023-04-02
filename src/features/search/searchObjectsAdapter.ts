import type { ManySearchObjects, OneSearchObject, ObjectLocation } from 'types';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { getManySearchObjects, getOneSearchObject } from 'features/api';

export const searchObjectsAdapter = createEntityAdapter<ObjectLocation>({
  selectId: searchObject => searchObject._id,
  sortComparer: (a, b) => {
    const byCountry = a.country?.localeCompare(b.country);
    if (byCountry) {
      return byCountry;
    }

    const byState = a.state?.localeCompare(b.state);
    if (byState) {
      return byState;
    }

    const byCity = a.city?.localeCompare(b.city);
    if (byCity) {
      return byCity;
    }

    if (a.district && b.district) {
      const byDistrict = a.district?.localeCompare(b.district);
      if (byDistrict) {
        return byDistrict;
      }
    }

    if (typeof a._id === 'string' && typeof b._id === 'string') {
      return a._id?.localeCompare(b._id);
    }

    if (typeof a._id === 'number' && typeof b._id === 'number') {
      return a._id - b._id;
    }

    return 0;
  },
});

export const searchObjectsAdapterInitState = searchObjectsAdapter.getInitialState();

/** @returns object { ids; entities } saved to RTK Query endpoint via searchObjectsAdapter.setAll */
export const saveManyObjects = (result?: ManySearchObjects) => {
  const objects = getManySearchObjects(result);
  return searchObjectsAdapter.setAll(searchObjectsAdapterInitState, objects);
};

/** @returns object { ids; entities } saved to RTK Query endpoint via searchObjectsAdapter.upsertOne */
export const saveOneObject = (result?: OneSearchObject) => {
  const object = getOneSearchObject(result);
  return object ? searchObjectsAdapter.upsertOne(searchObjectsAdapterInitState, object) : undefined;
};
