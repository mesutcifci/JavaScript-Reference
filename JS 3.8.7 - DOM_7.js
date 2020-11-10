"use strict";

console.log("\n");
console.log("***************************************************");
console.log("*  insertAdjacentHTML/Text/Element - cloneNode    *");
console.log("*                 DocumentFragment                *");
console.log("***************************************************");
console.log("\n");

let div1 = document.createElement("div");
div1.append("div 1");
document.body.append(div1);

div1.insertAdjacentHTML("beforebegin", "<h1>beforebegin</h1>");
div1.insertAdjacentHTML("afterbegin", "<h2>afterbegin</h2>");
div1.insertAdjacentHTML("beforeend", "<h3>beforeend</h3>");
div1.insertAdjacentHTML("afterend", "<h4>afterend</h4>");
div1.insertAdjacentText("beforebegin", "<p>text</p>");

let p1 = document.createElement("p");
p1.append("p1");
div1.insertAdjacentElement("afterend", p1);

let div2 = div1.cloneNode(true);
let div3 = div1.cloneNode(false);

document.body.append(div2, div3);

let fragment = document.createDocumentFragment();

let p2 = document.createElement("p");
p2.append("p2");

fragment.append(p2, "fragment");

document.body.appendChild(fragment);
