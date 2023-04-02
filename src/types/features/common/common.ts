import type { EntityId } from '@reduxjs/toolkit';

export type Ids = EntityId[];
// export const languageCodes = ['EN', 'UK', 'PL', 'RU'] as const;
// export const languageCodesUAInsteadOfUK = ['EN', 'UA', 'PL', 'RU'] as const;
export const languageCodesLowercase = ['en', 'uk', 'pl', 'ru'] as const;
// export type LanguageCode = typeof languageCodes[number];
// export type LanguageCodesUAInsteadOfUK = typeof languageCodesUAInsteadOfUK[number];
export type LanguageCodeLowercase = typeof languageCodesLowercase[number];

export const currencyCodes = ['UAH', 'USD', 'EUR', 'PLN', 'CNY', 'JPY', 'GBP', 'THB', 'KZT', 'TRY'] as const;
export type CurrencyCode = typeof currencyCodes[number];

// export type LanguageFrontend = { id?: EntityId; value: LanguageCode; text: string };
export type LanguageFrontend = { id?: EntityId; value: LanguageCodeLowercase; text: string };
export type CurrencyFrontend = { id?: EntityId; value: CurrencyCode; text: string };

export type Mode = 'light' | 'dark';
