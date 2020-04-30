import { BASE_URL } from "../http-client/constants";
import { UserLoginModel, UserRegisterModel } from "../proxy";

import axios from "axios";

export class AuthProxyService {
  async login(userData: UserLoginModel) {
    let data = {};
    debugger;
    data["UserName"] = userData.userName;
    data["Password"] = userData.password;
    let URL = `${BASE_URL}User/SignIn`;
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
  async setFirstPassword(setFirstPasswordData) {
    let data = {};
    debugger;
    data["UserName"] = setFirstPasswordData.userName;
    data["OldPassword"] = setFirstPasswordData.oldPassword;
    data["Password"] = setFirstPasswordData.newPassword;
    data["ConfirmPassword"] = setFirstPasswordData.newPassword;

    let URL = `${BASE_URL}User/ChangePassword`;
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
