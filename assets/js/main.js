const { jsPDF } = window.jspdf;

const helloWorld = document.getElementById("hello-world");
const invContainer = document.getElementById("inv-container");

function printPDF() {	
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
}
	
const jsPDFBtn = document.getElementById("jspdf-btn");
	
jsPDFBtn.addEventListener("click", printPDF);

helloWorld.addEventListener("click", () => {
	invContainer.classList = invContainer.classList.contains("d-block") ? "d-none" : "d-block";
});
