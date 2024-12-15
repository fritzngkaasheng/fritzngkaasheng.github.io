"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const CertificationsSection = ({ certificationList }) => {
  const { t } = useTranslation();
  return (
    <div className="certifications-section container">
      <SectionTitle
        id="certifications-title"
        text="CERTIFICATIONS"
      />
      {certificationList.map(certification => (
          <>
            <h4>{t(certification.name)}</h4>
            <p>{t(certification.organisation)} • {t(certification.date.start.year)}</p>
          </>
        ))}
    </div>
  );
};

export default CertificationsSection;
