
export function renderQuantity(quantity :number) {
    return ` <img class="size-5" src="public/sneaker/minus.svg" alt="" />
              <p>${quantity}</p>
              <img class="size-5" src="public/sneaker/plus.svg" alt="" />`;
}

export function quantityAndPrice( callBack : (p:number)=>void ,priceG : number):void {
    const quantityEl = <HTMLElement>document.getElementById("quantity"); 
    quantityEl.addEventListener("click", (event:MouseEvent) => {
      let target = <HTMLImageElement>event.target;
        if (target.tagName !== "IMG") return ;
        let quantityNumber = <HTMLElement>quantityEl.children[1];
        let quantity :number = Number(quantityNumber.innerText);
        let op :string;
        let price : number = 0;
        if (target.src.includes("plus")) {
          op = "plus";
          price = priceG * (++quantity);
        } else if (target.src.includes("minus")) {
          if(quantity === 0) return ;
          op = "minus";
          price = priceG * (--quantity);
        }
        quantityNumber.innerText = quantity.toString();
        callBack(price);
    });

}