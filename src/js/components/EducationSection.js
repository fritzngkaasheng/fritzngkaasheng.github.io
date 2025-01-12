"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses, getDateText } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
const EducationSection = ({
  educationList,
  mode,
  filter
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "experience-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "education-title",
    text: "EDUCATION"
  }), educationList.map(education => education && /*#__PURE__*/React.createElement("div", {
    className: mode === "edit" && !filter.education.find(educationId => educationId == education.key) && inactiveElementClasses
  }, education.degree && /*#__PURE__*/React.createElement("h4", null, t(education.degree)), /*#__PURE__*/React.createElement("p", null, t(education.school), education.date && ` • ${t(getDateText(education.date.end))}`))));
};
export default EducationSection; 
