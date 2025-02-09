"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
  inactiveElementClasses
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";

const CertificationsSection = ({ certificationList, mode, filter, toggleItem }) => {
  const { t } = useTranslation();
  return (
    <div className="certifications-section container">
      <SectionTitle
        id="certifications-title"
        text="CERTIFICATIONS"
      />
      {certificationList.map(certification => certification && (
          <div className={`mb-3 ${(
            mode === "edit" 
            && !(
              filter.certifications 
              ? filter.certifications.find(certificationId => certificationId == certification.key) 
              : false
            )
          ) 
          && inactiveElementClasses}`}>
            {mode === "edit" && (
              <CheckboxWithLabel
                id={`certification-${certification.key}`}
                checked={
                  filter.certifications 
                  ? filter.certifications.includes(certification.key) 
                  : false
                }
                onChange={() => toggleItem(certification.key)}
                label={t(certification.name)}
              />
            )}
            <h4>{t(certification.name)}</h4>
            <p className="mb-2">{t(certification.organisation)} • {t(certification.date.start.year)}</p>
            {certification.description && certification.description.type === "bullet" && (
              <ul>
                {certification.description.data.map((bulletText, index) => (
                  <li key={index}>{t(bulletText)}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};

export default CertificationsSection;
