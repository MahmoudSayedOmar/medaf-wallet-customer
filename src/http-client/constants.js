const PROD_BASE_URL = "http://81.10.30.157:8082/api/";
const DEV_BASE_URL = "http://1d8bb3ec.ngrok.io/api/";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
