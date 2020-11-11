"use strict";

console.log("\n");
console.log("***************************************************");
console.log("*   nodeType - tagName - nodeName - setAttribute  *");
console.log("* getAttribute  -  removeAttribute - hasAttribute *");
console.log("*                getComputedStyle                 *");
console.log("***************************************************");
console.log("\n");

console.log(document.body.nodeType);            // 1 corresponds  element nodes
console.log(document.body.firstChild.nodeType); // 3 corresponds text nodes
console.log("\n");

console.log(document.body.firstChild.tagName);  // undefined
console.log(document.body.firstChild.nodeName); // #text
console.log("\n");

document.body.obj = {
    name: "my object",
    printName() {
        console.log(this.name);
    },
};

console.log(document.body.obj.name); // my object
document.body.obj.printName();       // my object
console.log("\n");

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

console.log(div1.getAttribute("id"));    // div1
console.log(div1.hasAttribute("width")); // false because width is not DOM attribute
console.log(div1.hasAttribute("id"));    // true
console.log("\n");

div2.setAttribute("style", "display: none;");
div2.setAttribute(
    "style",
    "width: 100px; height:100px; background-color:green;"
); // owerride

// non-standart attribute
document.body.setAttribute("custom", "custom attribute");
console.log(document.body.getAttribute("custom")); // custom attribute
document.body.removeAttribute("custom");
console.log(document.body.getAttribute("custom")); // null
console.log("\n");

let span1 = document.getElementById("span1");

console.log(div1.style.color); // brown

// <empty string> because The style property operates only on the value of the "style" attribute,
// without any CSS cascade.
console.log(div1.style.width); 
console.log(span1.style.width); // <empty string>
console.log("\n");

let computed = getComputedStyle(span1);
console.log(computed.width); // 100px