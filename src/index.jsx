import React from "react";
import {render} from "react-dom";

import styles from "./styles/main.scss";
import App from "./components/App";

const appWrapper = document.querySelector(".app-wrapper");

render(<App/>, appWrapper);