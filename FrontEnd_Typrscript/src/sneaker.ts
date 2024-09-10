import { findSneaker } from "./apis/services/sneakers-service";
import { renderColors } from "./components/sneaker-color";
import { renderImages } from "./components/sneaker-images";
import {
  quantityAndPrice,
  renderQuantity,
} from "./components/sneaker-quantity";
import { renderSizes } from "./components/sneaker-sizes";
import { errorHandler } from "./libs/error-handler";
import { swiper } from "./libs/swiper";
import { toast } from "./libs/toast";

const main = <HTMLElement>document.getElementById("main");
let sizesG :string ;
let colorsG :string ;
let priceG :number ;
// create query
export function createQuery(pid? : string) :void {
  try {
    if (!pid) {
      pid = window.location.href.split("?")[1];
      pid = pid.split("=")[1];
      pid = pid.split("&")[0];
    }
    renderSneaker(Number(pid));
  } catch (error) {
    toast("sneaker Not Found");
  }
}

async function renderSneaker(pid : number):Promise<void> {
  try {
    const response :IDataSneakerDto = await findSneaker(pid);
    const sneakerEl = createSneaker(response);
    main.innerHTML = sneakerEl;
    listenerEl();
    swiper("swiper");
  } catch (error) {
    errorHandler(error as IError);
  }
}

// add event listener for size and color quantity and addtocard and viewmore
function listenerEl() {
   // select view more description
   const viewMore = <HTMLElement>document.getElementById("viewMore");
   viewMore.addEventListener("click",():void =>{
     if (viewMore.innerText === "view more") {
       viewMore.innerText = "view less";
     }else viewMore.innerText = "view more";
     let text = <HTMLElement>viewMore.parentElement?.children[0];
     text.classList.toggle("inline");
   })
  // select size
  const sizeList = <HTMLElement>document.getElementById("sizeList");
  sizeList.addEventListener("click", (event:MouseEvent):void => {
    if (event.target === event.currentTarget) return;
    let target = <HTMLElement>event.target;
    sizeList.innerHTML = renderSizes(sizesG, target.innerText);
  });
  // select Color
  const colorList = <HTMLElement>document.getElementById("colorList");
  colorList.addEventListener("click", (event : MouseEvent) :void=> {
    if (event.target === event.currentTarget) return;
    let target = <HTMLElement>event.target;
    colorList.innerHTML = renderColors(
      colorsG,
      target.style.backgroundColor
    );
  });

  // select Quantity and set total price
  quantityAndPrice(totalPrice, priceG);
  function totalPrice(total:number) {
    const totalPrice = <HTMLElement>document.getElementById("totalPrice");
    totalPrice.innerText = "$" + total;
  }

  // add to card
  const quantityEl = <HTMLElement>document.getElementById("quantity");
  const toCard = <HTMLElement>document.getElementById("toCard");
  toCard.addEventListener("click", ():void => {
    const quantityNumber = <HTMLElement>quantityEl.children[1];
    let quantity = Number(quantityNumber.innerText);
    if (quantity) {
      toast(
        `Successfull add ${quantityNumber.innerText} sneakers to card`,
        "success"
      );
    } else toast("Enter Quantity");
  });
}

function createSneaker({ name, imageURL, colors, sizes, price } :IDataSneakerDto) {
  sizesG = sizes;
  colorsG = colors;
  priceG = price;
  let query = window.location.search.split("&")[1];
  return `<!-- top -->
      <div class="bg-appBlack/5 relative">
        <a class="my-3 pl-3 absolute z-10" href="${
          query ? "/search?" + query : "/home"
        }">
          <img
            class="w-full"
            src="public/sneaker/arrow-left-short.svg"
            alt="back"
          />
        </a>
        <div class="swiper">
          <div class="swiper-wrapper">
            ${renderImages(imageURL)}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="pt-6 flex flex-col justify-between">
        <!-- div text -->
        <div
          class="flex flex-col gap-y-4 mx-auto pb-4 w-[calc(100%_-_55px)] border-b border-b-appBlack/10"
        >
          <div class="flex justify-between items-center">
            <h2 class="text-3xl font-bold text-nowrap overflow-hidden overflow-ellipsis w-[80%]">${name}</h2>
            <img src="public/sneaker/heart (1).svg" alt="" />
          </div>
          <div class="flex gap-x-3 items-center">
            <p
              class="text-xs font-bold text-appBlack bg-appBlack/10 p-2 rounded-lg"
            >
              5.371 sold
            </p>
            <img
              class="size-5"
              src="public/sneaker/star-half-icon.svg"
              alt=""
            />
            <p class="text-base text-appBlack/80 font-semibold">
              4.3 (5.389 reviews)
            </p>
          </div>
        </div>
        <!-- div description -->
        <div class="grid gap-y-5 pt-4 w-full pl-6">
          <div class="flex flex-col gap-y-2 pr-6">
            <h3 class="text-xl font-bold text-appBlack">Description</h3>
            <div>
            <p class="text-appBlack/75 max-w-[88vw] line-clamp-2 text-clip">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                  voluptatem itaque porro aliquam labore accusamus, repellendus, hic velit
                  nobis rem iure odio eum quia aperiam dicta reiciendis sit consequuntur
                  repudiandae.
            </p>
            <span class="font-semibold" id="viewMore">view more</span>
            </div>
          </div>
          <!-- size and color -->
          <div class="flex gap-x-4 overflow-hidden w-full ">
            <div class="flex flex-col gap-y-2 flex-1 w-0 ">
              <p class="text-lg font-bold">Size</p>
              <div class="flex gap-x-2 overflow-x-auto py-2 " id="sizeList">
               ${renderSizes(sizes)}
              </div>
            </div>
            <div class="flex flex-col gap-y-2 flex-1 w-[60%]">
              <p class="text-lg font-bold">Color</p>
              <div class="flex gap-x-2 overflow-x-auto py-2 w-full pr-2" id="colorList">
                ${renderColors(colors)}
              </div>
            </div>
          </div>
          <div class="flex gap-x-4 items-center font-bold">
            <h3 class="text-lg font-bold text-appBlack">Quantity</h3>
            <div
              class="flex px-3 py-2 gap-4 items-center bg-appBlack/5 rounded-full" id="quantity"
            >
             ${renderQuantity(0)}
            </div>
          </div>
        </div>
        <div class="border-b mx-auto w-[85%] mt-6"></div>
        <div class="flex justify-between p-6">
            <div class="flex flex-col items-center justify-center">
                <p class="text-sm text-appBlack/70">
                    Total price
                </p>
                <p class="text-2xl font-bold px-3" id="totalPrice">
                $${0}
                </p>
            </div>
            <button class="font-semibold text-white rounded-full bg-appBlack px-10 py-3 mt-2 flex gap-x-3 items-center" id="toCard"> <img class="size-5" src="public/sneaker/shopping-bag.svg" alt="">Add to Cart</button>
        </div>
      </div>`;
}

if (window.location.pathname === "/sneaker") {
  createQuery();
}
