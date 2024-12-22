"use strict";

import Icon from "/src/js/Icons.js";
import DownloadAsPDFButton from "/src/js/components/DownloadAsPDFButton.js";
import DownloadAsDocxButton from "/src/js/components/DownloadAsDocxButton.js";

const BottomRightFloatingButtons = ({ fullName, roleName }) => {
  return (
    <div id="bottom-right-floating-btns" className="btn-group dropstart position-fixed bottom-0 end-0 pb-2 pe-2">
      <button id="download-dropstart" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <Icon name="download" />
      </button>
      <ul className="dropdown-menu">
        <li>
          <DownloadAsPDFButton
            fullName={fullName}
            roleName={roleName}
          />
        </li>
        <li>
          <DownloadAsDocxButton
            fullName={fullName}
            roleName={roleName}
          />
        </li>
      </ul>
    </div>
  );
};

export default BottomRightFloatingButtons;
