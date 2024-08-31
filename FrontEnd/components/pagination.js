export function renderPagination({totalPages, page }) {
    let htmlPagination = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === page) {
        htmlPagination += createPagination(i, "outline outline-slate-700 !bg-appBlack/20");
    } else htmlPagination += createPagination(i);
  }
  return htmlPagination;
}

function createPagination(page , className ) {
    return `<div class="px-1 bg-appBlack/10 font-medium ${className} ">${page}</div>`;
}