"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const CourseworkSection = ({ courseworkList }) => {
  const { t } = useTranslation();
  return (
    <div className="coursework-section container">
      <SectionTitle
        id="coursework-title"
        text="COURSEWORK"
      />
      {courseworkList.map(coursework => (
          <div>
            <h4>{t(coursework.name)}</h4>
          </div>
        ))}
    </div>
  );
};

export default CourseworkSection;
