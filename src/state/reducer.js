import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization/reducer";

import { transferReducer } from "./transfer/reducer";

import { userInfoReducer } from "./user-info/reducer";
const appReducer = combineReducers({
  authorization: authorizationReducer,
  userInfo: userInfoReducer,
  transfer: transferReducer
});

export const reducer = (state, action) => {
  //   debugger;
  //   if (action.type === "USER_LOGOUT") {
  //     state = intialState;
  //     debugger;
  //     storage.removeItem("persist:root");
  //   }

  return appReducer(state, action);
};
