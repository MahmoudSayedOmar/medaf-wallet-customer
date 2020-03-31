export interface UserInfoState {
  balance: Number;
  code: String;
  loading: Boolean;
  transactionsHistory: Array;
  loadingTransactions: Boolean;
  setPinCodeStatus: Number;
  changePinCodeStatus: Number;
  connectionId: String;
  connected: Number;
}

export const UserInfoInitialState: UserInfoState = {
  balance: 0,
  code: "",
  loading: false,
  setPinCodeStatus: 0,
  changePinCodeStatus: 0,
  connectionId: null,
  connected: 0,
  transactionsHistory: [],
  loadingTransactions: false
};
