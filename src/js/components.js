"use strict";

import { i18n, useTranslation, lngs } from "./src/js/i18n.js";
const {
  HashRouter,
  Routes,
  Route
} = window.ReactRouterDOM;
import Layout from "./src/js/pages/Layout.js";
import Home from "./src/js/pages/Home.js";
import Blogs from "./src/js/pages/Blogs.js";
import Contact from "./src/js/pages/Contact.js";
import NoPage from "./src/js/pages/NoPage.js";
const AppReactI18next = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, Object.keys(lngs).map(lng => /*#__PURE__*/React.createElement("button", {
    key: lng,
    onClick: () => i18n.changeLanguage(lng),
    disabled: i18n.resolvedLanguage === lng
  }, lngs[lng].nativeName))), /*#__PURE__*/React.createElement("h2", null, t('Welcome to React')));
};
const ReactRouterDemo = () => {
  return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Layout, null)
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "blogs",
    element: /*#__PURE__*/React.createElement(Blogs, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "contact",
    element: /*#__PURE__*/React.createElement(Contact, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NoPage, null)
  }))));
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "React"), /*#__PURE__*/React.createElement(AppReactI18next, null), /*#__PURE__*/React.createElement(ReactRouterDemo, null));
  }
}
;
ReactDOM.createRoot(document.getElementById("react-element")).render(/*#__PURE__*/React.createElement(App, null)); 
