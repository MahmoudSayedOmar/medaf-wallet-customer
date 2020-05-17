// @Flow
import { AuthorizationState, AuthorizationInitialState } from "./state";

import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_LOGIN_Action
  | actions.LOGIN_SUCCESS_Action
  | actions.LOGIN_FAIL_Action
  | actions.ON_FIRST_LOGIN_Action
  | actions.FIRST_LOGIN_SUCCESS_Action
  | actions.FIRST_LOGIN_FAIL_Action;

export function authorizationReducer(
  state: AuthorizationState = AuthorizationInitialState,
  action: Action
): AuthorizationState {
  switch (action.type) {
    case types.ON_LOGIN: {
      return {
        ...state,
        loading: true,
        userName: action.payload.userName,
        password: action.payload.password,
        firstLogIn: false,
        isLoggedIn: false,
        havePinCode: false,
      };
    }

    case types.LOGIN_SUCCESS: {
      debugger;
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        ...action.payload,
        errorMessage: "",
      };
    }

    case types.LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.payload,
        loading: false,
        firstLogIn: false,
      };
    }

    case types.ON_FIRST_LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.FIRST_LOGIN_SUCCESS: {
      debugger;
      return {
        ...state,
        firstLogIn: false,
        loading: false,
        firstLoginErrorMessage: "",
      };
    }

    case types.FIRST_LOGIN_FAIL: {
      return {
        ...state,
        firstLogIn: true,
        loading: false,
        firstLoginErrorMessage: action.payload,
      };
    }

    default:
      return state;
  }
}
