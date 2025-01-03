"use strict";

import { useTranslation } from "/src/js/i18n.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
const InvolvementSection = ({
  involvementList
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "involvement-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "involvement-title",
    text: "INVOLVEMENT"
  }), involvementList.map(involvement => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, t(involvement.role)), /*#__PURE__*/React.createElement("p", null, t(involvement.organisation), involvement.description && involvement.description.type === "bullet" && /*#__PURE__*/React.createElement("ul", null, involvement.description.data.map((bulletText, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, t(bulletText))))))));
};
export default InvolvementSection; 
