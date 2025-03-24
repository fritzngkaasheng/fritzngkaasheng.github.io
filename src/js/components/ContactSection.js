"use strict";

import { useTranslation } from "/src/js/i18n.js";
import Icon from "/src/js/Icons.js";
const React = window.React;
const {
  useState,
  useEffect
} = React;
const ContactSection = ({
  fullName,
  location,
  linkedInURLSlug
}) => {
  const {
    t
  } = useTranslation();
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
      return str.replace(/[&<>"']/g, m => map[m]);
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
  return /*#__PURE__*/React.createElement("div", {
    className: "contact-section container d-flex flex-column align-items-center pb-3"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "full-name"
  }, t(fullName)), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center flex-sm-row gap-sm-3"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedIn"
  }), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: `https://www.linkedin.com/in/${linkedInURLSlug}`,
    target: "_blank"
  }, "in/", linkedInURLSlug))), email && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "email"
  }), " ", /*#__PURE__*/React.createElement("span", null, t(email))), contactNum && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  }), " ", /*#__PURE__*/React.createElement("span", null, t(contactNum))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "location"
  }), " ", /*#__PURE__*/React.createElement("span", null, t(location)))));
};
export default ContactSection; 
