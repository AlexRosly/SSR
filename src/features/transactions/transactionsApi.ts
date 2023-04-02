import type { ManyTransactions, MaybeTransactionsEntity, OneTransaction } from 'types';
import { api, endpoints, tag, tagList } from 'features/api';
import type { EntityId } from '@reduxjs/toolkit';
import { saveManyTransactions, saveOneTransaction } from './transactionsAdapter';

const transactionsApi = api.injectEndpoints({
  endpoints: build => ({
    getTransactions: build.query<MaybeTransactionsEntity, void>({
      query: () => endpoints.transactions,
      transformResponse: (result: ManyTransactions) => saveManyTransactions(result),
      providesTags: result => tagList(result, 'Transaction'),
    }),
    getTransaction: build.query<MaybeTransactionsEntity, EntityId>({
      query: id => `${endpoints.transactions}/${id}`,
      transformResponse: (result: OneTransaction) => saveOneTransaction(result),
      providesTags: (_, __, id) => tag(id, 'Transaction'),
    }),
  }),
});

export const { useGetTransactionsQuery, useLazyGetTransactionsQuery } = transactionsApi;

export const transactionsResult = transactionsApi.endpoints.getTransactions.select();
