"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";
const CourseworkSection = ({
  courseworkList,
  mode,
  filter,
  toggleItem
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "coursework-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "coursework-title",
    text: "COURSEWORK"
  }), courseworkList.map(coursework => /*#__PURE__*/React.createElement("div", {
    className: mode === "edit" && (!filter.coursework || !(filter.coursework ? filter.coursework?.find(courseworkId => courseworkId == coursework.key) : false)) && inactiveElementClasses
  }, mode === "edit" && /*#__PURE__*/React.createElement(CheckboxWithLabel, {
    id: `coursework-${coursework.key}`,
    checked: filter.coursework ? filter.coursework.includes(coursework.key) : false,
    onChange: () => toggleItem(coursework.key),
    label: t(coursework.name)
  }), /*#__PURE__*/React.createElement("h4", null, t(coursework.name)))));
};
export default CourseworkSection; 
