"use strict";

import Icon from "/src/js/components/Icons.js";
import DownloadAsPDFLink from "/src/js/components/DownloadAsPDFLink.js";
import DownloadAsDocxLink from "/src/js/components/DownloadAsDocxLink.js";
const BottomRightFloatingButtons = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "bottom-right-floating-btns",
    className: "btn-group dropstart position-fixed bottom-0 end-0 pb-2 pe-2"
  }, /*#__PURE__*/React.createElement("button", {
    id: "download-dropstart",
    type: "button",
    className: "btn btn-secondary dropdown-toggle",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DownloadAsPDFLink, null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DownloadAsDocxLink, null))));
};
export default BottomRightFloatingButtons; 
