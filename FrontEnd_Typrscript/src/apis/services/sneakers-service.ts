import { httpReq } from "../client";
import { urls } from "../urls";
interface IParams{
    page :number;
    limit:number;
    brands:string;
}

export async function getSneakers(params :IParams) {
    const response = await httpReq().get<ISneakerListDto<IDataSneakerDto>>(urls.sneaker.list,{params :params});
    return response.data;
}
export async function getBrands() {
    const response = await httpReq().get<{data:string[]}>(urls.sneaker.brands);
    return response.data;
}

export async function findSneaker(id:number) {
    const response = await httpReq().get<{data:IDataSneakerDto}>(urls.sneaker.find(id))
    return response.data;
}