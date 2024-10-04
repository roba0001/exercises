let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
const modifiedText = theText.replaceAll("ord", "ting");
const modifiedText2 = theText.split("ord").join("ting");
console.log(modifiedText2);
