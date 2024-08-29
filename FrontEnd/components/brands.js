export function createBrands(name, className = "") {
  return `<div class="flex gap-3 h-fit swiper-sile">
              <p
                class="border-2 border-[#343A40] rounded-3xl font-semibold h-fit text-nowrap px-5 py-2 ${className}"
              >
               ${name}
              </p>
            </div>`;
}
