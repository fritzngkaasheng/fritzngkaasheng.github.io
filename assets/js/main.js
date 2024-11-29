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

helloWorld.addEventListener("click", () => {
	invContainer.innerHTML = invContainer.innerHTML !== "" ? "" : `
		<div>PHP [GitHub Pages does not support server-side languages]</div>
		<div class="sass-element">SASS</div>
		<div>JavaScript</div>
		<button id="jspdf-btn">jsPDF</button>
	`;
	
	const jsPDFBtn = document.getElementById("jspdf-btn");
	
	jsPDFBtn.addEventListener("click", printPDF);
});
