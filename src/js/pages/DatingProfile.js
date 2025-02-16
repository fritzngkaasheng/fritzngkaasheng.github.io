"use strict";

import { useTranslation } from "/src/js/i18n.js";
import Icon from "/src/js/Icons.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
const React = window.React;
const {
  useState,
  useEffect
} = React;
const DatingProfile = () => {
  const {
    t
  } = useTranslation("dating");
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/dist/data/dating.min.json").then(res => res.json()).then(data => {
      setData(data);
    }).catch(err => {
      console.error("Failed to load dating.min.json:", err);
    });
  }, []);
  useEffect(() => {
    if (data.aboutMe) {}
  }, [data]);
  if (Object.keys(data).length < 1) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoadingSection, null));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "image-carousel",
    className: "carousel slide bg-black bg-opacity-25",
    "data-bs-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "carousel-indicators"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide-to": "0",
    className: "active",
    "aria-current": "true",
    "aria-label": "Slide 1"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide-to": "1",
    "aria-label": "Slide 2"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide-to": "2",
    "aria-label": "Slide 3"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide-to": "3",
    "aria-label": "Slide 4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "carousel-item active"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/D1.jpg",
    className: "d-block w-100 vh-100 object-fit-contain",
    alt: "Selfie"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/D2.jpg",
    className: "d-block w-100 vh-100 object-fit-contain",
    alt: "China Trip"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/D3.jpg",
    className: "d-block w-100 vh-100 object-fit-contain",
    alt: "Singapore Trip"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/D4.jpg",
    className: "d-block w-100 vh-100 object-fit-contain",
    alt: "Selfie with ETS"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide": "prev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, t("Previous"))), /*#__PURE__*/React.createElement("button", {
    className: "carousel-control-next",
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide": "next"
  }, /*#__PURE__*/React.createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, t("Next")))), /*#__PURE__*/React.createElement("div", {
    className: "container py-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gy-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    id: "contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body d-flex gap-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "d-inline align-content-end m-0"
  }, t(data.name)), /*#__PURE__*/React.createElement("h3", {
    className: "d-inline align-content-end m-0"
  }, t(data.age)), /*#__PURE__*/React.createElement("a", {
    className: "d-inline align-content-center m-0",
    href: "https://omi.sg/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "omi"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    id: "about-me-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h4", null, t("About Me")), data.aboutMe.map((line, index) => {
    if (line) {
      return /*#__PURE__*/React.createElement("p", {
        key: index,
        className: "mb-0"
      }, t(line));
    }
    if (!line) {
      return /*#__PURE__*/React.createElement("br", {
        key: index
      });
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    id: "coming-soon-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", null, t("Coming Soon"))))))));
};
export default DatingProfile; 
