import { api, endpoints, tagList } from 'features/api';
import { LanguageCodeLowercase, ManyAutocompleteResults, MaybeAutocompleteEntity } from 'types';
import { saveManyAutocompleteResults } from './autocompleteAdapter';

const autocompleteApi = api.injectEndpoints({
  endpoints: build => ({
    getAutocomplete: build.query<MaybeAutocompleteEntity, { search: string; lang: LanguageCodeLowercase }>({
      query: ({ search, lang }) => `${endpoints.autocomplete}?search=${search}&limit=10&lang=${lang}`,
      transformResponse: (result: ManyAutocompleteResults) => saveManyAutocompleteResults(result),
      providesTags: result => tagList(result, 'Autocomplete'),
    }),
  }),
});

export const { useGetAutocompleteQuery, useLazyGetAutocompleteQuery } = autocompleteApi;
