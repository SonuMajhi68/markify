import React from "react";

import TitleBar from "./components/TitleBar";
import MainArea from "./components/MainArea";

import "./assets/styles/styles.scss";

export default function App() {
  return (
    <div>
      <TitleBar />
      <MainArea />
    </div>
  );
}
