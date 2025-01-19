"use strict";

import ComingSoonSection from "/src/js/components/ComingSoonSection.js";
const WillITakeTheJobQuiz = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    for: "quizOrigin",
    className: "form-label"
  }, "Which country is this job from?"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    name: "origin",
    id: "quizOrigin",
    "aria-label": "Which country is this job from?"
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Choose..."), /*#__PURE__*/React.createElement("option", {
    value: "sg"
  }, "Singapore"), /*#__PURE__*/React.createElement("option", {
    value: "au"
  }, "Australia"), /*#__PURE__*/React.createElement("option", {
    value: "nz"
  }, "New Zealand"), /*#__PURE__*/React.createElement("option", {
    value: "cn"
  }, "China"), /*#__PURE__*/React.createElement("option", {
    value: "de"
  }, "Germany"), /*#__PURE__*/React.createElement("option", {
    value: "my"
  }, "Malaysia"), /*#__PURE__*/React.createElement("option", {
    value: "tw"
  }, "Taiwan"), /*#__PURE__*/React.createElement("option", {
    value: "gb"
  }, "United Kingdom of Great Britain and Northern Ireland"), /*#__PURE__*/React.createElement("option", {
    value: "th"
  }, "Thailand"), /*#__PURE__*/React.createElement("option", {
    value: "mm"
  }, "Myanmar"))), /*#__PURE__*/React.createElement("h2", null, "The probability that I will choose this job is NaN%")));
};
export default WillITakeTheJobQuiz; 
