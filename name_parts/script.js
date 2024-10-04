const aName = "Albus Percival Wulfric Brian Dumbledore";
const firstName = aName.substring(0, aName.indexOf(" "));
const middleName = aName.substring(aName.indexOf(" ") + 1, aName.lastIndexOf(" "));
const lastName = aName.substring(aName.lastIndexOf(" ") + 1);
console.log(`_${firstName}_`);
console.log(`_${middleName}_`);
console.log(`_${lastName}_`);
