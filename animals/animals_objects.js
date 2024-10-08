"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  //   console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array

    // prototype for vores object - derfor stort bogstav
    const Animal = {
      name: "",
      desc: "-unknown animal-",
      type: "",
      age: 0,
    };

    const animal = Object.create(Animal); //lav et objekt baseret på prototypen Animal, og giv den konstantnavnet animal
    const texts = jsonObject.fullname.split(" "); //splitter hver string ved mellemrum
    animal.name = texts[0]; //tilføjer props med values (baseret på den splittede strings index) i objectet animal
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age; //her bare age, fordi den ikke var en del af stringen
    // return animal;

    allAnimals.push(animal); // tilføjer hvert animal til vores array (allAnimals)
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
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
