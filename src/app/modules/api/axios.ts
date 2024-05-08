import { AxiosStatic } from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = import.meta.env.VITE_APP_API_URL;
/**
 * Setup Axios headers
 */
export function setupAxios(axios: AxiosStatic) {
    axios.defaults["baseURL"] = API_URL;
    axios.defaults.headers.accept = "application/json";
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers.Authorization = `Bearer ${API_KEY}`;
}
