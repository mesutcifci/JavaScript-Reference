"use strict"

console.log("-----------------------------------------------------------------");

let array_1 = new Array();
let array_2 = [];

let array_3 = new Array(5);
// array_3 = new Array(3.4); // RangeError: Invalid array length
console.log(array_3.length); // 5
console.log(array_3[3]);     // undefined

console.log("\n");

let array_4 = [];
array_4.length = 5;
// array_4.length = 5.2;     // RangeError: Invalid array length
console.log(array_4.length); // 5
console.log(array_4[3]);     // undefined


console.log("-----------------------------------------------------------------");


let numbers = ['one', 'two', 'three'];
console.log(numbers.length);    // 3
console.log(numbers['length']); // 3
console.log(numbers['two']);    // undefined

let letters = new Array('a', 'b', 'c');
console.log(letters['length']); // 3
console.log(letters.length);    // 3


console.log("-----------------------------------------------------------------");


let mixed_array = ['text', 55, { number: 15 }, false, function () { alert('hello') }];
console.log(mixed_array[mixed_array.length - 1]) // function mixed_array()


console.log("-----------------------------------------------------------------");


let fruits = ['apple', 'banana'];
let fru = fruits;

console.log(fruits == fru); // true
console.log(fruits[0]);     // apple

fru[0] = "melon";
console.log(fruits[0]);     // melon


console.log("-----------------------------------------------------------------");


let animals = [];
console.log(animals.length); // 0
animals[55] = 'cat'
console.log(animals.length) // 56

console.log("\n");

let arr = [1, 2, 3, 4, 5];

arr.length = 2;   // truncate to 2 elements
console.log(arr); // [1, 2]

arr.length = 5;       // return length back
console.log(arr[3]);  // undefined: the values do not return


console.log("-----------------------------------------------------------------");


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][1]); // 2


console.log("\n");
console.log("***************************************************");
console.log("*               Array.from / of / isArray         *");
console.log("***************************************************");
console.log("\n");


let foo = Array.from('foo');
console.log(foo); // Array(3) [ "f", "o", "o" ]

let nums = Array.from([1, 2, 3], x => x + x);
console.log(nums); // Array(3) [ 2, 4, 6 ]

function f() {
  return Array.from(arguments);
}

console.log(f(1, 2, 3)[1]);  // 2

console.log("\n");
console.log(Array.of('foo'));     // Array [ "foo" ]
console.log(Array.of(1, 2, 3));   // Array(3) [ 1, 2, 3 ]
console.log(Array.of(undefined)); // Array [ undefined ]

console.log("\n");
console.log(Array.isArray([]));          // true
console.log(Array.isArray([1, 2, 3]));   // true
console.log(Array.isArray(new Array())); // true
console.log(Array.isArray('foobar'));    // false
console.log(Array.isArray(new Uint8Array(32))); // false
console.log(Array.isArray({ __proto__: Array.prototype })); // false


console.log("\n");
console.log("***************************************************");
console.log("*                   concat                        *");
console.log("***************************************************");
console.log("\n");


let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
numbers = num1.concat(num2, num3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


letters = ['a', 'b', 'c'];
let alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]
alphaNumeric[0] = '1';
console.log(letters[0]);   // a

let o1 = { a: [1], b: [2] };
let o2 = { c: [2] };
let o3 = o1.a.concat(o1.b, o2.c);
console.log(o3); // Array [ 1, 2, 2 ]


console.log("\n");
console.log("***************************************************");
console.log("*                 copyWithin                      *");
console.log("***************************************************");
console.log("\n");


console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(0));  // Array(5) [ "a", "b", "c", "d", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(1));  // Array(5) [ "a", "a", "b", "c", "d" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(2));  // Array(5) [ "a", "b", "a", "b", "c" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(44)); // Array(5) [ "a", "b", "c", "d", "e" ]

console.log("\n")
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(0, 1)); // Array(5) [ "b", "c", "d", "e", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(0, 2)); // Array(5) [ "c", "d", "e", "d", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(0, 3)); // Array(5) [ "d", "e", "c", "d", "e" ]

console.log("\n")
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(1, 1));  // Array(5) [ "a", "b", "c", "d", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(1, 3));  // Array(5) [ "a", "d", "e", "d", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(2, 4));  // Array(5) [ "a", "b", "e", "d", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(3, 1));  // Array(5) [ "a", "b", "c", "b", "c" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(2, 44)); // Array(5) [ "a", "b", "c", "d", "e" ]


console.log("\n");
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(0, 1, 4)); // Array(5) [ "b", "c", "d", "d", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(1, 3, 2)); // Array(5) [ "a", "b", "c", "d", "e" ]


console.log("\n");
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(-1));  // Array(5) [ "a", "b", "c", "d", "a" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(-2));  // Array(5) [ "a", "b", "c", "a", "b" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(-3, -5, -4)); // Array(5) [ "a", "b", "a", "d", "e" ]
console.log(['a', 'b', 'c', 'd', 'e'].copyWithin(-44)); // Array(5) [ "a", "b", "c", "d", "e" ] 


console.log("\n");
console.log("***************************************************");
console.log("*                   fill                          *");
console.log("***************************************************");
console.log("\n");


console.log([1, 2, 3, 4, 5, 6].fill('A'));            // [ "A", "A", "A", "A", "A", "A" ]
console.log([1, 2, 3, 4, 5, 6].fill('A', 1));         // [ 1, "A", "A", "A", "A", "A" ]
console.log([1, 2, 3, 4, 5, 6].fill('A', 1, 2));      // [ 1, "A", 3, 4, 5, 6 ]
console.log([1, 2, 3, 4, 5, 6].fill('A', 1, 1));      // [ 1, 2, 3, 4, 5, 6 ]
console.log([1, 2, 3, 4, 5, 6].fill('A', 3, 5));      // [ 1, 2, 3, "A", "A", 6 ]
console.log([1, 2, 3, 4, 5, 6].fill('A', -3, -1));    // [ 1, 2, 3, "A", "A", 6 ]
console.log([1, 2, 3, 4, 5, 6].fill('A', NaN, NaN));  // [ 1, 2, 3, 4, 5, 6 ]


arr = new Array(3).fill({});  // [{}, {}, {}]
arr[0].hi = "hi";
console.log(arr); // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


console.log("\n");
console.log("***************************************************");
console.log("*                   entries                       *");
console.log("***************************************************");
console.log("\n");


letters = ['a', 'b', 'c'];
let iterator1 = letters.entries();

console.log(iterator1.next().value); // Array [ 0, "a"]
console.log(iterator1.next().value); // Array [ 1, "b"]
console.log(iterator1.next().value); // Array [ 2, "c"]
console.log(iterator1.next().value); // undefined


console.log("\n");
console.log("***************************************************");
console.log("*                   every                         *");
console.log("***************************************************");
console.log("\n");


function isBigEnough(element) {
  return element >= 10;
}

/* 

element = 12 
index = 0 
array = 12,55,80,130,44 

element = 55
index = 1
array = 12,55,80,130,44

*/
console.log([12, 55, 80, 130, 44].every((element, index, array) => {
  console.log("element = " + element);
  console.log("index = " + index);
  console.log("array = " + array);
  console.log("\n");
  return element >= 10;
}
)); // true

console.log([12, 55, 80, 130, 44].every(isBigEnough)); // true
console.log([12, 50, 8, 130, 44].every(x => x >= 10)); // false 


console.log("\n");
console.log("***************************************************");
console.log("*                     some                        *");
console.log("***************************************************");
console.log("\n");


/*

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 40].some(isBiggerThan10);  // true
[7, 5, 8, 1, 4].some(isBiggerThan10);   // false

*/


console.log([2, 5, 8, 1, 40].some(x => x > 10));  // true
console.log([7, 5, 8, 1, 4].some(x => x > 10));   // false


console.log("\n");
console.log("***************************************************");
console.log("*                   filter                        *");
console.log("***************************************************");
console.log("\n");


function isBigEnough(element) {
  return element >= 10;
}

console.log([12, 5, 8, 130, 44].filter(isBigEnough));  // Array(3) [ 12, 130, 44 ]
console.log([12, 5, 8, 130, 44].filter(x => x >= 10)); // Array(3) [ 12, 130, 44 ]


console.log("\n");
console.log("***************************************************");
console.log("*                   find                          *");
console.log("***************************************************");
console.log("\n");


array_1 = [5, 12, 8, 130, 44];
console.log(array_1.find(x => x >= 10)); // 12

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];

// Object { name: "bananas", quantity: 0 }
console.log(inventory.find(
  ({ name }) => name === 'bananas'
));


console.log("\n");
console.log("***************************************************");
console.log("*                   findIndex                     *");
console.log("***************************************************");
console.log("\n");


array_1 = [5, 12, 8, 130, 44];
console.log(array_1.findIndex(x => x >= 130));    // 3
console.log(array_1.findIndex(x => x < 5));       // -1

console.log("\n");
console.log("***************************************************");
console.log("*                   flat                          *");
console.log("***************************************************");
console.log("\n");


array_1 = [1, 2, 3, [4, 5]];
console.log(array_1);         // [ 1, 2, 3, (2) […] ]
console.log(array_1.flat());  // [1, 2, 3, 4, 5]

array_2 = [1, 2, 3, [4, 5, [6, 7]]];
console.log(array_2.flat());   // [ 1, 2, 3, 4, 5, (2) […] ]
console.log(array_2.flat(2));  // [ 1, 2, 3, 4, 5, 6, 7 ]

array_3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(array_3.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array_4 = [1, 2, , 4, 5, undefined];
console.log(array_4)          // [ 1, 2, <1 empty slot>, 4, 5, undefined ]
console.log(array_4.flat());  // [1, 2, 4, 5, undefined]


console.log("\n");
console.log("***************************************************");
console.log("*                 flatMap - map                   *");
console.log("***************************************************");
console.log("\n");


array_1 = [1, 2, 3, 4];
console.log(array_1.flatMap(x => x * 2));       // Array(4) [ 2, 4, 6, 8 ]
console.log(array_1.flatMap(x => [x * 2]));     // Array(4) [ 2, 4, 6, 8 ]
console.log(array_1.flatMap(x => [x, x + 10])); // Array(8) [ 1, 11, 2, 12, 3, 13, 4, 14 ]

console.log("\n");
console.log(array_1.map(x => x * 2));       // Array(4) [ 2, 4, 6, 8 ]
console.log(array_1.map(x => [x * 2]));     // Array(4) [[2], [4], [6], [8]]
console.log(array_1.map(x => [x, x + 10])); // Array(4) [[1, 11], [2, 12], [3, 13], [4, 14]]

console.log("\n");
console.log("***************************************************");
console.log("*              forEach - includes                 *");
console.log("***************************************************");
console.log("\n");


// Note : forEach expects a synchronous function

array_1 = [1, 2, 3, , 5]

array_1.forEach((element) => {
  console.log(element) // 1, 2, 3, 5
});

console.log("\n");
console.log(array_1.includes(3));          // true
console.log(array_1.includes(undefined));  // true
console.log(array_1.includes(4));          // false
console.log(array_1.includes(3, 3))        // false
console.log(array_1.includes(1, -5));      // true
console.log(array_1.includes(1, -3));      // false
console.log(array_1.includes(1, -40));     // true


console.log("\n");
console.log("***************************************************");
console.log("*         indexOf - lastIndexOf- join             *");
console.log("***************************************************");
console.log("\n");


array_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(array_1.indexOf(0));     // 0
console.log(array_1.indexOf(3, 5));  // -1
console.log(array_1.indexOf(3, -8)); // 3

console.log("\n");
console.log(array_1.lastIndexOf(0));    // 10 
console.log(array_1.lastIndexOf(0, 6)); // 0


console.log("\n");
let a = ['Wind', 'Water', 'Fire'];
console.log(a.join());      // 'Wind,Water,Fire'
console.log(a.join(true));  // 'WindtrueWatertrueFire'
console.log(a.join(', '));  // 'Wind, Water, Fire'
console.log(a.join(' + ')); // 'Wind + Water + Fire'
console.log(a.join(''));    // 'WindWaterFire'

let test = new Array(4).join("A");
console.log(test);    // AAA
console.log(test[2]); // A
console.log(test[3]); // undefined


console.log("\n");
console.log("***************************************************");
console.log("*                keys - values                    *");
console.log("***************************************************");
console.log("\n");


array_1 = ['a', 'b', , 'c'];
let iterator_1 = array_1.keys();
let iterator_2 = array_1.values()

for (let key of iterator_1) {
  console.log(key); // 0, 1, 2, 3
}

console.log("\n");
for (let value of iterator_2) {
  console.log(value); // a, b, undefined c
}


console.log("\n");
console.log("***************************************************");
console.log("*                push - pop                       *");
console.log("***************************************************");
console.log("\n");


array_1 = [1, 2, 3, 4];

let push = array_1.push(5, 6, 6, 2);
console.log(array_1); // [ 1, 2, 3, 4, 5, 6, 6, 2]
console.log(push);    // 8 (length of array)

console.log("\n");
let pop = array_1.pop();
console.log(array_1); // [ 1, 2, 3, 4, 5, 6]
console.log(pop);     // 2


console.log("\n");
console.log("***************************************************");
console.log("*                   reduce                        *");
console.log("***************************************************");
console.log("\n");


let sum = [1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(`accumulator  = ${accumulator}
currentValue = ${currentValue}
currentIndex = ${currentIndex}
array        = ${array}

`);
  return accumulator + currentValue;
}
);

/* 

accumulator  = 1
currentValue = 2
currentIndex = 1
array        = 1,2,3,4 

accumulator  = 3
currentValue = 3
currentIndex = 2
array        = 1,2,3,4

accumulator  = 6
currentValue = 4
currentIndex = 3
array        = 1,2,3,4

*/

console.log(sum); // 10;
console.log("\n");

sum = [1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(`accumulator  = ${accumulator}
currentValue = ${currentValue}
currentIndex = ${currentIndex}
array        = ${array}

`);
  return accumulator + currentValue;
}, 10
);

/*
accumulator  = 10
currentValue = 1
currentIndex = 0
array        = 1,2,3,4

accumulator  = 11
currentValue = 2
currentIndex = 1
array        = 1,2,3,4

accumulator  = 13
currentValue = 3
currentIndex = 2
array        = 1,2,3,4

accumulator  = 16
currentValue = 4
currentIndex = 3
array        = 1,2,3,4

*/

console.log(sum); // 20


console.log("\n");
console.log("***************************************************");
console.log("*                reduceRight                      *");
console.log("***************************************************");
console.log("\n");


sum = [1, 2, 3, 4].reduceRight((accumulator, currentValue, currentIndex, array) => {
  console.log(`accumulator  = ${accumulator}
currentValue = ${currentValue}
currentIndex = ${currentIndex}
array        = ${array}

`);
  return accumulator + currentValue;
}
);

/*

accumulator  = 4
currentValue = 3
currentIndex = 2
array        = 1,2,3,4

accumulator  = 7
currentValue = 2
currentIndex = 1
array        = 1,2,3,4

accumulator  = 9
currentValue = 1
currentIndex = 0
array        = 1,2,3,4

*/

console.log(sum); // 10
console.log("\n");

sum = [1, 2, 3, 4].reduceRight((accumulator, currentValue, currentIndex, array) => {
  console.log(`accumulator  = ${accumulator}
currentValue = ${currentValue}
currentIndex = ${currentIndex}
array        = ${array}

`);
  return accumulator + currentValue;
}, 10
);

/*
accumulator  = 10
currentValue = 4
currentIndex = 3
array        = 1,2,3,4

accumulator  = 14
currentValue = 3
currentIndex = 2
array        = 1,2,3,4

accumulator  = 17
currentValue = 2
currentIndex = 1
array        = 1,2,3,4

accumulator  = 19
currentValue = 1
currentIndex = 0
array        = 1,2,3,4

*/

console.log(sum); // 20


console.log("\n");
console.log("***************************************************");
console.log("*                   reverse                       *");
console.log("***************************************************");
console.log("\n");


array_1 = [1, 2, 3];
console.log(array_1); // [1, 2, 3]

array_1.reverse();
console.log(array_1); // [3, 2, 1]


console.log("\n");
console.log("***************************************************");
console.log("*                 shift - unshift                 *");
console.log("***************************************************");
console.log("\n");

array_1 = [1, 2, 4];
let firstElement = array_1.shift();

console.log(array_1);       // [2, 4]
console.log(firstElement);  // 1

console.log("\n");
let lengthOfArray = array_1.unshift(1);
console.log(array_1);       // [1, 2, 4]
console.log(lengthOfArray); // 3 (length of array)


console.log("\n");
console.log("***************************************************");
console.log("*                  slice                          *");
console.log("***************************************************");
console.log("\n");


array_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array_1.slice(3));      // [ 3, 4, 5, 6, 7, 8, 9 ] 
console.log(array_1.slice(3, 6));   // [ 3, 4, 5 ]
console.log(array_1.slice(4, -2));  // [ 4, 5, 6, 7 ]
console.log(array_1.slice(-7, -1)); // [ 3, 4, 5, 6, 7, 8 ]

console.log("\n")
console.log(array_1.slice(33));     // []
console.log(array_1.slice(7, 1));   // []
console.log(array_1.slice(6, -6));  // []
console.log(array_1.slice(-3, -7)); // []


console.log("\n");
console.log("***************************************************");
console.log("*                    sort                         *");
console.log("***************************************************");
console.log("\n");


let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [400, 1, 5, 1000, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

// Sorted: Array(3) [ "Beluga", "Blue", "Humpback" ]
console.log('Sorted:', stringArray.sort());


// Sorted without a compare function: 1, 1000, 200, 400, 5
console.log('Sorted without a compare function:', numberArray.sort());

//Sorted with compareNumbers: 1, 5, 200, 400, 1000
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log("\n");

// Sorted without a compare function: "700", "80", "9" 
console.log('Sorted without a compare function:', numericStringArray.sort());

// Sorted with compareNumbers: "9", "80", "700"
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log("\n");

// Sorted without a compare function: 1, 200, 40, 5, "700", "80", "9"
console.log('Sorted without a compare function:', mixedNumericArray.sort());

// Sorted with compareNumbers: 1, 5, "9", 40, "80", 200, "700" 
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));


console.log("\n");
console.log("***************************************************");
console.log("*                    splice                       *");
console.log("***************************************************");
console.log("\n");


// Remove 0 (zero) elements and, insert "drum" and "guitar" before index 2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

console.log(removed); // []
console.log(myFish);  // [ "angel", "clown", "drum", "guitar", "mandarin", "sturgeon" ]

console.log("\n");

// Remove 1 element at index 3
removed = myFish.splice(3, 1);
console.log(removed); // [ "guitar" ]
console.log(myFish);  // [ "angel", "clown", "drum", "mandarin", "sturgeon" ]

console.log("\n");

// Remove 1 element at index 2, and insert "trumpet"
removed = myFish.splice(2, 1, 'trumpet');
console.log(removed); // [ "drum" ]
console.log(myFish);  // [ "angel", "clown", "trumpet", "mandarin", "sturgeon" ]

console.log("\n");

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(removed); // [ "angel", "clown" ]
console.log(myFish);  // [ "parrot", "anemone", "blue", "trumpet", "mandarin", "sturgeon" ]

console.log("\n");

// Remove 1 element from index -2
removed = myFish.splice(-2, 1);
console.log(removed); // [ "mandarin" ]
console.log(myFish);  // [ "parrot", "anemone", "blue", "trumpet", "sturgeon" ]

console.log("\n");

// Remove all elements from index 1
removed = myFish.splice(1);
console.log(removed); // [ "anemone", "blue", "trumpet", "sturgeon" ]
console.log(myFish);  // [ "parrot" ]


console.log("\n");
console.log("***************************************************");
console.log("*           toString - toLocaleString             *");
console.log("***************************************************");
console.log("\n");


let array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());  // 1,2,a,1a

let prices = ['￥7', 500, 8123, 12];
// ￥7,￥500,￥8,123,￥12
console.log(prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));



