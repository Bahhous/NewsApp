import * as actionTypes from "../actions/ActionTypes";
import { updateObject } from "../../Helpers/Functions";

const initState = {
  user: false,
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return updateObject(state, {
        user: action.user,
      });
    default:
      return state;
  }
};

export default UserReducer;
