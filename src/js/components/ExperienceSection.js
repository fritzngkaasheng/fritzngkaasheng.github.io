"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses, getDateText } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";
const ExperienceSection = ({
  experienceList,
  mode,
  filter,
  toggleItem
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "experience-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "experience-title",
    text: "EXPERIENCE"
  }), experienceList.map(experience => experience && /*#__PURE__*/React.createElement("div", {
    className: `mb-3${mode === "edit" && !(filter.experience ? filter.experience.find(experienceId => experienceId == experience.key) : false) ? " " + inactiveElementClasses : ""}`
  }, mode === "edit" && /*#__PURE__*/React.createElement(CheckboxWithLabel, {
    id: `experience-${experience.key}`,
    checked: filter.experience ? filter.experience.includes(experience.key) : false,
    onChange: () => toggleItem(experience.key),
    label: t(experience.role)
  }), /*#__PURE__*/React.createElement("h4", null, t(experience.role)), /*#__PURE__*/React.createElement("div", {
    className: "d-xl-flex justify-content-xl-between"
  }, /*#__PURE__*/React.createElement("h5", null, t(experience.company)), /*#__PURE__*/React.createElement("h5", null, t(getDateText(experience.date.start)), " - ", experience.date.end ? t(getDateText(experience.date.end)) : t("Present"), ", ", t(experience.location))), experience.description && experience.description.type === "bullet" && /*#__PURE__*/React.createElement("ul", null, experience.description.data.map((bulletText, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, t(bulletText)))))));
};
export default ExperienceSection; 
