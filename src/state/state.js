import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";

import { UserInfoInitialState, UserInfoState } from "./user-info/state";

export type State = {
  authorization: AuthorizationState,
  userInfo: UserInfoState
};

export const intialState = {
  authorization: AuthorizationInitialState,
  userInfo: UserInfoInitialState
};
