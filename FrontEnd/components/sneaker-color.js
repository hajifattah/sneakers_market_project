export function renderColors(colors,select) {
    if (colors.includes("|")) {
        colors = colors.split("|");
        if(!select) select = colors[0];
        return colors.map((item) => {
          if (item === select) {
            return createColors(item,"public/sneaker/check-mark.svg");
          }else return createColors(item);
            
        }).join(" ");
    }else return createColors(colors,"public/sneaker/check-mark.svg");
}
function createColors(item,src = "") {
 if (item === "black" && src !== "" ) {
  src = "public/sneaker/check-mark-white.svg";
 }
    return `  <div
                  class="border-2 rounded-full size-9  flex justify-center items-center bg-green-500 shrink-0" style="background-color : ${item};"
                >
                 <img
                    class="${src ? "size-5 " : ""} " 
                    src="${src }"
                    alt=""
                  />
                </div>`;
}