"use strict";

import { useTranslation } from "/src/js/i18n.js";
const ComingSoonSection = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    class: "coming-soon-section"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "coming-soon-title"
  }, t('Coming Soon')));
};
export default ComingSoonSection; 