"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import EditResumeButton from "/src/js/components/EditResumeButton.js";

const { useEffect } = React;

const EditResumeToolbar = ({ encodedFilter, mode, filteredData, navigateToEditResumeMode }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (
      encodedFilter 
      && encodedFilter !== "edit" 
      && mode === "edit"
    ) {
      const doneBtn = document.getElementById("done-btn");
      
      const exitEditResumeMode = () => {
        window.location.href = window.location.href.replace("/edit/", "/");
      };

      doneBtn.addEventListener("click", exitEditResumeMode);
  
      return () => {
        cleanupEventListener(doneBtn, exitEditResumeMode);
      };
    }
  }, [t, filteredData]);

  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };

  return (
    <div className="container d-flex justify-content-center pt-5">
      {(
        !encodedFilter 
        || encodedFilter === "edit" 
        || mode !== "edit"
      ) && (
        <EditResumeButton
          navigateToEditResumeMode={navigateToEditResumeMode}
        />
      )}
      {(
        encodedFilter 
        && encodedFilter !== "edit" 
        && mode === "edit"
      ) && (
        <button id="done-btn" type="button" class="btn btn-primary">{t("Done")}</button>
      )}
    </div>
  );
};

export default EditResumeToolbar;
