
export function renderSizes(sizes,select) {
    if (sizes.includes("|")) {
        sizes = sizes.split("|");
        if(!select) select = sizes[0];
        return sizes.map((item) => {
            if (item === select) {
                return createSizes(item,"bg-appBlack text-white");
            }else return createSizes(item);
        }).join(" ");
    }else return createSizes(sizes,"bg-appblack text-white");
}
function createSizes(item,className = "") {
    return ` <div
                  class="border-2 border-appBlack/70 rounded-full size-9 shrink-0 flex justify-center items-center ${className}"
                >
                  ${item}
                </div>`;
}