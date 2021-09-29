import React from "react";

import Switch from "./Switch";
import ToolBar from "./ToolBar";

export default function Editor() {
  return (
    <div className="workspace_editor">
      <ToolBar />
      <Switch />
      <div className="test"></div>
      <span className="workspace_editor_info">
        <p>w 20</p>
      </span>
    </div>
  );
}
