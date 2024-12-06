const i18n = window.i18next;
const { useTranslation, initReactI18next } = window.ReactI18next;
const Backend = window.i18nextHttpBackend;

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
};

i18n
	.use(initReactI18next)
  .use(Backend)
	.init({
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
      addPath: './locales/add/{{lng}}/{{ns}}',
    },
		lng: "en",
		fallbackLng: "en",

		interpolation: {
			escapeValue: false
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
