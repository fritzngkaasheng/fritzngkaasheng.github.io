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
    className: "row vh-100 justify-content-center align-items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "name",
    className: "display-5 mb-3 fw-bold"
  }, t("Fritz Ng")), /*#__PURE__*/React.createElement("h4", {
    className: "mb-4"
  }, t("Remote IT Professional")), /*#__PURE__*/React.createElement("h4", {
    className: "mb-4"
  }, t("Specializing in Software Development, Cybersecurity")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "#/dynamic-resume"
  }, t("Learn More")))), /*#__PURE__*/React.createElement("div", {
    id: "about-me-section",
    className: "row vh-100 justify-content-center align-items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fw-bold"
  }, t("About Me")), /*#__PURE__*/React.createElement("p", null, t("I am a software Engineer with 1 year of experience in Laravel, PHP, and CodeIgniter. Successfully deployed over 25 updates and added more than 8 new features to enhance user experience for over 100 users. Open to remote opportunities globally.")))), /*#__PURE__*/React.createElement("div", {
    id: "skills-section",
    className: "row vh-100 justify-content-center align-items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
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
  }, t(".NET Framework"))))), /*#__PURE__*/React.createElement("div", {
    id: "experience-section",
    className: "row vh-100 justify-content-center align-items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fw-bold"
  }, t("Experience")), /*#__PURE__*/React.createElement("div", {
    className: "job"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fw-bold"
  }, t("Intern"), " - ", t("B2BE")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "fw-bold"
  }, t("Duration"), ":"), " ", t("April 2023"), " - ", t("July 2023")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "fw-bold"
  }, t("Responsibilities"), ":"), " ", t("Enhanced CodeIgniter and Laravel by implementing client-requested features, resolving critical bugs, and deploying numerous updates, improving the experience for over 100 users. Conducted impact analysis to ensure system efficiency and stability."))))), /*#__PURE__*/React.createElement("div", {
    id: "contact-me-section",
    className: "row vh-100 justify-content-center align-items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fw-bold"
  }, t("Contact Me")), /*#__PURE__*/React.createElement("p", null, t("If you're interested in working with me, feel free to reach out!")), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-wrap justify-content-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "mailto:fritzngkaasheng@gmail.com"
  }, t("Email Me")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "https://www.linkedin.com/in/fritzngkaasheng",
    target: "_blank"
  }, t("LinkedIn"))))));
};
export default Home; 
