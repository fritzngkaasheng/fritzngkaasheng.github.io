"use strict";

import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
const {
  Outlet
} = window.ReactRouterDOM;
const MainContainer = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "main-container"
  }, /*#__PURE__*/React.createElement(BottomRightFloatingButtons, null), /*#__PURE__*/React.createElement(Outlet, null));
};
export default MainContainer; 
