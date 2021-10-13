import React from "react";

import TitleBar from "./components/TitleBar";
import MainArea from "./components/MainArea";

import "./assets/styles/styles.scss";

const dir = "E:/Application/7-Zip";

console.log(electron.readDir(dir));

export default function App() {
  return (
    <div>
      <TitleBar />
      <MainArea />
    </div>
  );
}
