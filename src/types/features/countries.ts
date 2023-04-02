import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { Ids } from './common';

export type Country = {
  _id: EntityId;
  international: string;
  country: string;

  langCode: string;
  dbLangCode: string;

  states: Ids;
  createdAt: string;
  updatedAt: string;
};

export type MaybeCountriesEntity = EntityState<Country> | undefined;

export type AutocompleteCountry = {
  _id: string;
  country: string;
};
