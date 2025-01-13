"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
  inactiveElementClasses,
  getDateText
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";

const ExperienceSection = ({ experienceList, mode, filter, toggleItem }) => {
  const { t } = useTranslation();

  return (
    <div className="experience-section container">
      <SectionTitle
        id="experience-title"
        text="EXPERIENCE"
      />
      {experienceList.map(experience => experience && (
          <div className={`mb-3${(
            mode === "edit" 
            && !(
              filter.experience 
              ? filter.experience.find(experienceId => experienceId == experience.key) 
              : false
            )
          ) ? " " + inactiveElementClasses : ""}`}>
            {mode === "edit" && (
              <CheckboxWithLabel
                id={`experience-${experience.key}`}
                checked={
                  filter.experience 
                  ? filter.experience.includes(experience.key) 
                  : false
                }
                onChange={() => toggleItem(experience.key)}
                label={t(experience.role)}
              />
            )}
            <h4>{t(experience.role)}</h4>
            <div className="d-xl-flex justify-content-xl-between">
              <h5>{t(experience.company)}</h5>
              <h5>{t(getDateText(experience.date.start))} - {t(getDateText(experience.date.end))}, {t(experience.location)}</h5>
            </div>
            {experience.description && experience.description.type === "bullet" && (
              <ul>
                {experience.description.data.map((bulletText, index) => (
                  <li key={index}>{t(bulletText)}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};

export default ExperienceSection;
