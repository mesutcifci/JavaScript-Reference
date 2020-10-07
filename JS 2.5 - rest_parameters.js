"use strict"

function sumAll(...numbers) { // numbers is an array
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55 
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let numbers = [1, 2, 3];

console.log(Math.max(numbers));    // NaN
console.log(Math.max(...numbers)); // 3
console.log("\n");

let letters = ['a', 'b', 'c'];
let merged = [...numbers, ...letters];
console.log(merged); // 1, 2, 3, "a", "b", "c"
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let text = 'Mesut';
console.log(...text); // M e s u t
console.log("\n");

/* ------------------------------------------------------------------------------------ */

let obj = { a: 1, b: 2 };
let copy = {...obj};

console.log(copy);        // Object { a: 1, b: 2 }
console.log(obj == copy); // false

