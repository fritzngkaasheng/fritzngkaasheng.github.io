"use strict";

import { useTranslation } from "/src/js/i18n.js";
const Home = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "home-page container-fluid vh-100 overflow-y-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    id: "intro-section",
    className: "row vh-100 justify-content-center align-items-center text-center custom-bg-color-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col w-md-container"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "name",
    className: "display-5 mb-3 fw-bold"
  }, t("Fritz Ng")), /*#__PURE__*/React.createElement("h4", {
    className: "mb-4"
  }, t("Remote IT Professional")), /*#__PURE__*/React.createElement("h4", {
    className: "mb-4"
  }, t("Specializing in Cybersecurity, Software Development")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "#/dynamic-resume"
  }, t("Learn More")))), /*#__PURE__*/React.createElement("div", {
    id: "about-me-section",
    className: "row vh-100 justify-content-center align-items-center text-center custom-bg-color-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col w-md-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fw-bold"
  }, t("About Me")), /*#__PURE__*/React.createElement("p", null, t("I am an IT professional with 2 years in system development and support, delivering 25+ updates and 8+ features for 100+ users. Supported 200+ offshore, rig, remote, and office users with secure access (SSO, MFA, RBAC) under ISO 27001 standards; open to global remote roles.")))), /*#__PURE__*/React.createElement("div", {
    id: "skills-section",
    className: "row vh-100 justify-content-center align-items-center text-center custom-bg-color-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col w-md-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-4 fw-bold"
  }, t("Skills")), /*#__PURE__*/React.createElement("div", {
    className: "skill-list d-flex flex-wrap gap-3 justify-content-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("REST APIs")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("Git")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("Laravel")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("CodeIgniter")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("PHP")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("SQL")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("JavaScript")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("jQuery")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("CSS")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("HTML")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("Java")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t(".NET Framework")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-info"
  }, t("ServiceNow"))))), /*#__PURE__*/React.createElement("div", {
    id: "experience-section",
    className: "row vh-100 justify-content-center align-items-center text-center custom-bg-color-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col w-md-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fw-bold"
  }, t("Experience")), /*#__PURE__*/React.createElement("div", {
    className: "job"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fw-bold"
  }, t("Associate Technical Support"), " - ", t("Tech Mahindra")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "fw-bold"
  }, t("Duration"), ":"), " ", t("December 2024"), " - ", t("Present")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "fw-bold"
  }, t("Responsibilities"), ":"), " ", t("Provided technical support as a contractor via Tech Mahindra, including a dedicated assignment at Baker Hughes. Resolved 30+ incidents across cloud, VDI, cybersecurity, and server maintenance, reducing system downtime. Managed 200+ offshore, rig, remote, and office users by implementing SSO, MFA, and RBAC to meet ISO 27001 compliance."))))), /*#__PURE__*/React.createElement("div", {
    id: "contact-me-section",
    className: "row vh-100 justify-content-center align-items-center text-center custom-bg-color-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col w-md-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fw-bold"
  }, t("Contact Me")), /*#__PURE__*/React.createElement("p", null, t("If you're interested in working with me, feel free to reach out!")), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-wrap justify-content-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg btn-email",
    href: "mailto:fritzngkaasheng@gmail.com"
  }, t("Email Me")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg btn-linkedin",
    href: "https://www.linkedin.com/in/fritzngkaasheng",
    target: "_blank"
  }, t("LinkedIn"))))));
};
export default Home; 
