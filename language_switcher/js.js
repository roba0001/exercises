"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

function updateTexts(){
  texts[locale].texts.forEach(element => {
    console.log(element)
    document.querySelector(element.location).textContent=element.text
  });
}

updateTexts()

let sprog = document.querySelector(".lang")
// -------------------------------
let headerText = header.textContent;
let footerText = footer.textContent;


localeCheck(locale){
  if (locale==="de"){
    headerText=texts.de.texts[0]
    footerText=texts.de.texts[1]
  } else if (locale==="da"){
    headerText=texts.de.texts[0]
    footerText=texts.de.texts[1]
  }
}