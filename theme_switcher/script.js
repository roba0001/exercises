const options = document.querySelectorAll("option");
const body = document.querySelector("body");

const themeRetrievedFromLocalStorage = localStorage.getItem("theme");
if (themeRetrievedFromLocalStorage !== null) {
  body.dataset.theme = themeRetrievedFromLocalStorage;
  options.value = themeRetrievedFromLocalStorage; //vælg kun option
}

options.forEach((option) => {
  option.addEventListener("click", theChange);
});

function theChange(evt) {
  const themeChosen = evt.target.dataset.theme;
  console.log("change:", themeChosen);
  body.dataset.theme = themeChosen;
  localStorage.setItem("theme", themeChosen);
  body.setAttribute("data-filter", themeChosen);
}
