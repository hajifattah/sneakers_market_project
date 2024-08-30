
export function renderSizes(sizes) {
    if (sizes.includes("|")) {
        sizes = sizes.split("|");
        return sizes.map((item) => {
            return createSizes(item);
        }).join(" ");
    }else return createSizes(sizes);
}
function createSizes(item) {
    return ` <div
                  class="border-2 border-appBlack/70 rounded-full size-9 shrink-0 flex justify-center items-center"
                >
                  ${item}
                </div>`;
}