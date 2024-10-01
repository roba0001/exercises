const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
console.log("tbodyPointer", tbodyPointer);
// FILTRERING

// all electric vehicles
function isVehicleElectric(vehicle) {
  if (vehicle.isElectric === true) {
    return true;
  }
}
const allElectricArr = vehicles.filter(isVehicleElectric);

// more than 2 seats
function isThereMoreThanTwoSeats(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}
const moreThanTwoArr = vehicles.filter(isThereMoreThanTwoSeats);

// All electric vehicles owned by Jonas
function isVehicleElectricAndOwnedByJonas(vehicle) {
  if (vehicle.ownedBy === "Jonas" && vehicle.isElectric === true) {
    return true;
  }
}
const electricVehicleAndOwnedByJonas = vehicles.filter(isVehicleElectricAndOwnedByJonas);

// all rugbrød vehicles with more than 2 passengers
function isVehicleBigAndRugbrod(vehicle) {
  if (vehicle.passengers >= 2 && vehicle.fuel === "Rugbrød") {
    return true;
  }
}
const bigRugbrodVehicle = vehicles.filter(isVehicleBigAndRugbrod);

// ----------------------------------------------

//specificerer hvor i dommen det skal

// kører funktionen vis disse vehicles med parameter (CONST) for hvilke vehicles
showTheseVehicles(vehicles);

// putter det ind i dommen
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${areYouChecked(each.stops)}</td>
  <td>${areYouChecked(each.ownedBy)}</td>
  <td>${areYouChecked(each.isElectric)}</td>
  <td>${areYouChecked(each.isTandem)}</td>
</tr>`;
  });
}

// funktion der checker om data er defined eller undefined
function areYouChecked(data) {
  // hvis data er true, sæt et x
  if (data === true) {
    return "X";
    // hvis data er undefined, gør den tom
  } else if (data === undefined) {
    return " ";
  } else {
    // ellers sæt data ind
    return data;
  }
}
// KNAPPER
// const button = document.querySelector("button");
// function checkButtonClick() {
//   const button = document.querySelector("button");

//   if (button.classlist === ".unfiltered") {
//     console.log("show all");
//   } else if (button.classlist === ".elVehicle") {
//     console.log("show all electric");
//   }
// }
// document.querySelector(".unfiltered").addEventListener("click", showTheseVehicles);
// document.querySelector(".elVehicle").addEventListener("click", showTheseVehicles);
document.querySelectorAll("button").forEach((elm) => {
  console.log("elm", elm);
  elm.addEventListener("click", buttonClicks);
});
function buttonClicks(evt) {
  const whatFilter = evt.currentTarget.dataset.filter;
  console.log("whatFilter", whatFilter);
  if (whatFilter === "all") {
    showTheseVehicles(vehicles);
  } else if (whatFilter === "elVehicle") {
    showTheseVehicles(allElectricArr);
  } else if (whatFilter === "moreThanTwoSeats") {
    showTheseVehicles(moreThanTwoArr);
  } else if (whatFilter === "elVehicleJonas") {
    showTheseVehicles(electricVehicleAndOwnedByJonas);
  } else if (whatFilter === "rugbrodVehicle") {
    showTheseVehicles(bigRugbrodVehicle);
  }
}
