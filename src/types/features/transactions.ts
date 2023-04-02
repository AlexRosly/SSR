import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { CurrencyCode } from './common';

export type Transaction = {
  _id: EntityId;
  amount: string;
  currency: string;
  payment: string;
  date: string;
};

export type TransactionForPayout = {
  _id: EntityId;
  objectId: EntityId;
  objectName: string;
  objectRegistrationDate: string;
  agentId: EntityId;
  agentRegistrationDate: string;
  availableForPayout: string;
  currency: CurrencyCode;
};

export type TransactionObject = {
  _id: EntityId;
  objectId: EntityId;
  paymentDate: string;
  paidDate: string;
  paymentForServices: string;
  earnings: string;
  currency: CurrencyCode;
};

export type TransactionAgent = {
  _id: EntityId;
  agentId: EntityId;
  paymentDate: string;
  paidDate: string;
  referralPayment: string;
  earnings: string;
  currency: CurrencyCode;
};

export type TransactionsEntity = EntityState<Transaction>;
export type TransactionsForPayoutEntity = EntityState<TransactionForPayout>;
export type TransactionsObjectEntity = EntityState<TransactionObject>;
export type TransactionsAgentEntity = EntityState<TransactionAgent>;
export type MaybeTransactionsEntity = TransactionsEntity | undefined;
