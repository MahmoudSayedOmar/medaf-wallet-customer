import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization/reducer";

import { userInfoReducer } from "./user-info/reducer";

import { intialState } from "./state";
const appReducer = combineReducers({
  authorization: authorizationReducer,
  userInfo: userInfoReducer
});

export const reducer = (state, action) => {
  debugger;
  if (action.type === "USER_LOGOUT") {
    state = intialState;
  }

  return appReducer(state, action);
};
