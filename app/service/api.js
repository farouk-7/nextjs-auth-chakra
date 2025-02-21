import axios from "axios";
import { APP_CONSTANTS } from "../constants/app";

export * from "./routes.constants";

export const baseURL =
  // "https://backend.myeventree.com/api/v1"
  "https://teevil-api.onrender.com/api/v1";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
  },
});

export const axiosInstanceMultipart = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
  },
});

const addTokenToRequest = async (req) => {
  const token = sessionStorage.getItem(APP_CONSTANTS.token);
  req.headers.Authorization = `Bearer ${token}`;
  return req;
};

axiosInstance.interceptors.request.use(addTokenToRequest);
axiosInstanceMultipart.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
