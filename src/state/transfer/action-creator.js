import * as types from "./actions";
import { transferService } from "../../services";

import Toast from "react-native-tiny-toast";

export type ON_CHECK_ACTION = { type: String, payload: any };
export type ON_CHECK_SUCCESS_Action = {
  type: string,
  payload: any
};
export type ON_CHECK_FAIL_Action = {
  type: string,
  payload: any
};
///////////////////////////////////////////////////////////////////////////
export type ON_TRANSFER_ACTION = { type: String, payload: any };
export type ON_TRANSFER__SUCCESS_Action = {
  type: string,
  payload: any
};
export type ON_TRANSFER_FAIL_Action = {
  type: string,
  payload: any
};
////////////////////CheckMember/////////////////////////////
export function checkMember(model) {
  return async (dispatch, getState) => {
    dispatch(onCheckMember(model));
    const state = getState();
    let response = await transferService.checkMember(
      model,
      state.authorization.token
    );
    // result = await response.data;

    if (response.status === 200) {
      debugger;
    }
  };
}
///////////////////TransferFunction/////////////////////////
export function transfer(transferModel) {
  debugger;
  debugger;
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(onTransfer(transferModel));
    const transferDto = {};
    transferDto["receiverCodeNo"] = transferModel["receiverCodeNo"];
    transferDto["amount"] = transferModel["amount"];
    transferDto["senderCodeNo"] = state.authorization.membershipId;
    transferDto["pin"] = transferModel["pin"];
    debugger;

    let response = await transferService.makeTransfer(
      transferDto,
      state.authorization.token
    );
    console.log("Response", response);
    result = await response.data;
    debugger;
    dispatch(onTransferFailed(result["Message"]));
    Toast.show(result["Message"], {
      position: Toast.position.center
    });

    // if (response.status === 200) {
    //   debugger;
    //   dispatch(onTransferSuccess());
    // } else {
    //   debugger;
    //   dispatch(onTransferFailed(result["Message"]));
    // }
  };
}

export function onCheckMember(payload): ON_CHECK_ACTION {
  return { type: types.CHECK_MEMBER, payload };
}
export function onCheckMemberSuccess(): ON_CHECK_SUCCESS_Action {
  return { type: types.CHECK_MEMBER_SUCCESS };
}
export function onCheckMemberFailed(): ON_CHECK_FAIL_Action {
  return { type: types.CHECK_MEMBER_Failed };
}
////////////////////////////////////////////////////////////////
export function onTransfer(payload): ON_TRANSFER_ACTION {
  return { type: types.TRANSFER, payload };
}
export function onTransferSuccess(successMessage): ON_TRANSFER__SUCCESS_Action {
  return { type: types.TRANSFER_SUCCESS, payload: successMessage };
}
export function onTransferFailed(errorMessage): ON_TRANSFER_FAIL_Action {
  return { type: types.TRANSFER_Failed, payload: errorMessage };
}
