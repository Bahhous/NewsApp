import React from "react";
import { render } from "react-dom";

//Import assets
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const REACT_VERSION = React.version;
console.log("[React Version] ", REACT_VERSION);

render(<App />, document.getElementById("root"));
