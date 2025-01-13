"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const { useEffect } = React;

const EditResumeButton = ({ navigateToEditResumeMode }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const editResumeBtn = document.getElementById("edit-resume-btn");
      
    editResumeBtn.addEventListener("click", navigateToEditResumeMode);

    return () => {
      cleanupEventListener(editResumeBtn, navigateToEditResumeMode);
    };
  }, [t]);

  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };

  return (
    <button id="edit-resume-btn" type="button" class="btn btn-primary">{t("Edit Resume")}</button>
  );
};

export default EditResumeButton;
