"use strict"

/* delete */

window.x = 1;
var y = 2;
var myObj = { a: 3 };


delete window.x;   // returns true (can delete if created implicitly)
delete myObj.a;    // returns true (can delete user-defined properties)
// delete y;       // gives error in strict mode
// delete Math.PI; // gives error in strict mode, returns false in non strict mode


let numbers = [0, 1, 2, 3];
console.log(numbers.length); // result 4
delete numbers[1];
console.log(numbers.length); // result 4
console.log(numbers[1]);     // result undefined
console.log("\n")

/* in */

let colors = ["red", "green", "blue"];
colors.test = "true"

console.log(0 in colors);         // true
console.log("test" in colors);    // true
console.log("length" in colors);  // true length is an Array propery

console.log(5 in colors);         // false
console.log("red" in colors);     // false you must specify the index number

console.log("\n");

/* ******** */

let apple = "2";
let orange = "3";
console.log(apple + orange);  // result 23
console.log(+apple + +orange) // result 5
