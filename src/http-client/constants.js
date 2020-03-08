const PROD_BASE_URL = "http://81.10.30.157:8082/api/";
const DEV_BASE_URL = "http://f7b38d8e.ngrok.io/api/";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
