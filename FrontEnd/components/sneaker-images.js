export function renderImages(images) {
    if (images.includes("|")) {
        images = images.split("|");
        return images.map((item) => {
            return createSizes(item);
        }).join(" ");
    }else return createImages(images);
}
function createImages(item , className) {
    return `  <div class="swiper-slide">
                <img
                  class="w-full px-6 flex justify-center items-center ${className}"
                  src="${item}"
                  alt="picure of sneaker"
                />
            </div>`;
}