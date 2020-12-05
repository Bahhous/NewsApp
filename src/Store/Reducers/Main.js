import * as actionTypes from "../actions/ActionTypes";
import { updateObject } from "../../Helpers/Functions";

const initState = {
  newsList: false,
  topNewsList: false,
  customNewsList: false,
};

const MainReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_NEWS_LIST:
      return updateObject(state, {
        newsList: action.newsList,
      });
    case actionTypes.LOAD_TOP_NEWS_LIST:
      return updateObject(state, {
        topNewsList: action.topNewsList,
      });
    case actionTypes.LOAD_TOP_NEWS_LIST:
      return updateObject(state, {
        customNewsList: action.customNewsList,
      });
    default:
      return state;
  }
};

export default MainReducer;
