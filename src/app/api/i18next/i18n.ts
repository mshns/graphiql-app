import * as i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const initI18n = () =>
  i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      fallbackLng: localStorage.getItem('[graphiql]language') || 'en',
      debug: false,
      interpolation: {
        escapeValue: false
      }
    });
