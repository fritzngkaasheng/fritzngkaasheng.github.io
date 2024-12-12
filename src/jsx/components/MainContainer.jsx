"use strict";

import BottomRightFloatingButtons from "/src/js/components/BottomRightFloatingButtons.js";
import A4Container from "/src/js/components/A4Container.js";

const MainContainer = () => {
  return (
    <div id="main-container">
      <BottomRightFloatingButtons />
      <A4Container />
    </div>
  );
};

export default MainContainer;
