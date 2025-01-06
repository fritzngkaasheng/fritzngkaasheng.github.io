"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
	getDateText
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const ExperienceSection = ({ experienceList }) => {
  const { t } = useTranslation();
  return (
    <div className="experience-section container">
      <SectionTitle
        id="experience-title"
        text="EXPERIENCE"
      />
      {experienceList.map(experience => experience && (
          <div>
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
