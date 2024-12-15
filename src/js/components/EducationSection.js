"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { getDateText } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
const EducationSection = ({
  educationList
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "experience-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "education-title",
    text: "EDUCATION"
  }), educationList.map(education => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", null, t(education.degree)), /*#__PURE__*/React.createElement("p", null, t(education.school), " \u2022 ", t(getDateText(education.date.end))))));
};
export default EducationSection; 
