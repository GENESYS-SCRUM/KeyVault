import axios from "axios";
import createToken from "./createToken";
import { url } from "./constant";

const token = createToken()
export const baseUrl = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*'
  },
});

baseUrl.interceptors.request.use(function (config) {
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${createToken()}`;
  }
  return config;
});