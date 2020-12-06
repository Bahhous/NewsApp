import * as actionTypes from "./ActionTypes";

export const saveUser = (user) => {
  return (dispatch) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: actionTypes.SET_USER, user: user });
  };
};

export const loadUser = () => {
  return (dispatch) => {
    const user = localStorage.getItem("user");
    dispatch({ type: actionTypes.SET_USER, user: JSON.parse(user) ?? false });
  };
};
