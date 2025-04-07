"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page container-fluid vh-100 overflow-y-scroll">
      <div id="intro-section" className="row vh-100 justify-content-center align-items-center text-center custom-bg-color-1">
        <div className="col w-md-container">
          <h1 id="name" className="display-5 mb-3 fw-bold">{t("Fritz Ng")}</h1>
          <h4 className="mb-4">{t("Remote IT Professional")}</h4>
          <h4 className="mb-4">{t("Specializing in Software Development, Cybersecurity")}</h4>
          <a className="btn btn-primary btn-lg" href="#/dynamic-resume">{t("Learn More")}</a>
        </div>
      </div>
      <div id="about-me-section" className="row vh-100 justify-content-center align-items-center text-center custom-bg-color-2">
        <div className="col w-md-container">
          <h2 className="fw-bold">{t("About Me")}</h2>
          <p>{t("I am an IT professional with 1 year of experience in web application development, including Laravel, PHP, and CodeIgniter. Demonstrated ability to deploy successful updates and implement new features, improving user experience for over 100 users. Open to remote opportunities globally.")}</p>
        </div>
      </div>
      <div id="skills-section" className="row vh-100 justify-content-center align-items-center text-center custom-bg-color-1">
        <div className="col w-md-container">
          <h2 className="mb-4 fw-bold">{t("Skills")}</h2>
          <div className="skill-list d-flex flex-wrap gap-3 justify-content-center">
            <button type="button" class="btn btn-info">{t("REST APIs")}</button>
            <button type="button" class="btn btn-info">{t("Git")}</button>
            <button type="button" class="btn btn-info">{t("Laravel")}</button>
            <button type="button" class="btn btn-info">{t("CodeIgniter")}</button>
            <button type="button" class="btn btn-info">{t("PHP")}</button>
            <button type="button" class="btn btn-info">{t("SQL")}</button>
            <button type="button" class="btn btn-info">{t("JavaScript")}</button>
            <button type="button" class="btn btn-info">{t("jQuery")}</button>
            <button type="button" class="btn btn-info">{t("CSS")}</button>
            <button type="button" class="btn btn-info">{t("HTML")}</button>
            <button type="button" class="btn btn-info">{t("Java")}</button>
            <button type="button" class="btn btn-info">{t(".NET Framework")}</button>
          </div>
        </div>
      </div>
      <div id="experience-section" className="row vh-100 justify-content-center align-items-center text-center custom-bg-color-2">
        <div className="col w-md-container">
          <h2 className="fw-bold">{t("Experience")}</h2>
          <div className="job">
              <h3 className="fw-bold">{t("Intern")} - {t("B2BE")}</h3>
              <p><span className="fw-bold">{t("Duration")}:</span> {t("April 2023")} - {t("July 2023")}</p>
              <p><span className="fw-bold">{t("Responsibilities")}:</span> {t("Enhanced CodeIgniter and Laravel by implementing client-requested features, resolving critical bugs, and deploying numerous updates, improving the experience for over 100 users. Conducted impact analysis to ensure system efficiency and stability.")}</p>
          </div>
        </div>
      </div>
      <div id="contact-me-section" className="row vh-100 justify-content-center align-items-center text-center custom-bg-color-1">
        <div className="col w-md-container">
          <h2 className="fw-bold">{t("Contact Me")}</h2>
          <p>{t("If you're interested in working with me, feel free to reach out!")}</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a className="btn btn-primary btn-lg btn-email" href="mailto:fritzngkaasheng@gmail.com">{t("Email Me")}</a>
            <a className="btn btn-primary btn-lg btn-linkedin" href="https://www.linkedin.com/in/fritzngkaasheng" target="_blank">{t("LinkedIn")}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
