export interface AuthorizationState {
  membershipId: String;
  userName: String;
  password:String;
  token: TokenDto;
  isLoggedIn: boolean;
  errorMessage: string;
  loading: boolean;
  isChange: Boolean;
  amount: Number;
  havePinCode: Boolean;
  firstLogIn: Boolean;
  haveSetFirstPassword: Boolean;
}

export const AuthorizationInitialState: AuthorizationState = {
  membershipId: "",
  userName: "",
  token: null,
  isLoggedIn: false,
  errorMessage: "",
  loading: false,
  isChange: false,
  amount: 0,
  havePinCode: false,
  firstLogIn: true,
  haveSetFirstPassword: false,
};
