const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const nav = document.querySelector("nav");

makeBreadCrumbPath(bc);

function makeBreadCrumbPath(arr) {
  arr.forEach((each) => {
    nav.innerHTML += `
    ${
      arr.indexOf(each) === arr.length - 1 //
        ? `${each.name}`
        : `<a href=${each.link}>${each.name} </a>`
    } `;
  });
}
