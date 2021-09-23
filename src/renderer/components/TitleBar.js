import React from "react";

import Close from "../assets/icons/control/close.svg";
import Max from "../assets/icons/control/max.svg";
import Min from "../assets/icons/control/min.svg";

export default function TitleBar() {
  return (
    <div className="titlebar">
      <div className="titlebar_title">Markify</div>
      <div className="titlebar_menu"></div>
      <div className="titlebar_window-control">
        <div id="minimize">
          <Min />
        </div>
        <div id="maximize">
          <Max />
        </div>
        <div id="close">
          <Close />
        </div>
      </div>
    </div>
  );
}
