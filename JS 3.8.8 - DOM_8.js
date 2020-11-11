"use strict";

console.log("\n");
console.log("***********************************************************");
console.log("*  getElementsByClassName - classList - className - style *");
console.log("***********************************************************");
console.log("\n");

let divs = document.body.getElementsByClassName("redBox");

let div1 = divs[0];
let div2 = divs[1];
console.log(div1); // <div class="redBox">

div1.classList.add("box");
div2.classList.add("box");

let div3 = document.createElement("div");
div3.className = "greenBox";
div3.append("3");
document.body.append(div3);

setTimeout(() => div3.classList.remove("greenBox"), 2000);

// adds the class if it doesn’t exist, otherwise removes it.
// so this code removes div2's className
console.log(div2.classList.toggle("redBox")); // false

console.log(div1.classList.contains("box")); // true

document.body.style.backgroundColor = "blue";

let span = document.createElement("span");

// such assignment removes all existing styles
span.style.cssText = `
width: 100px;
height: 100px;
display: inline-block;
background-color: rgb(220, 120, 60);
margin: 20px;
`;

document.body.append(span);