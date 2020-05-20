import * as types from "./actions";
import { transferService } from "../../services";

import { updateUserInfo } from "../user-info/action-creator";



export type ON_CHECK_ACTION = { type: String, payload: any };
export type ON_CHECK_SUCCESS_Action = {
  type: string,
  payload: any,
};
export type ON_CHECK_FAIL_Action = {
  type: string,
  payload: any,
};
///////////////////////////////////////////////////////////////////////////
export type ON_TRANSFER_ACTION = { type: String, payload: any };
export type ON_TRANSFER__SUCCESS_Action = {
  type: string,
  payload: any,
};
export type ON_TRANSFER_FAIL_Action = {
  type: string,
  payload: any,
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
    }
  };
}
///////////////////TransferFunction/////////////////////////
export function transfer(transferModel) {
  debugger;
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(onTransfer(transferModel));
    const transferDto = {};
    transferDto["receiverCodeNo"] = transferModel["receiverCodeNo"];
    transferDto["amount"] = transferModel["amount"];
    transferDto["senderCodeNo"] = state.authorization.CardNo;
    transferDto["pin"] = transferModel["pin"];
    transferDto["mobile"]=transferModel["mobile"];
    debugger;
    
    let response = await transferService.makeTransfer(
      transferDto,
      state.authorization.token
    );
    console.log("Response", response);
    result = await response.data;
      debugger;
    if(response.data.code===1){
      dispatch(onTransferSuccess());
      dispatch(
       updateUserInfo({
         cardNo: result["CardNo"],
         balance: result["Balance"],
        }));
    }
    else{
      onTransferFailed(result["Message"])
    }
       return true;
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
export function onTransferSuccess(): ON_TRANSFER__SUCCESS_Action {
  return { type: types.TRANSFER_SUCCESS };
}
export function onTransferFailed(errorMessage): ON_TRANSFER_FAIL_Action {
  return { type: types.TRANSFER_Failed, payload: errorMessage };
}
