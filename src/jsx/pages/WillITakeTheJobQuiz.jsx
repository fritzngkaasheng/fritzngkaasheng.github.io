"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

import LoadingSection from "/src/js/components/LoadingSection.js";

const { useState, useEffect } = React;

const currencyToMYRConversionList = {
  "sgd": 3.25
};

const maxPriorities = {};

const questionValues = {};
const questionPoints = {};

let probabilitySliderPos = 0;
let probabilitySliderPosMin = 0;
let probabilitySliderPosMax = 0;
let probabilitySliderSubLength = 0;
let probabilitySliderLength = 0;

const WillITakeTheJobQuiz = () => {
  const { t } = useTranslation("quiz");

  const [quizData, setquizData] = useState({});
  const [probability, setProbability] = useState(NaN);

  const refreshProbabilitySliderSubLength = () => {
    probabilitySliderSubLength = probabilitySliderPosMax - probabilitySliderPosMin + 1;
  }

  const calculateProbability = () => {
    let probability = NaN;
    let chunkLength = 0;

    probabilitySliderSubLength = probabilitySliderLength;

    probabilitySliderPos = 0;

    if (
      Object.values(questionPoints).includes(-1)
    ) {
      probabilitySliderPos = 0;
      probabilitySliderSubLength = 0;
    }

    if (
      !Object.values(questionPoints).includes(-1)
    ) {
      probabilitySliderPosMin = 0;
      probabilitySliderPosMax = probabilitySliderLength;

      // check if locationType === "remote"
      chunkLength = probabilitySliderSubLength / maxPriorities.locationType;

      if (questionValues.locationType === "remote") {
        probabilitySliderPosMin = probabilitySliderLength - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // origin
        chunkLength = probabilitySliderSubLength / maxPriorities.origin;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + ( chunkLength * questionPoints.origin);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // salary
        chunkLength = probabilitySliderSubLength / maxPriorities.salary;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.salary);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // occupation
        chunkLength = probabilitySliderSubLength / maxPriorities.occupation;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.occupation);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // monitor
        chunkLength = probabilitySliderSubLength / maxPriorities.monitor;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.monitor);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();
      }
      
      if (questionValues.locationType !== "remote") {
        probabilitySliderPosMin = 1;

        probabilitySliderPosMax = probabilitySliderLength - chunkLength;

        refreshProbabilitySliderSubLength();

        // origin
        chunkLength = probabilitySliderSubLength / maxPriorities.origin;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.origin);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // locationType
        chunkLength = probabilitySliderSubLength / (maxPriorities.locationType - 1);

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.locationType);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // salary
        chunkLength = probabilitySliderSubLength / maxPriorities.salary;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.salary);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // occupation
        chunkLength = probabilitySliderSubLength / maxPriorities.occupation;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.occupation);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();

        // monitor
        chunkLength = probabilitySliderSubLength / maxPriorities.monitor;

        probabilitySliderPosMax = (probabilitySliderPosMin - 1) + (chunkLength * questionPoints.monitor);

        probabilitySliderPosMin = probabilitySliderPosMax - chunkLength + 1;

        refreshProbabilitySliderSubLength();
      }

      probabilitySliderPos = probabilitySliderPosMin;
    }

    probability = (probabilitySliderPos / probabilitySliderLength) * 100;
  
    setProbability(probability);
  }

  const showQuizAnswer = () => {
    const quizAnswerSection = document.getElementById("quizAnswer");
    quizAnswerSection.classList.remove("d-none");
  }

  const hideQuizAnswer = () => {
    const quizAnswerSection = document.getElementById("quizAnswer");
    quizAnswerSection.classList.add("d-none");
  }

  const showLocationTypeQuestion = () => {
    const locationTypeQuestion = document.getElementById(`${quizData.quiz.qLocationType.id}Section`);

    locationTypeQuestion.classList.remove("d-none");

    const locationTypeSelect = document.getElementById(quizData.quiz.qLocationType.id);

    locationTypeSelect.selectedIndex = 0;
  }

  const hideLocationTypeQuestion = () => {
    const locationTypeQuestion = document.getElementById(`${quizData.quiz.qLocationType.id}Section`);

    locationTypeQuestion.classList.add("d-none");
  }

  const showSalaryQuestion = () => {
    const salaryQuestion = document.getElementById(`${quizData.quiz.qSalary.id}Section`);

    salaryQuestion.classList.remove("d-none");

    const salarySelect = document.getElementById(`${quizData.quiz.qSalary.id}Currency`);

    salarySelect.selectedIndex = 0;

    const salaryValue = document.getElementById(quizData.quiz.qSalary.id);

    salaryValue.value = "";
  }

  const hideSalaryQuestion = () => {
    const salaryQuestion = document.getElementById(`${quizData.quiz.qSalary.id}Section`);

    salaryQuestion.classList.add("d-none");
  }

  const showOccupationQuestion = () => {
    const occupationQuestion = document.getElementById(`${quizData.quiz.qOccupation.id}Section`);

    occupationQuestion.classList.remove("d-none");

    const occupationSelect = document.getElementById(quizData.quiz.qOccupation.id);

    occupationSelect.selectedIndex = 0;
  }

  const hideOccupationQuestion = () => {
    const occupationQuestion = document.getElementById(`${quizData.quiz.qOccupation.id}Section`);

    occupationQuestion.classList.add("d-none");
  }

  const showMonitorQuestion = () => {
    const monitorQuestion = document.getElementById(`${quizData.quiz.qMonitor.id}Section`);

    monitorQuestion.classList.remove("d-none");

    const monitorInput = document.getElementById(quizData.quiz.qMonitor.id);

    monitorInput.value = "";
  }

  const hideMonitorQuestion = () => {
    const monitorQuestion = document.getElementById(`${quizData.quiz.qMonitor.id}Section`);

    monitorQuestion.classList.add("d-none");
  }

  const handleOriginChange = (event) => {
    hideQuizAnswer();

    hideLocationTypeQuestion();
    hideSalaryQuestion();
    hideOccupationQuestion();
    hideMonitorQuestion();

    const selectedValue = event.target.value;
    questionValues.origin = selectedValue;

    if (selectedValue === "Choose...") {
      return;
    }

    const selectedOption = quizData.quiz.qOrigin.options.find(option => option.value === selectedValue);

    if (selectedOption) {
      // if priority = -1, point = -1
      // if priority = 0, point = 0
      if (selectedOption.priority < 1) {
        questionPoints.origin = selectedOption.priority;
      }

      // if priority = 1, point = maxPriorities.origin
      // if priority = 2, point = maxPriorities.origin - 1
      // if priority = 3, point = maxPriorities.origin - 2...
      if (selectedOption.priority >= 1) {
        questionPoints.origin = maxPriorities.origin - (selectedOption.priority - 1);
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

  const handleLocationTypeChange = (event) => {
    hideQuizAnswer();

    hideSalaryQuestion();
    hideOccupationQuestion();
    hideMonitorQuestion();

    const selectedValue = event.target.value;
    questionValues.locationType = selectedValue;

    if (selectedValue === "Choose...") {
      return;
    }

    const selectedOption = quizData.quiz.qLocationType.options.find(option => option.value === selectedValue);

    if (selectedOption) {
      // if priority = -1, point = -1
      // if priority = 0, point = 0
      if (selectedOption.priority < 1) {
        questionPoints.locationType = 0;
      }

      // if priority = 1, point = maxPriorities.locationType
      // if priority = 2, point = maxPriorities.locationType - 1
      // if priority = 3, point = maxPriorities.locationType - 2...
      if (selectedOption.priority >= 1) {
        questionPoints.locationType = maxPriorities.locationType - (selectedOption.priority - 1);
      }
    }

    showSalaryQuestion();
  };

  const handleSalaryChange = () => {
    hideQuizAnswer();

    hideOccupationQuestion();
    hideMonitorQuestion();

    const currencySelect = document.getElementById(`${quizData.quiz.qSalary.id}Currency`);
    const salaryInput = document.getElementById(quizData.quiz.qSalary.id);

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

    const selectedOrigin = quizData.quiz.qOrigin.options.find(option => option.value === questionValues.origin);

    quizData.quiz.qSalary.indicators.map(indicator => {
      if (
        indicator.operator === ">=" 
        && salaryValue >= indicator.value
      ) {
        questionPoints.salary = maxPriorities.salary - (indicator.priority - 1);
      }

      if (
        indicator.operator === "<" 
        && salaryValue < indicator.value
        && selectedOrigin.income !== "high" 
        && indicator.countryIncome !== "high" 
      ) {
        questionPoints.salary = indicator.priority;
      }

      if (
        indicator.operator === "<" 
        && salaryValue < indicator.value
        && selectedOrigin.income === "high" 
        && indicator.countryIncome === "high" 
        && questionValues.locationType !== "remote"
      ) {
        questionPoints.salary = indicator.priority;
      }

      if (
        indicator.operator === "<" 
        && salaryValue < indicator.value
        && selectedOrigin.income === "high" 
        && indicator.countryIncome !== "high" 
        && questionValues.locationType === "remote"
      ) {
        questionPoints.salary = indicator.priority;
      }
    });

    if (questionPoints.salary <= 0) {
      calculateProbability();
  
      showQuizAnswer();
    }

    if (questionPoints.salary > 0) {
      showOccupationQuestion();
    }
  };

  const handleOccupationChange = (event) => {
    hideQuizAnswer();

    hideMonitorQuestion();

    const selectedValue = event.target.value;
    questionValues.occupation = selectedValue;

    if (selectedValue === "Choose...") {
      return;
    }

    const selectedOption = quizData.quiz.qOccupation.options.find(option => option.value === selectedValue);

    if (selectedOption) {
      // if priority = -1, point = -1
      // if priority = 0, point = 0
      if (selectedOption.priority < 1) {
        questionPoints.occupation = selectedOption.priority;
      }

      // if priority = 1, point = maxPriorities.occupation
      // if priority = 2, point = maxPriorities.occupation - 1
      // if priority = 3, point = maxPriorities.occupation - 2...
      if (selectedOption.priority >= 1) {
        questionPoints.occupation = maxPriorities.occupation - (selectedOption.priority - 1);
      }
    }

    if (questionPoints.occupation <= 0) {
      calculateProbability();
  
      showQuizAnswer();
    }

    if (questionPoints.occupation > 0) {
      showMonitorQuestion();
    }
  };

  const handleMonitorChange = () => {
    hideQuizAnswer();

    const monitorInput = document.getElementById(quizData.quiz.qMonitor.id);

    const monitorValue = parseFloat(monitorInput.value);

    if (monitorValue < 0) {
      return;
    }

    quizData.quiz.qMonitor.indicators.map(indicator => {
      if (
        indicator.operator === "=" 
        && monitorValue == indicator.value
      ) {
        questionPoints.monitor = maxPriorities.monitor - (indicator.priority - 1);
      }

      if (
        indicator.operator === ">=" 
        && monitorValue >= indicator.value
      ) {
        questionPoints.monitor = maxPriorities.monitor - (indicator.priority - 1);
      }

      if (
        indicator.operator === "<=" 
        && monitorValue <= indicator.value
      ) {
        questionPoints.monitor = maxPriorities.monitor - (indicator.priority - 1);
      }
    });

    calculateProbability();
  
    showQuizAnswer();
  };

  useEffect(() => {
    fetch("/dist/data/quiz.min.json")
      .then((res) => res.json())
      .then((data) => {
        const numericOriginPriorities = data.quiz.qOrigin.options
          .map(option => option.priority)
          .filter(priority => typeof priority === 'number' && !isNaN(priority));

        const preMaxOriginPriority = numericOriginPriorities.length > 0 ? Math.max(...numericOriginPriorities, 0) : 0;

        data.quiz.qOrigin.options.map((option) => {
          if (!option.priority) {
            if (option.apec && option.apec === true) {
              option.priority = preMaxOriginPriority + 1;
            }

            if (option.eea && option.eea === true) {
              option.priority = preMaxOriginPriority + 2;
            }

            if (
              option.income 
              && option.income === "high" 
              && !option.priority 
            ) {
              option.priority = preMaxOriginPriority + 3;
            }

            if (
              option.income 
              && option.income !== "high"
              && (
                !option.priority 
                || (
                  option.priority 
                  && option.priority > preMaxOriginPriority
                )
              )
            ) {
              option.priority = -1;
            }

            if (option.war && option.war === true) {
              option.priority = -1;
            }

            if (!option.priority){
              option.priority = -1;
            }
          }
        });

        data.quiz.qSalary.indicators.map((indicator) => {
          indicator.currency = indicator.currency.toLowerCase();

          if (indicator.currency === "sgd") {
            indicator.value = indicator.value * currencyToMYRConversionList.sgd;
            indicator.currency = "myr";
          }
        });

        const numericOccupationPriorities = data.quiz.qOccupation.options
        .map(option => option.priority)
        .filter(priority => typeof priority === 'number' && !isNaN(priority));

        const preMaxOccupationPriority = numericOccupationPriorities.length > 0 ? Math.max(...numericOccupationPriorities, 0) : 0;

        const singaporeSOLSectorList = data.quiz.qOccupation.options
          .filter(option => option.singaporeSOLList)
          .map(option => option.sector);

        data.quiz.qOccupation.options.map((option) => {
          option.jobTitle = option.value;
          option.value = option.sector + " - " + option.value;

          if (!option.priority) {
            if (option.singaporeSOLList && option.singaporeSOLList === true) {
              option.priority = preMaxOccupationPriority + 1;
            }

            if (!option.priority) {
              if (option.sector === "Infocomm technology") {
                option.priority = preMaxOccupationPriority + 2;
              }

              if (
                option.sector !== "Infocomm technology" 
                && singaporeSOLSectorList.includes(option.sector)
              ) {
                option.priority = preMaxOccupationPriority + 3;
              }
            }

            if (option.singaporeSPassSectorList && option.singaporeSPassSectorList === true) {
              option.priority = preMaxOccupationPriority + 4;
            }

            if (!option.priority) {
              option.priority = preMaxOccupationPriority + 5;
            }
          }
        });

        maxPriorities.origin = Math.max(...data.quiz.qOrigin.options.map(option => option.priority));
        maxPriorities.locationType = Math.max(...data.quiz.qLocationType.options.map(option => option.priority));
        maxPriorities.salary = Math.max(...data.quiz.qSalary.indicators.map(indicator => indicator.priority));
        maxPriorities.occupation = Math.max(...data.quiz.qOccupation.options.map(option => option.priority));
        maxPriorities.monitor = Math.max(...data.quiz.qMonitor.indicators.map(option => option.priority));

        probabilitySliderLength = maxPriorities.origin 
            * maxPriorities.locationType 
            * maxPriorities.salary
            * maxPriorities.occupation
            * maxPriorities.monitor;
        
        setquizData(data);
      })
      .catch((err) => {
        console.error("Failed to load quiz.min.json:", err);
      });
  }, []);

  if (Object.keys(quizData).length < 1) {
    return (
      <>
        <LoadingSection />
      </>
    );
  }

  return (
    <div className="container py-5">
      <form id="willITakeTheJobQuizV1">
        <div id={`${quizData.quiz.qOrigin.id}Section`} className="mb-3">
          <label for={quizData.quiz.qOrigin.id} className="form-label">{t(quizData.quiz.qOrigin.question)}</label>
          <select className="form-select" name={quizData.quiz.qOrigin.name} id={quizData.quiz.qOrigin.id} aria-label={quizData.quiz.qOrigin.question} onChange={handleOriginChange}>
            <option value="Choose..." selected>{t("Choose...")}</option>
            {quizData.quiz.qOrigin.options
              .sort((a, b) => a.value.localeCompare(b.value))
              .map((option) => (
                <option key={option.value} value={option.value}>{`${option.value} - ${t(option.text)}`}</option>
              ))}
          </select>
        </div>
        <div id={`${quizData.quiz.qLocationType.id}Section`} className="mb-3 d-none">
          <label for={quizData.quiz.qLocationType.id} className="form-label">{t(quizData.quiz.qLocationType.question)}</label>
          <select className="form-select" name={quizData.quiz.qLocationType.name} id={quizData.quiz.qLocationType.id} aria-label={quizData.quiz.qLocationType.question} onChange={handleLocationTypeChange}>
            <option value="Choose..." selected>{t("Choose...")}</option>
            {quizData.quiz.qLocationType.options
              .map((option) => (
                <option key={option.value} value={option.value}>{t(option.text)}</option>
              ))}
          </select>
        </div>
        <div id={`${quizData.quiz.qSalary.id}Section`} className="mb-3 d-none">
          <label for={quizData.quiz.qSalary.id} className="form-label">{t(quizData.quiz.qSalary.question)}</label>
          <div className="row">
            <div className="col-auto">
              <select className="form-select" name={`${quizData.quiz.qSalary.name}Currency`} id={`${quizData.quiz.qSalary.id}Currency`} aria-label={quizData.quiz.qSalary.question} onChange={handleSalaryChange}>
                <option value="Choose..." selected>{t("Choose...")}</option>
                <option key="myr" value="myr">{t("MYR")}</option>
                <option key="sgd" value="sgd">{t("SGD")}</option>
                {/*
                TODO: Add more currencies
                <option key="aud" value="aud">{t("AUD")}</option>
                <option key="usd" value="usd">{t("USD")}</option>
                */}
              </select>
            </div>
            <div className="col col-sm-auto">
              <input type="number" class="form-control" id={quizData.quiz.qSalary.id} onChange={handleSalaryChange}/>
            </div>
          </div>
        </div>
        <div id={`${quizData.quiz.qOccupation.id}Section`} className="mb-3 d-none">
          <label for={quizData.quiz.qOccupation.id} className="form-label">{t(quizData.quiz.qOccupation.question)}</label>
          <select className="form-select" name={quizData.quiz.qOccupation.name} id={quizData.quiz.qOccupation.id} aria-label={quizData.quiz.qOccupation.question} onChange={handleOccupationChange}>
            <option value="Choose..." selected>{t("Choose...")}</option>
            {quizData.quiz.qOccupation.options
              .map((option) => (
                <option key={option.value} value={option.value}>{`${t(option.sector)} - ${t(option.jobTitle)}`}</option>
              ))}
          </select>
        </div>
        <div id={`${quizData.quiz.qMonitor.id}Section`} className="mb-3 d-none">
          <label for={quizData.quiz.qMonitor.id} className="form-label">{t(quizData.quiz.qMonitor.question)}</label>
          <input type="number" class="form-control" id={quizData.quiz.qMonitor.id} onChange={handleMonitorChange} min="0"/>
        </div>
        <div id="quizAnswer" className="mb-3 d-none">
          <h2>{t("Possibility of me choosing this job: ")}{isNaN(probability) ? 'NaN' : probability}%</h2>
        </div>
      </form>
    </div>
  );
};

export default WillITakeTheJobQuiz;
