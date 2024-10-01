const list = document.querySelector("ul");
const valueArr = [];
setInterval(generateBars, 1000); // start setinterval der kører funktionen generateBars hvert 1000ms

function generateBars() {
  const ranNum = Math.floor(Math.random() * 100); //Generer tilfældigt tal 0-100

  if (valueArr.length >= 20) {
    valueArr.shift(); //hvis arrayets længde er større end eller lig med 20 fjernes det første element i arrayet
    list.removeChild(list.firstElementChild); //vi fjerner også det første barn i list/ul
  }
  valueArr.push(ranNum); //tilføj ranNum til slutningen af arrayet

  const li = document.createElement("li");
  li.style.setProperty("--height", ranNum); //gør søjlens højde til ranNum
  list.appendChild(li); //tilføj li børn til listen (ul)
}
