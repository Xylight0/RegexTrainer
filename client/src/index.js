import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RegexSynProv } from "./context/Regex_context";

ReactDOM.render(
  <RegexSynProv>
    <App />
  </RegexSynProv>,
  document.getElementById("root")
);
