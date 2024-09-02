import { renderList, selectSneaker } from "../components/sneaker-card";
import { renderPagination } from "../components/pagination";
import { getBrands, getSneakers } from "../apis/services/sneakers-service";
import { errorHandler } from "../libs/error-handler";
import { getuser } from "../apis/services/user-service";
import { createBrands } from "../components/brands";
import debounce from "debounce";
import { removeSessionToken } from "../libs/session-manager";
import { toast } from "../libs/toast";

let listSneakers = document.getElementById("list");
let paginations = document.getElementById("pagination");
let welcome = document.getElementById("welcome");
let brandsEl = document.getElementById("brands");
let search = document.getElementById("search");
let main = document.getElementById("main");
let logout = document.getElementById("logout");
let brandG;
// show pagination when scroll to end and smoothly scroll to top
listSneakers.onscroll = function(ev) {
    if (( listSneakers.clientHeight + listSneakers.scrollTop) >= listSneakers.scrollHeight) {
        paginations.classList.remove("invisible");
    }
};

// pagination
paginations.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) return;
  setSneakers(event.target.innerText,null,brandG);
});

// Brands
brandsEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) return;
  setSneakers(1, null, event.target.innerText);
  setBrands(event.target.innerText);
});

// search
search.addEventListener("keyup",debounce((event)=>{
window.location.href = `/search?search=${event.target.value}`
},2000));

// logut
logout.addEventListener("click", ()=>{
  removeSessionToken();
  toast("Logged out","success")
  setTimeout(() => {
    window.location.href = "/login";
  }, 2000);
})
// set user data
async function setUser(params) {
  try {
    const response = await getuser();
    main.classList.remove("hidden");
    let username = response.username.split("@")[0];
    welcome.children[1].innerText = username;
    whatTime();
    setBrands();
  } catch (error) {
    errorHandler(error);
  }
}

async function setSneakers(page = 1, callBack, brand) {
  try {
    paginations.classList.add("invisible");
    let list;
    if (callBack) await callBack();
    if (brand) {
      brandG = brand;
      if (brand === "All") brand = "";
      list = await getSneakers({ page: page, limit: 10, brands: brand });
    } else list = await getSneakers({ page: page, limit: 10 });

    renderListPagination(list);
  } catch (error) {
    errorHandler(error);
  }
}
//render list and pagination
function renderListPagination(list) {
  const listSneaker = renderList(list.data);
  const pagination = renderPagination(list);
  listSneakers.innerHTML = listSneaker;
  selectSneaker();
  paginations.innerHTML = pagination;
  listSneakers.scrollTo({top: 0,behavior: "smooth"});
 }

function whatTime() {
  let hours = new Date().getHours();
  if (hours < 12) {
    welcome.children[0].children[0].innerText = "Good Morning";
  } else if (hours < 15) {
    welcome.children[0].children[0].innerText = "Good Afteroon";
  } else if (hours < 19 ) {
    welcome.children[0].children[0].innerText = "Good Evening";
  } else welcome.children[0].children[0].innerText = "Good Night";
}
async function setBrands(selected = "All") {
  let brands = await getBrands();
  brands.splice(0, 0, "All");
  brandsEl.innerHTML = brands
    .map((item) => {
      if (item === selected) {
        return createBrands(item, "bg-appBlack text-white");
      } else return createBrands(item);
    })
    .join(" ");
}

setSneakers(1, setUser);
