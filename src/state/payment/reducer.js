import {
   PaymentState,
   PaymentInitalState
  } from "./state";
  
  import * as actions from "./action-creator";
  
  import * as types from "./actions";
  
  type Action =
    | actions.ON_SELECT_ACTION
  
  export function paymentReducer(
    state: PaymentState = PaymentInitalState,
    action: Action
  ): PaymentState {
    switch (action.type) {
      case types.SELECT_PAYMENT:
           return {
               ...state,
               orderId:action.payload['result']['ReturnValue'],
               orderMessage:action.payload['result']["Message"],
               amount:action.payload['amount']
           }
        break;
  
      default:
        return state;
    }
  }
  