"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { docName, docxExt, doctypeDeclaration, useEffect } from "/src/js/main.js";
const DownloadAsDocxButton = () => {
  const {
    t
  } = useTranslation();
  useEffect(() => {
    const htmlDocxJsBtn = document.getElementById("html-docx-js-btn");
    function downloadDOCX() {
      let converted = htmlDocx.asBlob(doctypeDeclaration + "<html>" + document.querySelector("head").outerHTML + "<body>" + document.querySelectorAll(".a4-container")[0].outerHTML + "</body>" + "</html>");
      saveAs(converted, docName + docxExt);
    }
    htmlDocxJsBtn.addEventListener("click", downloadDOCX);
    return () => cleanupEventListener(htmlDocxJsBtn, downloadDOCX);
  }, []);
  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };
  return /*#__PURE__*/React.createElement("button", {
    id: "html-docx-js-btn",
    className: "dropdown-item"
  }, t('Download .DOCX'));
};
export default DownloadAsDocxButton; 
