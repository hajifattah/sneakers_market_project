import { httpReq } from "../client";
import { urls } from "../urls";

export async function login(data) {
   const response = await httpReq().post(urls.auth.login,data);
   return response.data;
}
export async function signup(data) {
   const response = await httpReq().post(urls.auth.signup,data);
   return response.data;
}