export interface UserInfoState {
  balance: Number;
  code: String;
  loading: Boolean;
  setPinCodeStatus: Number;
  changePinCodeStatus: Number;
}

export const UserInfoInitialState: UserInfoState = {
  balance: 0,
  code: "",
  loading: false,
  setPinCodeStatus: 0,
  changePinCodeStatus: 0
};
