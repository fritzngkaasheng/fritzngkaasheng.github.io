"use strict";

import { useTranslation } from "/src/js/i18n.js";
const {
  Link
} = window.ReactRouterDOM;
const Navigation = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, t('Home'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/dynamic-resume"
  }, t('Resume'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/academic-cv"
  }, t('Academic CV'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/entrepreneur-resume"
  }, t('Entrepreneur Resume'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/dating-profile"
  }, t('Dating Profile'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/will-i-take-the-job-quiz"
  }, t('Will I Take the Job? Quiz')))));
};
export default Navigation; 
