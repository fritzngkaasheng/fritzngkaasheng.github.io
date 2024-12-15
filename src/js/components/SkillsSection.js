"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { getDateText } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
const SkillsSection = ({
  skillList
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "skills-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "skills-title",
    text: "SKILLS"
  }), Object.values(skillList).map(skillGroup => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, t(skillGroup.name), ": ", Object.keys(skillGroup.skill).map(skill => t(skillGroup.skill[skill])).join(t(", "))))));
};
export default SkillsSection; 
