setInterval(fetchData, 10000);
fetchData();

async function fetchData() {
  const obj = await fetch("https://kea-alt-del.dk/kata-distortion/").then((res) => res.json());
  console.log("hele obj", obj);
  document.querySelector("p").textContent = `People in queue: ${obj.inQueue}`;
  let number = obj.inQueue;

  //   kør compare funktionen (a,b)
  
}
