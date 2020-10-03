/* named function */

function myFunction(value) {
    return value * 5;
}

console.log(myFunction(10));

/* anonymous function */

let square = function (value) {
    return value * value
};


console.log(square(4));

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

console.log("-------------------------");

/* function declaration can be hoisted(appear below the call in the code) */

console.log(sayMyName("Mesut"));
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

func1 = outer(2);
result1 = func1(3); // like this outer(2)(3)
console.log(`result1 = ${result1}`);

result2 = outer(2)(3);
console.log(`result2 = ${result2}`);

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        return C;
    }
    return B;
}
console.log(A(1)(1)(1));

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
console.log("Before if block. text = " + text)
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

console.log("After if block. text  = " + text);
hello();

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
let divide = (x,y) => x / y;
let sqr = x => x * x;
let something = () => console.log("something");
let printAndReturn = (x, y) => {
    let sum = x + y;
    console.log(`sum = ${sum}`);
    return sum;
}