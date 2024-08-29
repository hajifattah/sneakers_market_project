import { httpReq } from "../client";
import { urls } from "../urls";


export async function getSneakers(params) {
    const response = await httpReq().get(urls.sneaker.list,{params :params});
    return response.data;
}
export async function getBrands() {
    const response = await httpReq().get(urls.sneaker.brands);
    return response.data;
}