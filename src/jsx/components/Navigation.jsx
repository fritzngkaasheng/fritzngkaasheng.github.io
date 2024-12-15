"use strict";

import {
  useTranslation
} from "/src/js/i18n.js";

const { Link, useLocation } = window.ReactRouterDOM;

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
        <li className="nav-item">
          <Link
            className={`nav-link${isActive('/dynamic-resume') ? ' active' : ''}`}
            aria-current={isActive('/dynamic-resume') ? 'page' : undefined}
            to="/dynamic-resume"
          >
            {t('Resume')}
          </Link>
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
        {/*
        TODO: Add preset function for dynamic resume
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        */}
      </ul>
    </nav>
  );
};

export default Navigation;
