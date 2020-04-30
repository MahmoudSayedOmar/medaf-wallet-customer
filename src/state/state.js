import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";
import { TransferInitalState, TranserState } from "./transfer/state";

import { UserInfoInitialState, UserInfoState } from "./user-info/state";

export type State = {
  authorization: AuthorizationState,
  userInfo: UserInfoState,
  transfer: TranserState
};

export const intialState = {
  authorization: AuthorizationInitialState,
  userInfo: UserInfoInitialState,
  transfer: TransferInitalState
};
