document.querySelector("html").addEventListener("mousemove", mouseOverHandler);

const html = document.querySelector("html");
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
console.log(windowWidth);

function mouseOverHandler(evt) {
  target = evt.target;

  clientPos = `${evt.clientX}, ${evt.clientY}`;
  clientX = evt.clientX;
  clientY = evt.clientY;

  let saturationProcent = Math.floor((clientY / windowHeight) * 100);
  let lightProcent = Math.floor((clientX / windowWidth) * 100);

  let bgColor = `hsl(357, ${saturationProcent}%, ${lightProcent}%)`;

  html.style.setProperty("background-color", bgColor);
  console.log(saturationProcent);
}
