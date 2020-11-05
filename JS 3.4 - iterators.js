"use strict"

let numbers = [1, 2, 3];

for (let number of numbers) {
    console.log(number); // 1 2 3
}

console.log(numbers[Symbol.iterator]().next()); // Object { value: 1, done: false }
console.log("\n");

// ------------------------------------------------------------------------------------ 


let text = 'noir';

for (let letter of text) {
    console.log(letter); // n o i r 
}

console.log(text[Symbol.iterator]().next()); // Object { value: "n", done: false }
console.log("\n");

// ------------------------------------------------------------------------------------ 


let map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

for (let [key, value] of map) {
    console.log(key, value); // key1 value1   key2 value2
}

console.log(map[Symbol.iterator]().next()); // Object { value: (2) […], done: false }
console.log("\n");

// ------------------------------------------------------------------------------------ 

let set = new Set([1, 2, 3]);

for (let i of set) {
    console.log(i); // 1 2 3
}

console.log(set[Symbol.iterator]().next()); // Object { value: 1, done: false }
console.log("\n");

// ------------------------------------------------------------------------------------ 

let obj1 = { prop1: 'property 1', prop2: 'property 2' }

/*
// Uncaught TypeError: obj1 is not iterable
for(let property of obj1) {
    console.log(property); 
}
*/

// console.log(obj1[Symbol.iterator]().next());


// ------------------------------------------------------------------------------------ 

let obj2 = { prop1: 'property 1', prop2: 'property 2' };

obj2[Symbol.iterator] = function() {
    let properties = Object.keys(obj2);
    let count = 0;
    let done = false;

    function next() {
        if(count > properties.length) {
            done = true;
        }
        return {done: done, value: properties[count++]}
    }

    return {next};
} 

for(let property of obj2) {
    console.log(property); // prop1 prop2 undefined
}

console.log(obj2[Symbol.iterator]().next()); // Object { done: false, value: "prop1" }