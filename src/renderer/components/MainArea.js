import React from "react";

import Split from "react-split";

import ActivityBar from "./ActivityBar";
import SideBar from "./SideBar";
import WorkArea from "./WorkArea";

export default function MainArea() {
  return (
    <div className="workspace">
      <ActivityBar />
      <Split
        gutterSize={5}
        sizes={[30, 70]}
        minSize={[0, 300]}
        maxSize={[500]}
        snapOffset={100}
        className="split_area"
      >
        <SideBar />
        <WorkArea />
      </Split>
    </div>
  );
}
