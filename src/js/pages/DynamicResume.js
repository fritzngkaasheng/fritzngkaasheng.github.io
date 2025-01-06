"use strict";

import { useTranslation } from "/src/js/i18n.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
import A4Container from "/src/js/components/A4Container.js";
import ContactSection from "/src/js/components/ContactSection.js";
import SummarySection from "/src/js/components/SummarySection.js";
import ExperienceSection from "/src/js/components/ExperienceSection.js";
import EducationSection from "/src/js/components/EducationSection.js";
import CertificationsSection from "/src/js/components/CertificationsSection.js";
import CourseworkSection from "/src/js/components/CourseworkSection.js";
import InvolvementSection from "/src/js/components/InvolvementSection.js";
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
    t
  } = useTranslation();
  const {
    preset,
    encodedFilter
  } = useParams();
  const [profile, setProfile] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [errorMessages, setErrorMessages] = useState([]);
  const addErrorMessage = errorMessage => {
    setErrorMessages(prevErrorMessages => [...prevErrorMessages, errorMessage]);
  };
  useEffect(() => {
    fetch("/dist/data/profile.min.json").then(res => res.json()).then(data => {
      setProfile(data);
    }).catch(err => {
      console.error("Failed to load profile.json:", err);
    });
  }, []);
  useEffect(() => {
    setErrorMessages([]);
    if (profile.data) {
      const filteredData = {};
      let presetName = profile.preset.default;
      if (preset) {
        const kebabCasePresetName = preset;
        const camelCasePresetName = kebabToCamelCase(kebabCasePresetName);
        presetName = camelCasePresetName;
      }
      let isSpecialPreset = false;
      if ("allDetails" == presetName || "c" == presetName && !encodedFilter) {
        isSpecialPreset = true;
        filteredData.roleName = "All Details";
        filteredData.experience = Object.values(profile.data.experience).sort((a, b) => {
          const dateA = new Date(parseInt(a.date.start.year), parseInt(a.date.start.month) - 1);
          const dateB = new Date(parseInt(b.date.start.year), parseInt(b.date.start.month) - 1);
          return dateB - dateA;
        });
        filteredData.education = Object.values(profile.data.education).sort((a, b) => {
          const dateA = a.date ? new Date(parseInt(a.date.end.year), parseInt(a.date.end.month) - 1) : new Date(0, 0);
          const dateB = b.date ? new Date(parseInt(b.date.end.year), parseInt(b.date.end.month) - 1) : new Date(0, 0);
          return dateB - dateA;
        });
        filteredData.certifications = Object.values(profile.data.certifications).reverse();
        filteredData.coursework = Object.values(profile.data.coursework).reverse();
        filteredData.involvement = Object.values(profile.data.involvement).reverse();
        filteredData.skills = profile.data.skills;
      }
      if (!isSpecialPreset || "c" == presetName && encodedFilter) {
        let filter = void 0;
        if ("c" == presetName) {
          isSpecialPreset = true;
          if (encodedFilter) {
            try {
              filter = JSON.parse(decodeURIComponent(encodedFilter));
            } catch (error) {
              addErrorMessage("Invalid JSON filter");
              return;
            }
            filter.roleName = "Resume";
          }
        }
        if (!isSpecialPreset) {
          filter = profile.preset[presetName];
        }
        filteredData.roleName = filter.roleName;
        if (!filter.experience) {
          addErrorMessage("Please provide at least 1 experience");
        }
        if (filter.experience) {
          filteredData.experience = filter.experience.map(experienceId => {
            if (profile.data.experience[experienceId]) {
              return profile.data.experience[experienceId];
            }
          }).sort((a, b) => {
            const dateA = new Date(parseInt(a.date.start.year), parseInt(a.date.start.month) - 1);
            const dateB = new Date(parseInt(b.date.start.year), parseInt(b.date.start.month) - 1);
            return dateB - dateA;
          }).filter(Boolean);
          if (filteredData.experience.length < 1) {
            addErrorMessage("Please provide at least 1 experience");
          }
        }
        if (!filter.education) {
          addErrorMessage("Please provide at least 1 education");
        }
        if (filter.education) {
          filteredData.education = filter.education.map(educationId => {
            if (profile.data.education[educationId]) {
              return profile.data.education[educationId];
            }
          }).sort((a, b) => {
            const dateA = new Date(parseInt(a.date.end.year), parseInt(a.date.end.month) - 1);
            const dateB = new Date(parseInt(b.date.end.year), parseInt(b.date.end.month) - 1);
            return dateB - dateA;
          }).filter(Boolean);
          if (filteredData.education.length < 1) {
            addErrorMessage("Please provide at least 1 education");
          }
        }
        if (!filter.certifications) {
          addErrorMessage("Please provide at least 1 certification");
        }
        if (filter.certifications) {
          filteredData.certifications = filter.certifications.map(certificationId => {
            if (profile.data.certifications[certificationId]) {
              return profile.data.certifications[certificationId];
            }
          }).sort((a, b) => {
            const dateA = new Date(parseInt(a.date.start.year));
            const dateB = new Date(parseInt(b.date.start.year));
            return dateB - dateA;
          }).filter(Boolean);
          if (filteredData.certifications.length < 1) {
            addErrorMessage("Please provide at least 1 certification");
          }
        }
        if (!filter.skills) {
          addErrorMessage("Please provide at least 1 skill");
        }
        if (filter.skills) {
          filteredData.skills = {};
          for (const [skillGroupName, skillIdList] of Object.entries(filter.skills)) {
            if (profile.data.skills[skillGroupName]) {
              filteredData.skills[skillGroupName] = {
                "name": profile.data.skills[skillGroupName].name,
                "skill": {}
              };
              skillIdList.map(skillId => {
                if (profile.data.skills[skillGroupName].skill[skillId]) {
                  filteredData.skills[skillGroupName].skill[skillId] = profile.data.skills[skillGroupName].skill[skillId];
                }
              });
            }
          }
          if (Object.keys(filteredData.skills).length < 1) {
            addErrorMessage("Please provide at least 1 skill");
          }
          if (Object.keys(filteredData.skills).length >= 1) {
            for (const skillGroupName of Object.keys(filteredData.skills)) {
              if (Object.keys(filteredData.skills[skillGroupName].skill).length < 1) {
                addErrorMessage("This skill group is empty:");
                addErrorMessage(`"${skillGroupName}"`);
              }
            }
          }
        }
        if (filter.coursework) {
          filteredData.coursework = filter.coursework.map(courseworkId => {
            if (profile.data.coursework[courseworkId]) {
              return profile.data.coursework[courseworkId];
            }
          }).filter(Boolean);
          if (filteredData.coursework.length < 1) {
            addErrorMessage("Please provide at least 1 coursework");
          }
        }
        if (filter.involvement) {
          filteredData.involvement = filter.involvement.map(involvementId => {
            if (profile.data.involvement[involvementId]) {
              return profile.data.involvement[involvementId];
            }
          }).filter(Boolean);
          if (filteredData.involvement.length < 1) {
            addErrorMessage("Please provide at least 1 involvement");
          }
        }
      }
      setFilteredData(filteredData);
    }
  }, [profile, preset, encodedFilter]);
  if (errorMessages.length > 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, errorMessages.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "message-container"
    }, errorMessages.map((msg, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "message"
    }, t(msg)))));
  }
  if (Object.keys(filteredData).length < 1) {
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
    summary: profile.preset[profile.preset.default].summary
  }), /*#__PURE__*/React.createElement(ExperienceSection, {
    experienceList: filteredData.experience
  }), /*#__PURE__*/React.createElement(EducationSection, {
    educationList: filteredData.education
  }), /*#__PURE__*/React.createElement(CertificationsSection, {
    certificationList: filteredData.certifications
  }), filteredData.coursework && /*#__PURE__*/React.createElement(CourseworkSection, {
    courseworkList: filteredData.coursework
  }), filteredData.involvement && /*#__PURE__*/React.createElement(InvolvementSection, {
    involvementList: filteredData.involvement
  }), /*#__PURE__*/React.createElement(SkillsSection, {
    skillList: filteredData.skills
  })));
};
export default DynamicResume; 
