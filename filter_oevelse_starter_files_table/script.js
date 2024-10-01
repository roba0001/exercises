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
const tbodyPointer = document.querySelector("tbody");

// kører funktionen vis disse vehicles med parameter for hvilke vehicles
showTheseVehicles(bigRugbrodVehicle);

// putter det ind i dommen
function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}
