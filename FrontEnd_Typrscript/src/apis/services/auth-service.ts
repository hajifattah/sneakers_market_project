import { httpReq } from "../client";
import { urls } from "../urls";
interface IData{
   username:string;
   password:string;
}

export async function login(data:IData) {
   const response = await httpReq().post(urls.auth.login,data);
   return <ISneakerAuthDto>response.data;
}
export async function signup(data:IData) {
   const response = await httpReq().post(urls.auth.signup,data);
   return <ISneakerAuthDto>response.data;
}