"use strict";

const { Outlet } = window.ReactRouterDOM;

import Header from "/src/js/components/Header.js";
import LanguageSwitcher from "/src/js/components/LanguageSwitcher.js";

const Layout = () => {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <Outlet />
    </>
  )
};

export default Layout;
