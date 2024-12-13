"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const ComingSoonSection = () => {
  const { t } = useTranslation();
  return (
    <div className="coming-soon-section">
      <h1 id="coming-soon-title">{t('Coming Soon')}</h1>
    </div>
  );
};

export default ComingSoonSection;
