import axios from "axios";
import { getSessionToken } from "../libs/session-manager";

export const httpReq = () => {
  const token = getSessionToken();
  return axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000,
    headers: { Authorization: `Bearer ${token}` },
  });
};
