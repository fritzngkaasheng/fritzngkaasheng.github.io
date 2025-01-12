"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const { useEffect } = React;

const EditResumeToolbar = ({ encodedFilter, filteredData }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (!encodedFilter || encodedFilter === "edit") {
      const editResumeBtn = document.getElementById("edit-resume-btn");
      
      function navigateToEditResumeMode() {
        const filter = {};

        filter.experience = filteredData.experience.map(experience => experience.key);

        filter.education = filteredData.education.map(education => education.key);

        filter.certifications = filteredData.certifications.map(certification => certification.key);

        filter.coursework = filteredData.coursework.map(coursework => coursework.key);

        filter.involvement = filteredData.involvement.map(involvement => involvement.key);

        filter.skills = {};

        for (const [skillGroupId, skillGroup] of Object.entries(filteredData.skills)) {
          filter.skills[skillGroupId] = [];

          Object.keys(skillGroup.skill).map(skillId => {
            filter.skills[skillGroupId].push(skillId);
          });
        }

        const encodedFilter = encodeURIComponent(JSON.stringify(filter));
  
        window.location.href = "/#/dynamic-resume/c/edit/" + encodedFilter;
      };
      
      editResumeBtn.addEventListener("click", navigateToEditResumeMode);
  
      return () => {
        cleanupEventListener(editResumeBtn, navigateToEditResumeMode);
      };
    }
  }, [t, filteredData]);

  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };

  return (
    <>
      <div className="container d-flex justify-content-center pt-5">
        {(!encodedFilter || encodedFilter === "edit") && (
          <button id="edit-resume-btn" type="button" class="btn btn-primary">{t("Edit Resume")}</button>
        )}
        {(encodedFilter && encodedFilter !== "edit") && (
          <p>{t("Coming Soon")}</p>
        )}
      </div>
    </>
  );
};

export default EditResumeToolbar;
