"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const InvolvementSection = ({ involvementList }) => {
  const { t } = useTranslation();
  return (
    <div className="involvement-section container">
      <SectionTitle
        id="involvement-title"
        text="INVOLVEMENT"
      />
      {involvementList.map(involvement => (
          <div>
            <h4>{t(involvement.role)}</h4>
            <p>
              {t(involvement.organisation)}
              {involvement.description && involvement.description.type === "bullet" && (
                <ul>
                  {involvement.description.data.map((bulletText, index) => (
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

export default InvolvementSection;
