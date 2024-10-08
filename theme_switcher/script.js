// Sæt en evenListener på dit select element sådan at
//den skifter data-theme på dit body element.

const option = document.querySelector("option");
const body = document.querySelector("body");

// --------  NEM SOLUTION --------
// document.querySelector(".dark").addEventListener("click", changeToDark);
// document.querySelector(".light").addEventListener("click", changeToLight);
// document.querySelector(".hawaii").addEventListener("click", changeToHawaii);

// function changeToDark() {
//   console.log("dark clicked");
//   body.setAttribute("data-filter", "dark");
// }
// function changeToLight() {
//   console.log("light clicked");
//   body.setAttribute("data-filter", "light");
// }
// function changeToHawaii() {
//   console.log("hawaii clicked");
//   body.setAttribute("data-filter", "hawaii");
// }

// ------- PRØVER --------
document.querySelector("option").addEventListener("click", changeTheme);

// function changeTheme() {
// test 1
//   if (option.dataset.filter === "light") {
//     console.log("light");
//     body.setAttribute("data-filter", "light");
//   } else if (option.dataset.filter === "dark") {
//     console.log("dark");
//     body.setAttribute("data-filter", "dark");
//   } else if (option.dataset.filter === "hawaii") {
//     console.log("hawaii");
//     body.setAttribute("data-filter", "hawaii");
//   }

//   test 2
//   if (this.getAttribute("light")) {
//     console.log("this is light");
//   } else {
//     console.log("this is NOT light");
//   }
// }

function changeTheme() {
  let colorName = evt.target.value;
  body.setAttribute("theme", colorName);
}

// test 3 - mangler restart
// function changeTheme() {
//   if (option.classList.contains("dark")) {
//     console.log("here is dark");
//   } else if (option.classList.contains("light")) {
//     console.log("this is dark");
//   } else if (option.classList.contains("hawaii")) {
//     console.log("this is hawaii");
//   }
// }
