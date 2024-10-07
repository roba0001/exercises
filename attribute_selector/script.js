document.querySelector("button").addEventListener("click", changeDataFilter);

const text = document.querySelector("h1");

function changeDataFilter() {
  if (text.dataset.filter === "bat") {
    text.setAttribute("data-filter", "fox");
  } else {
    text.setAttribute("data-filter", "bat");
  }
}
