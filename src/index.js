import React from "react";
import { render } from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Webpack will bundle this
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import theme from "./theme";

const store = configureStore(); // we may pass initial state into the store here.

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
