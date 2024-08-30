import { findSneaker } from "../apis/services/sneakers-service";
import { errorHandler } from "../libs/error-handler";
import {swiper} from "../libs/swiper"

const main = document.getElementById("main");

export function createQuery(pid){
    try {
        if(!pid){
            pid = window.location.href.split("?")[1];
            pid = pid.split("=")[1];
        }
        renderSneaker(pid);
    } catch (error) {
        return toast("sneaker Not Found");
    }
}

async function renderSneaker(pid) {
    try {
        const response = await findSneaker();
        const sneakerEl = createSneaker(response);
        main.innerHTML = sneakerEl;
    } catch (error) {
        errorHandler(error);
    }

}

function createSneaker({name,image,colord,sizes,price}) {
    return ``;
}


let text = swiper("swiper");