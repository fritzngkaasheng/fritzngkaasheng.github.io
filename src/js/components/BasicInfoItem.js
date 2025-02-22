"use strict";

import Icon from "/src/js/Icons.js";
const React = window.React;
const BasicInfoItem = ({
  icon,
  text
}) => {
  return /*#__PURE__*/React.createElement("p", {
    className: "basic-info-p mb-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ms-2"
  }, text));
};
export default BasicInfoItem; 
