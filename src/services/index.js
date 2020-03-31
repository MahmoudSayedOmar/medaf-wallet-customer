import { AuthProxyService } from "./auth-proxy.service";
import { UserManagerProxyService } from "./user-manager-service";

const authProxyService = new AuthProxyService();
const userManagerProxyService = new UserManagerProxyService();

export { authProxyService, userManagerProxyService };
