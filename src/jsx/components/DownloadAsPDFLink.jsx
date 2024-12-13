"use strict";

import {
	pdfOrientation,
	pdfSizeUnit,
	a4ScaledToHD720pDimensionsPx,
	docName,
	pdfExt,
  useEffect
} from "/src/js/main.js";

const DownloadAsPDFLink = () => {
  useEffect(() => {
    const { jsPDF } = window.jspdf;

    const jsPDFBtn = document.getElementById("jspdf-btn");
    const html2pdfBtn = document.getElementById("html2pdf-btn");

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
    
    /*
    TODO: Check which Download PDF button has a higher ATS score
    jsPDFBtn.addEventListener("click", downloadPDFUsingJsPDF);
    */
    
    function downloadPDFUsingHtml2pdf() {	
      let element = document.querySelector("html");
      let opt = {
        filename:     docName + pdfExt,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  {
          width: a4ScaledToHD720pDimensionsPx[0],
          height: a4ScaledToHD720pDimensionsPx[1],
          windowWidth: a4ScaledToHD720pDimensionsPx[0]
        },
        jsPDF:        {
          orientation: pdfOrientation,
          unit: pdfSizeUnit,
          format: a4ScaledToHD720pDimensionsPx
        }
      };
       
      html2pdf().from(element).set(opt).save();
    };
    
    html2pdfBtn.addEventListener("click", downloadPDFUsingHtml2pdf);

    return () => {
      cleanupEventListener(jsPDFBtn, downloadPDFUsingJsPDF);
      cleanupEventListener(html2pdfBtn, downloadPDFUsingHtml2pdf);
    };
  }, []);

  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };

  return (
    <>
      <a id="html2pdf-btn" className="dropdown-item" href="#">Download .PDF</a>
      {/*
      TODO: Check which Download PDF button has a higher ATS score
      <button id="jspdf-btn">jsPDF</button>
        <br/>
      <button id="html2pdf-btn">html2pdf</button>
      */}
    </>
  );
};

export default DownloadAsPDFLink;
