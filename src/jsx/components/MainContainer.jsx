"use strict";

const { Outlet } = window.ReactRouterDOM;

const MainContainer = () => {
  return (
    <div id="main-container">
      <Outlet />
    </div>
  );
};

export default MainContainer;
