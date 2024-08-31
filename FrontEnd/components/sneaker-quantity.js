
export function renderQuantity(quantity) {
    return ` <img class="size-5" src="public/sneaker/minus.svg" alt="" />
              <p>${quantity}</p>
              <img class="size-5" src="public/sneaker/plus.svg" alt="" />`;
}

export function quantityAndPrice( callBack,priceG) {
    const quantityEl = document.getElementById("quantity"); 
    quantityEl.addEventListener("click", (event) => {
        if (event.target.tagName !== "IMG") return ;
        let quantity = Number(event.currentTarget.children[1].innerText);
        let op;
        let price = 0;
        if (event.target.src.includes("plus")) {
          op = "plus";
          price = priceG * (++quantity);
        } else if (event.target.src.includes("minus")) {
          if(quantity === 0) return ;
          op = "minus";
          price = priceG * (--quantity);
        }
        quantityEl.children[1].innerText = quantity;
        callBack(price);
    });

}