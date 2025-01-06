"use strict";

import { useTranslation } from "/src/js/i18n.js";
const {
  useEffect
} = React;
const {
  Link,
  useLocation
} = window.ReactRouterDOM;
const Navigation = () => {
  const {
    t
  } = useTranslation();
  const location = useLocation();
  const isActive = path => location.pathname === path;
  useEffect(() => {
    document.querySelectorAll("#offcanvasNavbar a:not(.dropdown-toggle)").forEach(function (element) {
      element.addEventListener('click', function () {
        var offcanvasElements = document.querySelectorAll('.offcanvas');
        offcanvasElements.forEach(function (offcanvas) {
          var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
          if (bsOffcanvas) {
            bsOffcanvas.hide();
          }
        });
      });
    });
  }, []);
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav justify-content-end flex-grow-1 pe-3"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(Link, {
    className: `nav-link${isActive('/') ? ' active' : ''}`,
    "aria-current": isActive('/') ? 'page' : undefined,
    to: "/"
  }, t('Home'))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/React.createElement("a", {
    id: "resume-dropdown",
    className: "nav-link dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, t('Resume')), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume') ? 'page' : undefined,
    to: "/dynamic-resume"
  }, t('Default'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume/all-details') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume/all-details') ? 'page' : undefined,
    to: "/dynamic-resume/all-details"
  }, t('All Details'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume/software-engineer') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume/software-engineer') ? 'page' : undefined,
    to: "/dynamic-resume/software-engineer"
  }, t('Software Engineer'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume/integration-engineer') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume/integration-engineer') ? 'page' : undefined,
    to: "/dynamic-resume/integration-engineer"
  }, t('Integration Engineer'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume/cyber-security-analyst') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume/cyber-security-analyst') ? 'page' : undefined,
    to: "/dynamic-resume/cyber-security-analyst"
  }, t('Cyber Security Analyst'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume/system-analyst') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume/system-analyst') ? 'page' : undefined,
    to: "/dynamic-resume/system-analyst"
  }, t('System Analyst'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume/technical-support-engineer') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume/technical-support-engineer') ? 'page' : undefined,
    to: "/dynamic-resume/technical-support-engineer"
  }, t('Technical Support Engineer'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: `dropdown-item${isActive('/dynamic-resume/i-t-consultant') ? ' active' : ''}`,
    "aria-current": isActive('/dynamic-resume/i-t-consultant') ? 'page' : undefined,
    to: "/dynamic-resume/i-t-consultant"
  }, t('IT Consultant'))))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(Link, {
    className: `nav-link${isActive('/academic-cv') ? ' active' : ''}`,
    "aria-current": isActive('/academic-cv') ? 'page' : undefined,
    to: "/academic-cv"
  }, t('Academic CV'))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(Link, {
    className: `nav-link${isActive('/entrepreneur-resume') ? ' active' : ''}`,
    "aria-current": isActive('/entrepreneur-resume') ? 'page' : undefined,
    to: "/entrepreneur-resume"
  }, t('Entrepreneur Resume'))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(Link, {
    className: `nav-link${isActive('/dating-profile') ? ' active' : ''}`,
    "aria-current": isActive('/dating-profile') ? 'page' : undefined,
    to: "/dating-profile"
  }, t('Dating Profile'))), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(Link, {
    className: `nav-link${isActive('/will-i-take-the-job-quiz') ? ' active' : ''}`,
    "aria-current": isActive('/will-i-take-the-job-quiz') ? 'page' : undefined,
    to: "/will-i-take-the-job-quiz"
  }, t('Will I Take the Job? Quiz')))));
};
export default Navigation; 
