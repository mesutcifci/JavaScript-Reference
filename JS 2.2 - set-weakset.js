"use strict"

/*  Creating Set*/

let set_1 = new Set();
let set_2 = new Set([1, 2, 3, 4, 5]);

set_1 = new Set([1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5]);
console.log(set_1); // Set(5) [ 1, 2, 3, 4, 5 ]

set_2 = new Set("Eliiiiiiiiiiiiiiiifffffffffffffff");
console.log(set_2); // Set(4) [ "E", "l", "i", "f" ]


console.log("\n");
console.log("***************************************************");
console.log("*                 size - add                      *");
console.log("***************************************************");
console.log("\n");


set_1 = new Set([1, 2, 3, 4]);
console.log(set_1.size); // 4

console.log("\n");

set_2 = new Set();
set_2.add('My name');
set_2.add('is');
set_2.add('Mesut');
console.log(set_2); // Set(3) [ "My name", "is", "Mesut" ]

console.log("\n");

let obj = { x: 1, y: 2 };
let obj_2 = { x: 1, y: 2 };
let clone = obj;

set_1 = new Set();
set_1.add(obj);
set_1.add(obj_2);
set_1.add(clone);
console.log(set_1);  // Set [ {…}, {…} ]


console.log("\n");
console.log("***************************************************");
console.log("*               delete - clear                    *");
console.log("***************************************************");
console.log("\n");


set_1 = new Set([1,2,3]);
let numbers = [4,5];

set_1.add(numbers);
console.log(set_1); // [ 1, 2, 3, (2) […] ]
console.log("\n");

let bool = set_1.delete([1,2,3]);
console.log(bool); // false
bool = set_1.delete(numbers); 
console.log(bool); // true
console.log("\n"); 

console.log(set_1); // Set(3) [ 1, 2, 3 ]
console.log("\n");

set_1.delete(3);
console.log(set_1); // Set [ 1, 2 ]
console.log("\n");

set_1.clear();
console.log(set_1); // Set []
 

console.log("\n");
console.log("***************************************************");
console.log("*                     has                         *");
console.log("***************************************************");
console.log("\n");


set_1 = new Set([1, 2, 3, 4, 5]);
set_1.add('foo');

console.log(set_1.has([1, 2, 3, 4, 5])); // false
console.log(set_1.has(0));               // false
console.log(set_1.has(5));               // true
console.log(set_1.has('foo'));           // true



console.log("\n");
console.log("***************************************************");
console.log("*                   entries                       *");
console.log("***************************************************");
console.log("\n");


set_1 = new Set([11, 22, 33]);
set_1.add('foo');

let iterator_1 = set_1.entries();
console.log(iterator_1.next().value); // Array [ 11, 11 ]
console.log(iterator_1.next().value); // Array [ 22, 22 ]
console.log(iterator_1.next().value); // Array [ 33, 33 ]
console.log(iterator_1.next().value); // Array [ foo, foo ]
console.log(iterator_1.next().value); // undefined

console.log("\n");

iterator_1 = set_1.values();
console.log(iterator_1.next().value); // 11
console.log(iterator_1.next().value); // 22
console.log(iterator_1.next().value); // 33
console.log(iterator_1.next().value); // foo
console.log(iterator_1.next().value); // undefined


console.log("\n");
console.log("***************************************************");
console.log("*                    forEach                      *");
console.log("***************************************************");
console.log("\n");


set_1 = new Set([1, 2, 3]);
set_1.add('foo');

set_1.forEach(
    (value_1, value_2, set) => {
        console.log(`value_1 = ${value_1} \nvalue_2 = ${value_2} `)
    }
)

/* 

value_1 = 1 
value_2 = 1 

value_1 = 2 
value_2 = 2 

value_1 = 3 
value_2 = 3 

value_1 = foo 
value_2 = foo

*/


console.log("\n");
console.log("***************************************************");
console.log("*                    WeakSet                      *");
console.log("***************************************************");
console.log("\n");

/* 

methods
add
delete
has

*/


let fruit = { name : 'apple'};

let weakset = new WeakSet();

weakset.add(fruit);

// weakset.add('Hello'); //  WeakSet value must be an object, got the string "Hello"

console.log(weakset);





