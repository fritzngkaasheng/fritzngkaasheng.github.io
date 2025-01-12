"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
  inactiveElementClasses
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const SkillsSection = ({ skillList, mode, filter }) => {
  const { t } = useTranslation();
  return (
    <div className="skills-section container">
      <SectionTitle
        id="skills-title"
        text="SKILLS"
      />
      {Object.entries(skillList).map(skillGroupArr => skillGroupArr[1] && (
          <div className={(
            mode === "edit" 
            && !(Object.keys(filter.skills).find(skillGroupId => skillGroupId == skillGroupArr[0]))
          ) 
          && inactiveElementClasses}>
            <p>{t(skillGroupArr[1].name)}: {
              Object.keys(skillGroupArr[1].skill)
              .map(skill => skill && t(skillGroupArr[1].skill[skill]))
              .join(t(", "))
            }</p>
          </div>
        ))}
    </div>
  );
};

export default SkillsSection;
