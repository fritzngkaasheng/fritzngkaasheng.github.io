"use strict";

import { useTranslation } from "/src/js/i18n.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
const SummarySection = ({
  summary
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "summary-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "summary-title",
    text: "SUMMARY"
  }), /*#__PURE__*/React.createElement("p", {
    class: "summary-text"
  }, t(summary)));
};
export default SummarySection; 
