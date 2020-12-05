import * as actionTypes from "../actions/ActionTypes";
import { updateObject } from "../../Helpers/Functions";

const initState = {
  newsList: false,
};

const MainReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_NEWS_LIST:
      return updateObject(state, {
        newsList: action.newsList,
      });
    default:
      return state;
  }
};

export default MainReducer;
