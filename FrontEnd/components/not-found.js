export function notFound() {
    return `<div class="grid gap-y-10  mt-24">
          <img src="public/search/not-found.png" alt="">
          <div class="flex flex-col gap-y-4 items-center">
             <h2 class="font-bold text-xl text-appBlack">Not Found</h2>
             <p class="px-6 text-center text-appBlack/90">Sorry,the keyword you entered cannot be found.please check again or search with another keyword.</p>
          </div>
        </div>`;
}