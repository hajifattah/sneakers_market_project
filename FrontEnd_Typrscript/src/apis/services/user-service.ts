import { httpReq } from "../client";
import { urls } from "../urls";

export async function getuser() {
    const response = await httpReq().get<ISneakerUserDto>(urls.user);
    return response.data;
}