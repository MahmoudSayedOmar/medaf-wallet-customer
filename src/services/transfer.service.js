import axios from "axios";
import { BASE_URL } from "../http-client/constants";

export class TransferService {
  async checkMember(memberData, token: String) {
    return await axios({
      method: "post",
      url: `${BASE_URL}customer/getcustomerbalancebydate`,
      data: userData,
      headers: { token: token },
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    }).catch(function(err) {
      return err;
    });
  }
  async makeTransfer(data, token: String) {
    debugger;
    return await axios({
      method: "post",
      url: `${BASE_URL}points/moneytransfer`,
      data: data,
      headers: { token: token },
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    }).catch(function(err) {
      return err;
    });
  }
}
