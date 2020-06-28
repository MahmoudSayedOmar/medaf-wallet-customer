import { AuthProxyService } from "./auth-proxy.service";
import { UserManagerProxyService } from "./user-manager-service";

import { TransferService } from "./transfer.service";

import {PaymentService} from "./payment.service";

const authProxyService = new AuthProxyService();
const transferService = new TransferService();
const userManagerProxyService = new UserManagerProxyService();
const paymentService=new PaymentService();
export { authProxyService, userManagerProxyService,transferService,paymentService};

