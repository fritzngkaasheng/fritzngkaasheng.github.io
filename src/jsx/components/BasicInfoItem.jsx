"use strict";

import Icon from "/src/js/Icons.js";

const React = window.React;

const BasicInfoItem = ({ icon, text }) => {
  return (
    <p className="basic-info-p mb-0">
      <Icon name={icon} />
      <span className="ms-2">{text}</span>
    </p>
  );
};

export default BasicInfoItem;
