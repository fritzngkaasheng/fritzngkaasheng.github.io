"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const { useEffect } = React;

const { Link, useLocation } = window.ReactRouterDOM;

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
     document.querySelectorAll("#offcanvasNavbar a:not(.dropdown-toggle)").forEach(function(element) {
      element.addEventListener('click', function() {
        var offcanvasElements = document.querySelectorAll('.offcanvas');
        offcanvasElements.forEach(function(offcanvas) {
          var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
          if (bsOffcanvas) {
            bsOffcanvas.hide();
          }
        });
      });
    });
  }, []);

  return (
    <nav>
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link
            className={`nav-link${isActive('/') ? ' active' : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
            to="/"
          >
            {t('Home')}
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a id="resume-dropdown" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {t('Resume')}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                className={`dropdown-item${isActive('/dynamic-resume') ? ' active' : ''}`}
                aria-current={isActive('/dynamic-resume') ? 'page' : undefined}
                to="/dynamic-resume"
              >
                {t('Default')}
              </Link>
            </li>
            <li>
              <Link
                className={`dropdown-item${isActive('/dynamic-resume/software-engineer') ? ' active' : ''}`}
                aria-current={isActive('/dynamic-resume') ? 'page' : undefined}
                to="/dynamic-resume/software-engineer"
              >
                {t('Software Engineer')}
              </Link>
            </li>
            <li>
              <Link
                className={`dropdown-item${isActive('/dynamic-resume/integration-engineer') ? ' active' : ''}`}
                aria-current={isActive('/dynamic-resume/integration-engineer') ? 'page' : undefined}
                to="/dynamic-resume/integration-engineer"
              >
                {t('Integration Engineer')}
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link${isActive('/academic-cv') ? ' active' : ''}`}
            aria-current={isActive('/academic-cv') ? 'page' : undefined}
            to="/academic-cv"
          >
            {t('Academic CV')}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link${isActive('/entrepreneur-resume') ? ' active' : ''}`}
            aria-current={isActive('/entrepreneur-resume') ? 'page' : undefined}
            to="/entrepreneur-resume"
          >
            {t('Entrepreneur Resume')}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link${isActive('/dating-profile') ? ' active' : ''}`}
            aria-current={isActive('/dating-profile') ? 'page' : undefined}
            to="/dating-profile"
          >
            {t('Dating Profile')}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link${isActive('/will-i-take-the-job-quiz') ? ' active' : ''}`}
            aria-current={isActive('/will-i-take-the-job-quiz') ? 'page' : undefined}
            to="/will-i-take-the-job-quiz"
          >
            {t('Will I Take the Job? Quiz')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
