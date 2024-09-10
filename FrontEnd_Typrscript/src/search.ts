import debounce from "debounce";
import { getSneakers } from "./apis/services/sneakers-service";
import {notFound} from "./components/not-found"
import { renderList, selectSneaker } from "./components/sneaker-card";
import { errorHandler } from "./libs/error-handler";
import { renderPagination } from "./components/pagination";

let main = <HTMLElement>document.getElementById("main");
let searchG : string;

function listener() {
  // show pagination when scroll to end and smoothly scroll to top
  let listSneakers = <HTMLElement>document.getElementById("list");
  let paginationEl = <HTMLElement>document.getElementById("pagination");
  let heigth = listSneakers.scrollHeight - listSneakers.clientHeight;
  heigth -= 30;
  if(heigth < 0) heigth = 0;
  listSneakers.scrollTo({top: heigth});
  listSneakers.scrollTo({top: 0,behavior: "smooth"});
  if (heigth <= 70) {
    paginationEl.classList.remove("invisible");
  }
  listSneakers.addEventListener("scroll",()=>{
    if ((listSneakers.clientHeight + listSneakers.scrollTop) >= listSneakers.scrollHeight) {
      paginationEl.classList.remove("invisible");
  }
  })
  // pagination
  paginationEl.addEventListener("click",(event:MouseEvent)=>{
    if (event.target === event.currentTarget) return;
    let target = <HTMLElement>event.target;
    setSneakers(searchG,Number(target.innerText));
  }) ;
}
declare global{
  interface Window{
    search : (e : MouseEvent)=>void
  }
}
// seatch bar
window.search = debounce((event)=>{
window.location.href = `/search?search=${event.target.value}`
},2000);

// create query
export function createQuery(search?:string) {
    try {
      if (!search) {
        search = window.location.href.split("?")[1];
        search = search.split("=")[1];
      }
      searchG = search;
      setSneakers(search);
    } catch (error) {
      return errorHandler(error as IError);
    }
  }

 async function setSneakers(search : string,page:number = 1){
    try {
        const response :ISneakerListDto<IDataSneakerDto>  = await getSneakers({page: page, limit: 10,search : search});
        main.innerHTML =  createSearch(response , search);
        selectSneaker(searchG);
        listener();
    } catch (error) {
        return errorHandler(error as IError);
    }

  }


  function createSearch(response :ISneakerListDto<IDataSneakerDto> , search :string){

    return `<a class=" top-2 left-4 z-10 inline-block absolute" href="/home">
          <img
            class="w-9"
            src="public/sneaker/arrow-left-short.svg"
            alt="back"
          />
        </a> <div class="grid gap-y-6 w-full pt-6">
        <div class=" flex gap-x-2 py-3 px-5 rounded-2xl hover:outline hover:outline-2 bg-appBlack/10 ">
            <img class="size-7" src="public/search/search.svg " alt="">
            <input class="bg-appBlack/0 outline-none grow text-lg  min-w-[70%]" type="text" name="search" onkeyup="search(event)">
            <img class="size-7" src="public/search/levels-list.svg" alt="">
        </div>
        <div class="text-xl font-bold flex justify-between min-w-[70%]">
            <h2 class="overflow-hidden text-nowrap overflow-ellipsis ">Results for ${search}</h2>
            <p class="text-base font-bold shrink-0 pl-4">${response.total} found</p>
        </div>
      </div>
      ${response.data.length ? renderListPagination(response) : notFound()} `;

  }

  //render list and pagination
function renderListPagination(response : ISneakerListDto<IDataSneakerDto>) {
  const listSneaker = renderList(response.data);
  const pagination = renderPagination(response);
  return baseSneaker(listSneaker,pagination);
 }

  function baseSneaker(listSneaker :string,paginaton:string) {
    return ` <div class="grid gap-y-7  mb-6">
        <!-- sneakers list -->
        <div
          class="grid gap-x-4 gap-y-5 grid-cols-2 max-w-[430px] h-[670px] overflow-y-scroll"
          id="list"
        > ${listSneaker}</div>
        <!-- pagination  -->
        <div class="flex gap-x-3 justify-center invisible"  id="pagination">${paginaton} </div>
      </div>`;
  }

  if (window.location.pathname === "/search") {
    createQuery();
  }
  