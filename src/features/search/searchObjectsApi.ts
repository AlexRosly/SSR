import type { EntityId } from '@reduxjs/toolkit';
import { api, endpoints, tag, tagList } from 'features/api';
import type { ManySearchObjects, MaybeSearchObjectsEntity, OneSearchObject } from 'types';

import { saveManyObjects, saveOneObject } from './searchObjectsAdapter';

const searchObjectsApi = api.injectEndpoints({
  endpoints: build => ({
    getSearchObjects: build.query<MaybeSearchObjectsEntity, void>({
      query: () => endpoints.objects,
      transformResponse: (result?: ManySearchObjects) => saveManyObjects(result),
      providesTags: result => tagList(result, 'Object'),
    }),
    getSearchObject: build.query<MaybeSearchObjectsEntity, EntityId>({
      query: id => `${endpoints.objects}/${id}`,
      transformResponse: (result?: OneSearchObject) => saveOneObject(result),
      providesTags: (_, __, id) => tag(id, 'Object'),
    }),
  }),
});

export const { useLazyGetSearchObjectsQuery } = searchObjectsApi;

export const selectSearchObjectsResult = searchObjectsApi.endpoints.getSearchObjects.select();
