const list = document.querySelector("ul");
const valueArr = [];
setInterval(generateBars, 1000);
function generateBars() {
  const ranNum = Math.floor(Math.random() * 100);
  valueArr.push(ranNum);
  console.log(valueArr);
  //   const li = document.createElement("li");
  //   li.style.setProperty("--height", "30");
  //   list.appendChild(li);
}
