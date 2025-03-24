"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import Icon from "/src/js/Icons.js";

const React = window.React;
const { useState, useEffect } = React;

const ContactSection = ({ fullName, location, linkedInURLSlug }) => {
  const { t } = useTranslation();
  
  const [contactNum, setContactNum] = useState("");
  const [email, setEmail] = useState("");

  const updateContactDetails = () => {
    function isValidPhone(num) {
      return /^\+60[\s]\d{1,2}[-]\d{2,4}[\s]\d{3,4}$/.test(num.trim());
    }
    
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    function escapeHTML(str) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return str.replace(/[&<>"']/g, (m) => map[m]);
    }
    
    let contactNum = escapeHTML(prompt(t("Please enter contact number"), "+60 12-345 6789"));

    contactNum = contactNum.replace(/[^\d+\- ]/g, '');

    if (!isValidPhone(contactNum)) {
      alert("Invalid contact number");
      contactNum = "";
    }

    let email = escapeHTML(prompt(t("Please enter email"), "email@email.com"));
    
    email = email.trim().toLowerCase();

    if (!isValidEmail(email)) {
      alert("Invalid email");
      email = "";
    }

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
        <span><Icon name="linkedIn"/> <span><a href={`https://www.linkedin.com/in/${linkedInURLSlug}`} target="_blank">in/{linkedInURLSlug}</a></span></span>
        {email && (
          <span><Icon name="email"/> <span>{t(email)}</span></span>
        )}
        {contactNum && (
          <span><Icon name="phone"/> <span>{t(contactNum)}</span></span>
        )}
        <span><Icon name="location"/> <span>{t(location)}</span></span>
      </div>
    </div>
  );
};

export default ContactSection;
