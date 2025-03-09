"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
	sortExperience,
	sortEducation
} from "/src/js/main.js";

import LoadingSection from "/src/js/components/LoadingSection.js";
import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
import A4Container from "/src/js/components/A4Container.js";
import ContactSection from "/src/js/components/ContactSection.js";
import SummarySection from "/src/js/components/SummarySection.js";
import EducationSection from "/src/js/components/EducationSection.js";
import ExperienceSection from "/src/js/components/ExperienceSection.js";
import AwardsSection from "/src/js/components/AwardsSection.js";
import CertificationsSection from "/src/js/components/CertificationsSection.js";
import SkillsSection from "/src/js/components/SkillsSection.js";

const React = window.React;
const { useState, useEffect } = React;

const AcademicCV = () => {
  const { t } = useTranslation();

  const [profile, setProfile] = useState({});
  const [filter, setFilter] = useState({});
  const [filteredData, setFilteredData] = useState({});

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
    if (profile.data) {
      let filteredData = {};

      let filter = {};

      filter = profile.academicPreset.academic;

      setFilter(filter);

      filteredData.roleName = filter.roleName;

      if (filter.experience) {
        filteredData.experience = filter.experience
        .map(experienceId => {
          if (profile.data.experience[experienceId]) {
            return profile.data.experience[experienceId];
          }
        })
        .sort(sortExperience)
        .filter(Boolean);
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
      }

      if (filter.awards) {
        filteredData.awards = filter.awards
        .map(awardId => {
          if (profile.data.awards[awardId]) {
            return profile.data.awards[awardId];
          }
        })
        .filter(Boolean);

        if (filteredData.awards.length < 1) {
          delete filteredData.awards;
        }
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
      }
      

      setFilteredData(filteredData);
    }
  }, [profile]);

  if (Object.keys(filteredData).length < 1) {
    return (
      <>
        <LoadingSection />
      </>
    );
  }

  return (
    <>
      {profile.improvedHRProcessMode === "true" && 
        <BottomRightFloatingButtons
          fullName={profile.data.contact.fullName}
          roleName={filteredData.roleName}
        />
      }
      <A4Container>
        <ContactSection
          fullName={profile.data.contact.fullName}
          location={profile.data.contact.country}
          linkedInURLSlug={profile.data.contact.linkedInURLSlug}
        />
        <SummarySection
          summary={profile.academicPreset.academic.summary}
        />
        <EducationSection
          educationList={filteredData.education}
          mode=""
          filter={filter}
          toggleItem={(itemKey) => toggleItem('education', itemKey)}
        />
        <ExperienceSection
          experienceList={filteredData.experience}
          mode=""
          filter={filter}
          toggleItem={(itemKey) => toggleItem('experience', itemKey)}
        />
        <AwardsSection
          awardList={filteredData.awards}
          mode=""
          filter={filter}
          toggleItem={() => {}}
        />
        <CertificationsSection
          certificationList={filteredData.certifications}
          mode=""
          filter={filter}
          toggleItem={(itemKey) => toggleItem('certifications', itemKey)}
        />
        <SkillsSection
          skillList={filteredData.skills}
          mode=""
          filter={filter}
          toggleSkillGroup={() => {}}
        />
      </A4Container>
    </>
  );
};

export default AcademicCV;
