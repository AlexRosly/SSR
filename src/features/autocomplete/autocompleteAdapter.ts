import { createEntityAdapter } from '@reduxjs/toolkit';
import { getManyAutocompleteResults } from 'features/api';
import { AutocompleteCity, ManyAutocompleteResults } from 'types';

export const autocompleteAdapter = createEntityAdapter<AutocompleteCity>({
  selectId: location => location._id,
  sortComparer: (a, b) => {
    if ('cityName' in a && 'cityName' in b) {
      return a.cityName.localeCompare(b.cityName);
    }

    if ('cityName' in a && !('cityName' in b)) {
      return -1;
    }

    if ('stateName' in a && 'stateName' in b) {
      return a.stateName.localeCompare(b.stateName);
    }

    return a.country.localeCompare(b.country);
  },
});

export const autocompleteAdapterInitState = autocompleteAdapter.getInitialState();

export const saveManyAutocompleteResults = (results: ManyAutocompleteResults) => {
  const autocompleteResults = getManyAutocompleteResults(results);
  return autocompleteAdapter.setAll(autocompleteAdapterInitState, autocompleteResults);
};
