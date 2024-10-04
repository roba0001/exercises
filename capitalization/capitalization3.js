const myName = "Peter";
const myNameCap =
  myName.substring(0, 2).toLowerCase() +
  myName[2].toUpperCase() +
  myName.substring(3).toLowerCase();

console.log(myNameCap);
