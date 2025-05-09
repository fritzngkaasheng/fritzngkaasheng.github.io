"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
	sortExperience,
	sortEducation
} from "/src/js/main.js";

import EditResumeButton from "/src/js/components/EditResumeButton.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
import EditResumeToolbar from "/src/js/components/EditResumeToolbar.js";
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
const { useState, useEffect } = React;
const { useParams } = window.ReactRouterDOM;

function kebabToCamelCase(str) {
  return str.replace(/-./g, function(match) {
      return match.charAt(1).toUpperCase();
  });
}

const DynamicResume = () => {
  const { t } = useTranslation();

  const { preset, mode, encodedFilter } = useParams();

  const [profile, setProfile] = useState({});
  const [filter, setFilter] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [errorMessages, setErrorMessages] = useState([]);

  const addErrorMessage = (errorMessage) => {
    setErrorMessages((prevErrorMessages) => [...prevErrorMessages, errorMessage]);
  };

  const updateExitResumeUrlWithFilter = (filter) => {
    const encodedFilter = encodeURIComponent(JSON.stringify(filter));

    window.location.href = "/#/dynamic-resume/c/edit/" + encodedFilter;
  };

  const toggleItem = (itemType, itemKey) => {
    setFilter((prevFilter) => {
      if (!prevFilter[itemType]) {
        prevFilter[itemType] = [];
      }
      const newItems = prevFilter[itemType].includes(itemKey)
        ? prevFilter[itemType].filter(key => key !== itemKey)
        : [...prevFilter[itemType], itemKey];
      const newFilter = { ...prevFilter, [itemType]: newItems };
      updateExitResumeUrlWithFilter(newFilter);
      return newFilter;
    });
  };

  const toggleSkillGroup = (itemKey, itemValue) => {
    setFilter((prevFilter) => {
      const newSkills = { ...prevFilter.skills };
      if (newSkills[itemKey]) {
        delete newSkills[itemKey];
      } else {
        newSkills[itemKey] = Object.keys(itemValue.skill);
      }
      const newFilter = { ...prevFilter, skills: newSkills };
      updateExitResumeUrlWithFilter(newFilter);
      return newFilter;
    });
  };

  const navigateToEditResumeMode = () => {
    const filterInFunc = filter;

    if (Object.keys(filterInFunc).length < 1) {

      filterInFunc.experience = filteredData.experience.map(experience => experience.key);
  
      filterInFunc.education = filteredData.education.map(education => education.key);
  
      filterInFunc.certifications = filteredData.certifications.map(certification => certification.key);
  
      filterInFunc.coursework = filteredData.coursework.map(coursework => coursework.key);
  
      filterInFunc.involvement = filteredData.involvement.map(involvement => involvement.key);
  
      filterInFunc.skills = {};
  
      for (const [skillGroupId, skillGroup] of Object.entries(filteredData.skills)) {
        filterInFunc.skills[skillGroupId] = [];
  
        Object.keys(skillGroup.skill).map(skillId => {
          filterInFunc.skills[skillGroupId].push(skillId);
        });
      }
    }

    setFilter(filterInFunc);
    setFilteredData(loadAllFilteredData());
    updateExitResumeUrlWithFilter(filterInFunc);
  };

  const loadAllFilteredData = () => {
    const filteredData = {};

    filteredData.roleName = "All Details";

    filteredData.summary = profile.preset[profile.preset.default].summary;

    filteredData.experience = Object.entries(profile.data.experience)
    .map(([key, value]) => ({
      key,
      ...value,
    }))
    .sort(sortExperience);

    filteredData.education = Object.entries(profile.data.education)
    .map(([key, value]) => ({
      key,
      ...value,
    }))
    .sort(sortEducation);

    filteredData.certifications = Object.entries(profile.data.certifications)
    .reverse()
    .map(([key, value]) => ({
      key,
      ...value,
    }));

    filteredData.coursework = Object.entries(profile.data.coursework)
    .reverse()
    .map(([key, value]) => ({
      key,
      ...value,
    }));

    filteredData.involvement = Object.entries(profile.data.involvement)
    .reverse()
    .map(([key, value]) => ({
      key,
      ...value,
    }));

    filteredData.skills = profile.data.skills;

    return filteredData;
  }

  useEffect(() => {
    fetch("/dist/data/profile.min.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.error("Failed to load profile.min.json:", err);
      });
  }, []);

  useEffect(() => {
    setErrorMessages([]);

    if (profile.data) {
      let filteredData = {};

      let presetName = profile.preset.default;

      if (preset) {
        const kebabCasePresetName = preset;
        const camelCasePresetName = kebabToCamelCase(kebabCasePresetName);
        presetName = camelCasePresetName;
      }

      let isSpecialPreset = false;

      if ("allDetails" == presetName 
        || ( 
          "c" == presetName 
          && ( 
            mode == "edit" 
            || encodedFilter == "edit"
            || !encodedFilter 
          )
        )
      ) {
        isSpecialPreset = true;

        if (encodedFilter && encodedFilter != "edit") {
          let filter = {};
          try {
            filter = JSON.parse(decodeURIComponent(encodedFilter));
          } catch (error) {
            addErrorMessage("Invalid JSON filter");
            return;
          }
          filter.roleName = "Resume";
          setFilter(filter);

          if (!filter.experience) {
            addErrorMessage("Please provide at least 1 experience");
          }

          if (!filter.education) {
            addErrorMessage("Please provide at least 1 education");
          }

          if (!filter.certifications) {
            addErrorMessage("Please provide at least 1 certification");
          }

          if (!filter.skills) {
            addErrorMessage("Please provide at least 1 skill");
          }
        }

        filteredData = loadAllFilteredData();
      }

      if (!isSpecialPreset 
        || ( 
          "c" == presetName 
          && mode != "edit" 
          && encodedFilter != "edit"
          && encodedFilter 
        )
      ) {
        let filter = {};

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

        setFilter(filter);

        filteredData.roleName = filter.roleName;

        if (!filter.summary) {
          filteredData.summary = profile.preset[profile.preset.default].summary;
        }
        
        if (filter.summary) {
          filteredData.summary = filter.summary;
        }

        if (!filter.experience) {
          addErrorMessage("Please provide at least 1 experience");
        }

        if (filter.experience) {
          filteredData.experience = filter.experience
          .map(experienceId => {
            if (profile.data.experience[experienceId]) {
              return profile.data.experience[experienceId];
            }
          })
          .sort(sortExperience)
          .filter(Boolean);

          if (filteredData.experience.length < 1) {
            addErrorMessage("Please provide at least 1 experience");
          }
        }

        if (!filter.education) {
          addErrorMessage("Please provide at least 1 education");
        }

        if (filter.education) {
          filteredData.education = filter.education
          .map(educationId => {
            if (profile.data.education[educationId]) {
              return profile.data.education[educationId];
            }
          })
          .sort(sortEducation)
          .filter(Boolean);

          if (filteredData.education.length < 1) {
            addErrorMessage("Please provide at least 1 education");
          }
        }

        if (!filter.certifications) {
          addErrorMessage("Please provide at least 1 certification");
        }

        if (filter.certifications) {
          filteredData.certifications = filter.certifications
          .map(certificationId => {
            if (profile.data.certifications[certificationId]) {
              return profile.data.certifications[certificationId];
            }
          })
          .sort((a, b) => {
            const dateA = new Date(
              parseInt(a.date.start.year)
            );
            const dateB = new Date(
              parseInt(b.date.start.year)
            );
    
            return dateB - dateA;
          })
          .filter( Boolean );

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
              skillIdList.map((skillId) => {
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
          filteredData.coursework = filter.coursework
          .map(courseworkId => {
            if (profile.data.coursework[courseworkId]) {
              return profile.data.coursework[courseworkId];
            }
          })
          .filter( Boolean );

          if (filteredData.coursework.length < 1) {
            delete filteredData.coursework;
          }
        }

        if (filter.involvement) {
          filteredData.involvement = filter.involvement
          .map(involvementId => {
            if (profile.data.involvement[involvementId]) {
              return profile.data.involvement[involvementId];
            }
          })
          .filter( Boolean );

          if (filteredData.involvement.length < 1) {
            delete filteredData.involvement;
          }
        }
      }

      setFilteredData(filteredData);
    }
  }, [profile, preset, encodedFilter, mode]);

  if (errorMessages.length > 0 && mode !== "edit") {
    return (
      <div className="container">
        {errorMessages.length > 0 && (
          <div className="message-container">
            {errorMessages.map((msg, index) => (
              <div key={index} className="message">
                {t(msg)}
              </div>
            ))}
          </div>
        )}
        <EditResumeButton
          navigateToEditResumeMode={navigateToEditResumeMode}
        />
      </div>
    );
  }

  if (
    Object.keys(filteredData).length < 1 
    || (
      mode == "edit" 
      && Object.keys(filter).length < 1
    )
  ) {
    return (
      <>
        <LoadingSection />
      </>
    );
  }

  return (
    <>
      {(profile.improvedHRProcessMode === "true" && mode !== "edit") && 
        <BottomRightFloatingButtons
          fullName={profile.data.contact.fullName}
          roleName={filteredData.roleName}
        />
      }
      {(mode === "edit" || encodedFilter === "edit") &&
        <EditResumeToolbar 
          encodedFilter={encodedFilter}
          mode={mode}
          filteredData={filteredData}
          navigateToEditResumeMode={navigateToEditResumeMode}
        />
      }
      <A4Container>
        <ContactSection
          fullName={profile.data.contact.fullName}
          location={profile.data.contact.location}
          linkedInURLSlug={profile.data.contact.linkedInURLSlug}
        />
        <SummarySection
          summary={filteredData.summary}
        />
        <ExperienceSection
          experienceList={filteredData.experience}
          mode={mode}
          filter={filter}
          toggleItem={(itemKey) => toggleItem('experience', itemKey)}
          navigateToEditResumeMode={navigateToEditResumeMode}
        />
        <EducationSection
          educationList={filteredData.education}
          mode={mode}
          filter={filter}
          toggleItem={(itemKey) => toggleItem('education', itemKey)}
        />
        <CertificationsSection
          certificationList={filteredData.certifications}
          mode={mode}
          filter={filter}
          toggleItem={(itemKey) => toggleItem('certifications', itemKey)}
        />
        {filteredData.coursework && (<CourseworkSection
          courseworkList={filteredData.coursework}
          mode={mode}
          filter={filter}
          toggleItem={(itemKey) => toggleItem('coursework', itemKey)}
        />)}
        {filteredData.involvement && (<InvolvementSection
          involvementList={filteredData.involvement}
          mode={mode}
          filter={filter}
          toggleItem={(itemKey) => toggleItem('involvement', itemKey)}
        />)}
        <SkillsSection
          skillList={filteredData.skills}
          mode={mode}
          filter={filter}
          toggleSkillGroup={toggleSkillGroup}
        />
      </A4Container>
    </>
  );
};

export default DynamicResume;
