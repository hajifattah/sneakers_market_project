












export function createSneakerCard({pid,name,imageURL,price}) {
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
    </div>`
}