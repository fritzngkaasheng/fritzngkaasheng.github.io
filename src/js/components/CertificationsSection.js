"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
const CertificationsSection = ({
  certificationList,
  mode,
  filter
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
    className: mode === "edit" && !filter.certifications.find(certificationId => certificationId == certification.key) && inactiveElementClasses
  }, /*#__PURE__*/React.createElement("h4", null, t(certification.name)), /*#__PURE__*/React.createElement("p", null, t(certification.organisation), " \u2022 ", t(certification.date.start.year)))));
};
export default CertificationsSection; 
