"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
  inactiveElementClasses,
	getDateText
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const EducationSection = ({ educationList, mode, filter }) => {
  const { t } = useTranslation();
  return (
    <div className="experience-section container">
      <SectionTitle
        id="education-title"
        text="EDUCATION"
      />
      {educationList.map(education => education && (
          <div className={(
            mode === "edit" 
            && !(filter.education.find(educationId => educationId == education.key))
          ) 
          && inactiveElementClasses}>
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
