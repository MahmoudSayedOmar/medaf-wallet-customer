import {
  TranserState,
  TransferInitalStateTransferInitalState,
  TransferInitalState
} from "./state";

import * as actions from "./action-creator";

import * as types from "./actions";

type Action =
  | actions.ON_CHECK_ACTION
  | actions.ON_CHECK_FAIL_Action
  | actions.ON_CHECK_SUCCESS_Action;

export function transferReducer(
  state: TranserState = TransferInitalState,
  action: Action
): TranserState {
  switch (action.type) {
    case types.CHECK_MEMBER:
      break;

    case types.CHECK_MEMBER_SUCCESS:
      break;

    case types.CHECK_MEMBER_Failed:
      break;

    case types.TRANSFER:
      return { ...state };

    case types.TRANSFER_SUCCESS:
      return {
        ...state,
        isTransfer: true,
      
      };

    case types.TRANSFER_Failed:
      return {
        ...state,
        transferStatus: action.payload,
        isTransfer: false
      };
    default:
      return state;
  }
}
