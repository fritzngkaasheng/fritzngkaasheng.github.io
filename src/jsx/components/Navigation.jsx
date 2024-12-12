"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const { Link } = window.ReactRouterDOM;

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t('Home')}</Link>
        </li>
        <li>
          <Link to="/dynamic-resume">{t('Resume')}</Link>
        </li>
        <li>
          <Link to="/academic-cv">{t('Academic CV')}</Link>
        </li>
        <li>
          <Link to="/entrepreneur-resume">{t('Entrepreneur Resume')}</Link>
        </li>
        <li>
          <Link to="/dating-profile">{t('Dating Profile')}</Link>
        </li>
        <li>
          <Link to="/will-i-take-the-job-quiz">{t('Will I Take the Job? Quiz')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
