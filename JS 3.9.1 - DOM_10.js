"use strict"

console.log("\n");
console.log("****************************************************");
console.log("* window.scrollX(pageXOffset)/scrollY(pageYOffset) *");
console.log("*               window.scrollBy/To                 *");
console.log("*      getBoundingClientRect - getClientRects      *");
console.log("****************************************************");
console.log("\n");

// When we move scrollbar these values change

console.log(window.scrollX);
console.log(window.pageXOffset);
console.log("\n");

console.log(window.scrollY);
console.log(window.pageYOffset);
console.log("\n");


let moveUpBtn = document.getElementById("moveUp");

function displayMoveUpButton() {
    if (window.pageYOffset > 500) {
        moveUpBtn.style.display = "block"
    } else {
        moveUpBtn.style.display = "none";
    }
}

// scrollTo and scroll working similar
// for read differences visit https://luxiyalu.com/difference-between-scrolls/
function moveUp() {
    window.scrollBy(-(Number.MAX_SAFE_INTEGER), -(Number.MAX_SAFE_INTEGER));
}


let div = document.getElementsByTagName("div")[0];

// DOMRect { x: 457, y: 5111, width: 440, height: 240, top: 5111, 
//           right: 897, bottom: 5351, left: 457 }
console.log(div.getBoundingClientRect());
console.log("\n")

/*
DOMRectList
​
0: DOMRect
    bottom: 5351
    height: 240​
    left: 457
    right: 897
    top: 5111
    width: 440
    x: 457
    y: 5111
 <prototype>: DOMRectPrototype { x: Getter & Setter, y: Getter & Setter, width: Getter & Setter, … }
length: 1
<prototype>: DOMRectListPrototype { item: item(), length: Getter, … }
*/
console.log(div.getClientRects());