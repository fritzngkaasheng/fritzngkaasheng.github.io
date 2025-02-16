"use strict";

import Icon from "/src/js/Icons.js";
import Navigation from "/src/js/components/Navigation.js";
import LanguageSwitcher from "/src/js/components/LanguageSwitcher.js";

const Header = () => {
  return (
    <header className="navbar bg-transparent fixed-top pe-2 flex-column align-items-end">
      <button className="navbar-toggler bg-body-tertiary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <Icon name="navBar" />
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <Navigation />
          {/*
          TODO: Add keyword search function to dynamic resume
          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          */}
        </div>
      </div>
      <div className="pt-2">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
