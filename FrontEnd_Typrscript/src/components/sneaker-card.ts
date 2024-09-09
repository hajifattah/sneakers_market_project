export function renderList(data:IDataSneakerDto[]) {
  let htmlList = "";
  data.forEach((item) => {
    htmlList += createSneakerCard(item);
  });

  return <string>htmlList;
}

function createSneakerCard({ pid, name, imageURL, price }:IDataSneakerDto):string {
  return `<div data-id=${pid} class="flex flex-col gap-y-3">
      <div class="bg-appBgGray p-5 rounded-3xl">
        <img class="size-[139px]" src="${imageURL}" alt="" />
      </div>
      <div class="flex flex-col gap-y-2 ">
        <h2
          class="text-nowrap overflow-hidden text-ellipsis  font-bold text-xl tracking-tight text-appblue"
        >
          ${name}
        </h2>
        <p class="text-appblue font-semibold">$ ${price}</p>
      </div>
    </div>`;
}

export function selectSneaker(searchG : string):void {
  let listSneakers = <HTMLElement>document.getElementById("list");
  listSneakers.addEventListener("click", findSneakerId);
  function findSneakerId(event:MouseEvent) {
    if (event.target === event.currentTarget) return;
    let parent = <HTMLElement>event.target;
    while (!parent.dataset.id) {
      parent = <HTMLElement>parent.parentElement;
    }
    window.location.href = `/sneaker?id=${parent.dataset.id}${searchG ? "&search="+ searchG : "" } `;
  }
}
