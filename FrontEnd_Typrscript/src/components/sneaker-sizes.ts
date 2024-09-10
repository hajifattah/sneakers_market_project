
export function renderSizes(sizes:string,select:string) {
    if (sizes.includes("|")) {
       let sizes2 : string[] = sizes.split("|");
        if(!select) select = sizes2[0];
        return sizes2.map((item :string) => {
            if (item === select) {
                return createSizes(item,"bg-appBlack text-white");
            }else return createSizes(item);
        }).join(" ");
    }else return createSizes(sizes,"bg-appblack text-white");
}
function createSizes(item : string,className?:string ):string {
    return ` <div
                  class="border-2 border-appBlack/70 rounded-full size-9 shrink-0 flex justify-center items-center ${className}"
                >
                  ${item}
                </div>`;
}