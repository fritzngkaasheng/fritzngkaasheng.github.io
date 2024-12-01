const i18n = window.i18next;
const { useTranslation, initReactI18next } = window.ReactI18next;
const Backend = window.i18nextHttpBackend;

const lngs = {
  en: { nativeName: 'English' },
  cn: { nativeName: '中文' }
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		/*resources: {
			en: {
				translation: {
					"Welcome to React": "Welcome to React and react-i18next"
				}
			}
		},*/
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
      addPath: './locales/add/{{lng}}/{{ns}}',
    },
		lng: "en", // if you're using a language detector, do not define the lng option
		fallbackLng: "en",

		interpolation: {
			escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		}
	});

const AppReactI18next = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
        ))}
      </div>
      <h2>{t('Welcome to React')}</h2>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>React</div>
        <AppReactI18next />
      </div>
    );
  }
};

ReactDOM.createRoot(document.getElementById("react-element")).render(<App />);
