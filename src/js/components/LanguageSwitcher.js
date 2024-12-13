"use strict";

import { i18n, useTranslation, lngs } from "/src/js/i18n.js";
import Icon from "/src/js/components/Icons.js";
const LanguageSwitcher = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "btn-group dropstart"
  }, /*#__PURE__*/React.createElement("button", {
    id: "language-switcher-dropstart",
    type: "button",
    className: "btn btn-secondary dropdown-toggle",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "languageSwitcher"
  })), /*#__PURE__*/React.createElement("ul", {
    id: "language-switcher",
    className: "dropdown-menu"
  }, Object.keys(lngs).map(lng => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "dropdown-item",
    key: lng,
    onClick: () => i18n.changeLanguage(lng),
    disabled: i18n.resolvedLanguage === lng
  }, lngs[lng].nativeName)))));
};
export default LanguageSwitcher; 
