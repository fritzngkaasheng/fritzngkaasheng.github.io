"use strict";

import Icon from "/src/js/Icons.js";
import Navigation from "/src/js/components/Navigation.js";
import LanguageSwitcher from "/src/js/components/LanguageSwitcher.js";
const Header = () => {
  return /*#__PURE__*/React.createElement("header", {
    className: "navbar bg-transparent fixed-top pe-2 flex-column align-items-end"
  }, /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler bg-body-tertiary",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasNavbar",
    "aria-controls": "offcanvasNavbar",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "navBar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "offcanvas offcanvas-end",
    tabIndex: "-1",
    id: "offcanvasNavbar",
    "aria-labelledby": "offcanvasNavbarLabel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "offcanvas-header"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "offcanvas-body"
  }, /*#__PURE__*/React.createElement(Navigation, null)), /*#__PURE__*/React.createElement("div", {
    className: "p-3 text-end"
  }, /*#__PURE__*/React.createElement("span", {
    id: "app-version"
  }, "v", appVersion))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement(LanguageSwitcher, null)));
};
export default Header; 
