import axios from "axios";
import { BASE_URL } from "../http-client/constants";

export class PaymentService {
  async MakeOrder(data, token: String) {
    return await axios({
      method: "post",
      url: `${BASE_URL}points/ChargeWalletUsingPayment`,
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
