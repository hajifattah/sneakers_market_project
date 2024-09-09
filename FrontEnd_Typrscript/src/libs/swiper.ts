import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
type swiper = (className : string) => Swiper;
export const swiper : swiper = (className) => {
  return new Swiper(`.${className}`, {
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
    },
  });
};
