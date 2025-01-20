"use strict";

import { useTranslation } from "/src/js/i18n.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
const {
  useState,
  useEffect
} = React;
const WillITakeTheJobQuiz = () => {
  const {
    t
  } = useTranslation("quiz");
  const [quizData, setQuizData] = useState({});
  const [probability, setProbability] = useState(NaN);
  const handleOriginChange = event => {
    const quizAnswerSection = document.getElementById("quizAnswer");
    const selectedValue = event.target.value;
    const selectedOption = quizData.quiz[0].options.find(option => option.value === selectedValue);
    let probability = NaN;
    let accumulatedPoints = 0;
    let totalAvailablePoints = Math.max(...quizData.quiz[0].options.map(option => option.priority));
    if (selectedOption) {
      if (selectedOption.priority < 1) {
        accumulatedPoints += 0;
      }
      if (selectedOption.priority >= 1) {
        accumulatedPoints += totalAvailablePoints - (selectedOption.priority - 1);
      }
    }
    if (totalAvailablePoints > 0) {
      probability = accumulatedPoints / totalAvailablePoints * 100;
    }
    setProbability(probability);
    quizAnswerSection.classList.remove("d-none");
  };
  useEffect(() => {
    fetch("/dist/data/quiz.min.json").then(res => res.json()).then(data => {
      setQuizData(data);
    }).catch(err => {
      console.error("Failed to load quiz.min.json:", err);
    });
  }, []);
  if (Object.keys(quizData).length < 1) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoadingSection, null));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("form", {
    id: "willITakeTheJobQuizV1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: quizData.quiz[0].id,
    className: "form-label"
  }, t(quizData.quiz[0].question)), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    name: quizData.quiz[0].name,
    id: quizData.quiz[0].id,
    "aria-label": quizData.quiz[0].question,
    onChange: handleOriginChange
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Choose..."), quizData.quiz[0].options.sort((a, b) => a.text.localeCompare(b.text)).map(option => /*#__PURE__*/React.createElement("option", {
    key: option.value,
    value: option.value
  }, t(option.text))))), /*#__PURE__*/React.createElement("div", {
    id: "quizAnswer",
    className: "d-none"
  }, /*#__PURE__*/React.createElement("h2", null, "The probability that I will choose this job is ", isNaN(probability) ? 'NaN' : probability, "%"))));
};
export default WillITakeTheJobQuiz; 
