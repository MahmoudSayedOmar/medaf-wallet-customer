import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";
import { TransferInitalState, TranserState } from "./transfer/state";

import { UserInfoInitialState, UserInfoState } from "./user-info/state";

import {PaymentState,PaymentInitalState} from "./payment/state";
export type State = {
  authorization: AuthorizationState,
  userInfo: UserInfoState,
  transfer: TranserState,
  payment:PaymentState
};

export const intialState = {
  authorization: AuthorizationInitialState,
  userInfo: UserInfoInitialState,
  transfer: TransferInitalState,
  payment:PaymentInitalState
};
