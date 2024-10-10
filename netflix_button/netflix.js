startAnimation();

function startAnimation() {
  document.querySelector("html").addEventListener("mousemove", eventHandler);
  document.querySelector("button").addEventListener("animationend", eventHandler);
  document.querySelector("button").addEventListener("click", eventHandler);
  // mus bevæges over html, animation slutter på button og button klikkes --> kør eventHandler
}

function eventHandler(evt) {
  let event = evt.type; //which event set off the function
  console.log(event);
  if (event === "click" || event === "animationend") {
    //hvis event er klik eller animationend,
    nextScreen(); // så kør funktionen nextScreen
  } else if (event === "mousemove") {
    //ellers hvis event er mousemove,
    notNextScreen(); //så kør funktionen notNextScreen
  }
}

function nextScreen() {
  document.querySelector("button").classList.add("hide"); //skjul button
  document.querySelector("html").style.setProperty("background-color", "red"); //gør baggrund rød
  document.querySelector("h1").textContent = "NEXT EPISODE"; // gør textContent for h1 til "NEXT EPISODE"
}

function notNextScreen() {
  document.querySelector("button").removeEventListener("animationend", eventHandler); //fjern eventlistener for animationend
}
