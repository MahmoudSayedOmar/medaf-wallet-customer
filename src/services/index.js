import { AuthProxyService } from "./auth-proxy.service";
import { UserManagerProxyService } from "./user-manager-service";

import { TransferService } from "./transfer.service";

const authProxyService = new AuthProxyService();
const transferService = new TransferService();
const userManagerProxyService = new UserManagerProxyService();
export { authProxyService, userManagerProxyService,transferService };

