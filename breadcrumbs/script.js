const nav = document.querySelector("nav");

document.querySelector("button").addEventListener("click", makeBreadCrumbPath);

function makeBreadCrumbPath(bc) {
  //for each element in our array
  bc.forEach((each) => {
    nav.innerHTML += `
    ${
      //if element is the last one in the array
      bc.indexOf(each) === bc.length - 1
        ? //(?) then display each.name,
          `${each.name}`
        : //if not ( : ) then display each.name wrapped in a link with href each.link
          `<a href=${each.link}>${each.name} </a>`
    } `;
  });
}

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];


