"use strict";
import {
  i18n,
  useTranslation,
  lngs
} from "/src/js/i18n.js";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  return (
    <div id="language-switcher">
      {Object.keys(lngs).map((lng) => (
        <button key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
