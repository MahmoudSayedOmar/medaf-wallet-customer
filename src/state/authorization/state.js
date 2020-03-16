export interface AuthorizationState {
  membershipId: String;
  mobileNumber: String;
  dateOfBirth: String;
  token: TokenDto;
  isLoggedIn: boolean;
  isPreLoggedIn: boolean;
  errorMessage: string;
  loading: boolean;
  isChange: Boolean;
  userID: String;
  brandID: String;
  groupid: String;
  amount: Number;
  havePinCode: Boolean;
}

export const AuthorizationInitialState: AuthorizationState = {
  membershipId: "",
  mobileNumber: "",
  dateOfBirth: "",
  token: null,
  isLoggedIn: false,
  isPreLoggedIn: false,
  errorMessage: "",
  loading: false,
  isChange: false,
  userID: "",
  brandID: "",
  groupid: "",
  amount: 0,
  havePinCode: false
};
