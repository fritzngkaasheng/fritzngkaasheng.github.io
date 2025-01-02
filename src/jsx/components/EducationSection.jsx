"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
	getDateText
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const EducationSection = ({ educationList }) => {
  const { t } = useTranslation();
  return (
    <div className="experience-section container">
      <SectionTitle
        id="education-title"
        text="EDUCATION"
      />
      {educationList.map(education => (
          <div>
            {education.degree && (
              <h4>{t(education.degree)}</h4>
            )}
            <p>{t(education.school)}{education.date && ` • ${t(getDateText(education.date.end))}`}</p>
          </div>
        ))}
    </div>
  );
};

export default EducationSection;
