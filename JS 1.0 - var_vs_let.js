if(true) {
    x = 10;
    var y = 20;
    let z = 30;
}

console.log(x); // result = 10
console.log(y); // result = 20
// console.log(z); // ReferenceError: z is not defined

num1 = 1;
num1 = 10;      // OK

var num2 = 2;
var num2 = 20; // OK

let num3 = 3;
// let num3 = 30;  // SyntaxError: redeclaration of let num3


console.log(num4); // result = undefined
var num4 = 4;

(function() {
console.log(num4); // result = undefined
var num4 = 40;
})();


// console.log(num5); // ReferenceError: can't access lexical declaration `num5' before initialization
let num5 = 5;


function example() {
    let num_6 = 6;
    var num_7 = 7;
    num_8 = 8;
}

// console.log(num_6); // ReferenceError: num_6 is not defined
// console.log(num_7); // ReferenceError: num_7 is not defined
// console.log(num_8); // ReferenceError: num_8 is not defined

