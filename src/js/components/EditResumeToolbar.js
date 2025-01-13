"use strict";

import { useTranslation } from "/src/js/i18n.js";
import EditResumeButton from "/src/js/components/EditResumeButton.js";
const {
  useEffect
} = React;
const EditResumeToolbar = ({
  encodedFilter,
  mode,
  filteredData,
  navigateToEditResumeMode
}) => {
  const {
    t
  } = useTranslation();
  useEffect(() => {
    if (encodedFilter && encodedFilter !== "edit" && mode === "edit") {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "container d-flex justify-content-center pt-5"
  }, (!encodedFilter || encodedFilter === "edit" || mode !== "edit") && /*#__PURE__*/React.createElement(EditResumeButton, {
    navigateToEditResumeMode: navigateToEditResumeMode
  }), encodedFilter && encodedFilter !== "edit" && mode === "edit" && /*#__PURE__*/React.createElement("button", {
    id: "done-btn",
    type: "button",
    class: "btn btn-primary"
  }, t("Done")));
};
export default EditResumeToolbar; 
