export interface UserInfoState {
  balance: Number;
  code: String;
  loading: Boolean;
  transactionsHistory: Array;
  loadingTransactions: Boolean;
  selectedTransaction:Object;
  setPinCodeStatus: Number;
  changePinCodeStatus: Number;
  connectionId: String;
  connected: Number;
  setPinCodeErrorMsg: String;
  intialBalance: Number;
  finalBalance: Number;
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
  loadingTransactions: false,
  selectedTransaction:{},
  setPinCodeErrorMsg: "",
  intialBalance: 0,
  finalBalance: 0,
};
