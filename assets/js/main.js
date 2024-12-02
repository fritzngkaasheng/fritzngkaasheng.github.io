const { jsPDF } = window.jspdf;

const fontPath = "./assets/fonts/";

const helloWorld = document.getElementById("hello-world");
const invContainer = document.getElementById("inv-container");
const jsPDFBtn = document.getElementById("jspdf-btn");
const htmlDocxJsBtn = document.getElementById("html-docx-js-btn");

const pdfOrientation = "portrait";
const pdfSizeUnit = "px";
// const a4SizeInPx = [width, height];
const a4SizeInPx = [595, 842];
const windowInnerWidth = window.innerWidth;

const topMiddlePos = [(a4SizeInPx[0] / 2) - 20, 20];
const helloWorldZhStr = "你好，世界！";

const pdfExt = ".pdf";
const docxExt = ".docx";
const doctypeDeclaration = "<!DOCTYPE html>";

function downloadPDF() {	
	let docName = "a4";

	var doc = new jsPDF({
		orientation: pdfOrientation,
		unit: pdfSizeUnit,
		format: a4SizeInPx
	});   

	doc.html(document.querySelector("html"), {
		html2canvas: {
			scale: (a4SizeInPx[0] / windowInnerWidth)
		},
		callback: function (doc) {
			doc.addFont(fontPath + "NotoSansSC-VariableFont_wght.ttf", "NotoSansSC", "normal");
			doc.setFont("NotoSansSC", "normal");

			doc.text(helloWorldZhStr, topMiddlePos[0], topMiddlePos[1]);
			doc.save(docName + pdfExt);
	  }
	});
};

jsPDFBtn.addEventListener("click", downloadPDF);

function downloadDOCX() {
	let docName = "a4";

	var converted = htmlDocx.asBlob(doctypeDeclaration + document.querySelector("html").outerHTML);
	saveAs(converted, docName + docxExt);
}

htmlDocxJsBtn.addEventListener("click", downloadDOCX);

helloWorld.addEventListener("click", () => {
	invContainer.classList = invContainer.classList.contains("d-block") ? "d-none" : "d-block";
});
