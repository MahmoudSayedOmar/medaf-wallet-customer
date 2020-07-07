// @Flow
import { UserInfoInitialState, UserInfoState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action = actions.UPDATE_USER_INFO_ACTION;

export function userInfoReducer(
  state: UserInfoState = UserInfoInitialState,
  action: Action
): UserInfoState {
  switch (action.type) {
    case types.UPDATE_USER_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case types.ON_CHANGE_PIN_CODE: {
      return {
        ...state,
        loading: true,
        changePinCodeStatus: 0,
      };
    }
    case types.CHANGE_PIN_CODE_SUCCESS: {
      return {
        ...state,
        loading: false,
        changePinCodeStatus: 1,
      };
    }
    case types.CHANGE_PIN_CODE_FAILED: {
      return {
        ...state,
        loading: false,
        changePinCodeStatus: -1,
      };
    }
    case types.ON_SET_PIN_CODE: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.SET_PIN_CODE_SUCCESS: {
      debugger;

      return {
        ...state,
        loading: false,
        setPinCodeStatus: 1,
        setPinCodeErrorMsg: "",
      };
    }
    case types.SET_PIN_CODE_FAILED: {
      return {
        ...state,
        loading: false,
        setPinCodeStatus: -1,
        setPinCodeErrorMsg: action.payload,
      };
    }
    case types.UPDATE_BALANCE: {
      debugger;
      return {
        ...state,
        balance: action.payload,
      };
    }
    case types.ON_CONNECTION_SUCCESS: {
      debugger;
      return {
        ...state,
        connectionId: action.payload,
        connected: 1,
      };
    }
    case types.ON_CONNECTION_FAIL: {
      debugger;
      return {
        ...state,
        connected: -1,
      };
    }
    case types.ON_RETRIVE_USER_TRANSACTIONS_HISTORY: {
      debugger;
      return {
        ...state,
        loadingTransactions: true,
      };
    }
    case types.RETRIVE_USER_TRANSACTIONS_HISTORY_SUCCESS: {
      debugger;
      return {
        ...state,
        loadingTransactions: false,
        transactionsHistory: action.payload["PointsTransactions"],
        finalBalance: action.payload["FinalBalance"],
        intialBalance: action.payload["IntialBalance"],
      };
    }
    case types.RETRIVE_USER_TRANSACTIONS_HISTORY_FAIL: {
      debugger;
      return {
        ...state,
        loadingTransactions: false,
      };
    }
    case types.ON_RETRIVE_USER_TRANSACTION_DETAILS: {
      debugger;
      return {
        ...state,
        
      };
    }
    case types.RETRIVE_USER_TRANSACTION_DETAILS_SUCCESS: {
      debugger;
      return {
        ...state,
        selectedTransaction:action.payload
      };
    }
    case types.RETRIVE_USER_TRANSACTION_DETAILS_FAIL: {
      debugger;
      return {
        ...state,
   
      };
    }
    case types.UPDATE_USER_INFO_FALIAR_ACTION:
    default:
      return state;
  }
}
