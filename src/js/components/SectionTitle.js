"use strict";

import { useTranslation } from "/src/js/i18n.js";
const SectionTitle = ({
  id,
  text
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
    className: "border-2"
  }), /*#__PURE__*/React.createElement("h3", {
    id: id,
    className: "mb-0"
  }, t(text)), /*#__PURE__*/React.createElement("hr", {
    className: "opacity-100 my-1 border-2"
  }));
};
export default SectionTitle; 
