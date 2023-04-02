import { createEntityAdapter } from '@reduxjs/toolkit';
import { getManyTransactions, getOneTransaction } from 'features/api';
import type {
  ManyTransactions,
  OneTransaction,
  Transaction,
  TransactionAgent,
  TransactionForPayout,
  TransactionObject,
} from 'types';

export const transactionsAdapter = createEntityAdapter<Transaction>({
  selectId: transaction => transaction._id,
  sortComparer: (a, b) => b.date?.localeCompare(a.date),
});

export const transactionsInitState = transactionsAdapter.getInitialState();

/** @returns object { ids; entities } saved to RTK Query endpoint via transactionsAdapter.setAll */
export const saveManyTransactions = (result?: ManyTransactions) => {
  const transactions = getManyTransactions(result);
  return transactionsAdapter.setAll(transactionsInitState, transactions);
};

/** @returns object { ids; entities } saved to RTK Query endpoint via transactionsAdapter.upsertOne */
export const saveOneTransaction = (result?: OneTransaction) => {
  const transaction = getOneTransaction(result);
  return transaction ? transactionsAdapter.upsertOne(transactionsInitState, transaction) : undefined;
};

export const transactionsObjectAdapter = createEntityAdapter<TransactionObject>({
  selectId: transaction => transaction._id,
  sortComparer: (a, b) => b.paymentDate?.localeCompare(a.paymentDate),
});

export const transactionsForPayoutAdapter = createEntityAdapter<TransactionForPayout>({
  selectId: transaction => transaction._id,
  sortComparer: (a, b) => b.objectRegistrationDate?.localeCompare(a.objectRegistrationDate),
});

export const transactionsAgentAdapter = createEntityAdapter<TransactionAgent>({
  selectId: transaction => transaction._id,
  sortComparer: (a, b) => b.paymentDate?.localeCompare(a.paymentDate),
});

export const transactionsObjectInitState = transactionsObjectAdapter.getInitialState();
export const transactionsForPayoutInitState = transactionsForPayoutAdapter.getInitialState();
export const transactionsAgentInitState = transactionsAgentAdapter.getInitialState();
