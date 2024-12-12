"use strict";

/* From main.js */
const { useEffect } = React;

const pdfOrientation = "portrait";
const pdfSizeUnit = "px";
// const a4Size72DPIPx = [width, height];
const a4Size72DPIPx = [595, 842];
// const a4Size300DPIPx = [width, height];
const a4Size300DPIPx = [2480, 3508];
// const a4ScaledToHDDimensionsPx = [width, height];
const a4ScaledToHD720pDimensionsPx = [1280, (1280 / a4Size300DPIPx[0] * a4Size300DPIPx[1])];

let docName = "a4";

const pdfExt = ".pdf";
const docxExt = ".docx";
const doctypeDeclaration = "<!DOCTYPE html>";

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

/* From components/ComingSoonSection.js */
const ComingSoonSection = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    class: "coming-soon-section"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "coming-soon-title"
  }, t('Coming Soon')));
};

/* From components/Navigation.js */
const {
  Link
} = window.ReactRouterDOM;
const Navigation = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, t('Home'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/dynamic-resume"
  }, t('Resume'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/academic-cv"
  }, t('Academic CV'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/entrepreneur-resume"
  }, t('Entrepreneur Resume'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/dating-profile"
  }, t('Dating Profile'))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/will-i-take-the-job-quiz"
  }, t('Will I Take the Job? Quiz')))));
};

/* From components/A4Container.js */
const A4Container = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "a4-container"
  }, /*#__PURE__*/React.createElement(ComingSoonSection, null));
};

/* From components/DownloadAsPDFButton.js */
const DownloadAsPDFButton = () => {
  useEffect(() => {
    const {
      jsPDF
    } = window.jspdf;
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
    }
    ;
    jsPDFBtn.addEventListener("click", downloadPDFUsingJsPDF);
    function downloadPDFUsingHtml2pdf() {
      let element = document.querySelector("html");
      let opt = {
        filename: docName + pdfExt,
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
      cleanupEventListener(jsPDFBtn, downloadPDFUsingJsPDF);
      cleanupEventListener(html2pdfBtn, downloadPDFUsingHtml2pdf);
    };
  }, []);
  const cleanupEventListener = (element, listener) => {
    element.removeEventListener("click", listener);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    id: "jspdf-btn"
  }, "jsPDF"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    id: "html2pdf-btn"
  }, "html2pdf"));
};

/* From components/DownloadAsDocxButton.js */
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
  return /*#__PURE__*/React.createElement("button", {
    id: "html-docx-js-btn"
  }, "html-docx-js");
};

/* From components/BottomRightFloatingButtons.js */
const BottomRightFloatingButtons = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "bottom-right-floating-btns"
  }, /*#__PURE__*/React.createElement(DownloadAsPDFButton, null), /*#__PURE__*/React.createElement(DownloadAsDocxButton, null));
};

/* From components/Error404Section.js */
const Error404Section = () => {
  return /*#__PURE__*/React.createElement("div", {
    class: "error-404-section"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "error-404-title"
  }, "404"));
};

/* From components/Header.js */
const Header = () => {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(Navigation, null));
};

/* From components/LanguageSwitcher.js */
const LanguageSwitcher = () => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement("div", {
    id: "language-switcher"
  }, Object.keys(lngs).map(lng => /*#__PURE__*/React.createElement("button", {
    key: lng,
    onClick: () => i18n.changeLanguage(lng),
    disabled: i18n.resolvedLanguage === lng
  }, lngs[lng].nativeName)));
};

/* From components/MainContainer.js */
const MainContainer = () => {
  return /*#__PURE__*/React.createElement("div", {
    id: "main-container"
  }, /*#__PURE__*/React.createElement(BottomRightFloatingButtons, null), /*#__PURE__*/React.createElement(A4Container, null));
};

/* From pages/AcademicCV.js */
const AcademicCV = () => {
  return /*#__PURE__*/React.createElement(MainContainer, null);
};

/* From pages/DatingProfile.js */
const DatingProfile = () => {
  return /*#__PURE__*/React.createElement(MainContainer, null);
};

/* From pages/DynamicResume.js */
const DynamicResume = () => {
  return /*#__PURE__*/React.createElement(MainContainer, null);
};

/* From pages/EntrepreneurResume.js */
const EntrepreneurResume = () => {
  return /*#__PURE__*/React.createElement(MainContainer, null);
};

/* From pages/Error404Page.js */
const Error404Page = () => {
  return /*#__PURE__*/React.createElement(Error404Section, null);
};

/* From pages/Home.js */
const Home = () => {
  return /*#__PURE__*/React.createElement(MainContainer, null);
};

/* From pages/Layout.js */
const {
  Outlet
} = window.ReactRouterDOM;
const Layout = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(LanguageSwitcher, null), /*#__PURE__*/React.createElement(Outlet, null));
};

/* From pages/WillITakeTheJobQuiz.js */
const WillITakeTheJobQuiz = () => {
  return /*#__PURE__*/React.createElement(MainContainer, null);
};

/* From App.js */
const {
  HashRouter,
  Routes,
  Route
} = window.ReactRouterDOM;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
      path: "/",
      element: /*#__PURE__*/React.createElement(Layout, null)
    }, /*#__PURE__*/React.createElement(Route, {
      index: true,
      element: /*#__PURE__*/React.createElement(Home, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "dynamic-resume",
      element: /*#__PURE__*/React.createElement(DynamicResume, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "academic-cv",
      element: /*#__PURE__*/React.createElement(AcademicCV, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "entrepreneur-resume",
      element: /*#__PURE__*/React.createElement(EntrepreneurResume, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "dating-profile",
      element: /*#__PURE__*/React.createElement(DatingProfile, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "will-i-take-the-job-quiz",
      element: /*#__PURE__*/React.createElement(WillITakeTheJobQuiz, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: "*",
      element: /*#__PURE__*/React.createElement(Error404Page, null)
    }))));
  }
}
;
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null)); 
