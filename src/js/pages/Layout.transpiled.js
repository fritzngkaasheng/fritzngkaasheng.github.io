"use strict";

const { Outlet, Link } = window.ReactRouterDOM;

const Layout = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "nav",
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/" },
            "Home (react-router-dom)"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/blogs" },
            "Blogs"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/contact" },
            "Contact"
          )
        )
      )
    ),
    React.createElement(Outlet, null)
  );
};

export default Layout;
