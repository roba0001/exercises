export function fetchUrl(url) {
  return fetch(url).then((response) => response.json());
}

// måden man ville bruge den på
function randomFunction(){
    const data = await fetchUrl("https://api.learnjavascript.online/demo")

}
