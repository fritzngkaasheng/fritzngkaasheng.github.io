"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses, getDateText } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";
const EducationSection = ({
  educationList,
  mode,
  filter,
  toggleItem
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
    className: mode === "edit" && !(filter.education ? filter.education.find(educationId => educationId == education.key) : false) && inactiveElementClasses
  }, mode === "edit" && /*#__PURE__*/React.createElement(CheckboxWithLabel, {
    id: `education-${education.key}`,
    checked: filter.education ? filter.education.includes(education.key) : false,
    onChange: () => toggleItem(education.key),
    label: t(education.degree)
  }), education.degree && /*#__PURE__*/React.createElement("h4", null, t(education.degree)), /*#__PURE__*/React.createElement("p", null, t(education.school), education.date && ` • ${t(getDateText(education.date.end))}`))));
};
export default EducationSection; 
