export function renderColors(colors) {
    if (colors.includes("|")) {
        colors = colors.split("|");
        return colors.map((item) => {
            return createSizes(item);
        }).join(" ");
    }else return createColors(colors);
}
function createColors(item) {
    return `  <div
                  class=" rounded-full size-9  flex justify-center items-center bg-green-500 shrink-0" style="background-color : ${item};"
                >
                  <img
                    class=" size-5"
                    src="public/sneaker/check-mark.svg"
                    alt=""
                  />
                </div>`;
}