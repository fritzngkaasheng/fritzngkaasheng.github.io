"use strict";

const { jsPDF } = window.jspdf;

const helloWorld = document.getElementById("hello-world");
const invContainer = document.getElementById("inv-container");
const jsPDFBtn = document.getElementById("jspdf-btn");
const html2pdfBtn = document.getElementById("html2pdf-btn");
const htmlDocxJsBtn = document.getElementById("html-docx-js-btn");

const pdfOrientation = "portrait";
const pdfSizeUnit = "px";
// const a4Size72DPIPx = [width, height];
const a4Size72DPIPx = [595, 842];
// const a4Size300DPIPx = [width, height];
const a4Size300DPIPx = [2480, 3508];
// const a4ScaledToHDDimensionsPx = [width, height];
const a4ScaledToHD720pDimensionsPx = [1280, (1280 / a4Size300DPIPx[0] * a4Size300DPIPx[1])];
const windowInnerWidth = window.innerWidth;

let docName = "a4";

const pdfExt = ".pdf";
const docxExt = ".docx";
const doctypeDeclaration = "<!DOCTYPE html>";

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

function downloadDOCX() {
	let converted = htmlDocx.asBlob(doctypeDeclaration + document.querySelector("html").outerHTML);
	saveAs(converted, docName + docxExt);
}

htmlDocxJsBtn.addEventListener("click", downloadDOCX);

helloWorld.addEventListener("click", () => {
	invContainer.classList = invContainer.classList.contains("d-block") ? "d-none" : "d-block";
});
