import { BASE_URL } from "../http-client/constants";
import { UserLoginModel, UserRegisterModel } from "../proxy";

import axios from "axios";

export class AuthProxyService {
  async login(userData: UserLoginModel) {
    let data = {};
    data["UserName"] = "3samAli";
    data["Password"] = "3samAli123";
    let URL = `${BASE_URL}User/Authenticate`;
    return await axios({
      method: "post",
      url: URL,
      data: data,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json",
        },
      },
    }).catch(function (err) {
      return err;
    });
  }
}
