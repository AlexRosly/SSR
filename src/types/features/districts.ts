import type { EntityId, EntityState } from '@reduxjs/toolkit';

export type District = {
  stateId: EntityId;
  cityId: EntityId;
  cityInternational: string;

  _id: EntityId;
  districtName: string;
  districtInternational: string;
  districtCode: string;
  districtPhotoURL: string;

  langCode: string;
  dbLangCode: string;
  createdAt: string;
  updatedAt: string;
};

export type MaybeDistrictsEntity = EntityState<District> | undefined;

export type AutocompleteDistrict = {
  _id: string;
  districtName: string;
  cityName: string;
  stateName: string;
  country: string;
};
