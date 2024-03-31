// Write your code here!
let main=document.getElementById("main");

console.log(main);
console.log(document);
//document.remove(main);
//console.log(document);
console.log(document.body.children);
document.body.removeChild(main);
console.log(document.body.children);
let newHeader = document.createElement("h1");
newHeader.textContent =("YOUR-NAME is the champion").toString();
newHeader.id = "victory";
document.body.append(newHeader);
console.log(document.body);






//console.log(document.body.h1)

//console.log(document.body.h1)


//console.log(document.body.h1.innerHTML);
//document.body.h1.innerHTML="newHeader"
//console.log(document.body.h1.innerHTML);