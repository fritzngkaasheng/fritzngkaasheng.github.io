"use strict";

import DownloadAsPDFButton from "/src/js/components/DownloadAsPDFButton.js";
import DownloadAsDocxButton from "/src/js/components/DownloadAsDocxButton.js";

const BottomRightFloatingButtons = () => {
  return (
    <div id="bottom-right-floating-btns">
      <DownloadAsPDFButton />
      <DownloadAsDocxButton />
    </div>
  );
};

export default BottomRightFloatingButtons;
