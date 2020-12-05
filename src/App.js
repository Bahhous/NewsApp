import React from "react";
import { NotificationContainer } from "react-notifications";
import Router from "./Router";

const App = () => {
  return (
    <>
      <h1>News APP</h1>
      <Router />
      <NotificationContainer />
    </>
  );
};

export default App;
