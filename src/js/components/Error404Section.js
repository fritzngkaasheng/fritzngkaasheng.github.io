"use strict";

import { useTranslation } from "/src/js/i18n.js";
const Error404Section = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "error-404-section container"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "error-404-title"
  }, t('404 Page not found')));
};
export default Error404Section; 
