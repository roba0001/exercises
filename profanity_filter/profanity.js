// erstat "ord" med "ting"
// let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
// const modifiedText = theText.replaceAll("ord", "ting");
// const modifiedText2 = theText.split("ord").join("ting");
// console.log(modifiedText2);

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
let theText =
  "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

document.querySelector("button").addEventListener("click", makeSafe);
document.querySelector("p").textContent = theText;

let betterText = theText
  .split(curseWords[0].bad)
  .join(curseWords[0].good)
  .split(curseWords[1].bad)
  .join(curseWords[1].good)
  .split(curseWords[2].bad)
  .join(curseWords[2].good);

console.log(betterText);
// for each, loop igennem noget???
function makeSafe() {
  array.forEach((element) => {});

  console.log("make safe");
  document.querySelector("p").textContent = betterText;
}
