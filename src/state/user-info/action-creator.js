import * as types from "./actions";
import { authProxyService, userManagerProxyService } from "../../services";

export type UPDATE_USER_INFO_ACTION = { type: string, payload: Object };

export type UPDATE_USER_INFO_FALIAR_ACTION = { type: string, payload: Object };

export function tryRefresh() {
  return async (dispatch, getState) => {
    const state = getState();
    debugger;
    let data = {
      UserID: state.authorization.userID,
      BrandID: state.authorization.brandID,
      GroupID: state.authorization.groupID,
      CardNo: state.authorization.membershipId,
      Mobile: state.authorization.mobileNumber,
      BirthDate: state.authorization.dateOfBirth,
      Amount: 0,
    };
    let response = await authProxyService.login(
      data,
      state.authorization.token
    );
    result = await response.data;

    if (response.status === 200) {
      dispatch(
        updateUserInfo({
          cardNo: state.authorization.membershipId,
          balance: result["Balance"],
        })
      );
    } else {
      dispatch(updateUserInfoFail());
    }
  };
}

export function updateUserInfo(data): UPDATE_USER_INFO_ACTION {
  return { type: types.UPDATE_USER_INFO, payload: data };
}

export function updateUserInfoFail(): UPDATE_USER_INFO_FALIAR_ACTION {
  return { type: types.UPDATE_USER_INFO, payload: "Failed" };
}
//////////////////////////////////////////////////////////////////
export type ON_SET_PIN_CODE_ACTION = { type: string };
export type SET_PIN_CODE_SUCCESS_ACTION = { type: string, payload: Object };
export type SET_PIN_CODE_FAILED_ACTION = { type: string, payload: Object };

export function trySetPinCode(confirmationData) {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.authorization.token;
    dispatch(onSetPinCode());
    let response = await userManagerProxyService.setFirstPinCode(
      {
        activationCode: confirmationData.confirmationCode,
        pinCode: confirmationData.newPinCode,
        cardNumber: state.authorization.CardNo,
      },
      token
    );
    debugger;
    if (response.status === 200) {
      if (response.data.code == 1) {
        dispatch(SetPinCodeSuccess());
      } else {
        dispatch(SetPinCodeFail("Make sure of your confirmation code"));
      }
    }
    dispatch(SetPinCodeFail("Something went wrong"));
  };
}

export function onSetPinCode(): ON_SET_PIN_CODE_ACTION {
  return { type: types.ON_SET_PIN_CODE };
}
export function SetPinCodeSuccess(data): SET_PIN_CODE_SUCCESS_ACTION {
  return { type: types.SET_PIN_CODE_SUCCESS, payload: data };
}
export function SetPinCodeFail(data): SET_PIN_CODE_FAILED_ACTION {
  return { type: types.SET_PIN_CODE_FAILED, payload: data };
}

//////////////////////////////////////////////////////////////////////////////
export type ON_CHANGE_PIN_CODE_ACTION = { type: string };
export type CHANGE_PIN_CODE_SUCCESS_ACTION = { type: string, payload: Object };
export type CHANGE_PIN_CODE_FAILED_ACTION = { type: string, payload: Object };

export function tryChangePinCode(confirmationData) {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.authorization.token;
    dispatch(onChangePinCode());
    let response = await userManagerProxyService.changePinCode(
      {
        oldPinCode: confirmationData.oldPinCode,
        newPinCode: confirmationData.newPinCode,
        cardNumber: state.authorization.CardNo,
      },
      token
    );
    debugger;
    if (response.status === 200) {
      if (response.data.code == 1) {
        dispatch(changePinCodeSuccess());
      } else {
        dispatch(changePinCodeFail());
      }
    } else {
      dispatch(changePinCodeFail());
    }
  };
}

export function onChangePinCode(): ON_CHANGE_PIN_CODE_ACTION {
  return { type: types.ON_CHANGE_PIN_CODE };
}
export function changePinCodeSuccess(data): CHANGE_PIN_CODE_SUCCESS_ACTION {
  return { type: types.CHANGE_PIN_CODE_SUCCESS, payload: data };
}
export function changePinCodeFail(data): CHANGE_PIN_CODE_FAILED_ACTION {
  return { type: types.CHANGE_PIN_CODE_FAILED, payload: data };
}
/////////////////////////////////////////////////////////////////

export type UPDATE_BALANCE_ACTION = { type: string, payload: Number };
export type ON_CONNECTION_SUCCESS_ACTION = { type: string, payload: String };
export type ON_CONNECTION_FAIL_ACTION = { type: string };

export function contBalanceUpdate(argOne) {
  return async (dispatch) => {
    debugger;

    dispatch(updateBalance(argOne));
  };
}

export function updateBalance(balance): ON_CHANGE_PIN_CODE_ACTION {
  return { type: types.UPDATE_BALANCE, payload: balance };
}

export function connectionSuccess(id): ON_CONNECTION_SUCCESS_ACTION {
  return { type: types.ON_CONNECTION_SUCCESS, payload: id };
}
export function connectionFail(): ON_CONNECTION_FAIL_ACTION {
  return { type: types.ON_CONNECTION_FAIL };
}
/////////////////////////////////////////////////////////////////

export type ON_RETRIVE_USER_TRANSACTIONS_HISTORY_ACTION = { type: string };
export type RETRIVE_USER_TRANSACTIONS_HISTORY_SUCCESS_ACTION = {
  type: string,
  payload: String,
};
export type RETRIVE_USER_TRANSACTIONS_HISTORY_FAIL_ACTION = { type: string };

export function tryRetriveTransactions(data) {
  return async (dispatch, getState) => {
    debugger;
    const state = getState();
    dispatch(onRetriveTransactions());
    data.CardNo = state.authorization.CardNo;
    debugger;
    let response = await userManagerProxyService.retriveUserTransactionsHistory(
      data,
      state.authorization.token
    );
    debugger;

    if (response.status === 200) {
      dispatch(retriveTransactionsSuccess(response.data));
    } else {
      dispatch(retriveTransactionsFail());
    }
  };
}

export function onRetriveTransactions(): ON_RETRIVE_USER_TRANSACTIONS_HISTORY_ACTION {
  return { type: types.ON_RETRIVE_USER_TRANSACTIONS_HISTORY };
}

export function retriveTransactionsSuccess(
  data
): RETRIVE_USER_TRANSACTIONS_HISTORY_SUCCESS_ACTION {
  return {
    type: types.RETRIVE_USER_TRANSACTIONS_HISTORY_SUCCESS,
    payload: data,
  };
}
export function retriveTransactionsFail(): RETRIVE_USER_TRANSACTIONS_HISTORY_FAIL_ACTION {
  return { type: types.RETRIVE_USER_TRANSACTIONS_HISTORY_FAIL };
}
