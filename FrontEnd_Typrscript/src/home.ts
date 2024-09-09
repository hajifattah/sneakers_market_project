import { renderList, selectSneaker } from "./components/sneaker-card";
import { renderPagination } from "./components/pagination";
import { getBrands, getSneakers } from "./apis/services/sneakers-service";
import { errorHandler } from "./libs/error-handler";
import { getuser } from "./apis/services/user-service";
import { createBrands } from "./components/brands";
import debounce from "debounce";
import { removeSessionToken } from "./libs/session-manager";
import { toast } from "./libs/toast";

let listSneakers = <HTMLElement>document.getElementById("list");
let paginations = <HTMLElement>document.getElementById("pagination");
let welcome = <HTMLElement>document.getElementById("welcome");
let brandsEl = <HTMLElement>document.getElementById("brands");
let search = <HTMLElement>document.getElementById("search");
let main = <HTMLElement>document.getElementById("main");
let logout = <HTMLElement>document.getElementById("logout");
let brandG : string;
// show pagination when scroll to end and smoothly scroll to top
listSneakers.onscroll = function():void {
    if (( listSneakers.clientHeight + listSneakers.scrollTop) >= listSneakers.scrollHeight) {
        paginations.classList.remove("invisible");
    }
};

// pagination
paginations.addEventListener("click", (event:MouseEvent) => {
  if (event.target === event.currentTarget) return;
  const page = <HTMLElement>event.target;
  setSneakers(Number(page.innerText),undefined,brandG);
});

// Brands
brandsEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) return;
  const brandEl = <HTMLElement>event.target;
  setSneakers(1, undefined, brandEl.innerText);
  setBrands(brandEl.innerText);
});

// search
search.addEventListener("keyup",debounce((event:KeyboardEvent)=>{
  const search = <HTMLInputElement>event.target;
window.location.href = `/search?search=${search.value}`
},2000));

// logut
logout.addEventListener("click", ():void=>{
  removeSessionToken();
  toast("Logged out","success")
  setTimeout(() => {
    window.location.href = "/login";
  }, 2000);
})
// set user data
async function setUser():Promise<void> {
  try {
    const response : ISneakerUserDto = await getuser();
    main.classList.remove("hidden");
    let username :string = response.username.split("@")[0];
    let welcomeTo = <HTMLElement>welcome.children[1];
    welcomeTo.innerText = username;
    whatTime();
    setBrands();
  } catch (error) {
    errorHandler(error as IError);
  }
}

async function setSneakers(page :number = 1, callBack? :() => Promise<void> , brand? :string) {
  try {
    paginations.classList.add("invisible");
    let list : ISneakerListDto<IDataSneakerDto>;
    if (callBack) await callBack();
    if (brand) {
      brandG = brand;
      if (brand === "All") brand = "";
      list = await getSneakers({ page: page, limit: 10, brands: brand });
    } else list = await getSneakers({ page: page, limit: 10 });

    renderListPagination(list);
  } catch (error) {
    errorHandler(error as IError);
  }
}
//render list and pagination
function renderListPagination(list : ISneakerListDto<IDataSneakerDto>) {
  const listSneaker : string = renderList(list.data);
  const pagination : string = renderPagination(list);
  listSneakers.innerHTML = listSneaker;
  selectSneaker();
  paginations.innerHTML = pagination;
  listSneakers.scrollTo({top: 0,behavior: "smooth"});
 }

function whatTime():void {
  let hours = new Date().getHours();
  let greeting = <HTMLElement>welcome.children[0].children[0];
  if (hours < 12) {
    greeting.innerText = "Good Morning";
  } else if (hours < 15) {
    greeting.innerText = "Good Afteroon";
  } else if (hours < 19 ) {
    greeting.innerText = "Good Evening";
  } else greeting.innerText = "Good Night";
}
async function setBrands(selected:string = "All") {
  let brands :string[] = await getBrands();
  brands.splice(0, 0, "All");
  brandsEl.innerHTML = brands
    .map((item) => {
      if (item === selected) {
        return createBrands(item, "bg-appBlack text-white");
      } else return createBrands(item);
    })
    .join(" ");
}

setSneakers(1,setUser);
