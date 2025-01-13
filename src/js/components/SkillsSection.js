"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";
const SkillsSection = ({
  skillList,
  mode,
  filter,
  toggleSkillGroup
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "skills-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "skills-title",
    text: "SKILLS"
  }), Object.entries(skillList).map(skillGroupArr => skillGroupArr[1] && /*#__PURE__*/React.createElement("div", {
    className: mode === "edit" && !(filter.skills ? Object.keys(filter.skills).find(skillGroupId => skillGroupId == skillGroupArr[0]) : false) && inactiveElementClasses
  }, mode === "edit" && /*#__PURE__*/React.createElement(CheckboxWithLabel, {
    id: `skill-group-${skillGroupArr[0]}`,
    checked: filter.skills ? Object.keys(filter.skills).includes(skillGroupArr[0]) : false,
    onChange: () => toggleSkillGroup(skillGroupArr[0], skillGroupArr[1]),
    label: t(skillGroupArr[1].name)
  }), /*#__PURE__*/React.createElement("p", null, t(skillGroupArr[1].name), ": ", Object.keys(skillGroupArr[1].skill).map(skill => skill && t(skillGroupArr[1].skill[skill])).join(t(", "))))));
};
export default SkillsSection; 
