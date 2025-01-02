"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
	getDateText
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const SkillsSection = ({ skillList }) => {
  const { t } = useTranslation();
  return (
    <div className="skills-section container">
      <SectionTitle
        id="skills-title"
        text="SKILLS"
      />
      {Object.values(skillList).map(skillGroup => (
          <div>
            <p>{t(skillGroup.name)}: {
              Object.keys(skillGroup.skill)
              .map(skill => t(skillGroup.skill[skill]))
              .join(t(", "))
            }</p>
          </div>
        ))}
    </div>
  );
};

export default SkillsSection;
