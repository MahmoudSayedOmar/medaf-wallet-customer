const PROD_BASE_URL = "http://81.10.30.157:8095/api/";
const DEV_BASE_URL = "http://6f00e81a.ngrok.io/api/";

const SR_PROD_BASE_URL = "http://81.10.30.157:8095";
const SR_DEV_BASE_URL = "http://6f00e81a.ngrok.io";

const DEV = false;
export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const SR_URL = DEV ? SR_DEV_BASE_URL : SR_PROD_BASE_URL;
