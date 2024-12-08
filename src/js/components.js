"use strict";

import {
  i18n,
  useTranslation,
  lngs
} from "./src/js/main.js";

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
