import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";

export type State = {
  authorization: AuthorizationState
};

export const intialState = {
  authorization: AuthorizationInitialState
};
