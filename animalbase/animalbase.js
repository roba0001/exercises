"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");
  // TODO: Add event-listeners to filter and sort buttons

  document.querySelectorAll("button").forEach((button) => {
    //select alle tre knapper, og for hver knap,
    addEventListener("click", btnHandler); // så add event listener for click der kører funktionen btnHandler
  });

  loadJSON();
}

function btnHandler(evt) {
  const buttons = document.querySelectorAll("button");
  const filter = evt.target.dataset.filter; // konstant for den trykkede button's (evt target's) datafilter
  console.log(filter);

  function isCat(animal) {
    //funktion to check om animal (objekt) er kat
    if (animal.type === "cat") {
      return true;
    } else {
      return false;
    }
  }
  function isDog(animal) {
    //funktion to check om animal (objekt) er dog
    if (animal.type === "dog") {
      return true;
    } else {
      return false;
    }
  }
  const onlyCats = allAnimals.filter(isCat); //arrayet filtreret med kun cats
  const onlyDogs = allAnimals.filter(isDog); //arrayet filtreret med kun dogs

  buttons.forEach((button) => {
    //for hver knap,
    if (filter === "cat") {
      //hvis den trykkede knap's data-filter er cat, så
      displayList(onlyCats); //kør funktionen displayList med kun katte
    } else if (filter === "dog") {
      // ellers hvis den trykkede knap's data-filter er dog, så
      displayList(onlyDogs); ////kør funktionen displayList med kun katte
    } else {
      displayList(allAnimals); //ellers kør funktionen displayList med arrayet allAnimals
    }
  });
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals); //kør funktionen displayList med arrayet allAnimals
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
