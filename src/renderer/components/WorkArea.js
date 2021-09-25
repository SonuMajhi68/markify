import React from "react";

import TabBar from "./TabBar";
import Editor from "./Editor";

export default function WorkArea() {
  return (
    <div className="workspace_workArea">
      <TabBar />
      <Editor />
    </div>
  );
}
