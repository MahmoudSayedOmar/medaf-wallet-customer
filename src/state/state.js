import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";
import { TransferInitalState, TranserState } from "./transfer/state";

export type State = {
  authorization: AuthorizationState,
  transfer: TranserState
};

export const intialState = {
  authorization: AuthorizationInitialState,
  transfer: TransferInitalState
};
