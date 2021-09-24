import React from "react";

import close from "./control/close.svg";
import max from "./control/max.svg";
import min from "./control/min.svg";

import logo from "./logo/logo.svg";

// Title bar logo

const Logo = (props) => (
  <img src={logo} alt="React Logo" width={props.size} height={props.size} />
);

// Window Control

const Close = (props) => (
  <img src={close} alt="React Logo" width={props.size} height={props.size} />
);

const Max = (props) => (
  <img src={max} alt="React Logo" width={props.size} height={props.size} />
);

const Min = (props) => (
  <img src={min} alt="React Logo" width={props.size} height={props.size} />
);

export { Close, Max, Min, Logo };
