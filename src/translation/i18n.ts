import type { TranslationJSON } from 'types';
import { ns } from 'types';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/en.json';
import translationUK from './locales/uk/uk.json';
import translationPL from './locales/pl/pl.json';
import translationRU from './locales/ru/ru.json';

const en: TranslationJSON = translationEN;
const uk: TranslationJSON = translationUK;
const pl: TranslationJSON = translationPL;
const ru: TranslationJSON = translationRU;

i18n.use(initReactI18next).init({
  ns,
  defaultNS: 'common',
  resources: { en, uk, pl, ru },

  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});


