import { TranslationJSON, TranslationNamespace } from './translation';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: TranslationNamespace;
    resources: TranslationJSON;
  }
}
