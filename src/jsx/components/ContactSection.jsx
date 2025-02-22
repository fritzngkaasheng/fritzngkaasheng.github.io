"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import Icon from "/src/js/Icons.js";

const React = window.React;
const { useState, useEffect } = React;

const ContactSection = ({ fullName, country, linkedInURLSlug }) => {
  const { t } = useTranslation();
  
  const [contactNum, setContactNum] = useState("");
  const [email, setEmail] = useState("");

  const updateContactDetails = () => {
    const contactNum = prompt(t("Please enter contact number"), "+60 12-345 6789");
    const email = prompt(t("Please enter email"), "email@email.com");

    setContactNum(contactNum);
    setEmail(email);
  };

  useEffect(() => {
    const fullNameTitle = document.getElementById("full-name");

    fullNameTitle.addEventListener("click", updateContactDetails);

    return () => {
      cleanupEventListener(fullNameTitle, updateContactDetails);
    };
  }, [t]);

  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };

  return (
    <div className="contact-section container d-flex flex-column align-items-center pb-3">
      <h2 id="full-name">{t(fullName)}</h2>
      <div className="d-flex flex-column justify-content-center align-items-center flex-sm-row gap-sm-3">
        <span><Icon name="countryLocation"/> <span>{t(country)}</span></span>
        {contactNum && (
          <span><Icon name="phone"/> <span>{t(contactNum)}</span></span>
        )}
        {email && (
          <span><Icon name="email"/> <span>{t(email)}</span></span>
        )}
        <span><Icon name="linkedIn"/> <span><a href={`https://www.linkedin.com/in/${linkedInURLSlug}`} target="_blank">in/{linkedInURLSlug}</a></span></span>
      </div>
    </div>
  );
};

export default ContactSection;
