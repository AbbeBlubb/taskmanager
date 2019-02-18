import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import App from "./components/app";
import "./styles/styles.scss";
import reducers from "./store/reducers";

const store = createStore(
  reducers,
  /* preloadstate, */
  applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
