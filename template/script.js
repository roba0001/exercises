firstName = "Klaus";
animalType = "dog";
animalName = "Mona";

// console.log(`My name is ${firstName} \nI have a ${animalType} called ${animalName}`);

myName = "Ronja";
len = myName.length;
letter = myName[3];
// console.log(`My name is ${myName} and it is ${len} characters long`);
// console.log(letter);

// const nameAlbus = "Albus Percival Wulfric Brian Dumbledore";
// // total antal chars inkl mellemrum
// console.log("total antal chars inkl mellemrum", nameAlbus.length);

// // char på index2
// console.log("char på index2", nameAlbus[2]);

// // char på index6
// console.log("char på index6", nameAlbus[6]);

// // hvilket index har det første D i <Dumbledore
// let firstD = nameAlbus.indexOf("D");
// console.log("Index of first D", firstD);

// // hvilket index har det sidste e i Dumbledore
// let lastE = nameAlbus.lastIndexOf("e");
// console.log("Index of last e", lastE);

// const str1 = "  There is    space here \n  ";
// console.log(`_${str1}_`);
// const str2 = str1.trim();
// console.log(`_${str2}_`);

// const fullName = "Ronja Baldursdóttir";
// const myFirstName = fullName.substring(0, 5);
// const myLastName = fullName.substring(6);
// console.log(myFirstName);
// console.log(myLastName);

const nameAlbus = "Albus Percival Wulfric Brian Dumbledore";
// Albus
console.log("Albus:", nameAlbus.substring(0, 5));
// Dumbledore

console.log("Dumbledore:", nameAlbus.substring(nameAlbus.indexOf("Dumbledore")));

// Wulfric
console.log(
  "Wulfric:",
  "_" + nameAlbus.substring(nameAlbus.indexOf("Wulfric"), nameAlbus.indexOf(" Brian")) + "_"
);
//  Wulfric
console.log(
  "_Wulfric:",
  "_" + nameAlbus.substring(nameAlbus.indexOf(" Wulfric"), nameAlbus.indexOf(" Brian")) + "_"
);

// ian
console.log(
  "ian:",
  "_" + nameAlbus.substring(nameAlbus.indexOf("ian"), nameAlbus.indexOf(" Dumbledore")) + "_"
);
// bus
console.log(
  "bus:",
  "_" + nameAlbus.substring(nameAlbus.indexOf("bus"), nameAlbus.indexOf(" P")) + "_"
);
