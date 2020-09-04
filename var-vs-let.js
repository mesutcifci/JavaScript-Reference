if(true) {
    x = 10;
    var y = 20;
    let z = 30;
}

console.log(x); // result = 10
console.log(y); // result = 20
console.log(z); // ReferenceError: z is not defined

num1 = 5;
num1 = 10;      // OK

var num2 = 111;
var num2 = 112; // OK

let num3 = 14;
let num3 = 28;  // SyntaxError: redeclaration of let num3

