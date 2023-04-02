import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { Ids } from './common';

export type City = {
  stateId: EntityId;
  stateInternational: string;

  _id: EntityId;
  cityName: string;
  cityInternational: string;
  cityCode: string;
  cityPhotoURL: string;

  langCode: string;

  districts: Ids;
  createdAt: string;
  updatedAt: string;
};
export type MaybeCitiesEntity = EntityState<City> | undefined;

export type AutocompleteCity = {
  _id: string;
  cityName: string;
  stateName: string;
  country: string;
};
