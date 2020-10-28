"use strict"

// Global Lexical Environments Object
// LeO = Lexical environments object

/*
LeO.phrase = <uninitilazed> The JS engine knows that the variable exists but has no reference.
*/
let phrase;           // LeO.phrase = undefined
phrase = 'Hello';     // LeO.phrase = "Hello" 
phrase = 'Hi';        // LeO.phrase = "Hi"


function saySomething() {
    console.log(`${phrase}`);
}

/* ------------------------------------------------------------------------------------ */

function getCounter() {
    let counter = 0;
    function print() {
        console.log(counter++);
        console.log(counter++);
    }
    print();
}

getCounter(); // 0 1
getCounter(); // 0 1
getCounter(); // 0 1
console.log("\n");

let count_1 = getCounter;

count_1(); // 0 1
count_1(); // 0 1
count_1(); // 0 1
console.log("\n");

function getCounter_2() {
    let counter = 0;
    function print() {
        console.log(counter++);
    }
    return print;
}

getCounter_2(); // nothing prints

console.log(getCounter_2()); // function print()

let count_2 = getCounter_2(); // variable count_2 refer to function print

count_2(); // 0
count_2(); // 1
count_2(); // 2 // counter did not resetting because it is still hanging around inside a count_2
console.log("\n");

/* ------------------------------------------------------------------------------------ */

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

// Think of it like: give me a function that adds 3 to whatever you give it
let fn_inside = outside(3); 
let result1 = fn_inside(5); // returns 8

let result2 = outside(3)(5); // returns 8
console.log("\n");

/* ------------------------------------------------------------------------------------ */

var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
