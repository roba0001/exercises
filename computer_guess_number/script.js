// let computerGuess;
// const firstGuess = 100 / 2;
// document.querySelector(".start").addEventListener("click", computerGuesses);

// function computerGuesses() {
//   document.querySelector(".start").classList.add("disabled");

//   computerGuess = firstGuess;
//   console.log("I guess", firstGuess);
//   document.querySelector(".computer_guess").textContent = `My first guess is ${computerGuess}`;
//   document.querySelector(".low").addEventListener("click", guessTooLow);
//   document.querySelector(".high").addEventListener("click", guessTooHigh);
//   document.querySelector(".correct").addEventListener("click", guessCorrect);
// }

// function guessTooLow() {
//   computerGuess = firstGuess * 1.5;
//   console.log("Second guess", computerGuess);
//   document.querySelector(".computer_guess").textContent = `My guess is ${computerGuess}`;
// }

// function guessTooHigh() {
//   computerGuess = firstGuess / 2;
//   console.log("Second guess", computerGuess);
//   document.querySelector(".computer_guess").textContent = `My guess is ${computerGuess}`;
// }

// function guessCorrect() {
//   document.querySelector(
//     ".computer_guess"
//   ).textContent = `I guessed right! The number was ${computerGuess}`;
// }
document.querySelector(".low").addEventListener("click", guessTooLow);
document.querySelector(".low").classList.add("disabled");

document.querySelector(".high").addEventListener("click", guessTooHigh);
document.querySelector(".high").classList.add("disabled");

document.querySelector(".correct").addEventListener("click", guessCorrect);
document.querySelector(".correct").classList.add("disabled");

let highNum = 100;
let lowNum = 0;

let computerGuess;
document.querySelector(".start").addEventListener("click", computerGuesses);
document.querySelector(
  ".computer_guess"
).textContent = `Think of a number 0-100 and I'll guess it!`;

function computerGuesses() {
  document.querySelector(".start").classList.add("disabled");
  document.querySelector(".low").classList.remove("disabled");
  document.querySelector(".high").classList.remove("disabled");
  document.querySelector(".correct").classList.remove("disabled");

  const interval = highNum - lowNum;
  computerGuess = lowNum + interval / 2;
  document.querySelector(".computer_guess").textContent = `My first guess is ${computerGuess}`;
}

function guessTooLow() {
  lowNum = computerGuess;
  interval = highNum - lowNum;
  computerGuess = lowNum + interval / 2;
  document.querySelector(".computer_guess").textContent = `My guess is ${Math.ceil(computerGuess)}`;
}

function guessTooHigh() {
  highNum = computerGuess;
  interval = highNum - lowNum;
  computerGuess = lowNum + interval / 2;
  document.querySelector(".computer_guess").textContent = `My guess is ${Math.ceil(computerGuess)}`;
}

function guessCorrect() {
  document.querySelector(
    ".computer_guess"
  ).textContent = `I guessed right! The number was ${Math.ceil(computerGuess)}`;
}
