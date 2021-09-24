import React from "react";

import Menu from "./Menu";

import { Close, Max, Min, Logo } from "../assets/icons/icon";

export default function TitleBar() {
  return (
    <div className="titlebar">
      <div className="titlebar_title">
        <Logo size={30} />
      </div>
      <div className="titlebar_menu">
        <Menu />
      </div>
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
