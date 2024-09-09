import { httpReq } from "../client";
import { urls } from "../urls";

export async function getuser() {
    const response = await httpReq().get(urls.user);
    return <ISneakerUserDto>response.data;
}