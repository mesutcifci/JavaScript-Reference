"use strict"

console.log(document.body.nodeType); // 1 corresponds  element nodes
console.log(document.body.firstChild.nodeType); // 3 corresponds text nodes
console.log("\n");

console.log(document.body.firstChild.tagName);  // udefined
console.log(document.body.firstChild.nodeName); // #text
console.log("\n");

document.body.obj = {
    name:'my object',
    printName() {
        console.log(this.name);
    }
}


console.log(document.body.obj.name);        // my object
console.log(document.body.obj.printName()); // my object  
console.log("\n");

document.body.setAttribute("custom", "custom attribute");
console.log(document.body.getAttribute("custom")); // custom attribute
document.body.removeAttribute("custom");
console.log(document.body.getAttribute("custom")); // null