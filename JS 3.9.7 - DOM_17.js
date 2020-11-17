"use strict"

console.log("\n");
console.log("*******************************************************");
console.log("* focus - blur - focusin - focusout - change - input - *");
console.log("* focus() - blur()")
console.log("**********************************************************");
console.log("\n");

let input1 = document.getElementById("input1");
let p1 = document.getElementById("p1");

input1.addEventListener("focus", () => {
    p1.textContent += "input 1 focus: " +  new Date().toLocaleTimeString('tr-TR') + " \n";
});

input1.addEventListener("blur", () => {
    p1.textContent += "input 1 blur: " +  new Date().toLocaleTimeString('tr-TR') + " \n";
});

// Also focusin and focus out events available. focusin and focusout events bubbles
// but focus and blur events dont



let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

button1.addEventListener("click", () => {
    input1.focus();
});

button2.addEventListener("click", () => {
    input1.blur();
});



let input2 = document.getElementById("input2");
input2.addEventListener("change", () => {
    alert(input2.value);
});



let input3 = document.getElementById("input3");
let p2 = document.getElementById("p2");

input3.addEventListener("input", () => {
    p2.textContent += input3.value;
});



let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");

input4.addEventListener("cut", () => {
    alert("cut event works");
});

input4.addEventListener("copy",() => {
    alert("copy event works");
});

input5.addEventListener("paste", () => {
    alert("paste event works ")
});