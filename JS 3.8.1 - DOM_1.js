"use strict"

/*
<html> = document.documentElement
<body> = document.body
<head> = document.head 
*/
// if we not 'defer' keyword in script tag the results will be null or undefined

// [object HTMLHtmlElement]
console.log("document.documentElement = " + document.documentElement)
console.log("document.head = " + document.head); // [object HTMLHeadElement]
console.log("document.body = " + document.body); // [object HTMLHeadElement]

console.log("\n");
console.log("***************************************************");
console.log("*   hasChildNodes() - childNodes -  firstChild    *");
console.log("*   parentNode - nextSibling - previousSibling    *");
console.log("***************************************************");
console.log("\n");

let list = document.getElementById("ul");

console.log(list.hasChildNodes()); // true
console.log("\n");

for (let node of list.childNodes) {
    console.log(node); // text li text <!-- comment --> text li text
}

console.log("\n");

console.log(list.firstChild); // text
console.log(list.lastChild);  // text

console.log("\n");

console.log(list.nextSibling);     // text
console.log(list.previousSibling); // text
console.log(list.parentNode);      // body

console.log("\n");
console.log("***************************************************************");
console.log("*      children - firstElementChild - lastElementChild        *");
console.log("* parentElement - previousElementSibling - nextElementSibling *");
console.log("*****************************************************************");
console.log("\n");

for (let node of list.children) {
    console.log(node); // li li
}

console.log("\n");

console.log(list.firstElementChild); // li
console.log(list.lastElementChild);  // li

console.log("\n");

console.log(list.nextElementSibling);     // null
console.log(list.previousElementSibling); // div
console.log(list.parentElement);          // body

console.log("\n");

console.log(document.documentElement.parentNode);    // HTMLDocument
console.log(document.documentElement.parentElement); // null
