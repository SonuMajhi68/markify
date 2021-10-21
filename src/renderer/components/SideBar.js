import React from "react";

import { Folder, Toc, User, Setting } from "../assets/icons/icon";

export default function SideBar() {
  const handleDir = () => {
    // electron.chooseDir();
    // electron.openDir.chooseDir();
    // electron.openDir.getDir();
    console.log(electron.openDir.chooseDir());
    console.log("hllo");
  };

  return (
    <div className="workspace_sideBar">
      <div className="workspace_sideBar_container">
        <div className="workspace_sideBar_container_open" onClick={handleDir}>
          Open Folder
        </div>
      </div>
    </div>
  );
}
