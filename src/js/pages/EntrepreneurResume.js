"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { sortExperience, sortEducation } from "/src/js/main.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
import A4Container from "/src/js/components/A4Container.js";
import ContactSection from "/src/js/components/ContactSection.js";
import SummarySection from "/src/js/components/SummarySection.js";
import ExperienceSection from "/src/js/components/ExperienceSection.js";
import EducationSection from "/src/js/components/EducationSection.js";
const React = window.React;
const {
  useState,
  useEffect
} = React;
const EntrepreneurResume = () => {
  const {
    t
  } = useTranslation();
  const [profile, setProfile] = useState({});
  const [filter, setFilter] = useState({});
  const [filteredData, setFilteredData] = useState({});
  useEffect(() => {
    fetch("/dist/data/profile.min.json").then(res => res.json()).then(data => {
      setProfile(data);
    }).catch(err => {
      console.error("Failed to load profile.min.json:", err);
    });
  }, []);
  useEffect(() => {
    if (profile.data) {
      let filteredData = {};
      let filter = {};
      filter = profile.entrepreneurPreset.entrepreneur;
      setFilter(filter);
      filteredData.roleName = filter.roleName;
      if (filter.experience) {
        filteredData.experience = filter.experience.map(experienceId => {
          if (profile.data.experience[experienceId]) {
            return profile.data.experience[experienceId];
          }
        }).sort(sortExperience).filter(Boolean);
      }
      if (filter.education) {
        filteredData.education = filter.education.map(educationId => {
          if (profile.data.education[educationId]) {
            return profile.data.education[educationId];
          }
        }).sort(sortEducation).filter(Boolean);
      }
      setFilteredData(filteredData);
    }
  }, [profile]);
  if (Object.keys(filteredData).length < 1) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoadingSection, null));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, profile.improvedHRProcessMode === "true" && /*#__PURE__*/React.createElement(BottomRightFloatingButtons, {
    fullName: profile.data.contact.fullName,
    roleName: filteredData.roleName
  }), /*#__PURE__*/React.createElement(A4Container, null, /*#__PURE__*/React.createElement(ContactSection, {
    fullName: profile.data.contact.fullName,
    location: profile.data.contact.country,
    linkedInURLSlug: profile.data.contact.linkedInURLSlug
  }), /*#__PURE__*/React.createElement(SummarySection, {
    summary: profile.entrepreneurPreset.entrepreneur.summary
  }), /*#__PURE__*/React.createElement(ExperienceSection, {
    experienceList: filteredData.experience,
    mode: "",
    filter: filter,
    toggleItem: itemKey => toggleItem('experience', itemKey)
  }), /*#__PURE__*/React.createElement(EducationSection, {
    educationList: filteredData.education,
    mode: "",
    filter: filter,
    toggleItem: itemKey => toggleItem('education', itemKey)
  })));
};
export default EntrepreneurResume; 
