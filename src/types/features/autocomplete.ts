import { AutocompleteCity } from './cities';
import { EntityState } from '@reduxjs/toolkit';

export type AutocompleteResult = AutocompleteCity;

export type AutocompleteEntity = EntityState<AutocompleteResult>;
export type MaybeAutocompleteEntity = AutocompleteEntity | undefined;
