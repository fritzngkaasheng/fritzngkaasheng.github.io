"use strict";
import {
  i18n,
  useTranslation,
  lngs
} from "/src/js/i18n.js";

import Icon from "/src/js/components/Icons.js";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  return (
    <div className="btn-group dropstart">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <Icon name="languageSwitcher" />
      </button>
      <ul id="language-switcher" className="dropdown-menu">
        {Object.keys(lngs).map((lng) => (
          <li><button className="dropdown-item" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button></li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
