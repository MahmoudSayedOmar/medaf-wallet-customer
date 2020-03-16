import { BASE_URL } from "../http-client/constants";

import axios from "axios";

export class PinCodeProxyService {
  async setFirstPinCode(data, token) {
    debugger;
    return await axios({
      method: "post",
      url: `${BASE_URL}customer/setfirstpincode`,
      data: data,
      headers: { token: token },
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async changePinCode(data, token) {
    debugger;
    return await axios({
      method: "post",
      url: `${BASE_URL}customer/changepincode`,
      data: data,
      headers: { token: token },
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
