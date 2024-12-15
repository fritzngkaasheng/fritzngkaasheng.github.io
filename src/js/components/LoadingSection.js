"use strict";

import { useTranslation } from "/src/js/i18n.js";
import Icon from "/src/js/Icons.js";
const LoadingSection = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "loading-section container"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "loading-title"
  }, t('Loading...'), " ", /*#__PURE__*/React.createElement(Icon, {
    name: "loadingSpinner"
  })));
};
export default LoadingSection; 
