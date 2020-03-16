import { AuthProxyService } from "./auth-proxy.service";
import { PinCodeProxyService } from "./pin-code-service";

const authProxyService = new AuthProxyService();
const pinCodeProxyService = new PinCodeProxyService();

export { authProxyService, pinCodeProxyService };
