export interface TranserState {
  transferToMemberId: String;
  transferAmount: String;
  membershipMobileNo: String;
  memberPin: String;
  isTransfer: Boolean;
  transferStatus: String;
}

export const TransferInitalState: TranserState = {
  transferToMemberId: "",
  transferAmount: "",
  membershipMobileNo: "",
  memberPin: "",
  isTransfer: false,
  transferStatus: ""
};
