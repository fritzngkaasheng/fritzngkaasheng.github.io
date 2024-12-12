"use strict";

import DownloadAsPDFButton from "/src/js/components/DownloadAsPDFButton.js";
import DownloadAsDocxButton from "/src/js/components/DownloadAsDocxButton.js";
const BottomRightFloatingButtons = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "bottom-right-floating-btns"
  }, /*#__PURE__*/React.createElement(DownloadAsPDFButton, null), /*#__PURE__*/React.createElement(DownloadAsDocxButton, null));
};
export default BottomRightFloatingButtons; 
