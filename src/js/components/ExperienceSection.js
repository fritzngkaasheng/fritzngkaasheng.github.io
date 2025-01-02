"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { getDateText } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
const ExperienceSection = ({
  experienceList
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "experience-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "experience-title",
    text: "EXPERIENCE"
  }), experienceList.map(experience => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, t(experience.role)), /*#__PURE__*/React.createElement("div", {
    className: "d-xl-flex justify-content-xl-between"
  }, /*#__PURE__*/React.createElement("h5", null, t(experience.company)), /*#__PURE__*/React.createElement("h5", null, t(getDateText(experience.date.start)), " - ", t(getDateText(experience.date.end)), ", ", t(experience.location))), experience.description && experience.description.type === "bullet" && /*#__PURE__*/React.createElement("ul", null, experience.description.data.map((bulletText, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, t(bulletText)))))));
};
export default ExperienceSection; 
