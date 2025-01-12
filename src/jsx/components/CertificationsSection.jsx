"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
  inactiveElementClasses
} from "/src/js/main.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const CertificationsSection = ({ certificationList, mode, filter }) => {
  const { t } = useTranslation();
  return (
    <div className="certifications-section container">
      <SectionTitle
        id="certifications-title"
        text="CERTIFICATIONS"
      />
      {certificationList.map(certification => certification && (
          <div className={(
            mode === "edit" 
            && !(filter.certifications.find(certificationId => certificationId == certification.key))
          ) 
          && inactiveElementClasses}>
            <h4>{t(certification.name)}</h4>
            <p>{t(certification.organisation)} • {t(certification.date.start.year)}</p>
          </div>
        ))}
    </div>
  );
};

export default CertificationsSection;
