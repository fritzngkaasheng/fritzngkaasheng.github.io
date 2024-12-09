"use strict";

/* From main.js */
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

/* From i18n.js */
const i18n = window.i18next;
const { useTranslation, initReactI18next } = window.ReactI18next;
const LanguageDetector = window.i18nextBrowserLanguageDetector;
const Backend = window.i18nextHttpBackend;

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
      addPath: './locales/add/{{lng}}/{{ns}}',
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

/* From pages/Layout.js */
const {
  Outlet,
  Link
} = window.ReactRouterDOM;
const Layout = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home (react-router-dom)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/blogs"
  }, "Blogs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/contact"
  }, "Contact")))), /*#__PURE__*/React.createElement(Outlet, null));
};

/* From pages/Home.js */
const Home = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Home");
};

/* From pages/Blogs.js */
const Blogs = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Blog Articles");
};

/* From pages/Contact.js */
const Contact = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Contact Me");
};

/* From pages/NoPage.js */
const NoPage = () => {
  return /*#__PURE__*/React.createElement("h1", null, "404");
};

/* From components.js */
const {
  HashRouter,
  Routes,
  Route
} = window.ReactRouterDOM;
const AppReactI18next = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, Object.keys(lngs).map(lng => /*#__PURE__*/React.createElement("button", {
    key: lng,
    onClick: () => i18n.changeLanguage(lng),
    disabled: i18n.resolvedLanguage === lng
  }, lngs[lng].nativeName))), /*#__PURE__*/React.createElement("h2", null, t('Welcome to React')));
};
const ReactRouterDemo = () => {
  return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Layout, null)
  }, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "blogs",
    element: /*#__PURE__*/React.createElement(Blogs, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "contact",
    element: /*#__PURE__*/React.createElement(Contact, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NoPage, null)
  }))));
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "React"), /*#__PURE__*/React.createElement(AppReactI18next, null), /*#__PURE__*/React.createElement(ReactRouterDemo, null));
  }
}
;
ReactDOM.createRoot(document.getElementById("react-element")).render(/*#__PURE__*/React.createElement(App, null)); 
