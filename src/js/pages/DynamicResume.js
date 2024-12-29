"use strict";

import LoadingSection from "/src/js/components/LoadingSection.js";
import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
import A4Container from "/src/js/components/A4Container.js";
import ContactSection from "/src/js/components/ContactSection.js";
import SummarySection from "/src/js/components/SummarySection.js";
import ExperienceSection from "/src/js/components/ExperienceSection.js";
import EducationSection from "/src/js/components/EducationSection.js";
import CertificationsSection from "/src/js/components/CertificationsSection.js";
import SkillsSection from "/src/js/components/SkillsSection.js";
const React = window.React;
const {
  useState,
  useEffect
} = React;
const {
  useParams
} = window.ReactRouterDOM;
function kebabToCamelCase(str) {
  return str.replace(/-./g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
const DynamicResume = () => {
  const {
    preset
  } = useParams();
  const [profile, setProfile] = useState({});
  const [filteredData, setFilteredData] = useState({});
  useEffect(() => {
    fetch("/dist/data/profile.min.json").then(res => res.json()).then(data => {
      setProfile(data);
    }).catch(err => {
      console.error("Failed to load profile.json:", err);
    });
  }, []);
  useEffect(() => {
    if (profile.data) {
      const filteredData = {};
      let presetName = profile.preset.default;
      if (preset) {
        const kebabCasePresetName = preset;
        const camelCasePresetName = kebabToCamelCase(kebabCasePresetName);
        presetName = camelCasePresetName;
      }
      filteredData.roleName = profile.preset[presetName].roleName;
      filteredData.experience = profile.preset[presetName].experience.map(experienceId => {
        return profile.data.experience[experienceId];
      }).sort((a, b) => {
        const dateA = new Date(parseInt(a.date.start.year), parseInt(a.date.start.month) - 1);
        const dateB = new Date(parseInt(b.date.start.year), parseInt(b.date.start.month) - 1);
        return dateB - dateA;
      });
      filteredData.education = profile.preset[presetName].education.map(educationId => {
        return profile.data.education[educationId];
      }).sort((a, b) => {
        const dateA = new Date(parseInt(a.date.end.year), parseInt(a.date.end.month) - 1);
        const dateB = new Date(parseInt(b.date.end.year), parseInt(b.date.end.month) - 1);
        return dateB - dateA;
      });
      filteredData.certifications = profile.preset[presetName].certifications.map(certificationId => {
        return profile.data.certifications[certificationId];
      }).sort((a, b) => {
        const dateA = new Date(parseInt(a.date.start.year));
        const dateB = new Date(parseInt(b.date.start.year));
        return dateB - dateA;
      });
      filteredData.skills = {};
      for (const [skillGroupName, skillIdList] of Object.entries(profile.preset[presetName].skills)) {
        filteredData.skills[skillGroupName] = {
          "name": profile.data.skills[skillGroupName].name,
          "skill": {}
        };
        skillIdList.map(skillId => {
          filteredData.skills[skillGroupName].skill[skillId] = profile.data.skills[skillGroupName].skill[skillId];
        });
      }
      setFilteredData(filteredData);
    }
  }, [profile, preset]);
  if (!filteredData.experience) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoadingSection, null));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, profile.improvedHRProcessMode === "true" && /*#__PURE__*/React.createElement(BottomRightFloatingButtons, {
    fullName: profile.data.contact.fullName,
    roleName: filteredData.roleName
  }), /*#__PURE__*/React.createElement(A4Container, null, /*#__PURE__*/React.createElement(ContactSection, {
    fullName: profile.data.contact.fullName,
    country: profile.data.contact.country,
    linkedInURLSlug: profile.data.contact.linkedInURLSlug
  }), /*#__PURE__*/React.createElement(SummarySection, {
    summary: profile.preset.softwareEngineer.summary
  }), /*#__PURE__*/React.createElement(ExperienceSection, {
    experienceList: filteredData.experience
  }), /*#__PURE__*/React.createElement(EducationSection, {
    educationList: filteredData.education
  }), /*#__PURE__*/React.createElement(CertificationsSection, {
    certificationList: filteredData.certifications
  }), /*#__PURE__*/React.createElement(SkillsSection, {
    skillList: filteredData.skills
  })));
};
export default DynamicResume; 
