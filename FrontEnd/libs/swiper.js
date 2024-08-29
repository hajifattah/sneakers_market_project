import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
export const swiper = (className) => {
  return new Swiper(`.${className}`, {
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
  
    },
  });
};
