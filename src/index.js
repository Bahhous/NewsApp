import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//Import middlwears
import Logger from "./Store/Middlewares/Logger";

//Import reducers
import Main from "./Store/Reducers/Main";
import User from "./Store/Reducers/User";

//Import assets
//import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const REACT_VERSION = React.version;
console.log("[React Version] ", REACT_VERSION);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  main: Main,
  user: User,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(Logger, thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
