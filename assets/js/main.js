const { jsPDF } = window.jspdf;

const helloWorld = document.getElementById("hello-world");
const invContainer = document.getElementById("inv-container");
const jsPDFBtn = document.getElementById("jspdf-btn");
const htmlDocxJsBtn = document.getElementById("html-docx-js-btn");

function downloadPDF() {	
	var doc = new jsPDF({
		orientation: "portrait",
		unit: "mm",
		format: [297, 210]
	});   

	doc.html(document.body, {
	   callback: function (doc) {
		 doc.save("a4.pdf");
	   }
	});
};

jsPDFBtn.addEventListener("click", downloadPDF);

function downloadDOCX() {
	var converted = htmlDocx.asBlob(document.querySelector("html").outerHTML);
	saveAs(converted, 'a4.docx');
}

htmlDocxJsBtn.addEventListener("click", downloadDOCX);

helloWorld.addEventListener("click", () => {
	invContainer.classList = invContainer.classList.contains("d-block") ? "d-none" : "d-block";
});
