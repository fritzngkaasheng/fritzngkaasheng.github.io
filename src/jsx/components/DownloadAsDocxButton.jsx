"use strict";

import {
	docName,
	docxExt,
	doctypeDeclaration,
  useEffect
} from "/src/js/main.js";

const DownloadAsDocxButton = () => {
  useEffect(() => {
    const htmlDocxJsBtn = document.getElementById("html-docx-js-btn");

    function downloadDOCX() {
      let converted = htmlDocx.asBlob(doctypeDeclaration + document.querySelector("html").outerHTML);
      saveAs(converted, docName + docxExt);
    }

    htmlDocxJsBtn.addEventListener("click", downloadDOCX);

    return () => cleanupEventListener(htmlDocxJsBtn, downloadDOCX);
  }, []);

  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };

  return (
    <button id="html-docx-js-btn">html-docx-js</button>
  );
};

export default DownloadAsDocxButton;
