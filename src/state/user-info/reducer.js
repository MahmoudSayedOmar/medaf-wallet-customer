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
        ...action.payload,
      };
    }

    case types.ON_CHANGE_PIN_CODE: {
      return {
        ...state,
        loading: true,
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
    case types.UPDATE_USER_INFO_FALIAR_ACTION:
    default:
      return state;
  }
}
