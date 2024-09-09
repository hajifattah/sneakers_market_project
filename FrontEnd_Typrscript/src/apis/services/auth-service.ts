import { httpReq } from "../client";
import { urls } from "../urls";
interface IData{
   username:string;
   password:string;
}

export async function login(data:IData) {
   const response = await httpReq().post<ISneakerAuthDto>(urls.auth.login,data);
   return response.data;
}
export async function signup(data:IData) {
   const response = await httpReq().post<ISneakerAuthDto>(urls.auth.signup,data);
   return response.data;
}