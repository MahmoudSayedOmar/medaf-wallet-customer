// @Flow
import { AuthorizationState, AuthorizationInitialState } from "./state";

import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_LOGIN_Action
  | actions.LOGIN_SUCCESS_Action
  | actions.LOGIN_FAIL_Action;

export function authorizationReducer(
  state: AuthorizationState = AuthorizationInitialState,
  action: Action
): AuthorizationState {
  switch (action.type) {
    case types.ON_LOGIN: {
      return {
        ...state,
        loading: true,
        membershipId: action.payload.membershipId,
        mobileNumber: action.payload.mobileNumber,
        dateOfBirth: action.payload.dateOfBirth
      };
    }

    case types.LOGIN_SUCCESS: {
      debugger;
      return {
        ...state,
        isLoggedIn: true,
        loading: false
      };
    }

    case types.LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.payload,
        loading: false
      };
    }
    case types.ON_PRE_LOGIN: {
      return {
        ...state,
        loading: true
      };
    }

    case types.PRE_LOGIN_SUCCESS: {
      debugger;
      return {
        ...state,
        token: action.payload.Token,
        isPreLoggedIn: true,
        loading: false,
        userID: action.payload.UserId,
        brandID: action.payload.BrandId,
        groupID: action.payload.GroupId,
        amount: 0
      };
    }

    case types.PRE_LOGIN_FAIL: {
      return {
        ...state,
        isPreLoggedIn: false,
        errorMessage: action.payload,
        loading: false
      };
    }

    default:
      return state;
  }
}
