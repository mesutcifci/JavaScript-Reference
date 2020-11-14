"use strict"

console.log("\n");
console.log("**********************************************************");
console.log("* mousedown - mouseup - mousemove - mouseout - mouseover *");
console.log("*      mouseenter - mouseleave - click - contextmenu     *");
console.log("**********************************************************");
console.log("\n");

let button1 = document.getElementById("button1");
button1.addEventListener("mousedown", event => {
    if (button1.value === "button 1") {
        button1.value = "you are clicking button 1 now";
        button1.style.color = "white";
        button1.style.backgroundColor = "red"
    }
});


button1.addEventListener("mouseup", event => {
    if (button1.value === "you are clicking button 1 now") {
        button1.value = "button 1 released";
        button1.style.backgroundColor = "green"
    }

    setTimeout(() => {
        button1.value = "button 1"
        button1.style.color = "black"
        button1.style.backgroundColor = ""
    }, 300);

});

let frame = document.getElementById("frame");
let circle = document.getElementById("circle");


frame.addEventListener("mousemove", event => {
    frame.style.backgroundColor = "red";
})


circle.addEventListener("mouseover", event => {
    frame.style.backgroundColor = "blue";
    circle.style.backgroundColor = "red"
})


document.addEventListener("mouseout", event => {
    frame.style.backgroundColor = "";
    circle.style.backgroundColor = "green";
})


let button2 = document.getElementById("button2");
button2.addEventListener("click", event => {

    // for explanation : https://flaviocopes.com/mouse-events/
    // console.log(event.button);
    // console.log(event.altKey);
    // console.log(event.buttons);
    // console.log(event.clientX);
    // console.log(event.clientY);
    // console.log(event.ctrlKey);
    // console.log(event.metaKey);
    // console.log(event.movementX);
    // console.log(event.movementY);
    // console.log(event.region);
    // console.log(event.relatedTarget);
    // console.log(event.screenX);
    // console.log(event.screenY);
    // console.log(event.shiftKey);
});


button2.addEventListener("contextmenu", event => {
    event.preventDefault();
});


let parent1 = document.getElementById("parent1");

// bubbling occurs in mouseover and mouseout
parent1.addEventListener("mouseover", event => {
    console.log(event.type, event.target.id);
});


let parent2 = document.getElementById("parent2");

// no bubbling occurs in mouseenter and mouseleave
parent2.addEventListener("mouseenter", event => {
    console.log(event.type, event.target.id);
});