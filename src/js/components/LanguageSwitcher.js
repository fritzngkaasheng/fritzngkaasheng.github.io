"use strict";

import { i18n, useTranslation, lngs } from "/src/js/i18n.js";
const LanguageSwitcher = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    id: "language-switcher"
  }, Object.keys(lngs).map(lng => /*#__PURE__*/React.createElement("button", {
    key: lng,
    onClick: () => i18n.changeLanguage(lng),
    disabled: i18n.resolvedLanguage === lng
  }, lngs[lng].nativeName)));
};
export default LanguageSwitcher; 
