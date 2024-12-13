"use strict";

import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";

const { Outlet } = window.ReactRouterDOM;

const MainContainer = () => {
  return (
    <div id="main-container">
      <BottomRightFloatingButtons />
      <Outlet />
    </div>
  );
};

export default MainContainer;
