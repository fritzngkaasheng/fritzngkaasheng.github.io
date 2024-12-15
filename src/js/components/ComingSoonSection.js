"use strict";

import { useTranslation } from "/src/js/i18n.js";
const ComingSoonSection = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "coming-soon-section container"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "coming-soon-title"
  }, t('Coming Soon')));
};
export default ComingSoonSection; 
