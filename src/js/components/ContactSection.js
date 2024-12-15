"use strict";

import { useTranslation } from "/src/js/i18n.js";
import Icon from "/src/js/Icons.js";
const ContactSection = ({
  fullName,
  country,
  linkedInURLSlug
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "contact-section container d-flex flex-column align-items-center pb-3"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "full-name"
  }, t(fullName)), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center flex-sm-row gap-sm-3"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "countryLocation"
  }), " ", /*#__PURE__*/React.createElement("span", null, t(country))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedIn"
  }), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: `https://www.linkedin.com/in/${linkedInURLSlug}`,
    target: "_blank"
  }, "in/", linkedInURLSlug)))));
};
export default ContactSection; 
