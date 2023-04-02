import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { Ids } from './common';

export type State = {
  countryId: EntityId;
  international: string;

  _id: EntityId;
  stateName: string;
  stateInternational: string;
  stateCode: string;
  statePhotoURL: string;

  cities: Ids;
  langCode: string;
  dbLangCode: string;

  createdAt: string;
  updatedAt: string;
};

export type MaybeStatesEntity = EntityState<State> | undefined;

export type AutocompleteState = {
  _id: string;
  stateName: string;
  country: string;
};
