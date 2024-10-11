// lyt til musbevægelse der kører mouseOverHandler
document.querySelector("html").addEventListener("mousemove", mouseOverHandler);

const html = document.querySelector("html");
let windowWidth = window.innerWidth; //let for vinduets bredde
let windowHeight = window.innerHeight; //let for vinduets højde

function mouseOverHandler(evt) {
  target = evt.target; //variabel for eventets target

  clientPos = `${evt.clientX}, ${evt.clientY}`;

  clientX = evt.clientX; //eventets x pos
  clientY = evt.clientY; //eventets y pos

  //udregnelse af saturationProcent ved brug af y pos og vindushøjde i %
  let saturationProcent = Math.round((clientY / windowHeight) * 100);

  //udregnelse af lightProcent ved brug af x pos og vindusbredde i %
  let lightProcent = Math.round((clientX / windowWidth) * 100);

  //indsæt saturationProcent og lightProcent ind i en hsl værdi
  let bgColor = `hsl(357, ${saturationProcent}%, ${lightProcent}%)`;

  document.querySelector("h1").textContent = `X: ${lightProcent}, Y: ${saturationProcent} `;

  //indsæt hsl værdien i html's baggrundsfarve
  html.style.setProperty("--bg_color", bgColor);
  console.log(saturationProcent);
}
