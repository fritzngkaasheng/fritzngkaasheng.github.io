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
const { useState, useEffect } = React;

const DynamicResume = () => {
  const [profile, setProfile] = useState({});
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    fetch("/dist/data/profile.min.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.error("Failed to load profile.json:", err);
      });
  }, []);

  useEffect(() => {
    if (profile.data) {
      const filteredData = {};

      const presetName = "softwareEngineer";

      filteredData.experience = profile.preset[presetName].experience
      .map(experienceId => {
        return profile.data.experience[experienceId];
      })
      .sort((a, b) => {
        const dateA = new Date(
          parseInt(a.date.start.year),
          parseInt(a.date.start.month) - 1
        );
        const dateB = new Date(
          parseInt(b.date.start.year),
          parseInt(b.date.start.month) - 1
        );

        return dateB - dateA;
      });
  
      filteredData.education = profile.preset[presetName].education
      .map(educationId => {
        return profile.data.education[educationId];
      })
      .sort((a, b) => {
        const dateA = new Date(
          parseInt(a.date.end.year),
          parseInt(a.date.end.month) - 1
        );
        const dateB = new Date(
          parseInt(b.date.end.year),
          parseInt(b.date.end.month) - 1
        );

        return dateB - dateA;
      });

      filteredData.certifications = profile.preset[presetName].certifications
      .map(certificationId => {
        return profile.data.certifications[certificationId];
      })
      .sort((a, b) => {
        const dateA = new Date(
          parseInt(a.date.start.year)
        );
        const dateB = new Date(
          parseInt(b.date.start.year)
        );

        return dateB - dateA;
      });

      console.log(profile.preset[presetName].skills);

      filteredData.skills = {};

      for (const [skillGroupName, skillIdList] of Object.entries(profile.preset[presetName].skills)) {
        filteredData.skills[skillGroupName] = {
          "name": profile.data.skills[skillGroupName].name,
          "skill": {}
        };
        skillIdList.map((skillId) => {
          filteredData.skills[skillGroupName].skill[skillId] = profile.data.skills[skillGroupName].skill[skillId];
        });
      }

      console.log(filteredData);

      setFilteredData(filteredData);
    }
  }, [profile]);

  if (!filteredData.experience) {
    return <LoadingSection />;
  }

  return (
    <>
      {profile.improvedHRProcessMode === "true" && <BottomRightFloatingButtons />}
      <A4Container>
        <ContactSection
          fullName={profile.data.contact.fullName}
          country={profile.data.contact.country}
          linkedInURLSlug={profile.data.contact.linkedInURLSlug}
        />
        <SummarySection
          summary={profile.preset.softwareEngineer.summary}
        />
        <ExperienceSection
          experienceList={filteredData.experience}
        />
        <EducationSection
          educationList={filteredData.education}
        />
        <CertificationsSection
          certificationList={filteredData.certifications}
        />
        <SkillsSection
          skillList={filteredData.skills}
        />
      </A4Container>
    </>
  );
};

export default DynamicResume;
