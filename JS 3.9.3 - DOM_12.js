"use strict"

let buttons = document.getElementById("buttons");

buttons.addEventListener("click", event => {
    if (event.target.className === "enable") {
        alert("*****");
    }
});


let dataButton = document.getElementById("example");

document.addEventListener("click", function(event) {
    console.log(event.target.dataset);       // DOMStringMap { id → "data-button", value → "my data" }
    console.log(event.target.dataset.id);    // data-button
    console.log(event.target.dataset.value); // my data
});