import React from "react";

import Switch from "./Switch";
import ToolBar from "./ToolBar";
import Info from "./Info";

export default function Editor() {
  return (
    <div className="workspace_editor">
      <ToolBar />
      <Switch />
      <div className="test"></div>
      <Info />
    </div>
  );
}
