"use strict";

const {
  Outlet
} = window.ReactRouterDOM;
const MainContainer = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "main-container"
  }, /*#__PURE__*/React.createElement(Outlet, null));
};
export default MainContainer; 
