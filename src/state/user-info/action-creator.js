import * as types from "./actions";
import { authProxyService } from "../../services";

export type UPDATE_USER_INFO_ACTION = { type: string, payload: Object };

export type UPDATE_USER_INFO_FALIAR_ACTION = { type: string, payload: Object };

export function tryRefresh() {
  return async (dispatch, getState) => {
    const state = getState();
    debugger;
    let data = {
      UserID: state.authorization.userID,
      BrandID: state.authorization.brandID,
      GroupID: state.authorization.groupID,
      CardNo: state.authorization.membershipId,
      Mobile: state.authorization.mobileNumber,
      BirthDate: state.authorization.dateOfBirth,
      Amount: 0
    };
    let response = await authProxyService.login(
      data,
      state.authorization.token
    );
    result = await response.data;

    if (response.status === 200) {
      dispatch(
        updateUserInfo({
          cardNo: state.authorization.membershipId,
          balance: result["Balance"]
        })
      );
    } else {
      dispatch(updateUserInfoFail());
    }
  };
}

export function updateUserInfo(data): UPDATE_USER_INFO_ACTION {
  return { type: types.UPDATE_USER_INFO, payload: data };
}

export function updateUserInfoFail(): UPDATE_USER_INFO_FALIAR_ACTION {
  return { type: types.UPDATE_USER_INFO, payload: "Failed" };
}
