import { AuthProxyService } from "./auth-proxy.service";
import { PinCodeProxyService } from "./pin-code-service";

import { TransferService } from "./transfer.service";

const authProxyService = new AuthProxyService();
const pinCodeProxyService = new PinCodeProxyService();
const transferService = new TransferService();
export { authProxyService, pinCodeProxyService, transferService };
