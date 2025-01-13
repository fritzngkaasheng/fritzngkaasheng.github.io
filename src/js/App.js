"use strict";

const {
  HashRouter,
  Routes,
  Route
} = window.ReactRouterDOM;
import Layout from "/src/js/pages/Layout.js";
import Home from "/src/js/pages/Home.js";
import DynamicResume from "/src/js/pages/DynamicResume.js";
import AcademicCV from "/src/js/pages/AcademicCV.js";
import EntrepreneurResume from "/src/js/pages/EntrepreneurResume.js";
import DatingProfile from "/src/js/pages/DatingProfile.js";
import WillITakeTheJobQuiz from "/src/js/pages/WillITakeTheJobQuiz.js";
import Error404Page from "/src/js/pages/Error404Page.js";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
      path: "/",
      element: /*#__PURE__*/React.createElement(Layout, null)
    }, /*#__PURE__*/React.createElement(Route, {
      index: true,
      element: /*#__PURE__*/React.createElement(Home, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "dynamic-resume",
      element: /*#__PURE__*/React.createElement(DynamicResume, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "dynamic-resume/:preset",
      element: /*#__PURE__*/React.createElement(DynamicResume, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "dynamic-resume/:preset/:encodedFilter",
      element: /*#__PURE__*/React.createElement(DynamicResume, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "dynamic-resume/:preset/:mode/:encodedFilter",
      element: /*#__PURE__*/React.createElement(DynamicResume, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "academic-cv",
      element: /*#__PURE__*/React.createElement(AcademicCV, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "entrepreneur-resume",
      element: /*#__PURE__*/React.createElement(EntrepreneurResume, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "dating-profile",
      element: /*#__PURE__*/React.createElement(DatingProfile, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "will-i-take-the-job-quiz",
      element: /*#__PURE__*/React.createElement(WillITakeTheJobQuiz, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "*",
      element: /*#__PURE__*/React.createElement(Error404Page, null)
    }))));
  }
}
;
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null)); 
