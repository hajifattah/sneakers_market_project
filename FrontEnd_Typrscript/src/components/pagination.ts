export function renderPagination({totalPages , page }:{ totalPages:number; page:number}) {
    let htmlPagination : string = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === page) {
        htmlPagination += createPagination(i, "outline outline-slate-700 !bg-appBlack/20");
    } else htmlPagination += createPagination(i);
  }
  return <string>htmlPagination;
}

function createPagination(page : number , className : string ="" ) {
    return <string>`<div class="px-1 bg-appBlack/10 font-medium ${className} ">${page}</div>`;
}