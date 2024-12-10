const i18n = window.i18next;
const { useTranslation, initReactI18next } = window.ReactI18next;
const LanguageDetector = window.i18nextBrowserLanguageDetector;
const Backend = window.i18nextHttpBackend;

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
      addPath: './locales/add/{{lng}}/{{ns}}',
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export {
  i18n,
  useTranslation,
  lngs
};
