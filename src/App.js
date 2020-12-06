import React from "react";
import { NotificationContainer } from "react-notifications";
import Router from "./Router";

const App = () => {
  return (
    <>
      <Router />
      <NotificationContainer />
    </>
  );
};

export default App;
