import { getRandomNumber } from "./numbers.js";
function getRandomColor() {
  return `hsl( ${getRandomNumber(360)} 50% 50% )`;
}
