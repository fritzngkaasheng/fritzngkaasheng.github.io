"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { inactiveElementClasses } from "/src/js/main.js";
import SectionTitle from "/src/js/components/SectionTitle.js";
import CheckboxWithLabel from "/src/js/components/CheckboxWithLabel.js";
const AwardsSection = ({
  awardList,
  mode,
  filter,
  toggleItem
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    className: "awards-section container"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    id: "awards-title",
    text: "AWARDS"
  }), awardList.map(award => /*#__PURE__*/React.createElement("div", {
    className: mode === "edit" && (!filter.award || !(filter.award ? filter.award?.find(awardId => awardId == award.key) : false)) && inactiveElementClasses
  }, mode === "edit" && /*#__PURE__*/React.createElement(CheckboxWithLabel, {
    id: `award-${award.key}`,
    checked: filter.award ? filter.award.includes(award.key) : false,
    onChange: () => toggleItem(award.key),
    label: t(award.role)
  }), /*#__PURE__*/React.createElement("h4", null, t(award.role)), /*#__PURE__*/React.createElement("p", null, t(award.organisation), award.description && award.description.type === "bullet" && /*#__PURE__*/React.createElement("ul", null, award.description.data.map((bulletText, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, t(bulletText))))))));
};
export default AwardsSection; 
