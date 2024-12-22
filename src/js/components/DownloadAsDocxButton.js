"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { docxExt, doctypeDeclaration } from "/src/js/main.js";
const {
  useEffect
} = React;
const DownloadAsDocxButton = ({
  fullName,
  roleName
}) => {
  const {
    t
  } = useTranslation();
  useEffect(() => {
    const htmlDocxJsBtn = document.getElementById("html-docx-js-btn");
    const docName = t(fullName) + " - " + t(roleName);
    function downloadDOCX() {
      let converted = htmlDocx.asBlob(doctypeDeclaration + "<html>" + document.querySelector("head").outerHTML + "<body>" + document.querySelectorAll(".a4-container")[0].outerHTML + "</body>" + "</html>");
      saveAs(converted, t(docName) + docxExt);
    }
    htmlDocxJsBtn.addEventListener("click", downloadDOCX);
    return () => cleanupEventListener(htmlDocxJsBtn, downloadDOCX);
  }, [t, roleName]);
  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };
  return /*#__PURE__*/React.createElement("button", {
    id: "html-docx-js-btn",
    className: "dropdown-item"
  }, t('Download .DOCX'));
};
export default DownloadAsDocxButton; 
