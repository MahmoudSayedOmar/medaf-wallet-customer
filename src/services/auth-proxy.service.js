import { BASE_URL } from "../http-client/constants";
import { UserLoginModel, UserRegisterModel } from "../proxy";

import axios from "axios";

export class AuthProxyService {
  async login(userData: UserLoginModel, token: String) {
    debugger;
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
    });
  }
  async preLogin() {
    let data = {};
    data["UserName"] = "3samAli";
    data["Password"] = "3samAli123";
    let URL = `${BASE_URL}User/Authenticate`;
    console.log("baseeee", URL);
    return await axios({
      method: "post",
      url: URL,
      data: data,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    }).catch(function(err) {
      console.log(err.message);
      debugger;
    });
  }
}
