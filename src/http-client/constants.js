const PROD_BASE_URL = "";
const DEV_BASE_URL = "http://b146177e.ngrok.io/api/";

const SR_PROD_BASE_URL = "";
const SR_DEV_BASE_URL = "http://b146177e.ngrok.io";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const SR_URL = DEV ? SR_DEV_BASE_URL : SR_PROD_BASE_URL;
