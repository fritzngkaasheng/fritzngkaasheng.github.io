"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";
const CertificationsSection = ({
  certificationList,
  mode,
  filter,
  toggleItem
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "certifications-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "certifications-title",
    text: "CERTIFICATIONS"
  }), certificationList.map(certification => certification && /*#__PURE__*/React.createElement("div", {
    className: `mb-3 ${mode === "edit" && !(filter.certifications ? filter.certifications.find(certificationId => certificationId == certification.key) : false) && inactiveElementClasses}`
  }, mode === "edit" && /*#__PURE__*/React.createElement(CheckboxWithLabel, {
    id: `certification-${certification.key}`,
    checked: filter.certifications ? filter.certifications.includes(certification.key) : false,
    onChange: () => toggleItem(certification.key),
    label: t(certification.name)
  }), /*#__PURE__*/React.createElement("h4", null, t(certification.name)), /*#__PURE__*/React.createElement("p", {
    className: "mb-2"
  }, t(certification.organisation), " \u2022 ", t(certification.date.start.year)), certification.description && certification.description.type === "bullet" && /*#__PURE__*/React.createElement("ul", null, certification.description.data.map((bulletText, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, t(bulletText)))))));
};
export default CertificationsSection; 
