import * as types from "./actions";

export type UPDATE_USER_INFO_ACTION = { type: string, payload: Object };

export function updateUserInfo(data): UPDATE_USER_INFO_ACTION {
  return { type: types.UPDATE_USER_INFO, payload: data };
}
