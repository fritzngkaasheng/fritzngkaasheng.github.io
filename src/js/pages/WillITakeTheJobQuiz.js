"use strict";

import { useTranslation } from "/src/js/i18n.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
const {
  useState,
  useEffect
} = React;
let maxOriginPriority = 0;
let maxLocationTypePriority = 0;
let questionValues = [];
let questionPoints = [];
let accumulatedPoints = 0;
let totalAvailablePoints = 0;
const WillITakeTheJobQuiz = () => {
  const {
    t
  } = useTranslation("quiz");
  const [quizData, setQuizData] = useState({});
  const [probability, setProbability] = useState(NaN);
  const calculateProbability = () => {
    let probability = NaN;
    if (questionPoints[0] <= 0) {
      accumulatedPoints = 0;
    }
    if (questionPoints[0] > 0) {
      if (questionValues[1] === "remote") {
        accumulatedPoints = questionPoints[1] * maxOriginPriority + questionPoints[0];
      }
      if (questionValues[1] !== "remote") {
        accumulatedPoints = (questionPoints[0] - 1) * 2 + (questionPoints[1] + 1);
      }
    }
    probability = accumulatedPoints / totalAvailablePoints * 100;
    setProbability(probability);
  };
  const showQuizAnswer = () => {
    const quizAnswerSection = document.getElementById("quizAnswer");
    quizAnswerSection.classList.remove("d-none");
  };
  const hideQuizAnswer = () => {
    const quizAnswerSection = document.getElementById("quizAnswer");
    quizAnswerSection.classList.add("d-none");
  };
  const showLocationTypeQuestion = () => {
    const locationTypeQuestion = document.getElementById(`${quizData.quiz[1].id}Section`);
    locationTypeQuestion.classList.remove("d-none");
    const locationTypeSelect = document.getElementById(quizData.quiz[1].id);
    locationTypeSelect.selectedIndex = 0;
  };
  const hideLocationTypeQuestion = () => {
    const locationTypeQuestion = document.getElementById(`${quizData.quiz[1].id}Section`);
    locationTypeQuestion.classList.add("d-none");
  };
  const handleOriginChange = event => {
    hideQuizAnswer();
    hideLocationTypeQuestion();
    const selectedValue = event.target.value;
    questionValues[0] = selectedValue;
    if (selectedValue === "Choose...") {
      return;
    }
    const selectedOption = quizData.quiz[0].options.find(option => option.value === selectedValue);
    if (selectedOption) {
      // if priority = -1, point = -1
      // if priority = 0, point = 0
      if (selectedOption.priority < 1) {
        questionPoints[0] = selectedOption.priority;
      }

      // if priority = 1, point = maxOriginPriority
      // if priority = 2, point = maxOriginPriority - 1
      // if priority = 3, point = maxOriginPriority - 2...
      if (selectedOption.priority >= 1) {
        questionPoints[0] = maxOriginPriority - (selectedOption.priority - 1);
      }
    }
    if (questionPoints[0] <= 0) {
      calculateProbability();
      showQuizAnswer();
    }
    if (questionPoints[0] > 0) {
      showLocationTypeQuestion();
    }
  };
  const handleLocationTypeChange = event => {
    hideQuizAnswer();
    const selectedValue = event.target.value;
    questionValues[1] = selectedValue;
    if (selectedValue === "Choose...") {
      return;
    }
    const selectedOption = quizData.quiz[1].options.find(option => option.value === selectedValue);
    if (selectedOption) {
      // if priority = -1, point = -1
      // if priority = 0, point = 0
      if (selectedOption.priority < 1) {
        questionPoints[1] = 0;
      }

      // if priority = 1, point = maxLocationTypePriority - 1
      // if priority = 2, point = maxLocationTypePriority - 2
      // if priority = 3, point = maxLocationTypePriority - 3...
      // Set On-site point to 0
      // Usually On-site priority = maxLocationTypePriority
      if (selectedOption.priority >= 1) {
        questionPoints[1] = maxLocationTypePriority - selectedOption.priority;
      }
    }
    calculateProbability();
    showQuizAnswer();
  };
  useEffect(() => {
    fetch("/dist/data/quiz.min.json").then(res => res.json()).then(data => {
      const numericOriginPriorities = data.quiz[0].options.map(option => option.priority).filter(priority => typeof priority === 'number' && !isNaN(priority));
      let prevMaxOriginPriority = numericOriginPriorities.length > 0 ? Math.max(...numericOriginPriorities) : 0;
      data.quiz[0].options.map(option => {
        if (!option.priority) {
          if (option.apec && option.apec === true) {
            option.priority = prevMaxOriginPriority + 1;
          }
          if (option.eea && option.eea === true) {
            option.priority = prevMaxOriginPriority + 2;
          }
          if (option.income && option.income === "high" && !option.priority) {
            option.priority = prevMaxOriginPriority + 3;
          }
          if (option.income && option.income !== "high" && (!option.priority || option.priority && option.priority > prevMaxOriginPriority)) {
            option.priority = -1;
          }
          if (option.war && option.war === true) {
            option.priority = -1;
          }
          if (!option.priority) {
            option.priority = -1;
          }
        }
      });
      maxOriginPriority = Math.max(...data.quiz[0].options.map(option => option.priority));
      maxLocationTypePriority = Math.max(...data.quiz[1].options.map(option => option.priority));
      questionValues = ["", ""];
      questionPoints = [0, 0];
      totalAvailablePoints = maxOriginPriority * maxLocationTypePriority;
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
  }, /*#__PURE__*/React.createElement("div", {
    id: `${quizData.quiz[0].id}Section`
  }, /*#__PURE__*/React.createElement("label", {
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
    id: `${quizData.quiz[1].id}Section`,
    className: "d-none"
  }, /*#__PURE__*/React.createElement("label", {
    for: quizData.quiz[1].id,
    className: "form-label"
  }, t(quizData.quiz[1].question)), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    name: quizData.quiz[1].name,
    id: quizData.quiz[1].id,
    "aria-label": quizData.quiz[1].question,
    onChange: handleLocationTypeChange
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Choose..."), quizData.quiz[1].options.map(option => /*#__PURE__*/React.createElement("option", {
    key: option.value,
    value: option.value
  }, t(option.text))))), /*#__PURE__*/React.createElement("div", {
    id: "quizAnswer",
    className: "d-none"
  }, /*#__PURE__*/React.createElement("h2", null, "The probability that I will choose this job is ", isNaN(probability) ? 'NaN' : probability, "%"))));
};
export default WillITakeTheJobQuiz; 
