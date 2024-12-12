"use strict";

const {
  Outlet
} = window.ReactRouterDOM;
import Header from "/src/js/components/Header.js";
import LanguageSwitcher from "/src/js/components/LanguageSwitcher.js";
const Layout = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(LanguageSwitcher, null), /*#__PURE__*/React.createElement(Outlet, null));
};
export default Layout; 
