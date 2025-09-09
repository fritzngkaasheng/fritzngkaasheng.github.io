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
          <h4 className="mb-4">{t("Specializing in Cybersecurity, Software Development")}</h4>
          <a className="btn btn-primary btn-lg" href="#/dynamic-resume">{t("Learn More")}</a>
        </div>
      </div>
      <div id="about-me-section" className="row vh-100 justify-content-center align-items-center text-center custom-bg-color-2">
        <div className="col w-md-container">
          <h2 className="fw-bold">{t("About Me")}</h2>
          <p>{t("I am an IT professional with 2 years in system development and support, delivering 25+ updates and 8+ features for 100+ users. Supported 200+ offshore, rig, remote, and office users with secure access (SSO, MFA, RBAC) under ISO 27001 standards; open to global remote roles.")}</p>
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
            <button type="button" class="btn btn-info">{t("ServiceNow")}</button>
          </div>
        </div>
      </div>
      <div id="experience-section" className="row vh-100 justify-content-center align-items-center text-center custom-bg-color-2">
        <div className="col w-md-container">
          <h2 className="fw-bold">{t("Experience")}</h2>
          <div className="job">
              <h3 className="fw-bold">{t("Associate Technical Support")} - {t("Tech Mahindra")}</h3>
              <p><span className="fw-bold">{t("Duration")}:</span> {t("December 2024")} - {t("Present")}</p>
              <p><span className="fw-bold">{t("Responsibilities")}:</span> {t("Provided technical support as a contractor via Tech Mahindra, including a dedicated assignment at Baker Hughes. Resolved 30+ incidents across cloud, VDI, cybersecurity, and server maintenance, reducing system downtime. Managed 200+ offshore, rig, remote, and office users by implementing SSO, MFA, and RBAC to meet ISO 27001 compliance.")}</p>
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
