import { httpReq } from "../client";
import { urls } from "../urls";
interface IParams{
    page :number;
    limit:number;
    brands?:string;
    search?:string;
}

export async function getSneakers(params :IParams) {
    const response = await httpReq().get(urls.sneaker.list,{params :params});
    return <ISneakerListDto<IDataSneakerDto>>response.data;
}
export async function getBrands() {
    const response = await httpReq().get(urls.sneaker.brands);
    return <string[]>response.data;
}

export async function findSneaker(id:number) {
    const response = await httpReq().get(urls.sneaker.find(id))
    return <IDataSneakerDto>response.data;
}