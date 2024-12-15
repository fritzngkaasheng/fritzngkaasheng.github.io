"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const Error404Section = () => {
  const { t } = useTranslation();
  return (
    <div className="error-404-section container">
      <h1 id="error-404-title">{t('404 Page not found')}</h1>
    </div>
  );
};

export default Error404Section;
