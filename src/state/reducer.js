import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization/reducer";

import { transferReducer } from "./transfer/reducer";

import { userInfoReducer } from "./user-info/reducer";

import {paymentReducer} from "./payment/reducer";

import { intialState } from "./state";
const appReducer = combineReducers({
  authorization: authorizationReducer,
  userInfo: userInfoReducer,
  transfer: transferReducer,
  payment:paymentReducer
});

export const reducer = (state, action) => {
  debugger;
  if (action.type === "USER_LOGOUT") {
    state = intialState;
  }

  return appReducer(state, action);
};
