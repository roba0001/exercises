"use strict";

const h2names = document.querySelector("#names");
const inputName = document.querySelector("#name");
const button = document.querySelector("button");

const nameArrayFromLocalStorage = localStorage.getItem("nameArray");
let model;

//Model
if (nameArrayFromLocalStorage === null) {
  model = ["Peter", "Paul", "Mary"];
} else {
  model = JSON.parse(nameArrayFromLocalStorage);
}

// controller
init();

function init() {
  button.addEventListener("click", button_click);
  upDateView();
}

function addNameToModel(name) {
  model.push(name);
  updateLocalStorage();
}
function removeNameFromModel(id) {
  model.splice(id, 1);
  updateLocalStorage();
}

function updateLocalStorage() {
  const inputFelt = document.querySelector("input");
  console.log("updateLocalStorage", model);
  localStorage.setItem("nameArray", JSON.stringify(model));
}

function upDateView() {
  h2names.innerHTML = "";
  model.forEach((each, i) => {
    h2names.innerHTML += `<span class="clickname" data-id="${i}">${each}</span> `;
  });

  document.querySelectorAll(".clickname").forEach((each) => {
    each.addEventListener("click", klikspan);
  });
}

// view
function button_click() {
  addNameToModel(inputName.value);
  upDateView();
}
function klikspan(evt) {
  removeNameFromModel(evt.target.dataset.id);
  upDateView();
}
