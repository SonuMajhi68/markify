import React from "react";

import { Folder, Toc, User, Setting } from "../assets/icons/icon";

export default function ActivityBar() {
  return (
    <div className="workspace_activityBar">
      <div className="workspace_activityBar_navigation">
        <div>
          <Folder size={20} />
        </div>
        <div>
          <Toc size={20} />
        </div>
      </div>
      <div className="workspace_activityBar_space"></div>
      <div className="workspace_activityBar_user">
        <div>
          <User size={20} />
        </div>
        <div>
          <Setting size={20} />
        </div>
      </div>
    </div>
  );
}
