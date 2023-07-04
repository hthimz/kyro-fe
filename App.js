// Lets segregate into different files

import React from "react";
import ReactDOM from "react-dom/client";
import FunctionalApp from "./src";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { THEME_DARK_CONTEXT } from "./src/utils/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme(THEME_DARK_CONTEXT);
root.render(
  <Router>
    <NextUIProvider theme={theme}>
      <FunctionalApp />
    </NextUIProvider>
  </Router>
);

// this is also known as composition of components
