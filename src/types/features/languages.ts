import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { Ids } from './common';

export type Language = {
  _id: EntityId;
  lang: string;
  code: string;
  dbLangCode: string;

  countries: Ids;
  createdAt: string;
  updatedAt: string;
};

export type MaybeLanguagesEntity = EntityState<Language> | undefined;
