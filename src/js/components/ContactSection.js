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
  country,
  linkedInURLSlug
}) => {
  const {
    t
  } = useTranslation();
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
  return /*#__PURE__*/React.createElement("div", {
    className: "contact-section container d-flex flex-column align-items-center pb-3"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "full-name"
  }, t(fullName)), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center flex-sm-row gap-sm-3"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "countryLocation"
  }), " ", /*#__PURE__*/React.createElement("span", null, t(country))), contactNum && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  }), " ", /*#__PURE__*/React.createElement("span", null, t(contactNum))), email && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "email"
  }), " ", /*#__PURE__*/React.createElement("span", null, t(email))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedIn"
  }), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: `https://www.linkedin.com/in/${linkedInURLSlug}`,
    target: "_blank"
  }, "in/", linkedInURLSlug)))));
};
export default ContactSection; 
