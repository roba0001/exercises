startAnimation();

document.querySelector("button").addEventListener("animationend", eventHandler);

function startAnimation() {
  document.querySelector("html").addEventListener("mousemove", eventHandler);
  document.querySelector("button").addEventListener("animationend", eventHandler);
  document.querySelector("button").addEventListener("click", eventHandler);
}

function eventHandler(evt) {
  let event = evt.type;
  console.log(event);
  if (event === "click" || event === "animationend") {
    nextScreen();
  } else if (event === "mousemove") {
    notNextScreen();
  }
}

function nextScreen() {
  document.querySelector("button").classList.add("hide");
  document.querySelector("html").style.setProperty("background-color", "red");
  document.querySelector("h1").textContent = "NEXT EPISODE";
}

function notNextScreen() {
  console.log("notNextScreen");
  document.querySelector("button").removeEventListener("animationend", eventHandler);
}
