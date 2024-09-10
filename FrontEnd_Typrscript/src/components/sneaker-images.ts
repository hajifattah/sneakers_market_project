export function renderImages(images:string) {
    if (images.includes("|")) {
      let  images2 : string[] = images.split("|");
        return images2.map((item) => {
            return createImages(item);
        }).join(" ");
    }else return createImages(images);
}
function createImages(item : string ):string {
    return `  <div class="swiper-slide">
                <img
                  class="w-full px-6 flex justify-center items-center "
                  src="${item}"
                  alt="picure of sneaker"
                />
            </div>`;
}