import {swiper} from "../libs/swiper"

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
    const response = await find
    
}

let text = swiper("swiper");