"use strict";

import {
  i18n,
  useTranslation,
  lngs
} from "/src/js/i18n.js";

const { HashRouter, Routes, Route } = window.ReactRouterDOM;

import Layout from "/src/js/pages/Layout.js";
import Home from "/src/js/pages/Home.js";
import Blogs from "/src/js/pages/Blogs.js";
import Contact from "/src/js/pages/Contact.js";
import NoPage from "/src/js/pages/NoPage.js";

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

const ReactRouterDemo = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
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
        <ReactRouterDemo />
      </div>
    );
  }
};

ReactDOM.createRoot(document.getElementById("react-element")).render(<App />);
