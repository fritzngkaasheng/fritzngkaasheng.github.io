"use strict";

import { useTranslation } from "/src/js/i18n.js";
import Icon from "/src/js/Icons.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
import BasicInfoItem from "/src/js/components/BasicInfoItem.js";
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
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-md-4 p-0 py-md-5 bg-black bg-opacity-25"
  }, /*#__PURE__*/React.createElement("div", {
    id: "image-carousel",
    className: "carousel slide"
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
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide-to": "4",
    "aria-label": "Slide 5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-inner ratio ratio-1x1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "carousel-item active"
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: "/assets/images/D1.jpg",
    className: "d-block w-100 h-100 object-fit-contain",
    alt: "Selfie"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: "/assets/images/D2.jpg",
    className: "d-block w-100 h-100 object-fit-contain",
    alt: "China Trip"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: "/assets/images/D3.jpg",
    className: "d-block w-100 h-100 object-fit-contain",
    alt: "Singapore Trip"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: "/assets/images/D4.jpg",
    className: "d-block w-100 h-100 object-fit-contain",
    alt: "Selfie with ETS"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: "/assets/images/D5.jpg",
    className: "d-block w-100 h-100 object-fit-contain",
    alt: "Taiwan Trip"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide": "prev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, t("Previous"))), /*#__PURE__*/React.createElement("button", {
    className: "carousel-control-next",
    type: "button",
    "data-bs-target": "#image-carousel",
    "data-bs-slide": "next"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, t("Next"))))), /*#__PURE__*/React.createElement("div", {
    className: "py-5 col-12 col-md-8"
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
  })), /*#__PURE__*/React.createElement("a", {
    className: "d-inline align-content-center m-0 text-decoration-none",
    href: "https://www.linkedin.com/in/fritzngkaasheng",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedIn24"
  }), " ", /*#__PURE__*/React.createElement("span", null, t("(For verification)")))))), /*#__PURE__*/React.createElement("div", {
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
    id: "basic-info-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h4", null, t("Basic Information")), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "genderMale",
    text: t("Male")
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "ruler",
    text: t(data.basicInformation.height)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "home",
    text: t(data.basicInformation.comeFrom)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "wineGlass",
    text: t(data.lifestyle.drinking)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "smoking",
    text: t(data.lifestyle.smoking)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "droplet",
    text: t(data.basicInformation.bloodType)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "globeAmericas",
    text: t(data.basicInformation.speaking.join(" | "))
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "buildings",
    text: t(data.workEducation.industry)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "briefcase",
    text: t(data.workEducation.occupation)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "mortorboard",
    text: t(data.workEducation.degree)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "school",
    text: t(data.workEducation.school)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "search",
    text: t(data.lifestyle.lookingFor)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    id: "lifestyle-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h4", null, t("Lifestyle")), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "dog",
    text: t(data.lifestyle.pets)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "dumbbell",
    text: t(data.lifestyle.exercise)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "utensils",
    text: t(data.lifestyle.diet)
  }), /*#__PURE__*/React.createElement(BasicInfoItem, {
    icon: "couch",
    text: t(data.lifestyle.offDay)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    id: "my-zodiac-sign-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h4", null, t("My Zodiac Sign")), /*#__PURE__*/React.createElement("p", {
    className: "mb-0"
  }, t(data.basicInformation.zodiac))))), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    id: "my-interests-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h4", null, t("My Interests")), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-wrap gap-3"
  }, Object.entries(data.interests).map(interestListByCategory => {
    let iconName = "";
    if (interestListByCategory[0] === "food") {
      iconName = "utensils";
    }
    if (interestListByCategory[0] === "flimTv") {
      iconName = "playFill";
    }
    if (interestListByCategory[0] === "travel") {
      iconName = "airplaneFill";
    }
    return interestListByCategory[1].map((interest, interestIndex) => {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        key: interestIndex,
        type: "button",
        className: "btn active",
        "data-bs-toggle": "button",
        "aria-pressed": "true"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: iconName
      }), " ", t(interest)));
    });
  })))))))));
};
export default DatingProfile; 
