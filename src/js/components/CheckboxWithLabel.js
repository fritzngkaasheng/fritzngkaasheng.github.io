"use strict";

const CheckboxWithLabel = ({
  id,
  checked,
  onChange,
  label
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    id: id,
    checked: checked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: id
  }, label));
};
export default CheckboxWithLabel; 
