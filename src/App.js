import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import Router from "./Router";
import { useDispatch } from "react-redux";
import { loadUser } from "./Store/Actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <Router />
      <NotificationContainer />
    </>
  );
};

export default App;
