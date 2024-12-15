"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import SectionTitle from "/src/js/components/SectionTitle.js";

const SummarySection = ({ summary }) => {
  const { t } = useTranslation();
  return (
    <div className="summary-section container">
      <SectionTitle
        id="summary-title"
        text="SUMMARY"
      />
      <p class="summary-text">{t(summary)}</p>
    </div>
  );
};

export default SummarySection;
