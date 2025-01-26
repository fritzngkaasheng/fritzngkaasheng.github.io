"use strict";

import { useTranslation } from "/src/js/i18n.js";
import LoadingSection from "/src/js/components/LoadingSection.js";
const {
  useState,
  useEffect
} = React;
let currencyToMYRConversionList = {
  "sgd": 3.25
};
let maxOriginPriority = 0;
let maxLocationTypePriority = 0;
let maxSalaryPriority = 0;
const questionValues = {};
const questionPoints = {};
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
    accumulatedPoints = 0;
    if (questionPoints.origin <= 0 || questionPoints.salary < 0) {
      accumulatedPoints = 0;
    }
    if (questionPoints.origin > 0 && questionPoints.salary >= 0) {
      if (questionValues.locationType === "remote") {
        const chunk1 = (maxLocationTypePriority - 1) * maxOriginPriority * maxSalaryPriority;
        const chunk2 = maxOriginPriority * questionPoints.salary;
        accumulatedPoints = chunk1 + chunk2 + questionPoints.origin;
      }
      if (questionValues.locationType !== "remote") {
        const chunk1 = (questionPoints.origin - 1) * (maxLocationTypePriority - 1) * maxSalaryPriority;
        const chunk2 = (maxLocationTypePriority - 1) * questionPoints.salary;
        accumulatedPoints = chunk1 + chunk2 + (questionPoints.locationType + 1);
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
  const showSalaryQuestion = () => {
    const salaryQuestion = document.getElementById(`${quizData.quiz[2].id}Section`);
    salaryQuestion.classList.remove("d-none");
    const salarySelect = document.getElementById(`${quizData.quiz[2].id}Currency`);
    salarySelect.selectedIndex = 0;
    const salaryValue = document.getElementById(quizData.quiz[2].id);
    salaryValue.value = 0;
  };
  const hideSalaryQuestion = () => {
    const salaryQuestion = document.getElementById(`${quizData.quiz[2].id}Section`);
    salaryQuestion.classList.add("d-none");
  };
  const handleOriginChange = event => {
    hideQuizAnswer();
    hideLocationTypeQuestion();
    hideSalaryQuestion();
    const selectedValue = event.target.value;
    questionValues.origin = selectedValue;
    if (selectedValue === "Choose...") {
      return;
    }
    const selectedOption = quizData.quiz[0].options.find(option => option.value === selectedValue);
    if (selectedOption) {
      // if priority = -1, point = -1
      // if priority = 0, point = 0
      if (selectedOption.priority < 1) {
        questionPoints.origin = selectedOption.priority;
      }

      // if priority = 1, point = maxOriginPriority
      // if priority = 2, point = maxOriginPriority - 1
      // if priority = 3, point = maxOriginPriority - 2...
      if (selectedOption.priority >= 1) {
        questionPoints.origin = maxOriginPriority - (selectedOption.priority - 1);
      }
    }
    if (questionPoints.origin <= 0) {
      calculateProbability();
      showQuizAnswer();
    }
    if (questionPoints.origin > 0) {
      showLocationTypeQuestion();
    }
  };
  const handleLocationTypeChange = event => {
    hideQuizAnswer();
    hideSalaryQuestion();
    const selectedValue = event.target.value;
    questionValues.locationType = selectedValue;
    if (selectedValue === "Choose...") {
      return;
    }
    const selectedOption = quizData.quiz[1].options.find(option => option.value === selectedValue);
    if (selectedOption) {
      // if priority = -1, point = -1
      // if priority = 0, point = 0
      if (selectedOption.priority < 1) {
        questionPoints.locationType = 0;
      }

      // if priority = 1, point = maxLocationTypePriority - 1
      // if priority = 2, point = maxLocationTypePriority - 2
      // if priority = 3, point = maxLocationTypePriority - 3...
      // Set On-site point to 0
      // Usually On-site priority = maxLocationTypePriority
      if (selectedOption.priority >= 1) {
        questionPoints.locationType = maxLocationTypePriority - selectedOption.priority;
      }
    }
    showSalaryQuestion();
  };
  const handleSalaryChange = () => {
    hideQuizAnswer();
    const currencySelect = document.getElementById(`${quizData.quiz[2].id}Currency`);
    const salaryInput = document.getElementById(quizData.quiz[2].id);
    const selectedCurrency = currencySelect.value;
    const prevSalaryValue = parseFloat(salaryInput.value);
    if (!prevSalaryValue) {
      return;
    }
    let salaryValue = 0;
    if (!selectedCurrency || isNaN(prevSalaryValue)) {
      return;
    }
    if (selectedCurrency === "Choose...") {
      return;
    }
    if (selectedCurrency === "myr") {
      salaryValue = prevSalaryValue;
    }
    if (selectedCurrency === "sgd") {
      salaryValue = prevSalaryValue * currencyToMYRConversionList.sgd;
    }
    questionValues.salary = salaryValue;
    const selectedOrigin = quizData.quiz[0].options.find(option => option.value === questionValues.origin);
    quizData.quiz[2].indicators.map(indicator => {
      if (indicator.operator === ">=" && salaryValue >= indicator.value) {
        questionPoints.salary = maxSalaryPriority - indicator.priority;
      }
      if (indicator.operator === "<" && salaryValue < indicator.value && selectedOrigin.income !== "high" && indicator.countryIncome !== "high") {
        questionPoints.salary = indicator.priority;
      }
      if (indicator.operator === "<" && salaryValue < indicator.value && selectedOrigin.income === "high" && indicator.countryIncome === "high" && questionValues.locationType !== "remote") {
        questionPoints.salary = indicator.priority;
      }
      if (indicator.operator === "<" && salaryValue < indicator.value && selectedOrigin.income === "high" && indicator.countryIncome !== "high" && questionValues.locationType === "remote") {
        questionPoints.salary = indicator.priority;
      }
    });
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
      data.quiz[2].indicators.map(indicator => {
        indicator.currency = indicator.currency.toLowerCase();
        if (indicator.currency === "sgd") {
          indicator.value = indicator.value * currencyToMYRConversionList.sgd;
          indicator.currency = "myr";
        }
      });
      maxOriginPriority = Math.max(...data.quiz[0].options.map(option => option.priority));
      maxLocationTypePriority = Math.max(...data.quiz[1].options.map(option => option.priority));
      maxSalaryPriority = Math.max(...data.quiz[2].indicators.map(indicator => indicator.priority));
      totalAvailablePoints = maxOriginPriority * maxLocationTypePriority * maxSalaryPriority;
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
    id: `${quizData.quiz[2].id}Section`,
    className: "d-none"
  }, /*#__PURE__*/React.createElement("label", {
    for: quizData.quiz[2].id,
    className: "form-label"
  }, t(quizData.quiz[2].question)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    name: `${quizData.quiz[2].name}Currency`,
    id: `${quizData.quiz[2].id}Currency`,
    "aria-label": quizData.quiz[2].question,
    onChange: handleSalaryChange
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Choose..."), /*#__PURE__*/React.createElement("option", {
    key: "myr",
    value: "myr"
  }, t("MYR")), /*#__PURE__*/React.createElement("option", {
    key: "sgd",
    value: "sgd"
  }, t("SGD")))), /*#__PURE__*/React.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    class: "form-control",
    id: quizData.quiz[2].id,
    onChange: handleSalaryChange
  })))), /*#__PURE__*/React.createElement("div", {
    id: "quizAnswer",
    className: "d-none"
  }, /*#__PURE__*/React.createElement("h2", null, "The probability that I will choose this job is ", isNaN(probability) ? 'NaN' : probability, "%"))));
};
export default WillITakeTheJobQuiz; 
