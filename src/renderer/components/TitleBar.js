import React from "react";

import { Close, Max, Min } from "../assets/icons/icon";

export default function TitleBar() {
  return (
    <div className="titlebar">
      <div className="titlebar_title">Markify</div>
      <div className="titlebar_menu"></div>
      <div className="titlebar_window-control">
        <div id="minimize">
          <Min size={17} />
        </div>
        <div id="maximize">
          <Max size={17} />
        </div>
        <div id="close">
          <Close size={17} />
        </div>
      </div>
    </div>
  );
}
