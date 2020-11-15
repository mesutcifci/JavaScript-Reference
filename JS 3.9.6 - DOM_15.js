"use strict"

console.log("\n");
console.log("**********************************************************");
console.log("*                    keydown - keyup                     *");
console.log("**********************************************************");
console.log("\n");


let p1 = document.getElementById("p1");

p1.addEventListener("keydown", event => {
    p1.textContent += "keydown(code): " + event.code + "\n" + "keydown(key): " + event.key + "\n";
});

p1.addEventListener("keyup", event => {
    p1.textContent += "keyup(code): " + event.code + "\n" + "keyup(key): " + event.key + "\n";
});
