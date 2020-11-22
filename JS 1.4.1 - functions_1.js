"use strict"

/* named function */

function myFunction(value) {
    return value * 5;
}

console.log(myFunction(10)); // 50
console.log("\n")

/* anonymous function */

let square = function (value) {
    return value * value
};

console.log(square(4)); // 16
console.log("\n")

console.log("-------------------------");

/* function as an argument */

function map(func, arr) {
    let result = [];
    for (let i = 0; i != arr.length; i++) {
        result[i] = func(arr[i]);
    }
    return result;
}

let multiply = function (number) { return number * 2; };
let numbers = [10, 20, 30, 40, 50];

console.log(map(multiply, numbers)); // 20 40 60 80 100
console.log("\n")

console.log("-------------------------");

/* function declaration can be hoisted(appear below the call in the code) */

console.log(sayMyName("Mesut")); // Mesut
console.log("\n")
function sayMyName(name) { return name; }

/* 
console.log(sayMyName2("Elif"))
let sayMyName2 = function(name) {return name;};  
// ReferenceError: can't access lexical declaration `sayMyName' before initialization
*/

/*
console.log(sayMyName3('Minik'));
var sayMyName3 = function(name) {return name;}
// sayMyName3 is not a function
*/
console.log("-------------------------");

/* nested function */

function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner;
}

let function1 = outer(2);
let result1 = function1(3);           // like this outer(2)(3)
console.log(`result 1 = ${result1}`); // result 1 = 5

let result2 = outer(2)(3);
console.log(`result 2 = ${result2}`); // result 2 = 5

function A(x) {
    function B(y) {
        function C(z) {
            return x + y + z;
        }
        return C;
    }
    return B;
}

console.log(A(1));       // function B(y)
console.log(A(1)(1));    // function C(z)
console.log(A(1)(1)(1)); // 3
console.log("\n");

console.log("-------------------------");

/* arguments objects */

function myConcat(seperator) {
    let result = '';

    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + seperator;
    }
    result = result.substr(0, result.length - 1)
    return result;
}
console.log(myConcat("-", "ali", "veli", "49", "50")); // ali-veli-49-50

/* callback function */

function ask(question, yes, no) {
    if (confirm(question))
        yes();
    else
        no();
}

function yes() {
    alert("You accepted");
}

function no() {
    alert("You did not accept");
}

ask("Do you accept?", yes, no);

/*
ask("Do you accept?", // argument question
    () => { alert("You accepted");  }, // argument yes
    function () { alert("You did not accept") } // argument no
);
*/
console.log("-------------------------");

let age = prompt("How old are you?", 18);

let hello;
let text = "default";
console.log("Before if block. text = " + text)  // Before if block. text = default
if (age < 18) {

    hello = function () {
        console.log("Hello!");
    };
    text = "age < 18";

} else {

    hello = function () {
        console.log("Heeellloooo!");
    };
    text = "age >= 18";
}

console.log("After if block. text  = " + text); // After if block. text  = age >= 18
hello(); // Heeellloooo!

console.log("-------------------------");

/* arrow functions */

// Type 1 - Normal function
function sum(x, y) {
    return x + y;
}

// Type 2 - Function expression
let subtract = function (x, y) {
    return x - y;
}

// Type 3 - Arrow function
let divide = (x, y) => x / y;
let sqr = x => x * x;
let something = () => console.log("something");
let printAndReturn = (x, y) => {
    let sum = x + y;
    console.log(`sum = ${sum}`);
    return sum;
}

// Named function expressions

let sayHi = function func(who) {
    if (who) {
        console.log(` Hello ${who}`);
    } else {
        func('Guest') // func re-call itself
    }
}
// func(); ReferenceError: func is not defined

let welcome = sayHi;
sayHi = null;
welcome(); // Hello Guest

// Unnamed function expression

let sayBye = function (who) {
    if (who) {
        console.log(`Bye ${who}`);
    } else {
        sayBye('Guest');
    }
}

let bye = sayBye;
sayBye = null;
// bye(); // Uncaught TypeError: sayBye is not a function

/* ------------------------------------------------------------------------------------ */

// The "new Function" syntax

let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2)); // 3

let printName = new Function('console.log("My name is Mesut")');
printName(); // My name is Mesut
