export interface UserInfoState {
  balance: Number;
  code: String;
  loading: Boolean;
  setPinCodeStatus: Number;
  changePinCodeStatus: Number;
  connectionId: String;
  connected: Boolean;
}

export const UserInfoInitialState: UserInfoState = {
  balance: 0,
  code: "",
  loading: false,
  setPinCodeStatus: 0,
  changePinCodeStatus: 0,
  connectionId: null,
  connected: false
};
