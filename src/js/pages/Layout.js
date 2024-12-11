"use strict";

const {
  Outlet,
  Link
} = window.ReactRouterDOM;
const Layout = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home (react-router-dom)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/blogs"
  }, "Blogs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/contact"
  }, "Contact")))), /*#__PURE__*/React.createElement(Outlet, null));
};
export default Layout; 
