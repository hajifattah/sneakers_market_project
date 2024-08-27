import { swiper } from "../libs/swiper";
let main = document.getElementById("main");
const page = [
  {
    id: 1,
    src: "public/onboard/1.png",
    text: "We provide high quality products just for you",
    textButton: "Next",
  },
  {
    id: 2,
    src: "public/onboard/2.png",
    text: "Your satisfaction is our number one periority",
    textButton: "Next",
  },
  {
    id: 3,
    src: "public/onboard/3.png",
    text: "Let’s fulfill your fashion needs with shoearight now!",
    textButton: "Get Started",
  },
];
render();
function render() {
  let html = "";
  page.forEach((item) => {
    html += `<div class="swiper-slide">
        <img class="w-full " src="${item.src}" alt="">
        <div class="grid py-8 px-6 gap-y-8 w-[430px] justify-center">
          <h2 class="font-bold text-3.5xl text-center h-[135px] ">
          ${item.text}
          </h2>
        </div>
      </div>`;
  });
  html =
    `<div class="swiper" ><div class="swiper-wrapper">` +
    html +
    `</div><div class="swiper-pagination"></div></div><button
    class="bg-appBlack text-white px-6 py-4 w-[380px] rounded-appRadius mt-7 ml-6" onclick="nextEl()" id="button"
  >
    Next
  </button>`;

  main.innerHTML = html;
}
let next = swiper("swiper");
let button = document.getElementById("button");

next.on("touchMove", () => {
  if (next.swipeDirection === "next" && next.activeIndex === page.length - 2) {
    button.innerText = "Get Started";
  } else button.innerText = "Next";
});
window.nextEl = () => {
  if (next.activeIndex === page.length - 2) {
    button.innerText = "Get Started";
  } else button.innerText = "Next";
  if (next.isEnd) window.location.href = "/login";

  next.slideNext();
};
