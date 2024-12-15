"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import Icon from "/src/js/Icons.js";

const LoadingSection = () => {
  const { t } = useTranslation();
  return (
    <div className="loading-section container">
      <h1 id="loading-title">
        {t('Loading...')} <Icon name="loadingSpinner"/>
      </h1>
    </div>
  );
};

export default LoadingSection;
