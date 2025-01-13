"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
  inactiveElementClasses
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";

const CourseworkSection = ({ courseworkList, mode, filter, toggleItem }) => {
  const { t } = useTranslation();
  return (
    <div className="coursework-section container">
      <SectionTitle
        id="coursework-title"
        text="COURSEWORK"
      />
      {courseworkList.map(coursework => (
          <div className={(
            mode === "edit" 
            && (
              !filter.coursework 
              || !(
                filter.coursework 
                ? filter.coursework?.find(courseworkId => courseworkId == coursework.key) 
                : false
              )
            )
          ) 
          && inactiveElementClasses}>
            {mode === "edit" && (
              <CheckboxWithLabel
                id={`coursework-${coursework.key}`}
                checked={
                  filter.coursework 
                  ? filter.coursework.includes(coursework.key) 
                  : false
                }
                onChange={() => toggleItem(coursework.key)}
                label={t(coursework.name)}
              />
            )}
            <h4>{t(coursework.name)}</h4>
          </div>
        ))}
    </div>
  );
};

export default CourseworkSection;
