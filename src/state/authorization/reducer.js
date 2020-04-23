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
      };
    }

    case types.LOGIN_SUCCESS: {
      debugger;
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        ...action.payload,
      };
    }

    case types.LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.payload,
        loading: false,
      };
    }
    case types.ON_FIRST_LOGIN: {
      return {
        ...state,
      };
    }

    case types.FIRST_LOGIN_SUCCESS: {
      debugger;
      return {
        ...state,
      };
    }

    case types.FIRST_LOGIN_FAIL: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
