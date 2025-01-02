"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import {
	pdfOrientation,
	pdfSizeUnit,
	a4ScaledToHD720pDimensionsPx,
  pdfMarginPx,
	pdfExt
} from "/src/js/main.js";

const { useEffect } = React;

const DownloadAsPDFButton = ({ fullName, roleName }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const html2pdfBtn = document.getElementById("html2pdf-btn");

    const docName = t(fullName) + " - " + t(roleName);

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
        margin:       pdfMarginPx,
        filename:     t(docName) + pdfExt,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  {
          scale: 2,
          windowWidth: a4ScaledToHD720pDimensionsPx[0]
        },
        jsPDF:        {
          orientation: pdfOrientation,
          unit: pdfSizeUnit,
          format: a4ScaledToHD720pDimensionsPx,
          compressPDF: true
        },
        pagebreak: { mode: ['css'] }
      };

      html2pdf().from(element).set(opt).save();
    };
    
    html2pdfBtn.addEventListener("click", downloadPDFUsingHtml2pdf);

    return () => {
      //TODO: Check which Download PDF button has a higher ATS score
      //cleanupEventListener(jsPDFBtn, downloadPDFUsingJsPDF);
      cleanupEventListener(html2pdfBtn, downloadPDFUsingHtml2pdf);
    };
  }, [t, roleName]);

  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };

  return (
    <>
      <button id="html2pdf-btn" className="dropdown-item">{t('Download .PDF')}</button>
      {/*
      TODO: Check which Download PDF button has a higher ATS score
      <button id="jspdf-btn">jsPDF</button>
        <br/>
      <button id="html2pdf-btn">html2pdf</button>
      */}
    </>
  );
};

export default DownloadAsPDFButton;
