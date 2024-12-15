"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import Icon from "/src/js/Icons.js";

const ContactSection = ({ fullName, country, linkedInURLSlug }) => {
  const { t } = useTranslation();
  return (
    <div className="contact-section container d-flex flex-column align-items-center pb-3">
      <h2 id="full-name">{t(fullName)}</h2>
      <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row gap-sm-3">
        <span><Icon name="countryLocation"/> <span>{t(country)}</span></span>
        <span><Icon name="linkedIn"/> <span><a href={`https://www.linkedin.com/in/${linkedInURLSlug}`} target="_blank">in/{linkedInURLSlug}</a></span></span>
      </div>
    </div>
  );
};

export default ContactSection;
