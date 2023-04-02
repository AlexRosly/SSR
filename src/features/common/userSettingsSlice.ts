import type { EntityId, EntityState, PayloadAction } from '@reduxjs/toolkit';
import type { LanguageFrontend, CurrencyFrontend } from 'types';
import type { RootState } from 'redux/store';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { languageCodesLowercase } from 'types';
import { makeEntity } from 'utils';

const [EN, UK, PL, RU] = languageCodesLowercase;

const languagesArray: LanguageFrontend[] = [
  { value: EN, text: 'English' },
  { value: UK, text: 'Українська' },
  { value: PL, text: 'Polski' },
  { value: RU, text: 'Русский' },
];

const languages = Object.freeze(makeEntity(languagesArray, 'value'));

const currenciesArray: CurrencyFrontend[] = [
  { text: 'Гривня', value: 'UAH' },
  { text: 'Dollar', value: 'USD' },
  { text: 'Euro', value: 'EUR' },
  { text: 'Złoty', value: 'PLN' },
  { text: 'Yuán', value: 'CNY' },
  { text: '円', value: 'JPY' },
  { text: 'Pound sterling', value: 'GBP' },
  { text: 'บาท', value: 'THB' },
  { text: 'Теңгесі', value: 'KZT' },
  { text: 'Lirası', value: 'TRY' },
  // {  text: 'Indian Rupee', value: 'INR', },
  // {  text: 'Canadian dollar', value: 'CAD', },
  // {  text: 'Brazilian real', value: 'BRL', },
];

const currencies = Object.freeze(makeEntity(currenciesArray, 'value'));

type UserSettingsState = {
  languages: EntityState<LanguageFrontend>;
  currencies: EntityState<CurrencyFrontend>;

  activeLanguageId: EntityId;
  activeCurrencyId: EntityId;
};

const initialState: UserSettingsState = {
  languages,
  currencies,
  activeLanguageId: EN,
  activeCurrencyId: currencies.ids[0],
};

const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    chooseLanguage: (state, { payload }: PayloadAction<EntityId>) => {
      state.activeLanguageId = payload;
    },
    chooseCurrency: (state, { payload }: PayloadAction<EntityId>) => {
      state.activeCurrencyId = payload;
    },
  },
});

export const { chooseLanguage, chooseCurrency } = userSettingsSlice.actions;
export const userSettingsReducer = userSettingsSlice.reducer;

export const selectActiveLanguageId = (state: RootState) => state.userSettings.activeLanguageId;
export const selectActiveLanguage = (state: RootState) => {
  const id = selectActiveLanguageId(state);
  return state.userSettings.languages.entities[id] ?? languagesArray[0];
};
export const selectActiveLang = (state: RootState) => selectActiveLanguage(state).value;
export const selectActiveLangText = (state: RootState) => selectActiveLanguage(state).text;
export const selectLanguages = (state: RootState) => state.userSettings.languages;
export const selectLanguagesIds = (state: RootState) => selectLanguages(state).ids;
export const selectLanguagesEntities = (state: RootState) => selectLanguages(state).entities;

export const selectLanguageById = createSelector(
  selectLanguages,
  (_: RootState, id: EntityId) => id,
  (languages, id) => languages.entities[id]
);

export const selectCurrencies = (state: RootState) => state.userSettings.currencies;
export const selectCurrenciesIds = (state: RootState) => selectCurrencies(state).ids;
export const selectCurrenciesEntities = (state: RootState) => selectCurrencies(state).entities;

export const selectCurrencyById = createSelector(
  selectCurrencies,
  (_: RootState, id: EntityId) => id,
  (currenciesEntity, id) => currenciesEntity.entities?.[id]
);

export const selectActiveCurrencyId = (state: RootState) => state.userSettings.activeCurrencyId;
export const selectActiveCurrency = (state: RootState) => {
  const id = selectActiveCurrencyId(state);
  return state.userSettings.currencies.entities[id] ?? currenciesArray[0];
};

export const selectActiveCurrencyCode = (state: RootState) => selectActiveCurrency(state).value;
export const selectActiveCurrencyText = (state: RootState) => selectActiveCurrency(state).text;
