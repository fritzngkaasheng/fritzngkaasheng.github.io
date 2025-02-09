"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
  inactiveElementClasses
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";

const AwardsSection = ({ awardList, mode, filter, toggleItem }) => {
  const { t } = useTranslation();
  return (
    <div className="awards-section container">
      <SectionTitle
        id="awards-title"
        text="AWARDS"
      />
      {awardList.map(award => (
          <div className={(
            mode === "edit" 
            && (
              !filter.award 
              || !(
                filter.award 
                ? filter.award?.find(awardId => awardId == award.key) 
                : false
              )
            )
          ) 
          && inactiveElementClasses}>
            {mode === "edit" && (
              <CheckboxWithLabel
                id={`award-${award.key}`}
                checked={
                  filter.award 
                  ? filter.award.includes(award.key) 
                  : false
                }
                onChange={() => toggleItem(award.key)}
                label={t(award.role)}
              />
            )}
            <h4>{t(award.role)}</h4>
            <p>
              {t(award.organisation)}
              {award.description && award.description.type === "bullet" && (
                <ul>
                  {award.description.data.map((bulletText, index) => (
                    <li key={index}>{t(bulletText)}</li>
                  ))}
                </ul>
              )}
            </p>
          </div>
        ))}
    </div>
  );
};

export default AwardsSection;
