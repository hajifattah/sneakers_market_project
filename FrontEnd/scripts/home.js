import { createSneakerCard } from "../components/sneaker-card";
import { getSneakers } from "../apis/services/sneakers-service";
import { errorHandler } from "../libs/error-handler";
import { getuser } from "../apis/services/user-service";
import { createPagination } from "../components/paginatoin";

let listSneakers = document.getElementById("list");
let pagination = document.getElementById("pagination");
let welcome = document.getElementById("welcome");
// pagination.a
pagination.addEventListener("click",(event)=>{
    if(event.target === event.currentTarget) return;
    setSneakers(event.target.innerText);

})

async function setSneakers(page = 1) {
  try {
    const list = await getSneakers({ page: page, limit: 10 });
    renderList(list);
  } catch (error) {
    errorHandler(error);
  }
}

function renderList({ data, totalPages,page }) {
  let html = "";
  data.forEach((item) => {
    html += createSneakerCard(item);
  });
  listSneakers.innerHTML = html;
  html = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === page) {
        html += createPagination(i ,"outline outline-slate-700 !bg-appBlack/20");
    } else  html += createPagination(i);
    
  }
  pagination.innerHTML = html;
}

setSneakers();
