"use strict";

console.log("\n");
console.log("***************************************************");
console.log("*    getElementById/TagName/ClassName/Name        *");
console.log("*    querySelector/All - matches - closest        *");
console.log("***************************************************");
console.log("\n");

function showDiv1() {
  let div1 = document.getElementById("div1");
  div1.style.visibility = "visible";
}

let div = document.getElementById("outer-div");

// <div class="inner-element">
console.log(document.querySelector(".inner-element"));

// <div class="inner-element">
console.log(div.querySelector(".inner-element"));
console.log("\n");

// HTMLCollection { 0: div.inner-element, 1: p.inner-element, 2: span.inner-element,
// 3: h1.inner-element, length: 4 }
console.log(document.getElementsByClassName("inner-element"));
console.log("\n");

// NodeList [ input ]
console.log(document.getElementsByName("input-1"));
console.log("\n");

// NodeList(4) [ div.inner-element, p.inner-element, span.inner-element, h1.inner-element]
console.log(document.querySelectorAll(".inner-element"));

// NodeList [ div.inner-element, p.inner-element ]
console.log(div.querySelectorAll(".inner-element"));
console.log("\n");

let link = document.getElementsByTagName("a")[0];
console.log(link.matches("a[href=example]")); // true
console.log("\n");

let h1 = document.getElementsByTagName("h1")[0];
console.log(h1.closest(".inner-element")); // <h1 class="inner-element">
console.log(h1.closest("#outer-span")); // <span id="outer-span">
console.log(h1.closest("#outer-div")); // null
