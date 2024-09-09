import axios, { AxiosInstance } from "axios";
import { getSessionToken } from "../libs/session-manager";
type HttpReq = ()=>AxiosInstance;
export const httpReq : HttpReq = () => {
  const token : string|null = getSessionToken();
  return axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000,
    headers: { Authorization: `Bearer ${token}` },
  });
};
