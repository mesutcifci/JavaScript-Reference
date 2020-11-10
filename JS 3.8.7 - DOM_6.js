"use strict";

console.log("\n");
console.log("***************************************************");
console.log("*  createElement - createTextNode - appendChild   *");
console.log("*  apend - before - after - pretend - relaceWith  *");
console.log("***************************************************");
console.log("\n");

let div = document.createElement("div");
let text = document.createTextNode("new element");

div.appendChild(text);
// div.appendChild("new element"); // Node.appendChild: Argument 1 is not an object.
let appendedElement = document.body.appendChild(div);
console.log(appendedElement); // div

let text2 = document.createTextNode("new element2");
let span = document.createElement("span");

// span.append(text); not work
// span.append(text2); // OK
span.append("new element2"); // OK
appendedElement = document.body.append(span);

console.log(appendedElement); // undefined

let p1 = document.createElement("p");
let p2 = document.createElement("p");

p1.append("p1");
p2.append("p2");

let section1 = document.createElement("section");
let section2 = document.createElement("section");

section1.append(div, span); 
section2.appendChild(p1, p2); // Only p1 added

document.body.append(section1, section2);


let ol = document.createElement("ol");

let li1 = document.createElement("li");
let li2 = document.createElement("li");

li1.append("li1");
li2.append("li2");

ol.append(li1);
ol.append(li2);

ol.prepend("pretend")

document.body.append(ol);

ol.before("before ol"); // insert string "before ol" before <ol>
ol.after("after ol");   // insert string "after ol" after <ol>


let parent = document.createElement("div");
let child = document.createElement("p");

parent.appendChild(child);
let span2 = document.createElement("span");

child.replaceWith(span2);
console.log(parent.outerHTML);
// "<div><span></span></div>"