import * as types from "./actions";
import { UserLoginModel } from "../../proxy";
import { authProxyService } from "../../services";
import { updateUserInfo } from "../user-info/action-creator";

export type ON_LOGIN_Action = { type: string, payload: any };
export type LOGIN_SUCCESS_Action = {
  type: string,
  payload: any
};
export type LOGIN_FAIL_Action = { type: string, payload: string };

export function tryLogin(user: UserLoginModel) {
  return async (dispatch, getState) => {
    dispatch(onLogin(user));
    const state = getState();
    debugger;
    let data = {
      UserID: state.authorization.userID,
      BrandID: state.authorization.brandID,
      GroupID: state.authorization.groupID,
      CardNo: user.membershipId,
      Mobile: user.mobileNumber,
      BirthDate: user.dateOfBirth,
      Amount: 0
    };
    let response = await authProxyService.login(
      data,
      state.authorization.token
    );
    result = await response.data;

    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(
        onLoginSuccess({
          CardNo: user.membershipId,
          Mobile: user.mobileNumber,
          BirthDate: user.dateOfBirth
        })
      );
      dispatch(
        updateUserInfo({
          cardNo: user.membershipId,
          balance: result["Balance"]
        })
      );
    } else {
      dispatch(onLoginFail());
    }
  };
}

export function onLogin(user): ON_LOGIN_Action {
  return { type: types.ON_LOGIN, payload: user };
}

export function onLoginSuccess(token): LOGIN_SUCCESS_Action {
  return { type: types.LOGIN_SUCCESS, payload: token };
}

export function onLoginFail(): LOGIN_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.LOGIN_FAIL, payload: errorMsg };
}
////////////////////////////////////////////////////////////////////
export type ON_PRE_LOGIN_Action = { type: string };
export type PRE_LOGIN_SUCCESS_Action = {
  type: string,
  payload: any
};
export type PRE_LOGIN_FAIL_Action = { type: string, payload: string };

export function tryPreLogin() {
  return async dispatch => {
    dispatch(onPreLogin());
    debugger;
    let response = await authProxyService.preLogin();
    debugger;
    const result = await response.data;

    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(onPreLoginSuccess(result));
    } else {
      dispatch(onPreLoginFail());
    }
  };
}
export function onPreLogin(): ON_PRE_LOGIN_Action {
  return { type: types.ON_PRE_LOGIN };
}

export function onPreLoginSuccess(payload): PRE_LOGIN_SUCCESS_Action {
  return { type: types.PRE_LOGIN_SUCCESS, payload };
}

export function onPreLoginFail(): PRE_LOGIN_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.PRE_LOGIN_FAIL, payload: errorMsg };
}
