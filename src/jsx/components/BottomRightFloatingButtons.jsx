"use strict";

import Icon from "/src/js/components/Icons.js";
import DownloadAsPDFLink from "/src/js/components/DownloadAsPDFLink.js";
import DownloadAsDocxLink from "/src/js/components/DownloadAsDocxLink.js";

const BottomRightFloatingButtons = () => {
  return (
    <div id="bottom-right-floating-btns" className="btn-group dropstart position-fixed bottom-0 end-0 pb-2 pe-2">
      <button id="download-dropstart" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <Icon name="download" />
      </button>
      <ul className="dropdown-menu">
        <li><DownloadAsPDFLink /></li>
        <li><DownloadAsDocxLink /></li>
      </ul>
    </div>
  );
};

export default BottomRightFloatingButtons;
