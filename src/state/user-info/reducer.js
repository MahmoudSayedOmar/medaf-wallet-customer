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
        ...action.payload
      };
    }
    case types.UPDATE_USER_INFO_FALIAR_ACTION:
    default:
      return state;
  }
}
