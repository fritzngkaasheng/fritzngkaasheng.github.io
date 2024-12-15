"use strict";

import { useTranslation } from "/src/js/i18n.js";
import { pdfOrientation, pdfSizeUnit, a4ScaledToHD720pDimensionsPx, docName, pdfExt } from "/src/js/main.js";
const {
  useEffect
} = React;
const DownloadAsPDFButton = () => {
  const {
    t
  } = useTranslation();
  useEffect(() => {
    const html2pdfBtn = document.getElementById("html2pdf-btn");

    //TODO: Check which Download PDF button has a higher ATS score
    /*
    const { jsPDF } = window.jspdf;
      const jsPDFBtn = document.getElementById("jspdf-btn");
      function downloadPDFUsingJsPDF() {	
      let doc = new jsPDF({
        orientation: pdfOrientation,
        unit: pdfSizeUnit,
        format: a4ScaledToHD720pDimensionsPx
      });
    
      doc.html(document.querySelector("html"), {
        width: a4ScaledToHD720pDimensionsPx[0],
        windowWidth: a4ScaledToHD720pDimensionsPx[0],
        html2canvas: {
          windowWidth: a4ScaledToHD720pDimensionsPx[0]
        },
        callback: function (doc) {
          doc.save(docName + pdfExt);
        }
      });
    };
      jsPDFBtn.addEventListener("click", downloadPDFUsingJsPDF);
    */

    function downloadPDFUsingHtml2pdf() {
      let element = document.querySelectorAll(".a4-container")[0];
      let opt = {
        filename: t(docName) + pdfExt,
        image: {
          type: 'jpeg',
          quality: 0.98
        },
        html2canvas: {
          width: a4ScaledToHD720pDimensionsPx[0],
          height: a4ScaledToHD720pDimensionsPx[1],
          windowWidth: a4ScaledToHD720pDimensionsPx[0]
        },
        jsPDF: {
          orientation: pdfOrientation,
          unit: pdfSizeUnit,
          format: a4ScaledToHD720pDimensionsPx
        }
      };
      html2pdf().from(element).set(opt).save();
    }
    ;
    html2pdfBtn.addEventListener("click", downloadPDFUsingHtml2pdf);
    return () => {
      //TODO: Check which Download PDF button has a higher ATS score
      //cleanupEventListener(jsPDFBtn, downloadPDFUsingJsPDF);
      cleanupEventListener(html2pdfBtn, downloadPDFUsingHtml2pdf);
    };
  }, []);
  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    id: "html2pdf-btn",
    className: "dropdown-item"
  }, t('Download .PDF')));
};
export default DownloadAsPDFButton; 
